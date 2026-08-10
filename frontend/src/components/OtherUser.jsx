import React from "react";

const OtherUser = () => {
  return (
    <div>
      <div className="flex gap-2 items-center hover:bg-slate-700 rounded-md p-2 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4DSi2LgQNlkCeaSmd134NSBUfUbgABYrKBikEBWKbEg&s=10"
              alt="user"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-2">
            <p>Krishna</p>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </div>
  );
};

export default OtherUser;
