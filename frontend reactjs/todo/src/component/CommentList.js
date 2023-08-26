import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Comment from "./Comment";
import { getAllComments, saveComment ,deleteComment} from '../service/CommentService'
import { getLoggedInUser } from '../service/AuthService';


const CommentList = (props) => {
   
     
  const emptyComment = {
    id: null,
    createdBy: null,
    text: "",
    createdDate: null,
  };

  const [comment, setComment] = useState(emptyComment);
  const [comments, setComments] = useState([]);

  function updateCommentTimeDisplay() {
    const commentsCopy = [...comments];
    commentsCopy.forEach(
      (comment) => (comment.createdDate = dayjs(comment.createdDate))
    );
    formatComments(commentsCopy);
  }
  useEffect(() => {
    // Load comments from the database when the component is mounted
    listComments();
  }, []); // The empty dependency array ensures this effect runs once on mount


  function handleDeleteComment(commentId) {
    console.log("Deleting comment with ID:", commentId);
  
    deleteComment(commentId)
      .then((response) => {
        console.log("Comment deleted:", response);
        const commentsCopy = [...comments];
        const i = commentsCopy.findIndex((comment) => comment.id === commentId);
        if (i !== -1) {
          commentsCopy.splice(i, 1);
          formatComments(commentsCopy);
        }
      })
      .catch((error) => {
        console.error("Error deleting comment:", error);
      });
  }

  function formatComments(commentsCopy) {
    commentsCopy.forEach((comment) => {
      if (typeof comment.createDate === "string") {
        comment.createDate = dayjs(comment.createDate);
      }
    });
    setComments(commentsCopy);
  }

  function updateComment(value) {
    const loggedInUser = getLoggedInUser().valueOf();
    const commentCopy = { ...comment };
    commentCopy.text = value;
    commentCopy.createdBy = loggedInUser; // Assuming username is the property containing the user's name
    setComment(commentCopy);
  }

  function listComments() {
    getAllComments()
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function submitComment() {
    if (comment.id) {
        saveComment(comment).then(
        (d) => {
          const commentsCopy = [...comments];
          const i = commentsCopy.findIndex((comment) => comment.id === d.id);
          commentsCopy[i] = d;
          formatComments(commentsCopy);

          setComment(emptyComment);
          window.location.reload(true);
        } 
      );
    
    } else {
        saveComment(comment).then((d) => {
        const commentsCopy = [...comments];
        commentsCopy.push(d);
        formatComments(commentsCopy);
        setComment(emptyComment);
        window.location.reload(true);
      });   
    }
  }

  return (
    <>
      <div className="container">
      <div className="mt-5">
        <h4>Community</h4>
      </div>
      <Row>
        <Col lg="8" md="10" sm="12">
          <textarea
            style={{ width: "100%", borderRadius: "0.25em" }}
            onChange={(e) => updateComment(e.target.value)}
            value={comment.text}
          ></textarea>
        </Col>
      </Row>
      <Button className="mt-2" onClick={() => submitComment()}>Post Comment</Button>
      <div className="mt-5">
    {comments.map((comment) => (
    <Comment
      key={comment.id} // Add the key prop with a unique value (comment.id)
      commentData={comment}
      emitDeleteComment={handleDeleteComment}
     />
     ))}
     </div>
    </div>
    </>
  );
};

export default CommentList;