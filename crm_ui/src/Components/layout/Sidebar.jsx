import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTachometerAlt, FaChevronUp, FaSquare } from "react-icons/fa";

// SidebarItem Component (unchanged)
const SidebarItem = ({ icon, text, onClick, isSelected }) => (
  <div
    className={`w-full h-[38px] flex flex-row items-center justify-start px-[24px] box-border gap-[6px] hover:bg-gray-100 transition-colors ${
      isSelected ? "bg-gray-200" : ""
    }`}
    onClick={onClick}>
    <div className="w-[22px] h-[22px] flex items-center justify-center">
      {icon}
    </div>
    <div className="self-stretch flex-1 flex flex-row items-center justify-start text-left font-inter">
      <div className="relative tracking-[-0.02em] leading-[1.4] opacity-[0.72]">
        {text}
      </div>
    </div>
  </div>
);

// SidebarSection Component (unchanged)
const SidebarSection = ({ title, items, selectedComponent, handleItemClick }) => (
  <div className="flex flex-col w-full">
    <div className="w-full flex flex-col">
      <div className="self-stretch h-[48px] flex flex-row items-center justify-start px-[15px] box-border">
        <div className="flex-1 flex flex-row items-center justify-start px-[15px] z-[1]">
          <div className="relative tracking-[0.04em]">{title}</div>
        </div>
        <div className="w-[32px] h-[32px] flex items-center justify-center z-0 text-[12px]">
          <FaChevronUp className="relative tracking-[0.05em]" />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start text-center text-[#333] cursor-pointer">
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
    <div className="self-stretch relative h-[16px]" />
  </div>
);

// Drawer Component (Sidebar only, navigation via react-router)
const Drawer = () => {
  const [selectedComponent, setSelectedComponent] = useState("Dashboard");
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    setSelectedComponent(item);
    switch (item) {
      case "Dashboard":
        navigate("/dashboard");
        break;
      case "Events":
        navigate("/dashboard/events");
        break;
      case "Services":
        navigate("/dashboard/services");
        break;
      case "Users":
        navigate("/dashboard/profile");
        break;
      case "Reports":
        navigate("/dashboard");
        break;
      default:
        navigate("/dashboard");
    }
  };

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
      title: "Hub",
      items: [
        {
          text: "Events",
          icon: (
            <FaSquare className="relative tracking-[-0.05em] opacity-[0.72]" />
          ),
        },
        {
          text: "Services",
          icon: (
            <FaSquare className="relative tracking-[-0.05em] opacity-[0.72]" />
          ),
        },
        {
          text: "Hub Spaces",
          icon: (
            <FaSquare className="relative tracking-[-0.05em] opacity-[0.72]" />
          ),
        },
      ],
    },
    {
      title: "Administrative",
      items: [
        {
          text: "Users",
          icon: (
            <FaSquare className="relative tracking-[-0.05em] opacity-[0.72]" />
          ),
        },
        {
          text: "Integration settings",
          icon: (
            <FaSquare className="relative tracking-[-0.05em] opacity-[0.72]" />
          ),
        },
        {
          text: "System settings",
          icon: (
            <FaSquare className="relative tracking-[-0.05em] opacity-[0.72]" />
          ),
        },
        {
          text: "Reports",
          icon: (
            <FaSquare className="relative tracking-[-0.05em] opacity-[0.72]" />
          ),
        },
      ],
    },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-full md:w-[265px] bg-white text-[14px] text-[#e4822f] font-poppins z-40">
      <div className="relative flex flex-col items-center w-full">
        <img
          className="z-0 w-[150px] h-[75px] mx-auto my-4"
          alt="Logo"
          src="Logo_Variation.jpg"
        />
        <div className="absolute inset-x-0 top-[12.5%] bottom-0 bg-white z-[1]" />
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
  );
};

export default Drawer;