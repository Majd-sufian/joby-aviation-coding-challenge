import { Board } from "../types";
import { getCards } from "../utils/index";

export const board: Board = {
  columns: [
    {
      id: 1,
      title: "Last viewed",
      cards: getCards(3),
    },
    {
      id: 2,
      title: "To Do",
      cards: getCards(2),
    },
    {
      id: 3,
      title: "In Progress",
      cards: getCards(3),
    },
    {
      id: 4,
      title: "In Review",
      cards: getCards(2),
    },
    {
      id: 5,
      title: "Done",
      cards: getCards(1),
    },
  ],
};
