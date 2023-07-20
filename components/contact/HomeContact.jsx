import React from "react";
import { MdShoppingBag, MdLocationOn, MdPhoneIphone } from "react-icons/md";

const HomeContact = () => {
  return (
    <div className="w-full h-24 bg-gray-100 px-8 md:px-20 py-4 shadow-lg">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <MdShoppingBag />
          Opened until Fri 22:00
        </div>
        <a className="flex items-center gap-2">
          <MdLocationOn />
          Old Post Office Road, Belur
        </a>
        <a href="tel:+919108081960" className="flex items-center gap-2">
          <MdPhoneIphone />
          +919108081960
        </a>
      </div>
    </div>
  );
};

export default HomeContact;
