import styled from "styled-components";

const StyledHome = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: red;

  .overAllContainer {
    width: 100%;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.13);
    height: 100%;
    position: absolute;
  }

  .wallPaper {
    z-index: -1 !important;
  }

  .formContainer {
    background-color: red;
    width: 50%;
    height: 99vh;
    z-index: 4;
    margin: auto;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.13);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  }
`;
export default StyledHome;
