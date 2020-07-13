import React from 'react';
import Moment from 'react-moment';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

const BlogPost = ({ blogPost }) => {

  const renderTags = (
    <div>
      {blogPost.tag_list.map((tag, idx) =>
        <Badge key={idx} pill variant="dark">{tag}</Badge>
      )}
    </div>
  )

  return (
    <div className='blog post-block-container'>
      <div className='post-block-white'>
        <Card>
          <Card.Body>
            <Card.Img variant='top' src={blogPost.cover_image} ></Card.Img>
            <Card.Title>{blogPost.title}</Card.Title>
            {renderTags}<br />
            <Card.Text>{blogPost.description}</Card.Text>
            <button className="btn btn-danger btn-lg" onClick={() => window.open(blogPost.url, "_blank")}>READ POST</button>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Posted on <Moment format='MMM DD, YYYY'>{blogPost.published_timestamp}</Moment></small>
          </Card.Footer>
        </Card>
      </div>
      <div className='post-block-color'></div>
      {/* <img className='blog-post-thumbnail' alt='blog post thumbnail' src={blogPost.cover_image} />
      <h6>{blogPost.title}</h6>
      <i><Moment format='MMM DD, YYYY'>{blogPost.published_timestamp}</Moment></i>
      <p>{blogPost.description}</p> */}
      {/* <button className="btn btn-danger btn-lg" onClick={() => window.open(blogPost.url, "_blank")}>READ POST</button> */}
    </div >
  )
};

export default BlogPost;