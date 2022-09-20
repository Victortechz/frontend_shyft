import React from "react";
import ErrorResponse from "../errorResponse/ErrorResponse";
import PerResponse from "../perResponseItem/perResponse";
import StyledResponseView from "./Response.styles";

function ResponseDisplay({ responseList }) {
  return (
    <StyledResponseView>
      {responseList &&
        responseList.map((response) => {
          if (response.status === "fulfilled") {
            return <PerResponse response={response} key={response._id} />;
          } else if (response.status === "rejected") {
            return <ErrorResponse response={response} key={response._id} />;
          }
        })}
    </StyledResponseView>
  );
}

export default ResponseDisplay;
