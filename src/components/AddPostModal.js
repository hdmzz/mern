import React, { createRef, useEffect, useRef, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { usePosts } from '../context/PostContext';

export default function AddPostModal({ show, post, setCurrentPost, handleClose }) {
  const titleRef = useRef();
  const messageRef = useState()
  const [file, setFile] = useState();
  const { getPosts, createPost, updatePost } = usePosts();
  
  function handleSubmit(e){
    e.preventDefault()
    const formData = new FormData();
    formData.append('title', titleRef.current.value)
    formData.append('message', messageRef.current.value)
    formData.append('file', file)
    console.log("submit!!")
    /* const newPost = {
      title: titleRef.current.value,
      message: messageRef.current.value,
      file: file
    } */
    createPost(formData)
     /*setCurrentPost(false)
    getPosts()
    handleClose(); */
  }
  function hideModal() {
    setCurrentPost(false)
    handleClose()
  }
  return (
    <Modal show={show} onHide={hideModal}> 
      <Form id='form' onSubmit={e => handleSubmit(e)} encType="multipart/form-data">
        <Modal.Header closeButton>
          <Modal.Title>Publier un truc!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Titre</Form.Label>
            <Form.Control type='text' id='title' name="title" ref={titleRef} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control type='text' id='message' name="message" ref={messageRef} />
          </Form.Group>
          <div>
          <Form.Group>
            <label>
              envoyer un fichier:
              <input type="file" onChange={e => setFile(e.target.files[0])}/>
            </label>
          </Form.Group>
          </div>
          <div>
            <Button className='mt-3' type='submit' variant='primary'>Publier</Button>
           </div>
        </Modal.Body>
      </Form>
    </Modal>
  );
}
