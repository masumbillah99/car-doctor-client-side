import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import loginImg from "../../../assets/images/login/login.svg";
import { AuthContext } from "../../../providers/AuthProvider";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { registerUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();

    registerUser(email, password)
      .then((result) => {
        const signedUser = result.user;
        console.log(signedUser);
        toast("User added successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-20">
          <div className="text-center lg:text-left">
            <img src={loginImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border">
            <div className="card-body">
              <h1 className="font-bold text-2xl text-center mb-10">Login</h1>
              <form onSubmit={handleSignUp}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Name</span>
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Email</span>
                  </label>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Password</span>
                  </label>
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Sign Up"
                    className="btn bg-red-700 border-0 hover:bg-red-500 normal-case"
                  />
                </div>
              </form>
              <p className="my-4 text-center">
                Have an Account?
                <Link
                  className="text-orange-600 ms-1 hover:underline"
                  to="/sign-in"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default SignUp;
