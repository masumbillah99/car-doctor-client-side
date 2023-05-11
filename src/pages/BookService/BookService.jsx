import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const BookService = () => {
  const service = useLoaderData();
  const { title, price, _id } = service;
  const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleBookService = (e) => {
    e.preventDefault();
    const email = user?.email;

    const order = {
      customerName: name,
      email,
      date,
      service: _id,
      price: price,
    };

    console.log(order);
  };

  return (
    <div>
      <h2>Hello, Book service: {title}</h2>
      <form
        onSubmit={handleBookService}
        className="bg-[#F3F3F3] p-24 my-24 rounded-lg"
      >
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              defaultValue={user?.displayName}
              placeholder="Your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="date"
              onChange={(e) => setDate(e.target.value)}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              defaultValue={user?.email}
              placeholder="Your Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="number"
              defaultValue={"$" + price}
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control my-5">
          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered textarea-lg w-full h-64"
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <input
            type="submit"
            value="Order Confirm"
            className="bg-red-500 text-white hover:bg-red-600 py-3 rounded-md cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default BookService;
