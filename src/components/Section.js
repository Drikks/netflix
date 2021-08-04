import React from "react";

function Section(props) {
  const tab = [];

  console.log(props.images);
  for (let i = 0; i < props.images.length; i++) {
    tab.push(<img src={props.images[i]} alt="Netflix movies" />);
  }

  return (
    <div>
      <p>{props.category}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          overflowX: "scroll",

          marginTop: "50px",
          margin: "20px 20px",
          webkitscrollbar: "none",
        }}
      >
        {tab}
      </div>
    </div>
  );
}

export default Section;
