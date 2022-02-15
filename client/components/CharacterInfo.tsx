import styled from "styled-components";
import Image from "next/image";
import { NextPage } from "next";

const Container = styled.div`
  width: 100vw;
  border: 5px solid black;

  padding: 5%;
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 35vh;
  padding: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CharacterBio = styled.div`
  flex: 1;
  min-height: 35vh;
`;

const Title = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 2.5rem;
  margin: 0;
  padding: 0;
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 0.9rem;
  margin: 0;
  padding: 0;
`;
const CharacterDetails = styled.div`
  flex: 1;
  height: 35vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Row = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  h3 {
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0;
    padding: 0;
  }
`;
type IProps = {
  name: string;
  bio: string;
  details: {
    Defense: string;
    Guts: string;
    Prejump: string;
    Backdash: string;
    Weight: string;
    _id: string;
  };
  portraitUrl: string;
};

const CharacterInfo: NextPage<IProps> = ({
  name,
  bio,
  details,
  portraitUrl,
}) => {
  function populateDetails(details: any) {
    let arr = [];
    for (let prop in details) {
      if (prop !== "_id") {
        let row = (
          <Row key={prop}>
            <span>{prop}</span>
            <span>{details[prop]}</span>
          </Row>
        );
        arr.push(row);
      }
    }
    return arr.map((el) => {
      return el;
    });
  }
  populateDetails(details);
  return (
    <Container>
      <ImageContainer>
        <Image src={portraitUrl} width={280} height={200} alt={name} />
      </ImageContainer>
      <CharacterBio>
        <Title>{name}</Title>
        <Text>{bio}</Text>
      </CharacterBio>
      <CharacterDetails>{populateDetails(details)}</CharacterDetails>
    </Container>
  );
};

export default CharacterInfo;
