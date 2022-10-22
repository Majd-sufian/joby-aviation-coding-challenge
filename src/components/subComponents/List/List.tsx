import { ListCard } from "..";
import { Card } from "../../../types";
import "./List.css";

interface ListProps {
  title: string;
  cards: Array<Card>;
}

const List: React.FC<ListProps> = ({ title, cards }) => {
  return (
    <div className="List radius">
      <div className="List__title">{title}</div>
      <div className="List__cards">
        {cards.map((card: Card, idx: number) => (
          <ListCard key={idx} card={card} />
        ))}
      </div>
    </div>
  );
};

export default List;
