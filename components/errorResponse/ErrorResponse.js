import React from "react";
import StyledErrorResponse from "./ErrorResponse.style";
function ErrorResponse({ response }) {
  return (
    <StyledErrorResponse>
      <div  className="container">
        <div className="header">status</div>
        <div className="status">failed</div>
      </div>
      <div  className="container">
        <div className="header">username</div>
        <div className="resText"> {response.errId}</div>
      </div>
      <div className="Container">
        <div className="header">Reponame</div>
        <div className="resText"> {response.errRepo}</div>
      </div>
    </StyledErrorResponse>
  );
}

export default ErrorResponse;
