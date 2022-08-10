import { Input } from "semantic-ui-react";
const AddComment = ({ comment, handleCommentSubmit, handleOnChange }) => {
  return (
    <>
      <h3>Add comment</h3>
      <form
        className="ui form"
        onSubmit={(e) => {
          e.preventDefault();
          handleCommentSubmit(comment);
        }}
      >
        <Input
          name="display_name"
          size="mini"
          placeholder="Username"
          onChange={handleOnChange}
          value={comment.display_name}
        />
        <textarea
          name="body"
          placeholder="Add your comment"
          rows="3"
          onChange={handleOnChange}
          value={comment.body}
        ></textarea>
        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default AddComment;
