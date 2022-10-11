import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ monsters }) => (
  <section className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} />;
    })}
  </section>
);

export default CardList;
