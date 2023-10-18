import styles from "./Hero.module.scss";
import PageTitle from "../PageTitle/PageTitle";
import PageSubTitle from "../PageSubTitle/PageSubTitle";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <PageTitle>My first React App</PageTitle>
      <PageSubTitle>
        A simple to-do app, with lists, columns and card
      </PageSubTitle>
      <h3 className={styles.thanks}>
        Patryk dziękuję za poświęcenie i pobudkę o tej godzinie. Jesteś THE
        BEST:)!
      </h3>
    </div>
  );
};

export default Hero;
