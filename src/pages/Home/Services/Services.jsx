import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [ascending, setAscending] = useState(true);
  const [search, setSearch] = useState("");
  const searchRef = useRef(null);

  useEffect(() => {
    fetch(
      `http://localhost:5000/services?search=${search}&sort=${
        ascending ? "ascending" : "descending"
      }`
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [ascending, search]);

  const handleSearch = () => {
    // console.log(searchRef.current.value);
    setSearch(searchRef.current.value);
  };

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
        <div className="form-control mt-3">
          <div className="input-group justify-center">
            <input
              type="text"
              ref={searchRef}
              placeholder="Search…"
              className="input input-bordered"
            />
            <button onClick={handleSearch} className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <button
          onClick={() => setAscending(!ascending)}
          className="btn btn-secondary mt-5"
        >
          {ascending ? "Price High to Low" : "Price Low to High"}
        </button>
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
