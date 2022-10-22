import { Priority } from "../types";

const getOrderName = () => {
  return "MO" + Math.floor(10000000 + Math.random() * 90000000);
};

export const getRandomDate = () => {
  const date = new Date(+new Date() - Math.floor(Math.random() * 10000000000));
  return date.toLocaleDateString("en-GB");
};

const getPriorityStatus = (): Priority => {
  const index = Math.floor(Math.random() * 3);
  const status: Array<Priority> = [
    "Critical Path",
    "High Priority",
    "Standard",
  ];
  return status[index];
};

const orderDeatils = {
  part: "Lorem Ipsum",
  "Part number": "Lorem Ipsum",
  "Release status": "Lorem Ipsum",
  "Drawing number": "Lorem Ipsum",
  "Flight article": "Lorem Ipsum",
  "estimated shipping date": "Lorem Ipsum",
};

const processDeatails = {
  Material: "Lorem Ipsum",
  "Material stock size": "Lorem Ipsum",
  "Surface Treatment": "Lorem Ipsum",
  Machine: "Lorem Ipsum",
};

const files = [
  {
    name: "File Name",
    date: getRandomDate(),
    description:
      "This is just an awesome file and this area is actually the file description. Since there is no file here right now, I am just making up this text. Congrats. You have just wasted 15 seconds of your day reading this.",
  },
  {
    name: "File Name",
    date: getRandomDate(),
    description:
      "This is just an awesome file and this area is actually the file description. Since there is no file here right now, I am just making up this text. Congrats. You have just wasted 15 seconds of your day reading this.",
  },
  {
    name: "File Name",
    date: getRandomDate(),
    description:
      "This is just an awesome file and this area is actually the file description. Since there is no file here right now, I am just making up this text. Congrats. You have just wasted 15 seconds of your day reading this.",
  },
];

export const getCards = (n: number) => {
  const cards = [];
  for (let i = 0; i < n; i++) {
    cards.push({
      name: getOrderName(),
      description: "Order Description",
      priority: getPriorityStatus(),
      date: getRandomDate(),
      orderDeatils,
      processDeatails,
      files,
    });
  }
  return cards;
};

export const getClassName = (priority: Priority) => {
  switch (priority) {
    case "Critical Path":
      return "cretical";
    case "High Priority":
      return "high";
    default:
      return "standard";
  }
};
