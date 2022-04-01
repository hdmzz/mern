import React from 'react'
import { Card, Button, Stack } from 'react-bootstrap';
import { usePosts } from '../context/PostContext';
export default function PostCard({post, setCurrentPost, setShowModifyPostModal}) {
    const {deletePost} = usePosts()
    const {title, message} = post;
    const getId = (id) => {
        deletePost(id)
    }

    function modifyPost() {
        setCurrentPost(post)
        setShowModifyPostModal(true)
    }
  return (
      <Card className='mt-4 mx-2'>
          <Card.Body>
              <Card.Title>{title}</Card.Title>
              {message}
          </Card.Body>
          <Stack direction='horizontal' gap={1}>
          <Button variant='outline-primary' type='button' onClick={() => getId(post._id)}>Supprimer ce post</Button>
          <Button variant='outline-primary' type='button' onClick={() => modifyPost()}>Modifier</Button>
          </Stack>
      </Card>
  )
}
