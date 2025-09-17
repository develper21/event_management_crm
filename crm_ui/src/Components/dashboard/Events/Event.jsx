import { useCallback, useState } from "react";
import {
  FaSearch,
  FaArrowRight,
  FaSync,
  FaCalendarAlt,
  FaSort,
  FaEllipsisH,
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import CreateEvent from "./CreateEvent";
import EventView from "./Eview";
import "react-datepicker/dist/react-datepicker.css";

// **SearchFilter Component**
// Renders the search input field with a search icon.
// - Props:
//   - searchText: Current value of the search input.
//   - setSearchText: Function to update the search input value.
const SearchFilter = ({ searchText, setSearchText }) => (
  <div className="flex-1 rounded-sm border border-[#333] flex flex-col items-start justify-start">
    <div className="self-stretch flex-1 rounded-t-sm flex flex-row items-start justify-start py-1 pr-4">
      <div className="w-12 h-12 flex flex-col items-center justify-center">
        <div className="rounded-full overflow-hidden flex flex-row items-center justify-center">
          <div className="flex flex-row items-center justify-center p-2">
            <FaSearch />
          </div>
        </div>
      </div>
      <div className="flex-1 h-12 flex flex-col items-start justify-center py-1">
        <div className="flex flex-row items-center justify-start">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search...."
            className="w-full h-full border-none outline-none"
          />
        </div>
      </div>
    </div>
  </div>
);

// **StatusFilter Component**
// Renders the status filter input with a label.
// - Props:
//   - statusText: Current value of the status input.
//   - setStatusText: Function to update the status input value.
const StatusFilter = ({ statusText, setStatusText }) => (
  <div className="flex-1 relative rounded-t-sm h-[56px]">
    <div className="absolute w-full top-0 left-0 rounded-sm border border-[#333] h-[56px] flex flex-col items-start justify-start">
      <div className="self-stretch flex-1 rounded-t-sm flex flex-row items-start justify-start py-1 pl-4">
        <div className="flex-1 h-12 flex flex-col items-start justify-center py-1 relative">
          <div className="flex flex-row items-center justify-start z-0">
            <input
              type="text"
              value={statusText}
              onChange={(e) => setStatusText(e.target.value)}
              placeholder="All"
              className="w-full h-full border-none outline-none"
            />
          </div>
          <div className="m-0 absolute -top-3 -left-1 bg-white flex items-center px-1 z-10 text-xs">
            <div className="relative leading-4">Status</div>
          </div>
        </div>
        <div className="w-12 h-12 flex flex-col items-center justify-center">
          <div className="rounded-full overflow-hidden flex flex-row items-center justify-center">
            <div className="flex flex-row items-center justify-center p-2">
              <i className="w-6 h-6 relative overflow-hidden flex-shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// **DateIntervalFilter Component**
// Renders the date interval display with a calendar icon (DatePicker commented out as in original).
// - Props:
//   - startDate: Selected start date.
//   - endDate: Selected end date.
const DateIntervalFilter = ({ startDate, endDate }) => (
  <div className="flex-1 relative rounded-t-sm h-[56px]">
    <div className="absolute w-full top-0 left-0 rounded-sm border border-[#333] h-[56px] flex flex-col items-start justify-start">
      <div className="self-stretch flex-1 rounded-t-sm flex flex-row items-start justify-start py-1 pl-4">
        <div className="flex-1 h-12 flex flex-col items-start justify-center py-1 relative">
          <div className="flex flex-row items-center justify-start z-0">
            <div className="relative tracking-normal leading-6">
              {startDate && endDate
                ? `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
                : "MM/DD/YYYY - MM/DD/YYYY"}
            </div>
            <FaCalendarAlt />
          </div>
          <div className="m-0 absolute -top-3 -left-1 bg-white flex items-center px-1 z-10 text-xs">
            <div className="relative leading-4">Interval</div>
          </div>
        </div>
        <div className="w-12 h-12 flex flex-col items-center justify-center">
          <div className="rounded-full overflow-hidden flex flex-row items-center justify-center">
            <div className="flex flex-row items-center justify-center p-2">
              <i className="w-6 h-6 relative" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// **EventItem Component**
// Renders a single event row in the list.
// - Props:
//   - id: Event ID.
//   - designation: Event title or description.
//   - startDate: Start date string.
//   - endDate: End date string.
//   - status: Event status.
//   - statusColor: Background color class for the status badge.
//   - href: Optional link for the event designation.
//   - onClick: Optional click handler for the designation.
const EventItem = ({ id, designation, startDate, endDate, status, statusColor, href, onClick }) => (
  <div className="self-stretch h-[60px] flex flex-row items-start justify-start">
    <div className="flex-1 border-b border-[#ebebeb] flex flex-row items-start justify-start px-[30px]">
      <div className="w-[100px] h-[60px] flex flex-row items-center justify-start text-center">
        <b className="relative leading-[1.4]">{id}</b>
      </div>
      <div className="flex-1 h-[60px] flex flex-row items-center justify-center px-6">
        {href ? (
          <a
            className="flex-1 relative tracking-tight leading-[1.4] text-inherit inline-block overflow-hidden overflow-<FaEllipsisH /> whitespace-nowrap h-5 no-underline"
            href={href}
            target="_blank"
          >
            {designation}
          </a>
        ) : (
          <div
            className="flex-1 h-[60px] flex flex-row items-center justify-center px-6 cursor-pointer"
            onClick={onClick}
          >
            <div className="flex-1 relative tracking-tight leading-[1.4] inline-block overflow-hidden overflow-<FaEllipsisH /> whitespace-nowrap h-5">
              {designation}
            </div>
          </div>
        )}
      </div>
      <div className="w-[160px] h-[60px] flex flex-row items-center justify-start px-4">
        <div className="flex-1 relative tracking-tight leading-[1.4]">{startDate}</div>
      </div>
      <div className="w-[160px] h-[60px] flex flex-row items-center justify-start px-4">
        <div className="flex-1 relative tracking-tight leading-[1.4]">{endDate}</div>
      </div>
      <div className="w-[160px] h-[60px] flex flex-row items-center justify-center px-4 text-[12px]">
        <div className={`w-[96px] h-[28px] rounded-lg ${statusColor} border-[2px] border-white/50 flex flex-row items-center justify-center p-[6px]`}>
          <div className="relative tracking-tight leading-[1.4]">{status}</div>
        </div>
      </div>
      <div className="w-[80px] h-[60px] flex flex-row items-center justify-end gap-1 text-center text-[#e4822f] font-[FontAwesome6Free]">
        <div className="rounded-lg border border-[#e4822f] flex flex-row items-center justify-center p-[6px]">
          <div className="w-5 h-5 flex flex-col items-center justify-center">
            <div className="relative">
              <FaEllipsisH />
            </div>
          </div>
        </div>
        <div className="w-8 h-8 rounded-lg border border-[#e4822f] hidden" />
        <div className="w-8 h-8 rounded-lg border border-[#e4822f] hidden" />
        <div className="w-8 h-8 rounded-lg border border-[#e4822f] hidden" />
      </div>
    </div>
  </div>
);

// **Events Component**
// Main component that manages the event list, filters, and navigation.
// - Manages state for filters (search, status, dates) and modals (create/view events).
// - Renders the full UI layout with header, filters, event list, and pagination.
const Events = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [statusText, setStatusText] = useState("");
  const [showCreateEvent, setShowCreateEvent] = useState(false);
  const [showEventView, setShowEventView] = useState(false);

  // **Handler for updating the date range**
  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  // **Callback for handling actions (placeholder as in original)**
  const onActionsContainerClick = useCallback(() => {
    // Add your code here
  }, []);

  // Conditional rendering for modals
  if (showCreateEvent) {
    return <CreateEvent />;
  }

  if (showEventView) {
    return <EventView />;
  }

  return (
    <div className="w-full relative drop-shadow-[0_12px_24px_rgba(0,0,0,0.08)] flex flex-row items-start justify-center mt-[140px] h-[calc(100vh-80px)] py-[30px] box-border text-left text-[14px] text-[#333] font-Inter">
      <div className="rounded-lg bg-white flex flex-col items-center justify-start">
        {/* Head Section */}
        <div className="w-[90rem] border-b border-[#ebebeb] box-border h-20 flex flex-row items-center justify-center px-[30px] gap-5">
          <div className="flex-1 flex flex-row items-start justify-start">
            <div className="relative tracking-tight leading-[1.4]">Events</div>
          </div>
          <div
            className="flex flex-row items-start justify-start cursor-pointer text-center text-white"
            onClick={onActionsContainerClick}
          >
            <div className="rounded-lg bg-[#e4822f] flex flex-row items-center justify-center py-3 px-4 gap-2">
              <div className="w-5 h-5" />
              <div
                className="flex flex-row items-center justify-start"
                onClick={() => setShowCreateEvent(true)}
              >
                <b className="relative leading-[1.4]">New event</b>
              </div>
              <div className="w-5 h-5" />
            </div>
          </div>
        </div>
        {/* Filters Section */}
        <div className="self-stretch border-b border-[#ebebeb] flex flex-col items-start justify-center py-4 text-[16px] font-Roboto">
          <div className="self-stretch flex flex-col items-start justify-end px-[30px]">
            <div className="self-stretch flex flex-row items-end justify-start gap-4">
              <SearchFilter searchText={searchText} setSearchText={setSearchText} />
              <StatusFilter statusText={statusText} setStatusText={setStatusText} />
              <DateIntervalFilter startDate={startDate} endDate={endDate} />
              {/* Sync Button */}
              <div className="w-[56px] h-[56px] rounded-lg border border-[#e4822f] flex flex-col items-center justify-center text-center text-[14px] text-[#e4822f] font-[FontAwesome6Free] cursor-pointer">
                <div className="relative">
                  <FaSync />
                </div>
              </div>
              {/* Filtering Action */}
              <div className="h-[56px] flex flex-row items-start justify-start text-center text-[14px] text-white font-Inter">
                <div className="rounded-lg bg-[#e4822f] border border-[#e4822f] flex flex-row items-center justify-center py-[18px] px-[28px] gap-2 cursor-pointer">
                  <div className="w-5 h-5" />
                  <div className="flex flex-row items-center justify-start">
                    <b className="relative leading-[1.4]">Filtering</b>
                  </div>
                  <div className="w-5 h-5 flex flex-col items-center justify-center font-[FontAwesome6Free]">
                    <div className="relative">
                      <FaArrowRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Filter Headers */}
        <div className="self-stretch bg-[#f0f0f0] flex flex-row items-start justify-start text-center text-[#474747]">
          <div className="flex-1 border-b border-[#ebebeb] flex flex-row items-start justify-start px-[30px]">

            <div className="w-[100px] h-[60px] flex flex-row items-center justify-start text-center">
              <b className="relative leading-[1.4]">ID</b>
              <div className="relative tracking-tighter font-[FontAwesome5Free]">
                <FaSort />
              </div>
            </div>

            <div className="flex-1 h-10 flex flex-row items-center justify-start py-[30px] px-[24px] gap-4">
              <b className="relative leading-[1.4]">Designation</b>
              <div className="relative tracking-tighter font-[FontAwesome5Free]">
                <FaSort />
              </div>
            </div>

            <div className="w-[160px] h-10 flex flex-row items-center justify-start py-7 px-4 gap-4">
              <b className="w-[69px] relative leading-[1.4] flex items-center justify-center flex-shrink-0">
                Start date
              </b>
              <div className="relative tracking-tighter font-[FontAwesome5Free]">
                <FaSort />
              </div>
            </div>

            <div className="w-[160px] h-10 flex flex-row items-center justify-start py-7 px-4 gap-4">
              <b className="w-[69px] relative leading-[1.4] flex items-center justify-center flex-shrink-0">
                End date.
              </b>
              <div className="relative tracking-tighter font-[FontAwesome5Free]">
                <FaSort />
              </div>
            </div>

            <div className="w-[160px] h-10 flex flex-row items-center justify-center py-7 px-4 gap-4">
              <b className="relative leading-[1.4]">Status</b>
              <div className="relative tracking-tighter font-[FontAwesome5Free]">
                <FaSort />
              </div>
            </div>
            
            <div className="w-[80px] h-10 flex flex-row items-center justify-end py-[30px]">
              <b className="relative leading-[1.4]">Actions</b>
            </div>
          </div>
        </div>
        {/* Items Section */}
        <div className="self-stretch flex flex-col items-center justify-center">
          <EventItem
            id="#012999"
            designation="Continuous Entrepreneurial Development: 'Playground for Entrepreneurs' Workshop on October 26th."
            startDate="2/11/2023"
            endDate="3/11/2023"
            status="Sketch"
            statusColor="bg-[#e4822f]"
            onClick={() => setShowEventView(true)}
          />
          <EventItem
            id="#012999"
            designation="Workshop – Innovative practices to approach entrepreneurship through Business Simulators"
            startDate="2/11/2023"
            endDate="3/11/2023"
            status="In progress"
            statusColor="bg-[rgba(47,157,244,0.2)]"
            onClick={() => setShowEventView(true)}
          />
          <EventItem
            id="#012999"
            designation="Value Town – Informatii cu TVA"
            startDate="2/11/2023"
            endDate="3/11/2023"
            status="Pending"
            statusColor="bg-[rgba(255,203,20,0.2)]"
            onClick={() => setShowEventView(true)}         
          />
          <EventItem
            id="#012999"
            designation="WorkShop – Online Marketing and resources for influencers"
            startDate="2/11/2023"
            endDate="3/11/2023"
            status="Archived"
            statusColor="bg-[#ebebeb]"
            onClick={() => setShowEventView(true)}
          />
          {/* Hidden User Information (preserved as in original) */}
          <div className="w-[1290px] h-[60px] hidden flex-row items-start justify-start px-[30px] box-border text-center">
            <div className="w-[100px] h-[60px] flex flex-row items-center justify-start text-left text-[18px] text-[#f6f9fc] font-[FontAwesome5Free]">
              <div className="w-10 h-10 relative rounded-lg bg-[#40a1d3] border border-[#236bb4] flex flex-row items-center justify-center">
                <div className="relative">user</div>
                <i className="w-10 h-10 relative rounded-lg object-cover" />
              </div>
            </div>
            <div className="flex-1 relative tracking-tight leading-[1.4] flex items-center h-[31px]">
              <b>Wade Warren</b>
            </div>
            <div className="flex-1 h-[60px] flex flex-row items-center justify-center">
              <div className="flex-1 relative tracking-tight leading-[1.4]">
                delaney.west@gorczany.com
              </div>
            </div>
            <div className="flex-[0.868] h-[60px] flex flex-row items-center justify-center px-4">
              <div className="flex-1 relative tracking-tight leading-[1.4]">@wwarren</div>
            </div>
            <div className="flex-[0.868] h-[60px] flex flex-row items-center justify-center px-4 text-[#ed3237] font-[FontAwesome6Brands]">
              <div className="w-8 h-8 rounded-lg flex flex-col items-center justify-center">
                instagram
              </div>
            </div>
            <div className="w-[160px] h-[60px] flex flex-row items-center justify-end gap-1 text-white font-[FontAwesome6Free]">
              <div className="w-8 h-8 rounded-lg bg-[#ed3237] border border-[rgba(237,50,55,0.72)] flex flex-col items-center justify-center">
                eye
              </div>
              <div className="w-8 h-8 rounded-lg bg-[#ed3237] border border-[rgba(237,50,55,0.72)] flex flex-col items-center justify-center">
                heart
              </div>
              <div className="w-8 h-8 rounded-lg bg-[#ed3237] border border-[rgba(237,50,55,0.72)] flex flex-col items-center justify-center">
                envelope
              </div>
            </div>
          </div>
        </div>
        {/* Footer Section */}
        <div className="self-stretch flex flex-row items-center justify-between py-5 px-[30px] text-center">
          <div className="flex flex-row items-center justify-start gap-[15px]">
            <div className="relative tracking-tight leading-[1.4]">Elements per page</div>
            <div className="rounded-lg bg-white border border-[#ebebeb] h-10 flex flex-row items-center justify-center px-3 gap-1.5">
              <div className="flex flex-row items-start justify-start">
                <div className="w-[67px] relative tracking-tight leading-[1.4] inline-block flex-shrink-0">
                  5
                </div>
              </div>
              <div className="flex flex-col items-start justify-start text-[12px] font-[FontAwesome5Free]">
                <div className="relative">
                  <FaSort />
                </div>
              </div>
            </div>
            <div className="relative tracking-tight leading-[1.4] hidden">
              înregistrări pe pagină.
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[15px] text-[12px] text-[#e4822f] font-[FontAwesome6Free]">
            <div className="w-[33px] h-[33px] rounded-lg bg-white border border-[#ebebeb] flex flex-col items-center justify-center text-[#ebebeb]">
              <div className="relative">
                <FaAngleDoubleLeft />
              </div>
            </div>
            <div className="w-[33px] h-[33px] rounded-lg bg-white border border-[#ebebeb] flex flex-col items-center justify-center">
              <div className="relative">
                <FaAngleLeft />
              </div>
            </div>
            <div className="w-[33px] h-[33px] rounded-lg bg-[#e4822f] border border-[#ebebeb] flex flex-col items-center justify-center text-white font-Roboto">
              <div className="relative font-medium">1</div>
            </div>
            <div className="w-[33px] h-[33px] rounded-lg bg-white border border-[#ebebeb] flex flex-col items-center justify-center font-Roboto">
              <div className="relative font-medium">2</div>
            </div>
            <div className="w-[33px] h-[33px] rounded-lg bg-white border border-[#ebebeb] flex flex-col items-center justify-center font-Roboto">
              <div className="relative font-medium">3</div>
            </div>
            <div className="w-[33px] h-[33px] rounded-lg bg-white border border-[#ebebeb] flex flex-col items-center justify-center">
              <div className="relative">
                <FaAngleRight />
              </div>
            </div>
            <div className="w-[33px] h-[33px] rounded-lg bg-white border border-[#ebebeb] flex flex-col items-center justify-center">
              <div className="relative">
                <FaAngleDoubleRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;