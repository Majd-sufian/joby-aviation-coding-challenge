import { OrderDeatils, ProcessDeatails, File, Priority } from "../../types";
import { getClassName } from "../../utils";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import "./Modal.css";
import { ModalDetails, ModalFiles } from "../subComponents";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  priority: Priority;
  orderDeatils: OrderDeatils;
  procesDeatails: ProcessDeatails;
  files: Array<File>;
}

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  priority,
  orderDeatils,
  procesDeatails,
  files,
}) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay radius">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer flex column"
      >
        <div className="Modal__header flex row">
          <div className="Modal__header__title">{title}</div>
          <div className="Modal__header__closeBtn pointer" onClick={onClose}>
            <CancelRoundedIcon />
          </div>
        </div>
        <div className="content">
          <ModalDetails
            orderDeatils={orderDeatils}
            procesDeatails={procesDeatails}
          />
          <div className="Modal__priority flex column">
            Priority:{" "}
            <span className={`radius && ${getClassName(priority)}`}>
              {" "}
              Critical Path
            </span>
          </div>
          <hr />
          <ModalFiles files={files} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
