import React, { useState } from "react";
import Feed from "./Feed";
import "./AllFeed.scss";

const AllFeed = () => {
  let [data, setData] = useState([
    { id: "abc123", content: "", text: "블렌더 연습~" },
    { id: "ffff_ildk", content: "", text: "오늘 점심" },
    { id: "sdljkflkm", content: "", text: "제주도에서" },
  ]);

  return (
    <>
      <div className="top-blank"></div>
      <div className="AllFeed">
        {data.map((data, i) => (
          <Feed key={i} data={data} />
        ))}
      </div>
    </>
  );
};

export default AllFeed;
