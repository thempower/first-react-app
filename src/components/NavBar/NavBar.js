import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <span>
        <a href="http://localhost:3000/">
          <i className="fa fa-tasks"></i>
        </a>
      </span>
      <ul>
        <li>
          <a link href="/">
            Home
          </a>
          <a link href="Favorite">
            Favorite
          </a>
          <a link href="About">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
