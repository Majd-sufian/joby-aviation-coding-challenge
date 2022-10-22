// import List from "../subComponents/List/List";
import { List as ListType } from "../../types";
import "./Board.css";
import { List } from "../subComponents";
import { data } from "../../data/data";

interface BoardProps {}

const Board: React.FC<BoardProps> = ({}) => {
  return (
    <div className="Board__container flex column">
      <h2 className="Board__title">Order Overview</h2>
      <div className="Board__content flex radius">
        {data.map((list: ListType) => (
          <List key={list.title} title={list.title} cards={list.cards} />
        ))}
      </div>
    </div>
  );
};

export default Board;
