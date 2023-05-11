import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id, price } = service;

  //   const handleOrder = (e) => {
  //     console.log(e);
  //   };

  return (
    <>
      <h2>Check out : {price}</h2>
      <form>
        <div className="bg-[#F3F3F3] p-24 my-24 rounded-lg">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                placeholder="Your Phone"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Your Email"
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
        </div>
      </form>
    </>
  );
};

export default CheckOut;
