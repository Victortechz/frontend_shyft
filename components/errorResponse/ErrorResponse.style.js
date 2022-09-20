import styled from "styled-components";

 const StyledErrorResponse = styled.div`
 width: 97%;
  height: auto;
  margin: auto;
  border-radius: 4px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.226);
  border: 1px solid rgba(255, 255, 255, 0.055);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin-top: 6PX;
  font-size: 14px;
  font-family: "ubuntu";
  margin-bottom: 10px;
  line-height: 1.5;

  .status{
    color: #990011ff;
  }


  .container{
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items:flex-start;

   }
   .header{
    border: 1px solid ;
    width: 100%;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.226);
  border: 1px solid rgba(255, 255, 255, 0.055);
  line-height: 1.4;
  font-weight: 600;
   }

   .resText{
     width: 100%;
     text-align: center;
   }



 `

 export default  StyledErrorResponse;