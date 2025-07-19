import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/contextApi";
import { fetchData } from "../../utils/api";
import LeftNav from "../feed/LeftNav";
import SearchResultVideoCard from "./SearchResultVideoCard";

const SearchResults = () => {
  const [results, setResults] = useState();
  const { searchQuery } = useParams();
  const { setLoading } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    fetchSearchResults();
  }, [searchQuery]);

  const fetchSearchResults = () => {
    setLoading(true);
    fetchData(`search/?q=${searchQuery}`).then((res) => {
      setResults(res.contents);
      setLoading(false);
    });
  };

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 gap-2 p-5">
          {results?.map((item) => {
            if (item?.type !== "video") return false;
            let video = item.video;
            return <SearchResultVideoCard key={video?.videoId} video={video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
