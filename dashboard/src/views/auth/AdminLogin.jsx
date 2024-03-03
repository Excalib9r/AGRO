import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { admin_login, messageClear } from "../../store/Reducers/authReducer";

const AdminLogin = () => {
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
    dispatch(admin_login(state));
  };

  const overrideStyle = {
    display: "flex",
    margin: "0 auto",
    height: "24px",
    justifyContent: "center",
    alignItems: "center",
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      navigate("/");
    }
  }, [errorMessage, successMessage]);

  return (
    <div className="min-w-screen min-h-screen bg-white flex justify-center items-center">
      <div className="w-[350px] text-[#064420] p-2">
        <div className="bg-[#ededed] p-4 rounded-md border border-gray-200">
          <div className="h-[70px] flex justify-center items-center">
            <div className="w-[180px] h-[50px]">
              <img
                className="w-full h-full object-contain"
                src="http://localhost:3000/images/agro-logo.png"
                alt="image"
              />
            </div>
          </div>
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
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
