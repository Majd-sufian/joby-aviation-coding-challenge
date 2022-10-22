import { List } from "../types";
import { getCards } from "../utils/index";

export const data: Array<List> = [
  {
    title: "Last viewed",
    cards: getCards(4),
  },
  {
    title: "To Do",
    cards: getCards(2),
  },
  {
    title: "In Progress",
    cards: getCards(4),
  },
  {
    title: "In Review",
    cards: getCards(3),
  },
  {
    title: "Done",
    cards: getCards(5),
  },
];
