import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success("successfully sign in with google");
        navigate(from, { replace: true });
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <>
      <div className="divider">OR</div>
      <div className="text-center">
        <button className="btn btn-circle btn-outline">
          <FaFacebookF />
        </button>
        <button className="btn btn-circle btn-outline mx-3">
          <FaLinkedinIn />
        </button>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline"
        >
          <FcGoogle />
        </button>
      </div>
      <ToastContainer />
    </>
  );
};

export default SocialLogin;
