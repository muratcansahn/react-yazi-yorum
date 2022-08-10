import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import CommentList from "./CommentList";
import AddComment from "./AddComment";
const TextDetail = (props) => {
  const INITIALCOMMENT = {
    display_name: "",
    body: "",
  };
  const [textDetail, setTextDetail] = useState([]);
  const [comments, setComments] = useState([]);

  const [comment, setComment] = useState(INITIALCOMMENT);
  const { id } = useParams();
  const handleCommentSubmit = (e) => {
    const { display_name, body } = comment;
    axios
      .post(`https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`, {
        display_name,
        body,
      })
      .then((res) => {
        setComments([...comments, res.data]);
        setComment(INITIALCOMMENT);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleOnChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios
      .get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)
      .then((res) => {
        setTextDetail(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`)
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <TextDetail textDetail={textDetail} />
      <CommentList comments={comments} />
      <AddComment
        comment={comment}
        handleCommentSubmit={handleCommentSubmit}
        handleOnChange={handleOnChange}
      />
    </>
  );
};

export default TextDetail;
