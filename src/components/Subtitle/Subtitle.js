import styles from "./Subtitle.module.scss";
const Subtitle = (props) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.subTitle}>{props.children}</p>
    </div>
  );
};

export default Subtitle;
