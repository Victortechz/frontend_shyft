import React, { useState } from "react";
import DisplayComp from "../displayComponent/DisplayComp";
import Form from "../form/Form";
import wallPaper from "/assets/algo.gif";
import Image from "next/image";
import {
  handleAddToList,
  handleChange,
  handleDelete,
  handleSubmit,
} from "../../utils/helperFunctions";
import StyledHome from "./Home.styles";
import ResponseDisplay from "../responsedisplay/ResponseDisplay";
function Home() {
  let [requestObj, setRequestObj] = useState({
    userName: "",
    repoName: "",
    privateKey: "",
  });

  let [requestList, setrequestList] = useState([]);
  let [responseList, setresponseList] = useState([]);

  return (
    <StyledHome className="home">
      <Image
        src={wallPaper}
        layout="fill"
        alt="heroBanner"
        priority="true"
        id="wallPaper"
      />
      <div className="overAllContainer">
        <div className="formContainer">
          <DisplayComp
            requestList={requestList}
            setrequestList={setrequestList}
            handleDelete={handleDelete}
          />
          <Form
            requestList={requestList}
            setrequestList={setrequestList}
            requestObj={requestObj}
            setRequestObj={setRequestObj}
            handleAddToList={handleAddToList}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            setresponseList={setresponseList}
          />
          <ResponseDisplay responseList={responseList} />
        </div>
      </div>
    </StyledHome>
  );
}

export default Home;
