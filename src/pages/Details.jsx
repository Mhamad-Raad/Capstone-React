import { useLocation, useNavigate } from 'react-router-dom';
import css from './Details.module.css';

export default function Details() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.state === null) {
    navigate('/Games');
  }

  const game = location.state;

  return (
    <div className={css.details_bg}>
      <img src={game?.image} className={css.img} alt={game.title} />
      <div className={css.title_bg}>
        <h2 className={css.title}>
          {game?.title}
        </h2>
      </div>
      <div className={css.details}>
        <div className={css.sub_section}>
          <h3 className={css.sub_title}>Rating</h3>
          <p className={css.sub_text}>
            {`${game?.rating} / 5`}
          </p>
        </div>
        <div className={css.sub_section}>
          <h3 className={css.sub_title}>Playtime</h3>
          <p className={css.sub_text}>
            {`${game?.playtime} (hrs)`}
          </p>
        </div>
      </div>
    </div>
  );
}
