import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import GameList from '../Componenets/GameList';

export default function Home({ games, Done }) {
  const favorites = useSelector((state) => state.data.favorites);

  return (
    <>
      <GameList Games={games} favorites={favorites} Done={Done} />
    </>
  );
}

Home.defaultProps = {
  Done: false,
};

Home.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object).isRequired,
  Done: PropTypes.bool,
};
