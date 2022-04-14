import React from "react";

const View = () => {
  return (
    <>
      <div className="container">
        <h1 className="post-title">
          {/* 뒤로가기 버튼 */}
          <div>자르기</div>
          {/* 다음 버튼 click not submit */}
        </h1>
        <div className="content">
          <div>미리보기</div>
        </div>
      </div>
    </>
  );
};

export default View;
