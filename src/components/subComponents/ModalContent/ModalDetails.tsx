import { OrderDeatils, ProcessDeatails } from "../../../types";

interface ModalDetailsProps {
  orderDeatils: OrderDeatils;
  procesDeatails: ProcessDeatails;
}

const ModalDetails: React.FC<ModalDetailsProps> = ({
  orderDeatils,
  procesDeatails,
}) => {
  return (
    <div className="Modal__deatails flex">
      <div className="details">
        <h4>Order Details</h4>
        <div className="datails__items flex row">
          {Object.keys(orderDeatils).map((key: string) => (
            <div key={key} className="flex column">
              {key}
              <span>Lerom Ipsum</span>
            </div>
          ))}
        </div>
      </div>
      <div className="process">
        <h4>Process Details</h4>
        <div className="process__items">
          {Object.keys(procesDeatails).map((key: string) => (
            <div key={key} className="item flex">
              <span> {key}:</span>
              <span>Lerom Ipsum</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalDetails;
