import React from "react";
import Styledform from "./Form.styles";
function Form({
  requestList,
  setrequestList,
  requestObj,
  setRequestObj,
  handleAddToList,
  handleChange,
  handleSubmit,
  setresponseList,
}) {
 
 
  return (
    <Styledform>
      <div className="InputContainer">
        <form onSubmit={(e) => handleSubmit(e, requestList, setresponseList,setRequestObj)}>
          <div className="repoUsername inputDiv">
            <label htmlFor="username">Repository username:</label>
            <input
              value={requestObj.userName}
              type="text"
              name="userName"
              placeholder="enter repo owner name "
              onChange={(e) => handleChange(e, requestObj, setRequestObj)}
            />
          </div>

          <div className="repoName inputDiv">
            <label htmlFor="repoName">Repository name:</label>
            <input
              type="text"
              value={requestObj.repoName}
              name="repoName"
              onChange={(e) => handleChange(e, requestObj, setRequestObj)}
              placeholder="enter name of repo"
              className=""
            />
          </div>
          <div className="privateKey inputDiv">
            <label htmlFor="privateKey">Pivate key:</label>
            <input
              value={requestObj.key}
              placeholder="enter github key to get private repos "
              type="password"
              name="privateKey"
              onChange={(e) => handleChange(e, requestObj, setRequestObj)}
            />
          </div>
          <div className="buttonContainer">
            <div className="addToList">
              <button
                className="btn"
                onClick={(e) => handleAddToList(e, requestObj,setrequestList,setRequestObj)}
              >
                Add to list
              </button>
            </div>

            <div className="getData">
              <button className="btn" type="submit">
                Get data
              </button>
            </div>
          </div>
        </form>
      </div>
    </Styledform>
  );
}

export default Form;
