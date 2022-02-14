import styled from "styled-components";
import CharacterInfo from "../components/CharacterInfo";
import CharacterNavBar from "../components/CharacterNavBar";
import BasicLayout from "../layout/Basic";
const Title = styled.h1`
  color: red;
`;

const Home = () => {
  return (
    <BasicLayout>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            top: 0,
            position: "fixed",
            width: "100vw",
            height: "10%",
            background: "black",
          }}
        >
          <h2 style={{ textAlign: "left", color: "white" }}>Guilty Gear</h2>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80%",
            padding: "1% 0",
            overflow: "hidden",
          }}
        >
          <video autoPlay muted loop>
            <source src="/assets/GGGiovanna.mp4" type="video/mp4" />
          </video>
        </div>
        <div
          style={{
            position: "fixed",
            bottom: 0,
            width: "100vw",
            height: "10%",
            background: "black",
          }}
        >
          <h2 style={{ textAlign: "right", color: "white" }}>Frame Data</h2>
        </div>
      </div>
    </BasicLayout>
  );
};

export default Home;
