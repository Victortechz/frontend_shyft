import styled from "styled-components";

const Styledform = styled.div`
  width: 80%;
  height: auto;
  z-index: 4;
  margin: auto;
  

  form {
    width: 100%;
    height: 30%;
    margin-top: 2%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

  }

  .inputDiv {
    width: 80%;
    margin: auto;
    height: 40px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: none;
  }

  label {
    width: 15%;
    top: 1px;
    height: 50%;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    margin: 3px;
  }

  input {
    width: 80%;
    height: 70%;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.226);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.055);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    padding-left: 3px;
  }

  input::placeholder {
    color: #fff;
    opacity: 0.7;
  }

  .buttonContainer {
    width: 50%;
    height: 40px;
    margin: auto;
    display: flex;
    flex-direction: row;
    margin-top: 2%;
    padding-top: 3px;
    justify-content: space-around;
  }

  .btn {
    background-color: #fff;
    color: #000;
    outline: none;
    line-height: 1.8;
    border-radius: 2px;
    border: none;
  }

  .btn:hover {
    background-color: #000;
    color: #fff;
    cursor: pointer;
  }

  
`;

export default Styledform;
