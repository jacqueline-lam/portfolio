import React from 'react';
import Moment from 'react-moment';
import Card from 'react-bootstrap/Card';

const BlogPost = ({ blogPost }) => {
  return (
    <div className='blog'>
      <Card style={{ width: '60%' }}>
        <Card.Body>
          <Card.Img variant='top' src={blogPost.cover_image} ></Card.Img>
          <Card.Title>{blogPost.title}</Card.Title>
          <Card.Text>{blogPost.description}</Card.Text>
          <button className="btn btn-danger btn-lg" onClick={() => window.open(blogPost.url, "_blank")}>READ POST</button>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'><Moment format='MMM DD, YYYY'>{blogPost.published_timestamp}</Moment></small>
        </Card.Footer>
      </Card>
      {/* <img className='blog-post-thumbnail' alt='blog post thumbnail' src={blogPost.cover_image} />
      <h6>{blogPost.title}</h6>
      <i><Moment format='MMM DD, YYYY'>{blogPost.published_timestamp}</Moment></i>
      <p>{blogPost.description}</p> */}
      {/* <button className="btn btn-danger btn-lg" onClick={() => window.open(blogPost.url, "_blank")}>READ POST</button> */}
    </div >
  );
};

export default BlogPost;