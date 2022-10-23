import { useState } from "react";
import { Modal } from "../..";
import { getClassName } from "../../../utils";
import { Card } from "../../../types";

interface ListCardProps {
  card: Card;
}

const ListCard: React.FC<ListCardProps> = ({ card }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div
        className="List__card flex column radius"
        onClick={() => setOpenModal(true)}
      >
        <div className="List__card__name">{card.title}</div>
        <div className="List__card__description">{card.description}</div>
        <hr />

        <div className="List__card__priority">
          Priority:{" "}
          <span className={`radius && ${getClassName(card.priority)}`}>
            {" "}
            {card.priority}
          </span>
        </div>
        <div className="List__card__date">Due Data: {card.date}</div>
        <div className="List__card__tag">+Tag</div>
      </div>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        title={card.title}
        priority={card.priority}
        orderDeatils={card.orderDeatils}
        procesDeatails={card.processDeatails}
        files={card.files}
      />
    </>
  );
};

export default ListCard;
