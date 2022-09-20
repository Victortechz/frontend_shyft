import React from "react";
import StyledDisplay from "./DisplayComp.styles";
import PerRequestItem from "../perRequestItem/PerRequestItem";

function DisplayComp({ handleDelete, requestList, setrequestList }) {
  return (
    <StyledDisplay className="displayInputContainer">
      {requestList.map((request) => (
       <PerRequestItem
         key={request._id}
         request={request}
         handleDelete={handleDelete}
         requestList={requestList}
         setrequestList={setrequestList}
       />
      ))}
    </StyledDisplay>
  );
}

export default DisplayComp;
