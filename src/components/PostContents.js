import React, { useRef } from "react";
import "./PostContents.scss";
import ImageAndVideo from "../icons/ImageAndVideo.svg";
import ImageAndVideoBlue from "../icons/ImageAndVideo(blue).svg";
import { useState } from "react";

const PostContents = (props) => {
  const inputFile = useRef(null);
  const handleClick = (e) => {
    inputFile.current.click();
  };

  const setThumbnail = (e) => {
    let reader = new FileReader();

    reader.onload = (e) => {
      const content = document.querySelector(".content");
      content.style.backgroundImage = `url(${e.target.result})`;
      content.style.backgroundSize = "cover";
      const div = content.querySelector("div");
      div.classList.add("hidden");
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <>
      <div className="container">
        <h1 className="post-title">
          <div>새 게시물 만들기</div>
        </h1>
        <div className="content">
          <div>
            <img alt="" src={ImageAndVideo} className="post-space" />

            <p>사진과 동영상을 여기에 끌어다 놓으세요</p>
            <input
              type="file"
              id="input-file"
              ref={inputFile}
              style={{ display: "none" }}
              accept="image/*"
              onChange={(e) => setThumbnail(e)}
            />
            <button className="input-file-btn" onClick={handleClick}>
              컴퓨터에서 선택
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostContents;
