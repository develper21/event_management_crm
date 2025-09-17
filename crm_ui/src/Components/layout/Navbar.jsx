import { useState, useCallback } from "react";
import { FaSearch, FaBell, FaUserAlt } from "react-icons/fa";
import UserProfile from "../dashboard/Profile/UserProfile";

// **SearchBar Component**
// Renders the search input field with an icon.
// - Contains a search icon and a placeholder input for quick search functionality.
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

// **UserSection Component**
// Renders the user-related elements: notification bell and user profile trigger.
// - Includes a bell icon and clickable user profile details (name, email, avatar).
// - Props:
//   - openUserProfile: Function to open the user profile modal.
const UserSection = ({ openUserProfile }) => (
  <div className="flex items-center gap-4">
    {/* Notification Bell */}
    <div className="w-12 flex flex-col items-center justify-start">
      <div className="w-6 h-6 flex flex-row items-center justify-center cursor-pointer">
        <FaBell className="text-black" />
      </div>
      <div className="w-3 h-3" />
    </div>
    {/* User Profile Trigger */}
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
      <div className="w-12 h-12 rounded-[8px] bg-[#080808] border border-white flex items-center justify-center">
        <FaUserAlt className="text-white text-xl" />
      </div>
    </div>
  </div>
);

// **Breadcrumbs Component**
// Renders the breadcrumb navigation section.
// - Displays the current page or section (e.g., "Dashboard").
const Breadcrumbs = () => (
  <div className="h-[27px] flex flex-row items-center justify-center pr-[30px]">
    <div className="flex flex-row items-center justify-start">
      <b className="relative leading-[140%]">Dashboard</b>
    </div>
  </div>
);

// **StatusBar Component**
// Renders the status and work tracker section.
// - Includes a hidden work tracker and a visible status (date and time).
const StatusBar = () => (
  <div className="flex-1 flex flex-row items-center justify-end gap-[10px] text-center text-[18px] text-white">
    {/* Work Tracker (Hidden as per original design) */}
    <div className="w-[344px] hidden flex-row items-center justify-end pr-[12px] gap-[12px]">
      <div className="rounded-[20px] flex flex-row items-center justify-end gap-[6px]">
        <div className="w-[30px] h-[30px] flex flex-col items-center justify-center">
          <div className="relative">laptop-house</div>
        </div>
        <div className="w-[42px] h-[22px] flex flex-row items-center justify-start px-[3px] rounded-[6px] bg-[rgba(250,249,255,0.12)] border border-[#40a1d3]">
          <div className="w-[16px] h-[16px] relative rounded-[4px] bg-[rgba(255,255,255,0.72)] border border-[rgba(250,249,255,0.24)]" />
        </div>
        <div className="w-[30px] h-[30px] flex flex-col items-center justify-center text-[rgba(255,255,255,0.36)]">
          <div className="relative">building</div>
        </div>
      </div>
      <div className="rounded-[4px] bg-[#69c98c] h-[24px] flex flex-row items-center justify-center px-[12px] text-[12px] font-roboto">
        <div className="w-[58px] h-[14px] relative">
          <b className="absolute top-0 left-0">Start Work</b>
        </div>
      </div>
      <div className="w-[1px] h-[16px] relative border-r border-white" />
    </div>
    {/* Status (Date and Time) */}
    <div className="flex flex-row items-center justify-end text-right text-[16px] text-[#333] font-inter">
      <div className="w-[255px] relative h-[22px]">
        <b className="absolute top-0 left-0 leading-[140%]">
          Monday, 30/10/2023 - 10:28 AM
        </b>
      </div>
    </div>
  </div>
);

// **Navbar Component**
// Main component that assembles the header with search, user profile, breadcrumbs, and status.
// - Fixed at the top with responsive positioning based on screen size.
// - Manages state for opening/closing the user profile modal.
const Navbar = () => {
  // State to control the visibility of the UserProfile modal.
  const [isUserProfileOpen, setUserProfileOpen] = useState(false);

  // Callback to open the UserProfile modal, memoized for performance.
  const openUserProfile = useCallback(() => {
    setUserProfileOpen(true);
  }, []);

  // Callback to close the UserProfile modal, memoized for performance.
  const closeUserProfile = useCallback(() => {
    setUserProfileOpen(false);
  }, []);

  return (
    <>
      {/* 
        Header Section
        - Fixed at the top of the page.
        - On mobile (sm:), spans full width; on medium screens and above (md:), offset by 265px 
          to align with a drawer (assumed 265px wide).
        - Includes shadow and z-index for layering above other content.
      */}
      <header className="fixed top-0 left-0 md:left-[265px] right-0 h-[85px] bg-white shadow-md z-30">
        {/* Main Navbar Content */}
        <div className="flex items-center justify-between h-full px-4 md:px-6">
          {/* Left Section: Search Bar */}
          <SearchBar />
          {/* Right Section: User Profile and Notifications */}
          <UserSection openUserProfile={openUserProfile} />
        </div>
        {/* Secondary Navbar Content (Breadcrumbs and Status) */}
        <div className="w-full relative bg-gradient-to-r from-gray-50 to-[#f0f0f0] h-[50px] flex flex-row items-center justify-start px-[30px] py-[20px] text-left text-base text-[#e4822f] font-inter shadow-sm">
          {/* Breadcrumbs Section */}
          <Breadcrumbs />
          {/* Status and Work Tracker Section */}
          <StatusBar />
        </div>
      </header>
      {/* 
        User Profile Modal
        - Rendered conditionally when isUserProfileOpen is true.
        - Controlled by openUserProfile and closeUserProfile callbacks.
      */}
      {isUserProfileOpen && <UserProfile onClose={closeUserProfile} />}
    </>
  );
};

export default Navbar;