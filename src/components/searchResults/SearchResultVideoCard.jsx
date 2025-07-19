import React from "react";
import { Link } from "react-router-dom";
import VideoLength from "../../shared/VideoLength";
import VideoStats from "../video/videoStats/VideoStats";
import AuthorStats from "../video/videoStats/AuthorStats";
import Avatar from "../video/videoStats/Avatar";

const SearchResultVideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="flex flex-col md:flex-row mb-8 md:mb-3 lg:hover:bg-white/[0.1] rounded-xl md:p-4">
        <div className="relative flex shrink-0 h-48 md:h-28 lg:h-40 xl:h-48 w-full md:w-48 lg:w-64 xl:w-80 rounded-xl bg-slate-800 overflow-hidden">
          <img
            src={video?.thumbnails[0]?.url}
            alt="video-card"
            className="h-full w-full object-cover"
          />
          {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </div>
        <div className="flex flex-col ml-4 md:ml-6 mt-4 md:mt-0 overflow-hidden">
          <span className="text-lg md:text-2xl font-semibold line-clamp-2 text-white">
            {video?.title}
          </span>
          <span className="empty:hidden text-sm line-clamp-1 md:line-clamp-2 text-white/[0.7] md:pr-24 md:my-4">
            {video?.descriptionSnippet}
          </span>
          <div className="hidden md:flex items-center">
            <div className="flex items-start mr-3">
              <Avatar url={video?.author?.avatar[0]?.url} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold mt-2 text-white/[0.7] flex items-center">
                <AuthorStats
                  title={video?.author?.title}
                  badgeType={video?.author?.badges[0]?.type}
                />
              </span>
              <div className="flex text-sm font-semibold text-white/[0.7] truncate overflow-hidden">
                <VideoStats
                  views={video?.stats?.views}
                  pubTime={video?.publishedTimeText}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultVideoCard;
