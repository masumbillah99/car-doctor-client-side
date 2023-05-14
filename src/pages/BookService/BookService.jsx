import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const BookService = () => {
  const service = useLoaderData();
  // console.log(service);
  const { _id, title, price, img } = service;
  const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleBookService = (e) => {
    e.preventDefault();
    const email = user?.email;

    const booking = {
      customerName: name,
      email,
      date,
      img,
      service: title,
      service_id: _id,
      price: price,
    };

    // console.log(booking);

    // send data client to server with post method
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Congratulations",
            text: "You successfully order a service",
          });
        }
      });
  };

  return (
    <div>
      <hr />
      <h2 className="text-center font-bold text-3xl my-10">
        Book Service: {title}
      </h2>
      <form
        onSubmit={handleBookService}
        className="bg-[#F3F3F3] p-24 rounded-lg mb-24"
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
              type="text"
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
