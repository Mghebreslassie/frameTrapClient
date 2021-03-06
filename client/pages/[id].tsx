import type { NextPage } from "next";
import Link from "next/link";
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
  return (
    <BasicLayout>
      {/* <CharacterNavBar /> */}
      <div>
        <h3>
          <Link href="/">
            <div>Go Back</div>
          </Link>
        </h3>
      </div>
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

export async function getStaticPaths(context: any) {
  // Call an external API endpoint to get posts
  // let uaString = context.req.headers["user-agent"];

  const res = await fetch(
    "https://frame-tool-gg.herokuapp.com/character/getAllCharacters",
    {
      method: "GET",
      // headers: {
      //   "Content-Type": "application/json",
      //   Accept: "application/json",
      //   "User-Agent": "*",
      // },
    }
  );

  const posts: { allChars: Post[] } = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.allChars.map((post) => ({
    params: { id: post._id.toString() },
  }));
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  console.log(params);
  const res = await fetch(
    `https://frame-tool-gg.herokuapp.com/character/getCharacter/${params.id}`,
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
      data: data,
    },
  };
}

export default Character;
