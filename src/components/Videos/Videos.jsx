import React, { useState, useEffect } from "react";
import Video from "./Video";
import Url from "../ServerUrl";
import axios from "axios";

const Videos = () => {
  const url = `${Url}/videos/getAllVideos`;
  const [videos, setVideos] = useState([]);
  const [channelLink, setChannelLink] = useState("");
  useEffect(() => {
    axios.get(url).then((res) => {
      setVideos(res.data.result);
      setChannelLink(res.data.channelLink);
    });
  }, []);
  return (
    <section id="videos" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5  mx-auto">
        <div className="flex flex-col items-center w-full mb-10">
          <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-white">
            &lt;My Videos/&gt;
            <div className="h-1 w-3/4 bg-blue-500 rounded"></div>
          </h1>
        </div>
        <div className="flex flex-wrap -m-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {videos.map((video) => (
            <Video key={video._id} video={video} />
          ))}
        </div>
        <div className="flex justify-center">
          <a href={channelLink} target="_blank">
            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
              More -&gt;
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Videos;
