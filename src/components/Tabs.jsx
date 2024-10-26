import React, { useState } from "react";
import TabDetail from "./TabDetail";
import useFetchedData from "../hooks/useFetchedData";
import TabButton from "./TabButton";

const Tabs = () => {
  const tabLabels = ["Tab 1", "Tab 2", "Tab 3", "Tab 4"];
  const [activeTab, setActiveTab] = useState(0);
  const { data, error, isLoading } = useFetchedData(activeTab);
  return (
    <div className="container">
      <div className="btns-container">
        {tabLabels.map((label, index) => (
          <TabButton
            key={index}
            label={label}
            isActive={activeTab === index}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <TabDetail tabId={activeTab} text={data} />
      )}
    </div>
  );
};

export default Tabs;
