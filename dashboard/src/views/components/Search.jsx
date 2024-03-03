import React from "react";

const Search = ({ setPerPage, setSearchValue, searchValue }) => {
  return (
    <div className="flex justify-between items-center">
      <select
        onChange={(e) => setPerPage(parseInt(e.target.value))}
        className="px-4 py-2 focus:border-slate-800 outline-none bg-[#ededed] border border-slate-500 rounded-md text-[#3c3840]"
      >
        <option value="5">5</option>
        <option value="15">15</option>
        <option value="25">25</option>
      </select>
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        className="px-4 py-2 focus:border-slate-800 outline-none bg-[#ededed] border border-slate-500 rounded-md text-[#3c3840]"
        type="text"
        placeholder="search"
      />
    </div>
  );
};

export default Search;
