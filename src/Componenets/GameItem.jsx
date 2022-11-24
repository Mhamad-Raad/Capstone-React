import css from './GameItem.module.css';

export default function GameItem({ game, clickHandler }) {
  return (
    <div className={css.game} onClick={clickHandler}>
      <img src={game.image} className={css.game_img} />
      <div className={css.game_title_bg}>
        <h2 className={css.game_title}>{game.title}</h2>
      </div>
    </div>
  );
}
