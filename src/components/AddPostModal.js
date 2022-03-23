import React, { useRef } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { usePosts } from '../context/PostContext';

export default function AddPostModal({ show, post, setCurrentPost, handleClose }) {
  const titleRef = useRef();
  const messageRef = useRef();
  const { getPosts, createPost } = usePosts();

  function handleSubmit(e){
    e.preventDefault();
    console.log("submit!!");
    const newPost = {
      title: titleRef.current.value,
      message: messageRef.current.value
    }
    createPost(newPost)
    setCurrentPost(false)
    handleClose();
  }
  function hideModal() {
    setCurrentPost(false)
    handleClose()
  }
  return (
    <Modal show={show} onHide={hideModal}> 
      <Form onSubmit={post ? }>
        <Modal.Header closeButton>
          <Modal.Title>{post ? 'Modifier' : 'Publier'} un truc!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Titre</Form.Label>
            <Form.Control type='text' required ref={titleRef} value={post?.title}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control type='text' ref={messageRef} required value={post?.message}/>
          </Form.Group>
          <div>
           </div>
        </Modal.Body>
      </Form>
    </Modal>
  );
}
