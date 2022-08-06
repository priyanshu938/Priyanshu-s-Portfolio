import React from "react";

const Video = ({ video }) => {
  return (
    <div class="p-10  cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <iframe
          className="iframeSetVideos"
          src={video.link}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{video.title}</div>
          <p class="text-gray-600 text-base">{video.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
