import { useSelector } from "react-redux";

import GameList from '../Componenets/GameList';

export default function Home({games, Done}) {
  const favorites = useSelector((state) => state.data.favorites);

  return (
    <>
      <GameList Games={games} favorites={favorites} Done={Done} />
    </>
  )
}
