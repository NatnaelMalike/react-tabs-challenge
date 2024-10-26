import React from "react";

const TabDetail = ({tabId, text }) => {
  return (
    <div className="tab-container">
    <div className="tab-detail">
      <h1 className="header">Title {tabId + 1}</h1>
      <p className="line-height">
        {text}
      </p>
    </div>
    </div>
  );
};

export default TabDetail;
