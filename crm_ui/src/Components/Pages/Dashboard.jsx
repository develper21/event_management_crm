import { useState } from "react";
import { FaTachometerAlt, FaChevronUp, FaSquare } from "react-icons/fa";
import Navbar from "../layout/Topbar";
import Profile from "../dashboard/Profile/MyProfile";
import Inbox from "../dashboard/Inbox/Inbox";
import Chat from "../dashboard/Chat/Chat";
import Notification from "../dashboard/Notification/Notification";
import VoucherManagement from "../dashboard/Tickets/TicketList";

// SidebarItem Component: Represents a single item in the sidebar
const SidebarItem = ({ icon, text, onClick, isSelected }) => (
  // This div creates the layout for the item, with hover and selected state styling
  <div
    className={`w-full h-[38px] flex flex-row items-center justify-start px-[24px] box-border gap-[6px] hover:bg-gray-100 hover:text-orange-500 transition-colors ${
      isSelected ? "bg-gray-200" : ""
    }`}
    onClick={onClick}
  >
    {/* Displays the icon */}
    <div className="w-[22px] h-[22px] flex items-center justify-center">
      {icon}
    </div>
    {/* Displays the text */}
    <div className="self-stretch flex-1 flex flex-row items-center justify-start text-left font-inter">
      <div className="relative tracking-[-0.02em] leading-[1.4] opacity-[0.72]">
        {text}
      </div>
    </div>
  </div>
);

// SidebarSection Component: Creates a section in the sidebar with a title and items
const SidebarSection = ({ title, items, selectedComponent, handleItemClick }) => (
  // This div manages the layout for the entire section
  <div className="flex flex-col w-full">
    <div className="w-full flex flex-col">
      {/* Section title and chevron icon */}
      <div className="self-stretch h-[48px] flex flex-row items-center justify-start px-[15px] box-border">
        <div className="flex-1 flex flex-row items-center justify-start px-[15px] z-[1]">
          <div className="relative tracking-[0.04em]">{title}</div>
        </div>
        <div className="w-[32px] h-[32px] flex items-center justify-center z-0 text-[12px]">
          <FaChevronUp className="relative tracking-[0.05em]" />
        </div>
      </div>
      {/* Renders the list of items */}
      <div className="flex flex-col items-start justify-start text-center text-[#0b0b0b] cursor-pointer">
        {items.map((item) => (
          <SidebarItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            onClick={() => handleItemClick(item.text)}
            isSelected={selectedComponent === item.text}
          />
        ))}
      </div>
    </div>
    {/* Space between sections */}
    <div className="self-stretch relative h-[16px]" />
  </div>
);

// Dashboard Component: Main component that manages the sidebar and main content
const Dashboard = () => {
  // State to track which component is currently selected
  const [selectedComponent, setSelectedComponent] = useState("Dashboard");

  // Function to handle sidebar item clicks
  const handleItemClick = (item) => {
    setSelectedComponent(item);
  };

  // Define the sections and their items for the sidebar
  const sections = [
    {
      title: "Start-Up",
      items: [
        {
          text: "Dashboard",
          icon: (
            <FaTachometerAlt className="relative tracking-[-0.05em] opacity-[0.72]" />
          ),
        },
      ],
    },
    {
      title: "Sale",
      items: [
        {
          text: "Bidder",
          icon: (
            <FaSquare className="relative tracking-[-0.05em] opacity-[0.72]" />
          ),
        },
        {
          text: "Contract",
          icon: (
            <FaSquare className="relative tracking-[-0.05em] opacity-[0.72]" />
          ),
        },
      ],
    },
    {
      title: "Support",
      items: [
        {
          text: "Tickets",
          icon: (
            <FaSquare className="relative tracking-[-0.05em] opacity-[0.72]" />
          ),
        },
      ],
    },
  ];

  // Function to render the component based on the selected item
  const renderComponent = () => {
    switch (selectedComponent) {
      case "Dashboard":
        return <div>Dashboard Content</div>; // Content for the Dashboard
      case "Bidder":
        return <div>Bidder Content</div>; // Content for Bidder
      case "Contract":
        return <div>Contract Content</div>; // Content for Contract
      case "Tickets":
        return <VoucherManagement />; // VoucherManagement component for Tickets
      case "MyProfile":
        return <Profile />; // Profile component
      case "Notification":
        return <Notification />; // Notification component
      case "Inbox":
        return <Inbox setMainContent={setSelectedComponent} />; // Inbox component that can change content
      case "Chat":
        return <Chat />; // Chat component
      default:
        return <div>Blank Screen</div>; // Default case when no match is found
    }
  };

  return (
    // Main layout that keeps the sidebar and content area in a flex container
    <div className="flex">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-full md:w-[265px] bg-white text-[14px] text-[#e4822f] font-poppins z-40">
        {/* Navbar component that can change the main content */}
        <Navbar setMainContent={setSelectedComponent} />
        <div className="relative flex flex-col items-center w-full">
          {/* Logo display */}
          <img
            className="z-0 w-[150px] h-[75px] mx-auto my-4"
            alt="Logo"
            src="Logo_Variation.jpg"
          />
          {/* Background layer for the sidebar */}
          <div className="absolute inset-x-0 top-[12.5%] bottom-0 bg-white z-[1]" />
          {/* Scrollable area containing the sections */}
          <div className="w-[265px] h-[945px] overflow-y-auto flex-shrink-0 flex flex-col items-start z-[2]">
            {sections.map((section) => (
              <SidebarSection
                key={section.title}
                title={section.title}
                items={section.items}
                selectedComponent={selectedComponent}
                handleItemClick={handleItemClick}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="ml-0 md:ml-[265px] w-full">
        {/* Container for the content, which is scrollable */}
        <div className="w-full h-screen overflow-auto bg-[#ebebeb] relative shadow-[0px_12px_24px_rgba(0,0,0,0.08)]">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;