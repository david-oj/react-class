import React from "react";

const Video = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      stroke="currentColor"
      stroke-width="0"
      className={` ${props.className} stroke-1 fill-transparent stroke-pink-400 shadow-[-3px_3px_8px_rgba(251,100,182,0.6)]`}
      viewBox="0 0 24 24"
    >
      <path stroke="none" d="M4 8H2v12a2 2 0 0 0 2 2h12v-2H4z" />
      <path
        stroke="none"
        d="M20 2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-9 12V6l7 4z"
      />
    </svg>
  );
};

export default Video;
