import css from "./GameList.module.css";
import GameItem from "./GameItem";
import { useNavigate } from "react-router-dom";

export default function GameList({ Done, Games, favorites }) {
  const navigate = useNavigate();

  const navigationHandler = (game) => {
    navigate('/Games/' + game.id, {
      state: { ...game },
    });
  };

  return (
    <>
      {Done ? (
        <>
          <div className={css.fcategory}>
            <h2 className={css.category_title}>Personal Favorites</h2>
          </div>
          <div className={css.fgames}>
            {favorites.map((game) => (
              <GameItem
                game={game}
                key={game.id}
                clickHandler={() => navigationHandler(game)}
              />
            ))}
          </div>
        </>
      ) : null}
      <div className={css.games}>
        <div className={css.category}>
          <h2 className={css.category_title}>Famous Games</h2>
        </div>
        {Done ? (
          Games.map((item) => {
            return (
              <GameItem
                key={item.id}
                game={item}
                clickHandler={() => navigationHandler(item)}
              />
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
}
