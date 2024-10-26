import React, { useState } from "react";
import TabDetail from "./TabDetail";
import useFetchedData from "../hooks/useFetchedData";

const Tabs = () => {
  const tabLabels = ["Tab 1", "Tab 2", "Tab 3", "Tab 4"];
  const [activeTab, setActiveTab] = useState(0);
  const { data, error, isLoading } = useFetchedData(activeTab);
  return (
    <div className="container">
      <div className="btns-container">
        {tabLabels.map((label, index) => (
          <button
            key={index}
            className={`btn ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {label}
          </button>
        ))}
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <TabDetail tabId={activeTab} text={data} />
      )}
    </div>
  );
};

export default Tabs;
