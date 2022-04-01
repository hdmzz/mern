import { useEffect, useState } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import AddPostModal from "./components/AddPostModal";
import ModifyPostModal from "./components/ModifyPostModal";
import PostCard from "./components/PostCard";
import { usePosts } from "./context/PostContext";
function App() {

  const { posts, getPosts, updatePost } = usePosts();
  const [showModifyPostModal, setShowModifyPostModal] = useState(false);
  const [showAddPostModal, setShowAddPostModal] = useState(false);
  const [currentPost, setCurrentPost] = useState();

  useEffect(()=> {
    getPosts()
  }, [])
  
  return (
    <>
      <Container className="mx-2">
        <Stack direction="horizontal" gap={2}>
          <h1 className="me-auto">What?</h1>
        <Button variant="primary" onClick={() => setShowAddPostModal(true)}>Ajouter un post</Button>
        </Stack>
      </Container>
       <div 
       style={{
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "1rem",
        alignItems: "flex-end"
       }}>
         {posts.map(post => {
           return (
             <PostCard key={post._id} post={post} setCurrentPost={setCurrentPost} setShowModifyPostModal={setShowModifyPostModal} />
           )
         })}
       </div>
      <AddPostModal show={showAddPostModal} post={currentPost} setCurrentPost={setCurrentPost} handleClose={() => setShowAddPostModal(false)}/>
      <ModifyPostModal show={showModifyPostModal} post={currentPost} setCurrentPost={setCurrentPost} handleClose={() => setShowModifyPostModal(false)}/>
    </>
  );
}

export default App;