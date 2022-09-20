import styled from "styled-components";

const StyledRequest = styled.div`
  width: 140px;
  height: 20px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 2px;
  border: 1px solid rgba(255, 255, 255, 0.055);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  margin-top: 2px;


  .perRequestObj {
    /* width: 50%; */
    height: 100%;
    z-index: 2;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 10px;
    text-overflow:clip;
  }

  .userName{
   width: auto;
   margin-right:4px;
  }

  .repoName{
   width: auto;

  }

  #icon {
    color: #990011ff;
    position: absolute;
    right: 2px;
  }
`;
export default StyledRequest;
