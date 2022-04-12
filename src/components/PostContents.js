import React from "react";
import "./PostContents.scss";

const PostContents = (props) => {
  return (
    <div className="Post">
      <div className="container">
        <h2>새 게시물 만들기</h2>
        <div className="content">
          <img alt="" />
          <p>사진과 동영상을 여기에 끌어다 놓으세요</p>
          <button>컴퓨터에서 선택</button>
        </div>
      </div>
      <button className="close" onClick={() => props.setUpload(!props.upload)}>
        <i className="bi bi-x-lg"></i>
      </button>
    </div>
  );
};

export default PostContents;
