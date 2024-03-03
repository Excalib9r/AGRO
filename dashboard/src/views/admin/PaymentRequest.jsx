import React, { forwardRef } from "react";
import { FixedSizeList as List } from "react-window";

function handleOnWheel({ deltaY }) {
}

const outerElementType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={handleOnWheel} {...props} />
));

const PaymentRequest = () => {
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
        <div className="w-[25%] p-2 whitespace-nowrap">
          <button className="bg-[#dbdfaa] shadow-lg hover:shadow-[#dbdfaa]/50 px-3 py-[2px] cursor-pointer text-green-950 rounded-md text-sm">
            Confirm
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="px-2 lg:px-7 pt-5 text-[#ededed]">
      <div className="w-full p-4 bg-[#4e5447] rounded-md">
        <h2 className="text-xl font-medium pb-5 ">Withdrawal Request</h2>
        <div className="w-full">
          <div className="w-full overflow-x-auto">
            <div className="flex bg-[#363a31] uppercase text-xs min-w-[340px] border-b border-dashed border-[#6d6c6c]">
              <div className="w-[25%] p-2">No</div>
              <div className="w-[25%] p-2">Amount</div>
              <div className="w-[25%] p-2">Status</div>
              <div className="w-[25%] p-2">Date</div>
              <div className="w-[25%] p-2">Action</div>
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
  );
};

export default PaymentRequest;
