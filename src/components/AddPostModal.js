import React, { useRef, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { usePosts } from '../context/PostContext';

export default function AddPostModal({ show, post, setCurrentPost, handleClose }) {
  const titleRef = useRef();
  const messageRef = useRef();
  const { getPosts, createPost, updatePost } = usePosts();
  function handleSubmit(e){
    e.preventDefault();
    console.log("submit!!");
    const newPost = {
      title: titleRef.current.value,
      message: messageRef.current.value
    }
    createPost(newPost)
    setCurrentPost(false)
    getPosts()
    handleClose();
  }
  function hideModal() {
    setCurrentPost(false)
    handleClose()
  }
  return (
    <Modal show={show} onHide={hideModal}> 
      <Form onSubmit={e => handleSubmit(e)}>
        <Modal.Header closeButton>
          <Modal.Title>Publier un truc!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Titre</Form.Label>
            <Form.Control type='text' required ref={titleRef} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control type='text' ref={messageRef} required />
          </Form.Group>
          <div>
            <Button className='mt-3' type='submit' variant='primary'>Publier</Button>
           </div>
        </Modal.Body>
      </Form>
    </Modal>
  );
}
