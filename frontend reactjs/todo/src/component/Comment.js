import React, { useState, useEffect } from "react";
import { getLoggedInUser } from '../service/AuthService';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const Comment = (props) => {
  const { id, createdBy, createdDate, text } = props.commentData;
  const { emitDeleteComment } = props;
  const [commentRelativeTime, setCommentRelativeTime] = useState("");


  useEffect(() => {
    // Update the relative time
    updateCommentRelativeTime();
  }, [createdDate]);

  function updateCommentRelativeTime() {
    if (createdDate) {
      dayjs.extend(relativeTime);
      if (typeof createdDate === "string")
        setCommentRelativeTime(dayjs(createdDate).fromNow());
      else {
        setCommentRelativeTime(createdDate.fromNow());
      }
    }
  }



  return (
    <>
      <div className="comment-bubble">
        <div className="d-flex gap-5" style={{ fontWeight: "bold" }}>
          <div>Community User{createdBy}</div>
     
          <div
            onClick={() => emitDeleteComment(id)}
            style={{ cursor: "pointer", color: "red" }}
          >
            delete
          </div>
        </div>
        <div>{text}</div>
       
      <div className="mt-1"
        style={{ marginTop: "-1.25em", fontSize: "12px" }}
      >
        {commentRelativeTime ? `Posted ${commentRelativeTime}` : ""}
      </div>
      </div>

    </>
  );
};

export default Comment;
