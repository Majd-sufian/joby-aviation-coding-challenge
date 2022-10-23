// @ts-nocheck
import { useState } from "react";
import Board, { moveCard } from "@lourenci/react-kanban";
import ListCard from "../subComponents/ListCard/ListCard";
import { board } from "../../data/data";
import { Card } from "../../types";
import "./Board.css";

interface BoardProps {}

interface Source {
  fromPosition: number;
  fromColumnId: number;
}

interface Destination {
  toPosition: number;
  toColumnId: number;
}

const ControlledBoard: React.FC<BoardProps> = ({}) => {
  const [controlledBoard, setBoard] = useState(board);

  function handleCardMove(
    _card: Card,
    source: Source,
    destination: Destination
  ) {
    console.log(source);
    console.log(destination);
    const updatedBoard = moveCard(controlledBoard, source, destination);
    setBoard(updatedBoard);
  }

  return (
    <div className="Board__container flex column">
      <h2 className="Board__title">Order Overview</h2>
      <Board
        onCardDragEnd={handleCardMove}
        disableColumnDrag
        renderCard={(props: Card) => <ListCard card={props} />}
      >
        {controlledBoard}
      </Board>
    </div>
  );
};

export default ControlledBoard;
