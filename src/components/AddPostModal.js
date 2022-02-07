import React, { useRef } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { usePosts } from '../context/PostContext';

export default function AddPostModal({ show, handleClose }) {
  const titleRef = useRef();
  const messageRef = useRef();
  const { getPosts, createPost } = usePosts();

  function handleSubmit(e){
    e.preventDefault();
    console.log("submit!!");
    createPost();
    handleClose()
  }
  
  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Publier un truc!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Titre</Form.Label>
            <Form.Control type='text' required ref={titleRef}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control type='text' ref={messageRef} required/>
          </Form.Group>
          <div>
            <Button type='submit' className='mt-2'>Publier!</Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  );
}
