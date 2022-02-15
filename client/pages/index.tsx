import { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";
import BasicLayout from "../layout/Basic";
import { Post } from "./[id]";

const Title = styled.h1`
  color: red;
`;
type IProps = {
  data: { allChars: Post[] };
};
const Home: NextPage<IProps> = ({ data }) => {
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
            display: "flex",
          }}
        >
          <h2 style={{ textAlign: "left", color: "white", flex: 1 }}>
            Guilty Gear
          </h2>
          <span
            style={{ float: "right", color: "white", display: "flex", flex: 5 }}
          >
            {data.allChars.map((item) => {
              return <h5>{item.name}</h5>;
            })}
          </span>
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
          <div>
            <video autoPlay muted>
              <source src="./assets/GGGiovanna.mp4"></source>
            </video>
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            bottom: 0,
            width: "100vw",
            height: "10%",
            background: "black",
            display: "flex",
          }}
        >
          <span
            style={{ float: "left", color: "white", display: "flex", flex: 5 }}
          >
            {data.allChars.map((item) => {
              return (
                <Link href={`/${item._id}`}>
                  <div>
                    <h5>{item.name}</h5>;
                  </div>
                </Link>
              );
            })}
          </span>
          <h2 style={{ textAlign: "right", color: "white", flex: 1 }}>
            Frame Data
          </h2>
        </div>
      </div>
    </BasicLayout>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    "https://frame-tool-gg.herokuapp.com/character/getAllCharacters",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "*",
      },
    }
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
export default Home;
