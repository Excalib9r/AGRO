import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import Pagination from "../Pagination";
import { BsImage } from "react-icons/bs";
import { PropagateLoader } from "react-spinners";
import { overrideStyle } from "../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import {
  categoryAdd,
  messageClear,
  get_category,
} from "../../store/Reducers/categoryReducer";
import Search from "../components/Search";

const Category = () => {
  const dispatch = useDispatch();
  const { loader, successMessage, errorMessage, categories } = useSelector(
    (state) => state.category
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [show, setShow] = useState(false);
  const [imageShow, setImageShow] = useState("");

  const [state, setState] = useState({
    name: "",
    image: "",
  });

  const imageHandle = (e) => {
    let files = e.target.files;
    if (files.length > 0) {
      setImageShow(URL.createObjectURL(files[0]));
      setState({ ...state, image: files[0] });
    }
  };

  const add_category = (e) => {
    e.preventDefault();
    dispatch(categoryAdd(state));
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      setState({ name: "", image: "" });
      setImageShow("");
    }
  }, [successMessage, errorMessage]);

  useEffect(() => {
    const obj = {
      perPage: parseInt(perPage),
      page: parseInt(currentPage),
      searchValue,
    };
    dispatch(get_category(obj));
  }, [searchValue, currentPage, perPage]);

  return (
    <div className="px-2 lg:px-7 pt-5 ">
      <div className="flex lg:hidden justify-between items-center mb-5  p-4 bg-[#ededed] rounded-md">
        <h1 className="text-slate-950 font-semibold text-lg">Categories</h1>
        <button
          onClick={() => setShow(true)}
          className="bg-[#4e5447] shadow-lg hover:shadow-green-950/50 px-4 py-2 cursor-pointer text-white rounded-md text-sm"
        >
          Add
        </button>
      </div>
      <div className="flex flex-wrap w-full">
        <div className="w-full lg:w-7/12">
          <div className="w-full p-4 bg-[#ededed] rounded-md border border-slate-100">
            <Search
              setPerPage={setPerPage}
              setSearchValue={setSearchValue}
              searchValue={searchValue}
            />
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-green-950">
                <thead className="text-sm text-green-950 uppercase border-b border-slate-700">
                  <tr>
                    <th scope="col" className="py-3 px-4">
                      No
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Image
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Name
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((d, i) => (
                    <tr key={i}>
                      <td
                        scope="row"
                        className="py-1 px-4 font-medium whitespace-nowrap"
                      >
                        {i + 1}
                      </td>
                      <td
                        scope="row"
                        className="py-1 px-4 font-medium whitespace-nowrap"
                      >
                        <img
                          className="w-[45px] h-[45px]"
                          src={d.image}
                          alt=""
                        />
                      </td>
                      <td
                        scope="row"
                        className="py-1 px-4 font-medium whitespace-nowrap"
                      >
                        <span>{d.name}</span>
                      </td>

                      <td
                        scope="row"
                        className="py-1 px-4 font-medium whitespace-nowrap"
                      >
                        <div className="flex justify-start items-center gap-4">
                          <Link className="text-[#ededed] p-[6px] bg-[#4e5447] rounded-sm hover:shadow-lg hover:shadow-green-950/50">
                            <FaEdit />
                          </Link>
                          <Link className="p-[6px] text-[#ededed] bg-red-500 rounded-sm hover:shadow-lg hover:shadow-red-500/50">
                            <FaTrash />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="w-full flex justify-end mt-4 bottom-4 right-4">
              <Pagination
                pageNumber={currentPage}
                setPageNumber={setCurrentPage}
                totalItem={3}
                perPage={perPage}
                showItem={4}
              />
            </div>
          </div>
        </div>
        <div
          className={`w-[320px] lg:w-5/12 translate-x-100 lg:relative lg:right-0 fixed ${
            show ? "right-0" : "-right-[340px]"
          } z-[9999] top-0 transition-all duration-500`}
        >
          <div className="w-full pl-5">
            <div className=" bg-[#ededed] h-screen lg:h-auto px-3 py-2 lg:rounded-md text-[#3c3840]">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-[#3c3840] font-semibold text-xl">
                  Add Category
                </h1>
                <div
                  onClick={() => setShow(false)}
                  className="block lg:hidden cursor-pointer"
                >
                  <GrClose className="text-[#3c3840]" />
                </div>
              </div>
              <form onSubmit={add_category}>
                <div className="flex flex-col w-full gap-1 mb-3">
                  <label htmlFor="name">Category Name</label>
                  <input
                    value={state.name}
                    onChange={(e) =>
                      setState({ ...state, name: e.target.value })
                    }
                    className="px-4 py-2 focus:border-slate-800 outline-none bg-[#ededed] border border-slate-500 rounded-md text-[#3c3840]"
                    type="text"
                    id="name"
                    name="category_name"
                    placeholder="category name"
                    required
                  />
                </div>
                <div>
                  <label
                    className="flex justify-center items-center flex-col h-[238px] cursor-pointer border border-dashed hover:border-green-950 w-full border-slate-500"
                    htmlFor="image"
                  >
                    {imageShow ? (
                      <img className="w-full h-full" src={imageShow} />
                    ) : (
                      <>
                        <span>
                          <BsImage />
                        </span>
                        <span>Select Image</span>
                      </>
                    )}
                  </label>
                </div>
                <div>
                  <input
                    onChange={imageHandle}
                    className="hidden"
                    type="file"
                    name="image"
                    id="image"
                    required
                  />
                  <div className="mt-4">
                    <button
                      disabled={loader ? true : false}
                      className="bg-[#4e5447] w-full hover:shadow-slate-950/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3"
                    >
                      {loader ? (
                        <PropagateLoader
                          color="#ededed"
                          cssOverride={overrideStyle}
                        />
                      ) : (
                        "Add Category"
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
