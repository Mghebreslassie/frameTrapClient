import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import anji from "../../server/data/scrapedData/Anji_Mito.json";
import CharacterInfo from "../components/CharacterInfo";
import CharacterNavBar from "../components/CharacterNavBar";
import FrameDataTable from "../components/FrameDataTable";
import BasicLayout from "../layout/Basic";

export type Post = {
  _id: string;
  name: string;
  details: {
    Defense: string;
    Guts: string;
    Prejump: string;
    Backdash: string;
    Weight: string;
    _id: string;
  };
  bio: string;
  moveSet: [
    {
      command: string;
      damage: string;
      guard: string;
      startup: string;
      active: string;
      recovery: string;
      on_block: string;
      invulnerability: string;
      _id: string;
    }
  ];
  avatarImageUrl: string;
  portraitImageUrl: string;
};
type IProps = {
  data: { newChar: Post };
};
const Character: NextPage<IProps> = ({ data }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <BasicLayout>
      <CharacterNavBar />
      <CharacterInfo
        name={data.newChar.name}
        bio={data.newChar.bio}
        details={data.newChar.details}
        portraitUrl={data.newChar.portraitImageUrl}
      />
      <FrameDataTable moveList={data.newChar.moveSet} />
    </BasicLayout>
  );
};

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("http://localhost:3000/character/getAllCharacters");
  const posts: { allChars: [Post] } = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.allChars.map((post) => ({
    params: { id: post._id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  // const image = await fetch("http://localhost:3000/images/Anji Mito.png");
  const res = await fetch(
    `http://localhost:3000/character/getCharacter/${params.id}`
  );
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}

export default Character;
