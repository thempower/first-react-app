import styles from "./Column.module.scss";
import Card from "../Card/Card";
import CardForm from "../CardForm/CardForm";
import { useSelector, useDispatch } from "react-redux";
import { getFilteredCards } from "../../redux/store";
//import { useEffect } from 'react';

const Column = (props) => {
  const dispatch = useDispatch();
  //const searchString = useSelector(state => state.searchString);
  const cards = useSelector((state) => getFilteredCards(state, props.id));

  return (
    <article className={styles.column}>
      <div className={styles.title}>
        <h2>
          <span className={styles.icon + " fa fa-" + props.icon}></span>
          {props.title}
        </h2>
      </div>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            card={card}
            columnId={props.id}
            cards={props.cards}
            title={card.title}
          />
        ))}
      </ul>
      <CardForm columnId={props.id} />
    </article>
  );
};

export default Column;
