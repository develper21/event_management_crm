import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MdCalendarToday, MdFormatBold, MdFormatItalic, MdFormatUnderlined, MdMoreHoriz, MdFormatAlignLeft, MdFormatAlignCenter, MdFormatListNumbered, MdInsertLink, MdUndo, MdRedo, MdTagFaces, MdMoreVert, MdInsertPhoto } from 'react-icons/md';
import Event from './Event';

const CreateEvent = () => {
  const [showEvent, setShowEvent] = useState(false);
  const [eventName, setEventName] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('');
  const [availableSeats, setAvailableSeats] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleSave = async () => {
    const eventData = {
      eventName,
      location,
      status,
      availableSeats: parseInt(availableSeats, 10),
      startDate: startDate ? startDate.toISOString() : null, // Convert to ISO string
      endDate: endDate ? endDate.toISOString() : null, // Convert to ISO string
    };

    try {
      const response = await fetch('http://localhost:5000/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });

      if (response.ok) {
        alert('Event saved successfully!');
      } else {
        alert('Failed to save event.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while saving the event.');
    }
  };

  if (showEvent) {
    return <Event />;
  }

  return (
    <div className="w-full relative drop-shadow-[0px_12px_24px_rgba(0,0,0,0.08)] flex flex-col top-35 justify-start py-[30px] px-[180px] text-left text-[20px] text-[#333] font-inter">
      <div className="self-stretch rounded-lg bg-white border-b border-[#ebebeb] overflow-hidden flex flex-col items-start justify-center">
        {/* Header Section */}
        <div className="self-stretch border-b border-[#ebebeb] flex flex-row items-center justify-start py-[20px] px-[30px]">
          {/* Title container */}
          <div className="flex-1 flex flex-row items-start justify-start">
            <b className="relative leading-[140%]">Create Event</b>
          </div>
          {/* Back button container */}
          <div className="flex flex-row items-start justify-start text-center text-[14px] text-[#e4822f]">
            <div className="rounded-lg border border-[#e4822f] flex flex-row items-center justify-center py-[12px] px-[16px] gap-[8px]">
              <div className="w-5 h-5 min-w-[10px] max-w-5 min-h-5 max-h-5"></div>
              {/* Back button with click handler */}
              <div
                className="flex flex-row items-center justify-start cursor-pointer"
                onClick={() => setShowEvent(true)}>
                <b className="relative leading-[140%]">Back</b>
              </div>
              <div className="w-5 h-5 min-w-[10px] max-w-5 min-h-5 max-h-5"></div>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="self-stretch rounded-[12px] bg-white overflow-hidden flex flex-col items-start justify-center text-[16px]">
          <div className="self-stretch flex flex-row items-center justify-start gap-[30px]">
            {/* Left Column - Event Details */}
            <div className="flex-1 flex flex-col items-start justify-center p-[30px] gap-[24px]">
              {/* Event Name Input */}
              <div className="self-stretch flex flex-row items-center justify-start gap-[24px]">
                {/* Hidden label container */}
                <div className="self-stretch w-[169px] hidden flex-row items-center justify-center">
                  <b className="flex-1 relative leading-[140%]">Nume</b>
                </div>
                <div className="flex-1">
                  <div className="self-stretch flex-1 rounded border border-[#333] flex flex-col items-start justify-start">
                    <div className="self-stretch flex-1 relative flex flex-col items-start justify-center h-[48px] py-[15px] pl-[16px]">
                      <div className="flex flex-row items-center justify-start z-0">
                        <input
                          type="text"
                          value={eventName}
                          onChange={(e) => setEventName(e.target.value)}
                          className="w-full h-full bg-transparent border-none outline-none text-[16px] tracking-[0.5px] leading-[24px]"
                          placeholder="Enter event name" />
                      </div>
                      {/* Floating label */}
                      <div className="absolute top-[-12px] left-[-4px] bg-white flex flex-row items-center justify-start py-0 px-[4px] z-[1] text-[12px]">
                        <div className="relative leading-[16px]">Event Name</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Input */}
              <div className="self-stretch flex flex-row items-center justify-start gap-[24px]">
                <div className="self-stretch w-[169px] hidden flex-row items-center justify-center">
                  <b className="flex-1 relative leading-[140%]">Nume</b>
                </div>
                <div className="flex-1">
                  <div className="self-stretch flex-1 rounded border border-[#333] flex flex-col items-start justify-start">
                    <div className="self-stretch flex-1 relative flex flex-col items-start justify-center h-[48px] py-[15px] pl-[16px]">
                      <div className="flex flex-row items-center justify-start z-0">
                        <input
                          type="text"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="w-full h-full bg-transparent border-none outline-none text-[16px] tracking-[0.5px] leading-[24px]"
                          placeholder="Enter location" />
                      </div>
                      <div className="absolute top-[-12px] left-[-4px] bg-white flex flex-row items-center justify-start py-0 px-[4px] z-[1] text-[12px]">
                        <div className="relative leading-[16px]">Location</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description Editor */}
              <div className="self-stretch h-[380px] flex flex-row items-center justify-start gap-[110px]">
                <div className="self-stretch w-[169px] hidden">
                  <b className="flex-1 relative leading-[140%]">Nume</b>
                </div>
                <div className="self-stretch flex-1">
                  <div className="self-stretch flex-1 border border-[#333] overflow-hidden flex flex-col items-start justify-start gap-[10px] rounded-[4px] bg-white">
                    {/* Rich Text Editor Toolbar */}
                    <div className="self-stretch shadow-[0px_8px_16px_rgba(0,0,0,0.08)] border-b border-[#ebebeb] box-border h-[56px] overflow-hidden flex-shrink-0 flex flex-col items-start justify-start">
                      <div className="self-stretch bg-white flex flex-row items-start justify-start p-[16px] gap-[48px]">
                        {/* Formatting Tools */}
                        <div className="flex-1 flex flex-row items-start justify-start gap-[24px] cursor-pointer">
                          <div className="w-6 h-6 relative overflow-hidden flex-shrink-0">
                            <MdFormatBold className="w-6 h-6 relative overflow-hidden flex-shrink-0" />
                          </div>
                          <div className="w-6 h-6 relative overflow-hidden flex-shrink-0">
                            <MdFormatItalic className="w-6 h-6 relative overflow-hidden flex-shrink-0" />
                          </div>
                          <div className="w-6 h-6 relative overflow-hidden flex-shrink-0">
                            <MdFormatUnderlined className="w-6 h-6 relative overflow-hidden flex-shrink-0" />
                          </div>
                          <div className="w-6 h-6 relative overflow-hidden flex-shrink-0">
                            <MdFormatAlignLeft className="w-6 h-6 relative overflow-hidden flex-shrink-0" />
                          </div>
                          <div className="w-6 h-6 relative overflow-hidden flex-shrink-0">
                            <MdFormatAlignCenter className="w-6 h-6 relative overflow-hidden flex-shrink-0" />
                          </div>
                          <div className="w-6 h-6 relative overflow-hidden flex-shrink-0">
                            <MdFormatListNumbered className="w-6 h-6 relative overflow-hidden flex-shrink-0" />
                          </div>
                          <div className="w-6 h-6 relative overflow-hidden flex-shrink-0">
                            <MdInsertLink className="w-6 h-6 relative overflow-hidden flex-shrink-0" />
                          </div>
                          <div className="w-6 h-6 relative overflow-hidden flex-shrink-0">
                            <MdTagFaces className="w-6 h-6 relative overflow-hidden flex-shrink-0" />
                          </div>
                          <div className="w-6 h-6 relative overflow-hidden flex-shrink-0">
                            <MdMoreVert className="w-6 h-6 relative overflow-hidden flex-shrink-0" />
                          </div>
                          <div className="w-6 h-6 relative overflow-hidden flex-shrink-0">
                            <MdInsertPhoto className="w-6 h-6 relative overflow-hidden flex-shrink-0" />
                          </div>
                        </div>
                        {/* Undo/Redo Controls */}
                        <div className="flex flex-row items-start justify-end gap-[24px] cursor-pointer">
                          <div className="w-6 h-6 relative overflow-hidden flex-shrink-0 opacity-25">
                            <MdUndo className="w-6 h-6 relative overflow-hidden flex-shrink-0 opacity-25" />
                          </div>
                          <div className="w-6 h-6 relative overflow-hidden flex-shrink-0 opacity-25">
                            <MdRedo className="w-6 h-6 relative overflow-hidden flex-shrink-0 opacity-25" />
                          </div>
                          <div className="w-6 h-6 relative overflow-hidden flex-shrink-0">
                            <MdMoreHoriz className="w-6 h-6 relative overflow-hidden flex-shrink-0" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Description Content */}
                    <div className="self-stretch flex-1 flex flex-row items-start justify-start p-[12px]">
                      <div className="flex-1">
                        <div
                          contentEditable={true}
                          className="outline-none text-[#666] focus:text-black"
                          suppressContentEditableWarning={true}>
                          <ul className="m-0 pl-[21px]">
                            <li className="mb-0">
                              <b className="font-inter">Positive and empowering</b>
                              <span>: Use language that uplifts and inspires individuals to embrace their natural beauty and practice self-care.</span>
                            </li>
                            <li className="mb-0">
                              <b className="font-inter">Authentic and inclusive</b>
                              <span className="font-inter">: Encourage a welcoming and inclusive tone that celebrates diverse beauty and promotes body positivity.</span>
                            </li>
                            <li>
                              <b className="font-inter">Knowledgeable and informative</b>
                              <span className="font-inter">: Provide helpful information about clean beauty, self-care practices, and sustainable living in a relatable and accessible manner.</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column - Additional Settings */}
            <div className="w-[388px] border-l border-[#ebebeb] box-border flex flex-col items-start justify-center p-[30px] gap-[24px]">
              {/* Banner Upload Section */}
              <div className="self-stretch flex flex-row items-start justify-start gap-[110px]">
                <div className="w-[169px] hidden flex-row items-center justify-start">
                  <b className="relative leading-[140%] inline-block w-[169px] shrink-0">Banner</b>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start text-center text-[20px] text-[#e4822f]">
                  <div className="self-stretch relative h-[220px]">
                    {/* Banner placeholder with overlay */}
                    <div className="absolute h-full w-full top-0 right-0 bottom-0 left-0 rounded-[4px] bg-[#e4822f] opacity-[0.08]"></div>
                    <div className="absolute h-full w-full top-0 right-0 bottom-0 left-0 rounded-[4px] border border-dashed border-[#e4822f] box-border"></div>
                    <b className="absolute top-[calc(50%-26px)] left-[calc(50%-90px)] leading-[140%] flex items-center w-[180px] h-[60px]">
                      <span className="w-full">
                        <p className="m-0">Banner Image</p>
                        <p className="m-0">1235 x 400px</p>
                      </span>
                    </b>
                    <img className="absolute right-[24.1px] bottom-[24px] w-[53.9px] h-[47px] overflow-hidden" alt="" src="File Upload / Light / Duotone.svg" />
                  </div>
                </div>
              </div>

              {/* Status Selector */}
              <div className="self-stretch h-[56px] flex flex-row items-start justify-start gap-[110px]">
                <div className="w-[169px] h-[32px] hidden flex-row items-center justify-start">
                  <b className="relative leading-[140%] inline-block w-[123px] h-[22px] shrink-0">Status</b>
                </div>
                <div className="flex-1 relative">
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full h-[56px] bg-transparent border border-[#333] rounded px-[16px] pr-[40px] text-[16px] tracking-[0.5px] leading-[24px] outline-none">
                    <option value="Draft">Draft</option>
                    <option value="Published">Published</option>
                  </select>
                  <div className="absolute right-[16px] top-[50%] transform -translate-y-1/2 pointer-events-none"></div>
                  <div className="absolute top-[-12px] left-[-4px] bg-white flex flex-row items-center justify-start py-0 px-[4px] text-[12px]">
                    <div className="relative leading-[16px]">Status</div>
                  </div>
                </div>
              </div>

              {/* Available Seats Input */}
              <div className="self-stretch flex flex-row items-center justify-start gap-[110px]">
                <div className="flex-1 relative group">
                  <div className="self-stretch flex-1 rounded border border-[#333] flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-center relative h-[48px] py-[4px] pl-[16px] pr-[40px]">
                      <div className="flex flex-row items-center justify-start z-0">
                        <input
                          type="number"
                          value={availableSeats}
                          onChange={(e) => setAvailableSeats(e.target.value)}
                          className="w-full h-full bg-transparent border-none outline-none text-[16px] tracking-[0.5px] leading-[24px]"
                          placeholder="Enter available seats"
                        />
                      </div>
                      <div className="absolute top-[-12px] left-[-4px] bg-white flex flex-row items-center justify-start py-0 px-[4px] z-[1] text-[12px]">
                        <div className="relative leading-[16px]">Available Seats</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Date Pickers */}
              <div className="self-stretch flex flex-row items-center justify-start gap-[110px]">
                <div className="flex-1 flex flex-col items-start justify-center gap-[24px] font-roboto">
                  {/* Start Date */}
                  <div className="self-stretch relative rounded-t-[4px] h-[56px]">
                    <div className="absolute w-full top-0 left-0 rounded border box-border h-[56px] flex flex-col items-start justify-center">
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        placeholderText="DD/MM/YYYY"
                        dateFormat="dd/MM/yyyy"
                        className="w-full h-full bg-transparent rounded px-[16px] pr-[40px] text-[16px] tracking-[0.5px] leading-[24px] outline-none"
                      />
                      <MdCalendarToday
                        className="absolute right-[16px] top-[50%] transform -translate-y-1/2 text-[#333] cursor-pointer"
                        onClick={() => document.querySelector('.react-datepicker-wrapper input').focus()}
                      />
                      <div className="absolute top-[-12px] left-[-4px] bg-white flex flex-row items-center justify-start py-0 px-[4px] text-[12px]">
                        <div className="relative leading-[16px]">Start Date</div>
                      </div>
                    </div>
                  </div>

                  {/* End Date */}
                  <div className="self-stretch relative rounded-t-[4px] h-[56px]">
                    <div className="absolute w-full top-0 left-0 rounded border border-[#333] box-border h-[56px] flex flex-col items-start justify-center">
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        placeholderText="DD/MM/YYYY"
                        dateFormat="dd/MM/yyyy"
                        className="w-full h-full bg-transparent rounded px-[16px] pr-[40px] text-[16px] tracking-[0.5px] leading-[24px] outline-none"
                      />
                      <MdCalendarToday
                        className="absolute right-[16px] top-[50%] transform -translate-y-1/2 text-[#333] cursor-pointer"
                        onClick={() => document.querySelector('.react-datepicker-wrapper input').focus()}
                      />
                      <div className="absolute top-[-12px] left-[-4px] bg-white flex flex-row items-center justify-start py-0 px-[4px] text-[12px]">
                        <div className="relative leading-[16px]">End Date</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-b-[12px] bg-white border-t border-[#ebebeb] overflow-hidden flex flex-col items-end justify-start py-[20px] px-[30px] text-center text-[14px] text-white">
          <div className="flex flex-row items-start justify-start">
            <div className="rounded-lg bg-[#e4822f] flex flex-row items-center justify-center py-[12px] px-[16px] gap-[8px] cursor-pointer" onClick={handleSave}>
              <div className="w-5 h-5"></div>
              <div className="flex flex-row items-center justify-start">
                <b className="relative leading-[140%]">Save</b>
              </div>
              <div className="w-5 h-5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;