import { useState } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import AddPostModal from "./components/AddPostModal";
function App() {
  const [showAddPostModal, setShowAddPostModal] = useState(false);

  return (
    <>
      <Container className="mx-2">
        <Stack direction="horizontal" gap={2}>
          <h1 className="me-auto">What?</h1>
        <Button variant="primary" onClick={() => setShowAddPostModal(true)}>Ajouter un post</Button>
        </Stack>
      </Container>  
      <AddPostModal show={showAddPostModal} handleClose={() => setShowAddPostModal(false)}/>
    </>
  );
}

export default App;