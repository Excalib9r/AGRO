import React, { forwardRef, useEffect, useState } from "react";
import { FixedSizeList as List } from "react-window";
import { BsCurrencyDollar } from "react-icons/bs";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import {
  get_seller_payment_details,
  send_withdrawal_request,
} from "../../store/Reducers/paymentReducer";

function handleOnWheel({ deltaY }) {
}

const outerElementType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={handleOnWheel} {...props} />
));

const Payments = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const {
    successMessage,
    errorMessage,
    loader,
    pendingWithdraws,
    successWithdraws,
    totalAmount,
    withdrawAmount,
    pendingAmount,
    availableAmount,
  } = useSelector((state) => state.payment);

  const [amount, setAmount] = useState(0);

  useEffect(() => {
    dispatch(get_seller_payment_details(userInfo._id));
  }, []);

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
    }
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }, [successMessage, errorMessage]);

  const sendRequest = (e) => {
    e.preventDefault();

    dispatch(send_withdrawal_request({ amount, sellerId: userInfo._id }));
  };

  const Row = ({ index, style }) => {
    return (
      <div style={style} className="flex text-sm">
        <div className="w-[25%] p-2 whitespace-nowrap">{index + 1}</div>
        <div className="w-[25%] p-2 whitespace-nowrap">Tk 454</div>
        <div className="w-[25%] p-2 whitespace-nowrap">
          <span className="py-[1px] px-[5px] bg-[#3c4a47] text-[#ffffff] rounded-md text-xs">
            pending
          </span>
        </div>
        <div className="w-[25%] p-2 whitespace-nowrap">12 Dec 2023</div>
      </div>
    );
  };

  return (
    <div className="px-2 md:px-7 py-5">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
        <div className="flex justify-between items-center p-5 bg-[#4e5447] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-white ">
            <h2 className="text-lg font-bold">Tk {totalAmount}</h2>
            <span className="text-sm font-normal">Total Sales</span>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-white flex justify-center items-center text-xl">
            <BsCurrencyDollar className="text-green-950 shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#4e5447] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-white ">
            <h2 className="text-lg font-bold">Tk {availableAmount}</h2>
            <span className="text-sm font-normal">Available Amount</span>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-white flex justify-center items-center text-xl">
            <BsCurrencyDollar className="text-green-950 shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#4e5447] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-white ">
            <h2 className="text-lg font-bold">Tk {withdrawAmount}</h2>
            <span className="text-sm font-normal">Withdrawal Amount</span>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-white flex justify-center items-center text-xl">
            <BsCurrencyDollar className="text-green-950 shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#4e5447] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-white ">
            <h2 className="text-lg font-bold">Tk {pendingAmount}</h2>
            <span className="text-sm font-normal">Pending Amount</span>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-white flex justify-center items-center text-xl">
            <BsCurrencyDollar className="text-green-950 shadow-lg" />
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 pb-4">
        <div className="bg-[#ededed] text-[#3c3840] rounded-md p-5 ">
          <h2 className="text-lg">Send Withdrawal Request</h2>
          <div className="py-5">
            <form onSubmit={sendRequest}>
              <div className="flex gap-3 flex-wrap">
                <input
                  onChange={(e) => setAmount(e.target.value)}
                  required
                  value={amount}
                  min="0"
                  className="px-3 md:w-[79%] py-2 focus:border-slate-800 outline-none bg-[#ededed] border border-slate-500 rounded-md text-[#3c3840]"
                  type="number"
                  name="amount"
                />
                <button
                  disabled={loader}
                  className="text-[#ededed] bg-[#4e5447] hover:shadow-green-950/50 hover:shadow-lg hover:text-white rounded-md px-4 py-2 text-sm"
                >
                  {loader ? "Loading..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
          <div>
            <h2 className="text-lg pb-4">Pending Withdrawal Request</h2>
            <div className="w-full overflow-x-auto">
              <div className="text-white flex bg-[#363a31] uppercase text-xs min-w-[340px] border-b border-dashed border-[#6d6c6c]">
                <div className="w-[25%] p-2">No</div>
                <div className="w-[25%] p-2">Amount</div>
                <div className="w-[25%] p-2">Status</div>
                <div className="w-[25%] p-2">Date</div>
              </div>
              {
                <List
                  style={{ minWidth: "340px", overflowX: "hidden" }}
                  className="List"
                  height={350}
                  itemCount={20}
                  itemSize={35}
                  outerElementType={outerElementType}
                >
                  {Row}
                </List>
              }
            </div>
          </div>
        </div>
        <div className="bg-[#ededed] text-[#3c3840] rounded-md p-5 ">
          <div>
            <h2 className="text-lg pb-4">Success Withdrawal</h2>
            <div className="w-full overflow-x-auto">
              <div className="text-white flex bg-[#363a31] uppercase text-xs min-w-[340px] border-b border-dashed border-[#6d6c6c]">
                <div className="w-[25%] p-2">No</div>
                <div className="w-[25%] p-2">Amount</div>
                <div className="w-[25%] p-2">Status</div>
                <div className="w-[25%] p-2">Date</div>
              </div>
              {
                <List
                  style={{ minWidth: "340px", overflowX: "hidden" }}
                  className="List"
                  height={350}
                  itemCount={20}
                  itemSize={35}
                  outerElementType={outerElementType}
                >
                  {Row}
                </List>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
