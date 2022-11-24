import { useLocation } from "react-router-dom";
import css from "./Details.module.css";

export default function Details() {
  const location = useLocation();

  const game = location.state.game;

  return (
    <div className={css.details_bg}>
      <img src={game.image} className={css.img} />
      <div className={css.title_bg}>
        <h2 className={css.title}>{game.title}</h2>
      </div>
      <div className={css.details}>
        <div className={css.sub_section}>
          <h3 className={css.sub_title}>Rating</h3>
          <p className={css.sub_text}>{game.rating} / 5</p>
        </div>
        <div className={css.sub_section}>
          <h3 className={css.sub_title}>Playtime</h3>
          <p className={css.sub_text}>{game.playtime} (hrs)</p>
        </div>
      </div>
    </div>
  );
}
