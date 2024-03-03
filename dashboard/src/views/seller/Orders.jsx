import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import Pagination from "../Pagination";
import Search from "../components/Search";
import { useDispatch, useSelector } from "react-redux";
import { get_seller_orders } from "../../store/Reducers/orderReducer";

const Orders = () => {
  const dispatch = useDispatch();
  const { totalOrder, myOrders } = useSelector((state) => state.order);
  const { userInfo } = useSelector((state) => state.auth);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);

  useEffect(() => {
    dispatch(
      get_seller_orders({
        perPage: parseInt(perPage),
        page: parseInt(currentPage),
        searchValue: searchValue,
        sellerId: userInfo._id,
      })
    );
  }, [perPage, currentPage, searchValue]);

  return (
    <div className="px-2 md:px-7 py-5">
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
                  Order Id
                </th>
                <th scope="col" className="py-3 px-4">
                  Price
                </th>
                <th scope="col" className="py-3 px-4">
                  Payment Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Order Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Date
                </th>
                <th scope="col" className="py-3 px-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {myOrders.map((d, i) => (
                <tr key={i}>
                  <td
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    #{d._id}
                  </td>
                  <td
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    Tk {d.price}
                  </td>
                  <td
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    <span>{d.payment_status}</span>
                  </td>
                  <td
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    <span>{d.delivery_status}</span>
                  </td>
                  <td
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    {d.date}
                  </td>
                  <td
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    <Link
                      to={`/seller/dashboard/order/details/${d._id}`}
                      className="w-[30px] flex justify-center items-center text-white p-[6px] bg-[#4e5447] rounded-sm hover:shadow-lg hover:shadow-green-950/50"
                    >
                      <FaEye />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {totalOrder <= perPage ? (
          ""
        ) : (
          <div className="w-full flex justify-end mt-4 bottom-4 right-4">
            <Pagination
              pageNumber={currentPage}
              setPageNumber={setCurrentPage}
              totalItem={totalOrder}
              perPage={perPage}
              showItem={3}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
