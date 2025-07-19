import React from "react";
import AppContext from "./context/contextApi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Feed from "./components/feed/Feed";
import SearchResults from "./components/searchResults/SearchResults";
import VideoDetails from "./components/video/VideoDetails";

const App = () => {
  return (
    <AppContext>
      <Router>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" element={<Feed />} exact />
            <Route
              path="/searchResults/:searchQuery"
              element={<SearchResults />}
            />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>
      </Router>
    </AppContext>
  );
};

export default App;
