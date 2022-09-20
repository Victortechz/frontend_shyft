const { v4: uuid } = require("uuid");
const axios = require("axios");
const PORT = "8000";
const cryptoJS = require("crypto-js");

// ADD REQUESTS TO REQUEST LIST
export const handleAddToList = (e, reqObj, setState, setRequestObj) => {
  e.preventDefault();
  let _id = uuid();
  const responseId = { ...reqObj, _id };
  setState((prevsObj) => [...prevsObj, responseId]);
  setRequestObj({
    userName: "",
    repoName: "",
    privateKey: "",
  });
};

// DELETE REQUEST FROM REQUEST LIST
export const handleDelete = (id, state, setState) => {
  let newRequestList = state.filter((request) => {
    return request._id !== id;
  });
  setState(newRequestList);
};

// RECIEVE USER INPUT
export const handleChange = (e, state, setState) => {
  e.preventDefault();
  let { name, value } = e.target;
  setState({ ...state, [name]: value.trim() });
};

// SEND USER INPUT AND SET RESPONSE STATE
export const handleSubmit = async (
  e,
  payLoad,
  setResponseList,
  setRequestObj
) => {
  e.preventDefault();

  await axios
    .post(`http://localhost:${PORT}/getrepo`, payLoad)
    .then((res) => {
      setResponseList(res.data);
      setRequestObj({
        userName: "",
        repoName: "",
      });
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
