import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import apiUtils from "../utils/apiUtils";
import Header from "./Header";
import Sidebar from "./Sidebar";

import "./Home.css";
import Footer from "./Footer";
import LaunchesList from "./launchesList";

export default function Home() {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  const history = useHistory();

  useEffect(() => {
    const fetchLaunches = async () => {
      const res = await apiUtils.fetchLaunches(location.search);
      setLaunches(res);
      setLoading(false);
    };

    fetchLaunches();
  }, [location.search]);

  const handleUpdateSearchString = (searchString) => {
    setLoading(true);
    history.push(searchString);
  };

  return (
    <div className="custom-container home">
      <div>
        <Header />
      </div>
      <div className="custom-row max-width-xl main-grid-container">
        <div className="grid-item">
          <Sidebar updateSearchString={handleUpdateSearchString} />
        </div>
        <div className="grid-item">
          <LaunchesList loading={loading} launches={launches} />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
