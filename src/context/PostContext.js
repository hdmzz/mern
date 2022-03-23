import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
const PostContext = React.createContext();

export function usePosts() {
    return useContext(PostContext);
}

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]) 
    const [currentPost, setCurrentPost] = useState()

    async function getPosts () {
       await axios.get("http://localhost:5000/app/getPosts").then(response => {
           setPosts(response.data)
       })
    }

    function createPost(newPost) {
        axios.post("http://localhost:5000/app/createPost", newPost).then(() => {
            getPosts()
        })
    }

    function deletePost(postId) {
        axios.delete("http://localhost:5000/app/deletePost", {
            data: {id: postId}
        }).then((info) => {
            console.log(info)
            getPosts()
        })
    }

    function updatePost(postId) {
        axios.put("http://localhost:5000/app/updatePost", {
            id: postId,
            
        }).then(info => {
            console.log(info)
            getPosts()
        })
    }
    return (
        <PostContext.Provider value={{
            posts,
            getPosts,
            createPost,
            deletePost,
            updatePost
        }}>
            {children}
        </PostContext.Provider>
    )
}