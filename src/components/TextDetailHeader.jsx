import React from "react";

const TextDetailHeader = ({ textDetail }) => {
  const { title, content, created_at } = textDetail;
  return (
    <>
      <h2 className="ui header">{title}</h2>
      <p>{created_at}</p>
      <p>{content}</p>
    </>
  );
};

export default TextDetailHeader;
