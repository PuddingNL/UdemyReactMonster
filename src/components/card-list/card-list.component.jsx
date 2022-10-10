import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <section className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </section>
    );
  }
}

export default CardList;
