import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineGooglePlus, AiOutlineGithub } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { PropagateLoader } from "react-spinners";
import toast from "react-hot-toast";
import { overrideStyle } from "../../utils/utils";
import { messageClear, seller_login } from "../../store/Reducers/authReducer";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loader, errorMessage, successMessage } = useSelector(
    (state) => state.auth
  );
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(seller_login(state));
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      navigate("/");
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [successMessage, errorMessage]);

  return (
    <div className="min-w-screen min-h-screen bg-white flex justify-center items-center">
      <div className="w-[350px] text-[#3c3840] p-2">
        <div className="bg-[#ededed] p-4 rounded-md border border-gray-200">
          <h2 className="text-xl mb-3">Welcome to Agro</h2>
          <p className="text-sm mb-3">Please signin to your account</p>
          <form onSubmit={submit}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                onChange={inputHandle}
                value={state.email}
                type="email"
                name="email"
                placeholder="email"
                id="email"
                required
                className="px-3 py-2 outline-none border border-slate-500 bg-transparent rounded-md text-[#3c3840] focus:border-slate-800 overflow-hidden"
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-5">
              <label htmlFor="password">Password</label>
              <input
                onChange={inputHandle}
                value={state.password}
                type="password"
                name="password"
                placeholder="password"
                id="password"
                required
                className="px-3 py-2 outline-none border border-slate-500 bg-transparent rounded-md text-[#3c3840] focus:border-slate-800 overflow-hidden"
              />
            </div>

            <button
              disabled={loader ? true : false}
              className="bg-[#4e5447] w-full hover:shadow-slate-950/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3"
            >
              {loader ? (
                <PropagateLoader color="#ededed" cssOverride={overrideStyle} />
              ) : (
                "Sign in"
              )}
            </button>
            <div className="flex items-center mb-3 gap-3 justify-center">
              <p>
                Already have an account? <Link to="/register">Signup Here</Link>
              </p>
            </div>
            <div className="w-full flex justify-center items-center mb-3">
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
              <div className="w-[10%] flex justify-center items-center">
                <span className="pb-1">Or</span>
              </div>
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="text-white w-[35px] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <AiOutlineGooglePlus />
                </span>
              </div>
              <div className="text-white w-[35px] h-[35px] flex rounded-md bg-blue-700 shadow-lg hover:shadow-blue-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <FiFacebook />
                </span>
              </div>
              <div className="text-white w-[35px] h-[35px] flex rounded-md bg-cyan-700 shadow-lg hover:shadow-cyan-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <CiTwitter />
                </span>
              </div>
              <div className="text-white w-[35px] h-[35px] flex rounded-md bg-purple-700 shadow-lg hover:shadow-purple-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <AiOutlineGithub />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
