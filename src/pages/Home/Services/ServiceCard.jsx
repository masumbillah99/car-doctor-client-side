import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { _id, service_id, title, img, price, description, facility } = service;

  return (
    <>
      <div className="card w-96 shadow-xl">
        <figure className="px-5 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex text-red-500">
            <p>Price: ${price}</p>
            <Link to={`book/${_id}`}>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
