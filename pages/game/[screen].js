import GameScreen from "../../components/game/GameScreen";
import { PrismaClient } from '@prisma/client'

export async function getWordList() {
  const prisma = new PrismaClient();

  let data = prisma.words.findMany();

  prisma.$disconnect();
  return data;
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          screen: 'saved'
        }
      },
      {
        params: {
          screen: 'custom'
        }
      }
    ],
    fallback: false
  }
}

export async function getStaticProps({ params, store }) {
  if (params.screen == 'custom') {
    return {
      props: {
        isModeCustom: true,
        wordList: []
      }
    }
  } else {
    return {
      props: {
        isModeCustom: false,
        wordList: await getWordList()
      }
    }
  }
}

export default function Screen() {
  return <GameScreen />
}