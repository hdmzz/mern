import React, { useContext, useState } from "react";
import axios from "axios";
const PostContext = React.createContext();

export function usePosts() {
    return useContext(PostContext);
}

export const PostProvider = ({ children }) => {


    function getPosts () {
        axios("")
    }

    function createPost() {
        const newPost = {
            title: "heelooooo",
            message: "heeelloooooo woooorlddddd!!!!!",
            author: "hugo"
        }
        axios.post("http://localhost:5000/app/createPost", newPost)
    }

    return (
        <PostContext.Provider value={{
            getPosts,
            createPost
        }}>
            {children}
        </PostContext.Provider>
    )
}

