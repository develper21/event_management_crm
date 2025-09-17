import { useState, useCallback, useEffect } from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import UserProfile from "../layout/UserBar";

// Component to render a search input field with an icon
const SearchBar = () => (
  <div className="flex items-center">
    <div className="w-[245px] h-12 flex flex-row items-center justify-start gap-2 py-[10px] px-[12px] border border-[#ebebeb] rounded-[9px] hover:bg-gray-100 transition-colors">
      <div className="w-6 h-6 flex items-center justify-center">
        <FaSearch className="text-black" />
      </div>
      <input
        type="text"
        placeholder="Quick search"
        className="bg-transparent outline-none tracking-[-0.02em] leading-[1.4] text-black placeholder-black"
      />
    </div>
  </div>
);

// Component to display user-related icons and profile information
const UserSection = ({ openUserProfile }) => (
  <div className="flex items-center gap-4">
    <div className="flex flex-row items-center gap-4">
      <div className="w-9 h-6 flex items-center justify-center cursor-pointer">
        <FaBell className="text-black" />
      </div>
      <img
        src="Message.jpg"
        alt="Message"
        className="w-12 h-8 object-cover cursor-pointer"
      />
    </div>
    {/* Trigger for opening the user profile */}
    <div
      className="flex flex-row items-center justify-end gap-[10px] cursor-pointer text-center text-base text-[#474747] font-inter"
      onClick={openUserProfile}
    >
      <div className="w-[220px] h-[50px] flex flex-col items-end justify-center gap-1">
        <b className="relative leading-[1.4] z-10">User.Admin</b>
        <div className="relative text-xs tracking-[-0.02em] leading-[1.4] text-[#333] opacity-70 z-0">
          chad_dennis98@domain.com
        </div>
      </div>
      <div className="w-12 h-12 rounded-[8px] border border-white flex items-center justify-center">
        <img src="User-1.jpg" className="text-white text-xl rounded-[8px]" />
      </div>
    </div>
  </div>
);

// Component to display the current page title
const Breadcrumbs = () => (
  <div className="h-[27px] flex flex-row items-center justify-center pr-[30px]">
    <div className="flex flex-row items-center justify-start">
      <b className="relative leading-[140%]">Dashboard</b>
    </div>
  </div>
);

// Component to display the current day, date, and time dynamically
const StatusBar = () => {
  const [currentDateTime, setCurrentDateTime] = useState("");

  // Function to calculate and format the current date and time
  const updateDateTime = useCallback(() => {
    const now = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayName = days[now.getDay()];
    const day = now.getDate().toString().padStart(2, "0");
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const year = now.getFullYear();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    const formattedDateTime = `${dayName}, ${day}/${month}/${year} - ${hours}:${minutes}:${seconds} ${ampm}`;
    setCurrentDateTime(formattedDateTime);
  }, []);

  // Hook to update the date and time every second
  useEffect(() => {
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, [updateDateTime]);

  return (
    <div className="flex-1 flex flex-row items-center justify-end gap-[10px] text-center text-[18px] text-white">
      <div className="flex flex-row items-center justify-end text-right text-[16px] text-[#333] font-inter">
        <div className="w-[255px] relative h-[22px]">
          <b className="absolute top-0 left-[-35px] leading-[140%]">
            {currentDateTime}
          </b>
        </div>
      </div>
    </div>
  );
};

// Main Navbar component that combines all top bar elements
const Navbar = ({ setMainContent }) => {
  const [isUserProfileOpen, setUserProfileOpen] = useState(false);

  // Function to open the user profile modal
  const openUserProfile = useCallback(() => {
    setUserProfileOpen(true);
  }, []);

  // Function to close the user profile modal
  const closeUserProfile = useCallback(() => {
    setUserProfileOpen(false);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 md:left-[265px] right-0 h-[85px] bg-white shadow-md z-30">
        <div className="flex items-center justify-between h-full px-4 md:px-6">
          <SearchBar />
          <UserSection openUserProfile={openUserProfile} />
        </div>
        <div className="w-full relative bg-gradient-to-r from-gray-50 to-[#f0f0f0] h-[50px] flex flex-row items-center justify-start px-[30px] py-[20px] text-left text-base text-[#e4822f] font-inter"
          style={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}>
            <Breadcrumbs />
            <StatusBar />
        </div>
      </header>
      {isUserProfileOpen && (
        <UserProfile onClose={closeUserProfile} setMainContent={setMainContent} />
      )}
    </>
  );
};

export default Navbar;