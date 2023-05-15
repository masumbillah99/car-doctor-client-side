import { useContext } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import loginImg from "../../../assets/images/login/login.svg";
import { AuthContext } from "../../../providers/AuthProvider";
import SocialLogin from "../../shared/SocialLogin/SocialLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignIn = (e) => {
    e.preventDefault();

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User Login Successful");
        navigate(from, { replace: true });
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
              <form onSubmit={handleSignIn}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Email</span>
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">
                      Confirm Password
                    </span>
                  </label>
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <Link
                      href="#"
                      className="label-text font-bold-alt link link-hover"
                    >
                      Forgot password?
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Sign In"
                    className="btn bg-red-700 border-0 hover:bg-red-500 normal-case"
                  />
                </div>
              </form>
              <p className="my-4 text-center">
                New to Car Doctors?
                <Link
                  className="text-orange-600 ms-1 hover:underline"
                  to="/sign-up"
                >
                  Sign Up
                </Link>
              </p>
              <SocialLogin />
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
