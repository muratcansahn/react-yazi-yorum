import { List } from "semantic-ui-react";
import moment from "moment";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TextList = () => {
  const [textList, setTextList] = useState([]);
  useEffect(() => {
    axios.get("https://react-yazi-yorum.herokuapp.com/posts").then((res) => {
      setTextList(res.data);
    });
  }, []);
  return (
    <List divided relaxed>
      {textList.map((text) => (
        <List.Item key={text.id}>
          <List.Icon name="github" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header as="a">
              <Link to={`/posts/${text.id}`}>{text.title}</Link>
            </List.Header>
            <List.Description as="a">
              {moment(text.created_at).format("MMMM Do YYYY, h:mm:ss a")}
            </List.Description>
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
};

export default TextList;
