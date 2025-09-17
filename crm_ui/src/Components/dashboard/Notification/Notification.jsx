import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsis,
  faAngleRight,
  faAngleLeft,
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faSort,
  faPaperPlane,
  faCalendar,
  faList,
  faFile,
  faCheck,
  faBolt,
} from '@fortawesome/free-solid-svg-icons';

// Reusable NotificationItem component
const NotificationItem = ({ icon, message, timestamp, isHighlighted, height, checkmarkColor }) => {
  const backgroundClass = isHighlighted
    ? 'bg-gradient-to-l from-white to-[rgba(255,255,255,0.88)] border-[2px] border-[#E3832E]'
    : 'bg-white';
  const heightClass = `min-h-[${height}] max-h-[${height}]`;

  return (
    <div className="w-full border-[0.5px] border-[#EBEBEB]">
      <div className={`p-[8px_16px] ${heightClass} flex items-center gap-4 ${backgroundClass}`}>
        <div className="p-[4px_4px_4.84px_4px] w-[24px] h-[24px]"></div>
        <div className="flex-1 flex flex-col gap-[2px]">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={icon} className="text-[#E3832E] text-[16px] mr-1" />
            <span className="text-[#333333] font-['Inter'] text-[14px] leading-[19.6px]">
              {message}
            </span>
          </div>
          <div className="text-[#333333] font-['Inter'] text-[12px] leading-[16.8px] opacity-72">
            {timestamp}
          </div>
        </div>
        <div
          className={`w-[24px] h-[24px] font-['Font_Awesome_5_Free'] text-[14px] font-black`}
          style={{ color: checkmarkColor }}
        >
          <FontAwesomeIcon icon={faCheck} />
        </div>
      </div>
    </div>
  );
};

const Notification = () => {
  const notifications = [
    {
      icon: faPaperPlane,
      message: (
        <>
          You were invited to a new campaign by
          <span className="text-[#E3832E] font-['Inter'] text-[14px] font-bold leading-[19.6px]">
            Dimity Vegas
          </span>
        </>
      ),
      timestamp: 'Today at 13:32',
      isHighlighted: true,
      height: '75px',
      checkmarkColor: '#EBEBEB',
    },
    {
      icon: faFile,
      message: 'A new deliverable was checked as completed. Check it out!',
      timestamp: 'Today at 13:32',
      isHighlighted: false,
      height: '55px',
      checkmarkColor: 'white',
    },
    {
      icon: faCalendar,
      message: 'Your Campaign.name campaign was updated.',
      timestamp: 'Today at 13:32',
      isHighlighted: false,
      height: '55px',
      checkmarkColor: 'white',
    },
    {
      icon: faList,
      message: (
        <>
          You’ve received a new offer from<br />
          Mark Jester
        </>
      ),
      timestamp: 'Today at 13:32',
      isHighlighted: false,
      height: '75px',
      checkmarkColor: 'white',
    },
    {
      icon: faList,
      message: (
        <>
          You’ve received a new offer from<br />
          Johnny Cage
        </>
      ),
      timestamp: 'Today at 13:32',
      isHighlighted: false,
      height: '75px',
      checkmarkColor: 'white',
    },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Handlers for the options
  const handleMarkAllAsRead = () => {
    console.log('Mark all as read');
    setIsDropdownOpen(false);
  };

  const handleRefresh = () => {
    console.log('Refresh');
    setIsDropdownOpen(false);
  };

  // Effect to close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(true);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="w-[1655px] h-[555px] p-[30px_180px] mt-[155px]">
      <div className="w-full h-[495px] min-h-[495px] max-h-[495px] shadow-[0_4px_48px_rgba(0,0,0,0.12)]">
        <div className="w-full min-h-[495px] max-h-[495px] bg-white rounded-lg">
          <div className="w-[1295px] h-[80px] pt-[0px] pl-[30px] pb-[0px] pr-[30px] border-[0.5px] border-[#EBEBEB] flex items-center justify-between overflow-visible">
            <div className="flex-1 flex justify-start">
              <div className="text-[#474747] font-['Inter'] text-[20px] font-bold leading-[28px]">
                Notifications
              </div>
            </div>

            {/* Relative container for positioning the dropdown */}
            <div className="relative">
              <div
                className="p-[6px] rounded-lg border-[0.5px] border-[#E3832E] flex items-center justify-center cursor-pointer"
                onClick={() => {
                  console.log('Toggling dropdown, current state:', isDropdownOpen);
                  setIsDropdownOpen(!isDropdownOpen);
                }}
              >
                <div className="w-[20px] h-[20px] text-[#E3832E] flex items-center justify-center">
                  <FontAwesomeIcon icon={faEllipsis} className="text-[14px]" />
                </div>
              </div>

              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute top-full right-0 mt-2 w-[200px] bg-white border border-[#333333] rounded-lg shadow-lg z-10">
                  {console.log('Dropdown is rendering')}
                  <div className="absolute top-[-10px] right-[10px] w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-white"></div>
                  <div className="flex flex-col">
                    <button
                      className="flex items-center gap-2 p-2 hover:bg-gray-100 text-gray-500 cursor-pointer rounded-lg"
                      onClick={handleMarkAllAsRead}
                    >
                      <FontAwesomeIcon icon={faBolt} className="text-gray-500" />
                      <span className="text-[14px] font-['Inter']">Mark all as read</span>
                    </button>
                    <button
                      className="flex items-center gap-2 p-2 hover:bg-gray-100 text-gray-500 cursor-pointer rounded-lg"
                      onClick={handleRefresh}
                    >
                      <FontAwesomeIcon icon={faBolt} className="text-gray-500" />
                      <span className="text-[14px] font-['Inter']">Refresh</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="w-full min-h-[335px] max-h-[335px] bg-white">
            {notifications.map((notif, index) => (
              <NotificationItem
                key={index}
                icon={notif.icon}
                message={notif.message}
                timestamp={notif.timestamp}
                isHighlighted={notif.isHighlighted}
                height={notif.height}
                checkmarkColor={notif.checkmarkColor}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="p-[20px_30px] flex justify-between items-center w-full">
            <div className="flex gap-[15px] items-center">
              <div className="text-[#333333] font-['Inter'] text-[14px] leading-[19.6px]">
                Elements per page
              </div>
              <div className="p-[0px_12px] w-[105px] bg-white rounded-lg border-[0.5px] border-[#EBEBEB] flex items-center gap-[6px]">
                <div className="text-[#333333] font-['Inter'] text-[14px] leading-[19.6px]">
                  5
                </div>
                <div className="text-[#333333]">
                  <FontAwesomeIcon icon={faSort} className="text-[12px]" />
                </div>
              </div>
            </div>
            <div className="flex gap-[5px] items-start">
              <div className="w-[33px] h-[33px] bg-white rounded-lg border-[0.5px] border-[#EBEBEB] flex items-center justify-center">
                <div className="text-[#EBEBEB]">
                  <FontAwesomeIcon icon={faAngleDoubleLeft} className="text-[12px]" />
                </div>
              </div>
              <div className="w-[33px] h-[33px] bg-white rounded-lg border-[0.5px] border-[#EBEBEB] flex items-center justify-center">
                <div className="text-[#EBEBEB]">
                  <FontAwesomeIcon icon={faAngleLeft} className="text-[12px]" />
                </div>
              </div>
              <div className="w-[33px] h-[33px] bg-[#E3832E] rounded-lg border-[0.5px] border-[#EBEBEB] flex items-center justify-center">
                <div className="text-white font-['Roboto'] text-[12px] font-medium">
                  1
                </div>
              </div>
              <div className="w-[33px] h-[33px] bg-white rounded-lg border-[0.5px] border-[#EBEBEB] flex items-center justify-center">
                <div className="text-[#E3832E] font-['Roboto'] text-[12px] font-medium">
                  2
                </div>
              </div>
              <div className="w-[33px] h-[33px] bg-white rounded-lg border-[0.5px] border-[#EBEBEB] flex items-center justify-center">
                <div className="text-[#E3832E] font-['Roboto'] text-[12px] font-medium">
                  3
                </div>
              </div>
              <div className="w-[33px] h-[33px] bg-white rounded-lg border-[0.5px] border-[#EBEBEB] flex items-center justify-center">
                <div className="text-[#E3832E]">
                  <FontAwesomeIcon icon={faAngleRight} className="text-[12px]" />
                </div>
              </div>
              <div className="w-[33px] h-[33px] bg-white rounded-lg border-[0.5px] border-[#EBEBEB] flex items-center justify-center">
                <div className="text-[#E3832E]">
                  <FontAwesomeIcon icon={faAngleDoubleRight} className="text-[12px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;