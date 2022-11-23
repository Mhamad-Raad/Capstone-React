import css from "./Navbar.module.css";
import { FaSearchengin } from "react-icons/fa";
export default function Navbar({ inputSearchHandler }) {


  return (
    <div className={css.upbar}>
        <h1 className={css.logo}>Games</h1>
      <div className={css.right}>
        <input
          className={css.searchbar}
          type="text"
          onChange={inputSearchHandler}
        />
        <FaSearchengin className={css.searchbaricon} />
      </div>
    </div>
  );
}
