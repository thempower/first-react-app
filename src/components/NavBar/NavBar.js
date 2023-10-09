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
          <a link href="URL">
            Home
          </a>
          <a link href="URL">
            Favorite
          </a>
          <a link href="URL">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
