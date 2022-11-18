import React from "react";
import MAIN_NAVIGATION from "../../utils/NAVIGATION";
import { DiJqueryLogo } from "react-icons/di";

const Header = () => {
  return (
    <div className="flex justify-between px-4 py-4 items-center">
      <div>
        <DiJqueryLogo color="#5E9CC6" size="32px" />
      </div>
      <div className="flex justify-center gap-4">
        {MAIN_NAVIGATION.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col md:flex-row md:gap-2 items-center"
            >
              <span className="text-primary">{item.icon}</span>
              <p className="text-primary text-sm font-bold">{item.label}</p>
            </div>
          );
        })}
      </div>
      <div className="h-8 w-8">
        <img
          className="h-full w-full rounded-full"
          src="https://media.istockphoto.com/id/1389665844/photo/happy-young-woman-standing-next-to-her-metaverse-avatar.jpg?b=1&s=612x612&w=0&k=20&c=PY-lWaiH4_xQrzl4gppZoY1sC_LewqVemsgFpnnOdCw="
        />
      </div>
    </div>
  );
};

export default Header;
