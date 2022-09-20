import React from "react";
import StyledRequest from "./PerRequest.styles";
import { FiTrash2 } from "react-icons/fi";

function PerRequestItem({
  request,
  handleDelete,
  requestList,
  setrequestList,
}) {
  return (
    <StyledRequest
      key={request._id}
      onClick={() => handleDelete(request._id, requestList, setrequestList)}
    >
      <div className="perRequestObj">
        <div className="userName requestObj">{request.userName},</div>

        <div className="repoName requestObj">{request.repoName}</div>
        <FiTrash2 id="icon" />
      </div>
    </StyledRequest>
  );
}

export default PerRequestItem;
