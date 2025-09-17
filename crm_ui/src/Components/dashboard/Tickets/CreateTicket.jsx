import { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdFormatBold, MdFormatItalic, MdFormatUnderlined, MdMoreHoriz, MdFormatAlignLeft, MdFormatAlignCenter, MdFormatListNumbered, MdInsertLink, MdUndo, MdRedo, MdTagFaces, MdMoreVert, MdInsertPhoto } from "react-icons/md";
import { FaFolderOpen, FaTrash, FaPhotoVideo } from "react-icons/fa";
import Event from "../Events/Event";

const CreateEvent = () => {
  // State to control visibility of Event component
  const [showEvent, setShowEvent] = useState(false);

  // States for form fields
  const [eventName, setEventName] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");

  // Conditional rendering to show Event component when showEvent is true
  if (showEvent) {
    return <Event />;
  }

  return (
    // Main container with responsive design and shadow
    <div className="w-full relative drop-shadow-[0px_12px_24px_rgba(0,0,0,0.08)] flex flex-col top-35 justify-start py-[30px] px-[180px] text-left text-[20px] text-[#333] font-inter">
      <div className="self-stretch rounded-lg bg-white border-b border-[#ebebeb] overflow-hidden flex flex-col items-start justify-center">
        {/* Header Section */}
        <div className="self-stretch border-b border-[#ebebeb] flex flex-row items-center justify-start py-[20px] px-[30px]">
          {/* Title container */}
          <div className="flex-1 flex flex-row items-start justify-start">
            <b className="relative leading-[140%]">Create Ticket</b>
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
                <div className="flex-1">
                  <div className="self-stretch flex-1 rounded border border-[#333] flex flex-col items-start justify-start">
                    <div className="self-stretch flex-1 relative flex flex-col items-start justify-center h-[48px] py-[15px] pl-[16px]">
                      <div className="flex flex-row items-center justify-start z-0">
                        <input
                          type="text"
                          value={eventName}
                          onChange={(e) => setEventName(e.target.value)}
                          className="w-full h-full bg-transparent border-none outline-none text-[16px] tracking-[0.5px] leading-[24px]"
                          placeholder="Input"
                        />
                      </div>
                      <div className="absolute top-[-12px] left-[-4px] bg-white flex flex-row items-center justify-start py-0 px-[4px] z-[1] text-[12px]">
                        <div className="relative leading-[16px]">Subject</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category Input */}
              <div className="self-stretch flex flex-row items-center justify-start gap-[24px]">
                <div className="flex-1">
                  <div className="self-stretch flex-1 rounded border border-[#333] flex flex-col items-start justify-start">
                    <div className="self-stretch flex-1 relative flex flex-col items-start justify-center h-[48px] py-[15px] pl-[16px]">
                      <div className="flex flex-row items-center justify-start z-0">
                        <input
                          type="text"
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          className="w-full h-full bg-transparent border-none outline-none text-[16px] tracking-[0.5px] leading-[24px]"
                          placeholder="Products & Services"/>
                      </div>
                      <div className="absolute top-[-12px] left-[-4px] bg-white flex flex-row items-center justify-start py-0 px-[4px] z-[1] text-[12px]">
                        <div className="relative leading-[16px]">Category</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Priority Input */}
              <div className="self-stretch flex flex-row items-center justify-start gap-[24px]">
                <div className="flex-1">
                  <div className="self-stretch flex-1 rounded border border-[#333] flex flex-col items-start justify-start">
                    <div className="self-stretch flex-1 relative flex flex-col items-start justify-center h-[48px] py-[15px] pl-[16px]">
                      <div className="flex flex-row items-center justify-start z-0">
                        <input
                          type="text"
                          value={priority}
                          onChange={(e) => setPriority(e.target.value)}
                          className="w-full h-full bg-transparent border-none outline-none text-[16px] tracking-[0.5px] leading-[24px]"
                          placeholder="Select Contract..."/>
                      </div>
                      <div className="absolute top-[-12px] left-[-4px] bg-white flex flex-row items-center justify-start py-0 px-[4px] z-[1] text-[12px]">
                        <div className="relative leading-[16px]">Contract</div>
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
                          suppressContentEditableWarning={true}
                        >
                          <ul className="m-0 pl-[21px]">
                            <li className="mb-0">
                              <b className="font-inter">
                                Positive and empowering
                              </b>
                              <span>
                                : Use language that uplifts and inspires
                                individuals to embrace their natural beauty and
                                practice self-care.
                              </span>
                            </li>
                            <li className="mb-0">
                              <b className="font-inter">
                                Authentic and inclusive
                              </b>
                              <span className="font-inter">
                                : Encourage a welcoming and inclusive tone that
                                celebrates diverse beauty and promotes body
                                positivity.
                              </span>
                            </li>
                            <li>
                              <b className="font-inter">
                                Knowledgeable and informative
                              </b>
                              <span className="font-inter">
                                : Provide helpful information about clean
                                beauty, self-care practices, and sustainable
                                living in a relatable and accessible manner.
                              </span>
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
            <div className="w-[470px] border-l border-[#ebebeb] box-border flex flex-col items-start justify-center p-[30px] gap-[24px]">
              {/* Attachments Section */}
              <div className="w-[418px] border border-[rgb(235,235,235)]">
                <div className="p-6 flex flex-col gap-3 min-h-[510px]">
                  <div className="flex flex-col gap-3 min-h-[462px]">
                    <div className="flex items-center gap-2 min-h-[40px] py-1">
                      <span className="text-[16px] text-[rgb(71,71,71)] font-['Font_Awesome_6_Free']">
                        <FaFolderOpen />
                      </span>
                      <span className="text-[16px] font-bold text-[rgb(71,71,71)] leading-[22.4px] font-['Inter']">
                        Attachments
                      </span>
                    </div>
                    <div className="bg-[rgb(240,240,240)] p-4 rounded-lg border border-[rgb(235,235,235)] h-[354px] flex items-center justify-center">
                      <div className="text-center space-y-[17px]">
                        <div className="flex justify-center">
                          <FaPhotoVideo className="w-16 h-16 text-[rgb(227,130,46)]" />
                        </div>
                        <p className="text-[12px] text-[rgb(71,71,71)] leading-[16.8px] font-['Inter']">
                          No files uploaded...
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <button className="w-[134px] py-3 bg-[rgb(227,130,46)] text-white font-bold text-[14px] rounded-lg border border-[rgb(235,235,235)] font-['Inter']">
                        <div className="flex items-center justify-between gap-2 px-4 cursor-pointer">
                          <div className="w-5 h-5"></div>
                          <span className="leading-[19.6px]">Import</span>
                          <div className="w-5 h-5"></div>
                        </div>
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center border border-[rgb(227,130,46)] rounded-lg p-[6px]">
                      <span className="text-[14px] text-[rgb(227,130,46)] font-['Font_Awesome_6_Free'] font-black">
                          <FaTrash />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="self-stretch rounded-b-[12px] bg-white border-t border-[#ebebeb] overflow-hidden flex flex-col items-end justify-start py-[20px] px-[30px] text-center text-[14px] text-white">
          <div className="flex flex-row items-start justify-start">
            {/* Save Button */}
            <div className="rounded-lg bg-[#e4822f] flex flex-row items-center justify-center py-[12px] px-[16px] gap-[8px]">
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
