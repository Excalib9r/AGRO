import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import Pagination from "../Pagination";
import { BsImage } from "react-icons/bs";
import Search from "../components/Search";
import { useDispatch, useSelector } from "react-redux";
import { get_products } from "../../store/Reducers/productReducer";

const Products = () => {
  const dispatch = useDispatch();
  const { products, totalProduct } = useSelector((state) => state.product);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);

  useEffect(() => {
    const obj = {
      perPage: parseInt(perPage),
      page: parseInt(currentPage),
      searchValue,
    };
    dispatch(get_products(obj));
  }, [searchValue, currentPage, perPage]);

  return (
    <div className="px-2 md:px-7 py-5">
      <div className="w-full p-4 bg-[#ededed] rounded-md border border-slate-100">
        <Search
          setPerPage={setPerPage}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />
        <div className="relative overflow-x-auto mt-5">
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
                  Category
                </th>
                <th scope="col" className="py-3 px-4">
                  Brand
                </th>
                <th scope="col" className="py-3 px-4">
                  Price
                </th>
                <th scope="col" className="py-3 px-4">
                  Discount
                </th>
                <th scope="col" className="py-3 px-4">
                  Stock
                </th>
                <th scope="col" className="py-3 px-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((d, i) => (
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
                      src={d.images[0]}
                      alt=""
                    />
                  </td>
                  <td
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    <span>{d?.name?.slice(0, 16)}...</span>
                  </td>
                  <td
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    <span>{d.category}</span>
                  </td>
                  <td
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    <span>{d.brand}</span>
                  </td>
                  <td
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    <span>Tk {d.price}</span>
                  </td>
                  <td
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    {d.discount === 0 ? (
                      <span>no discount</span>
                    ) : (
                      <span>{d.discount} %</span>
                    )}
                  </td>
                  <td
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    <span>{d.stock}</span>
                  </td>

                  <td
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    <div className="flex justify-start items-center gap-4">
                      <Link
                        to={`/seller/dashboard/edit-product/${d._id}`}
                        className="text-[#ededed] p-[6px] bg-[#4e5447] rounded-sm hover:shadow-lg hover:shadow-green-950/50"
                      >
                        <FaEdit />
                      </Link>
                      <Link className="text-[#3c3840] p-[6px] bg-[#dbdfaa] rounded-sm hover:shadow-lg hover:shadow-green-950/50">
                        <FaEye />
                      </Link>
                      <button className="p-[6px] text-[#ededed] bg-red-500 rounded-sm hover:shadow-lg hover:shadow-red-500/50">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {totalProduct <= perPage ? (
          ""
        ) : (
          <div className="w-full flex justify-end mt-4 bottom-4 right-4">
            <Pagination
              pageNumber={currentPage}
              setPageNumber={setCurrentPage}
              totalItem={3}
              perPage={perPage}
              showItem={4}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
