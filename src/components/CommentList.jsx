import moment from "moment";
import { List, Image } from "semantic-ui-react";
const CommentList = ({ comments }) => {
  return (
    <div>
      {" "}
      <List relaxed>
        {comments.map((comment) => (
          <List.Item key={comment.id}>
            <Image
              avatar
              src="https://react.semantic-ui.com/images/avatar/small/daniel.jpg"
            />
            <List.Content>
              <List.Header as="a">{comment.display_name}</List.Header>
              <List.Description>
                {comment.body}
                <br />
                {moment(comment.created_at).format("MMMM Do YYYY, h:mm:ss a")}
              </List.Description>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </div>
  );
};

export default CommentList;
