import React from "react";
import StyledDisplay from "../displayComponent/DisplayComp.styles";
import StyledPerResponse from "./perResponse.styles";
function PerResponse({ response }) {
  return (
    <StyledPerResponse>
      <div className="container">
        <div className="header">Status</div>
        <div className="status">success</div>
      </div>
      <div className="container">
        <div className="header">Username</div>
        <div className="resText"> {response.userName}</div>
      </div>
      <div>
        <div className="header">Reponame</div>
        <div className="resText"> {response.repoName}</div>
      </div>
      <div className="container">
        <div className="header">Description</div>
        <div className="resText"> {response.description}</div>
      </div>
      <div className="container">
        <div className="header">Star count</div>
        <div className="resText"> {response.stargazersCount}</div>
      </div>
    </StyledPerResponse>
  );
}

export default PerResponse;
