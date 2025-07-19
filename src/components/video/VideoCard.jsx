import React from "react";
import { Link } from "react-router-dom";
import VideoLength from "../../shared/VideoLength";
import VideoStats from "./videoStats/VideoStats";
import AuthorStats from "./videoStats/AuthorStats";
import Avatar from "./videoStats/Avatar";

const VideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video.videoId}`}>
      <div className="flex flex-col mb-8">
        <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
          <img
            src={video?.thumbnails[0]?.url}
            alt="video-card"
            className="h-full w-full object-cover"
          />
          {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </div>
        <div className="flex text-white mt-3">
          <div className="flex items-start">
            <Avatar url={video?.author?.avatar[0]?.url} />
          </div>
          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="text-sm font-bold line-clamp-2">
              {video?.title}
            </span>
            <span className="text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center">
              <AuthorStats
                title={video?.author?.title}
                badgeType={video?.author?.badges[0]?.type}
              />
            </span>
            <div className="flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
              <VideoStats
                views={video?.stats?.views}
                pubTime={video?.publishedTimeText}
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
