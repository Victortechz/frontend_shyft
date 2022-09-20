import styled from "styled-components";

const StyledDisplay = styled.section`
  width: 90%;
  height: 15%;
  margin: auto;
  margin-top: 2%;
  border-radius: 4px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.226);
  border: 1px solid rgba(255, 255, 255, 0.055);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  overflow-y: scroll;
`;

export default StyledDisplay;
