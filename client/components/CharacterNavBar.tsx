import { NextPage } from "next";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Post } from "../pages/[id]";
import Image from "next/image";
import Link from "next/link";
const Container = styled.div`
  width: 100vw;
  height: 20vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1vh 2vh;
`;
const CharacterBox = styled.div`
  width: 60px;
  height: 60px;
  margin: 5px;
`;
type AllChars = {
  allChars: Post[];
};

const CharacterNavBar: NextPage = () => {
  const [images, setImages] = useState<any>();
  useEffect(() => {
    const getImages = async () => {
      const res = await fetch(
        "https://intense-tor-66882.herokuapp.com/character/getAllCharacters"
      );
      const data: AllChars = await res.json();
      setImages(
        data.allChars.map((item) => {
          return (
            <CharacterBox key={item._id}>
              <a href={`http://localhost:3001/${item._id}`}>
                <div>
                  <Image width={50} height={50} src={item.avatarImageUrl} />
                </div>
              </a>
            </CharacterBox>
          );
        })
      );
    };
    getImages();
  }, []);

  return <Container>{images}</Container>;
};

export default CharacterNavBar;
