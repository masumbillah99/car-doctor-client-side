import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h3 className="text-xl font-bold text-orange-500 mb-3">Service</h3>
        <h1 className="text-5xl font-bold pb-3">Our Service Area</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&lsquo;t look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10 lg:mx-0">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="text-center mx-auto mt-16">
        <Link className="hover:bg-red-500 hover:text-white text-red-500 border-red-500 border p-3 rounded-md">
          More Services
        </Link>
      </div>
    </div>
  );
};

export default Services;
