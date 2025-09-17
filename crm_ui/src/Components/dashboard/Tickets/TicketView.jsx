// AttachmentItem component to render each attachment
const AttachmentItem = ({
  icon,
  text,
  color = "#333333",
  borderColor = "#F0F0F0",
}) => (
  <div
    className="p-2 w-full min-h-[40px] max-h-[40px] bg-white rounded-lg border-[0.5px]"
    style={{ borderColor }}
  >
    <div className="flex gap-[6px] items-center w-full">
      <div className="w-4 h-4 flex items-center justify-center">
        <i
          className={`fa-solid fa-${icon} text-[14px] font-black`}
          style={{ color }}
        ></i>
      </div>
      <span
        className="text-[12px] font-['Inter'] leading-[16.8px]"
        style={{ color }}
      >
        {text}
      </span>
    </div>
  </div>
);

const TicketView = () => {
  return (
    <>
      <div className="flex flex-wrap items-center px-8 py-5 w-[1295px] font-bold leading-snug bg-white border-b border-gray-200 max-md:px-5 mt-[155px] ml-[155px]">
        <div className="flex-1 shrink gap-2.5 self-stretch my-auto text-xl min-w-[240px] text-zinc-800 max-md:max-w-full">
          Ticket No. #18248
        </div>
        <div className="flex gap-2 items-start self-stretch my-auto text-sm text-center text-orange-400 whitespace-nowrap">
          <div className="flex gap-2 justify-center items-center px-4 py-3 rounded-lg border border-orange-400 border-solid">
            <div className="flex shrink-0 self-stretch my-auto w-5 h-5 max-w-[20px] min-w-[10px]" />
            <div className="self-stretch my-auto">Back</div>
            <div className="flex shrink-0 self-stretch my-auto w-5 h-5 max-w-[20px] min-w-[10px]" />
          </div>
        </div>
      </div>
      <div className="w-[889px] h-[98px] py-[24px] px-[30px] flex space-x-4 bg-gradient-to-r from-white to-[rgb(235,235,235)] border-[0.5px] border-[rgb(235,235,235)] ml-[154px]">
        {/* VStack */}
        <div className="flex flex-col items-start space-y-2 flex-1 h-full">
          {/* First HStack: Ticket Description */}
          <div className="flex items-start space-x-[10px] w-full">
            <div className="text-[16px] font-bold text-[rgb(51,51,51)] font-['Inter'] leading-[22.4px]">
              The tickets do not have an intuitive design.
            </div>
          </div>
          {/* Second HStack: Metadata (Date, Time, Priority) */}
          <div className="flex space-x-3">
            {/* ZStack: Calendar and Date */}
            <div className="relative inline-flex items-center">
              <i
                className="fas fa-calendar text-[12px] text-[rgb(51,51,51)] absolute"
                style={{ left: "-41.5px" }}
              ></i>
              <span className="text-[14px] text-[rgb(51,51,51)] font-['Inter'] leading-[19.6px] pl-[19px]">
                24/10/2023
              </span>
            </div>
            {/* ZStack: Clock and Time */}
            <div className="relative inline-flex items-center">
              <i
                className="fas fa-clock text-[12px] text-[rgb(51,51,51)] absolute"
                style={{ left: "-22px" }}
              ></i>
              <span className="text-[14px] text-[rgb(51,51,51)] font-['Inter'] leading-[19.6px] pl-[14px]">
                14:23
              </span>
            </div>
            {/* ZStack: Bell and Priority */}
            <div className="relative inline-flex items-center">
              <i
                className="fas fa-bell text-[12px] text-[rgb(51,51,51)] absolute"
                style={{ left: "-42.5px" }}
              ></i>
              <span className="text-[14px] text-[rgb(51,51,51)] font-['Inter'] leading-[19.6px] pl-[17.5px]">
                Low priority
              </span>
            </div>
          </div>
        </div>
        {/* Button HStack */}
        <div className="py-[12px] px-[16px] bg-[rgb(227,130,46)] rounded-lg">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5"></div>
            <div className="flex space-x-0">
              <span className="text-[14px] font-bold text-white font-['Inter'] leading-[19.6px]">
                Read the description
              </span>
            </div>
            <div className="w-5 h-5"></div>
          </div>
        </div>
      </div>
      <div className="w-[896px] h-[56px] p-[16px_24px] bg-[rgb(227,130,46)] ml-[155px]">
        <div className="flex flex-row gap-[16px] items-center">
          <div className="flex flex-row gap-[10px] items-center h-[24px]">
            <div className="flex flex-row gap-0 w-[24px] h-[24px] items-center justify-center">
              <div className="w-[24px] h-[24px]"></div>
            </div>
            <span className="font-['Inter'] text-[16px] font-bold leading-[22.4px] text-[rgb(240,240,240)]">
              Access the contract
            </span>
          </div>
        </div>
      </div>
      <div
        className="w-[896px] h-[513px] p-[24px_30px] bg-[#F0F0F0] flex flex-col gap-2 transform rotate-180 ml-[155px]"
        style={{ backgroundColor: "rgb(0.94 * 255, 0.94 * 255, 0.94 * 255)" }}
      >
        {/* Client Message Section */}
        <div className="flex flex-col items-end min-h-[160px] max-h-[160px] transform rotate-180">
          <div className="flex flex-col items-end gap-2">
            <div className="flex flex-row gap-3">
              <div className="flex flex-col items-end gap-0">
                <div className="flex flex-row gap-1">
                  <span
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "12px",
                      color: "rgb(0.89 * 255, 0.51 * 255, 0.18 * 255)",
                    }}
                  >
                    Client
                  </span>
                  <span
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "rgb(0.20 * 255, 0.20 * 255, 0.20 * 255)",
                    }}
                  >
                    Clientin Numelescu
                  </span>
                </div>
                <div className="flex flex-row gap-1">
                  <span
                    style={{
                      fontFamily: "Nunito",
                      fontSize: "12px",
                      color: "rgb(0.20 * 255, 0.20 * 255, 0.20 * 255)",
                    }}
                  >
                    24/10/2023 - 14:30
                  </span>
                </div>
              </div>
              <div className="p-[10px] rounded border border-[#E3822E]">
                <img
                  src="User-1.jpg"
                  alt="Client Avatar"
                  className="w-12 h-12 object-cover"
                  style={{ borderRadius: "4px" }}
                />
              </div>
            </div>
            <div className="p-3 bg-white rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.04)]">
              <p
                style={{
                  fontFamily: "Inter",
                  fontSize: "14px",
                  lineHeight: "19.6px",
                  color: "rgb(0.20 * 255, 0.20 * 255, 0.20 * 255)",
                  whiteSpace: "pre-line",
                }}
              >
                Hello!The ticketing system needs a new and intuitive design for
                all OpenHub colleagues. Please try to find a more modern
                solution for this! Thank you in advance!
              </p>
            </div>
          </div>
        </div>

        {/* Administrator Message Section */}
        <div className="flex flex-col items-start min-h-[160px] max-h-[160px] transform rotate-180">
          <div className="flex flex-col items-start gap-2">
            <div className="flex flex-row gap-3">
              <div className="p-[10px] rounded border border-[#E3822E]">
                <img
                  src="User-2.jpg"
                  alt="Administrator Avatar"
                  className="w-12 h-12 object-cover"
                  style={{ borderRadius: "4px" }}
                />
              </div>
              <div className="flex flex-col items-start gap-0">
                <div className="flex flex-row gap-1">
                  <span
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "rgb(0.20 * 255, 0.20 * 255, 0.20 * 255)",
                    }}
                  >
                    Bogdan Pana
                  </span>
                  <span
                    style={{
                      fontFamily: "Nunito",
                      fontSize: "12px",
                      color: "rgb(0.89 * 255, 0.51 * 255, 0.18 * 255)",
                    }}
                  >
                    Administrator
                  </span>
                </div>
                <div className="flex flex-row gap-1">
                  <span
                    style={{
                      fontFamily: "Nunito",
                      fontSize: "12px",
                      color: "rgb(0.28 * 255, 0.28 * 255, 0.28 * 255)",
                    }}
                  >
                    24/10/2023 - 14:23
                  </span>
                </div>
              </div>
            </div>
            <div className="p-3 bg-white rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.04)]">
              <p
                style={{
                  fontFamily: "Inter",
                  fontSize: "14px",
                  lineHeight: "19.6px",
                  color: "rgb(0.20 * 255, 0.20 * 255, 0.20 * 255)",
                  whiteSpace: "pre-line",
                }}
              >
                Hello!Thank you for your interest, Mr. Clientin! We will take
                this aspect into consideration in the near future and will get
                back to you with an update soon. Have a nice day!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[896px] p-[30px] border-t border-[#ebebeb] bg-white ml-[155px]">
        <div className="flex flex-row justify-center border border-[#ebebeb] rounded-lg overflow-hidden bg-white">
          <div className="flex flex-row items-center justify-between h-[74px] flex-1 bg-[#f0f0f0] border border-[#ebebeb] rounded-lg px-6 gap-2.5">
            <div className="flex-1 opacity-50">
              <span className="text-base leading-[22px] font-['Inter'] text-[#333] text-center">
                Write the message here...
              </span>
            </div>
            <div>
              <span className="text-[24px] leading-[34px] font-['Font Awesome 6 Free'] text-[#e4822f] text-center">
                smile
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center h-[74px] px-4">
            <div className="flex flex-row items-center justify-center gap-2 bg-[#e4822f] rounded-lg px-4 py-3">
              <div className="w-5 h-5 min-w-[10px] min-h-[20px] max-w-[20px] max-h-[20px] flex items-center justify-center"></div>
              <div className="flex flex-row items-center">
                <span className="text-sm font-bold leading-5 font-['Inter'] text-white text-center">
                  Send
                </span>
              </div>
              <div className="w-5 h-5 min-w-[10px] min-h-[20px] max-w-[20px] max-h-[20px] flex items-center justify-center"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[400px] h-[806px] p-[30px] bg-white border-[0.5px] border-[#EBEBEB] flex flex-col gap-6 ml-[1051px] mt-[-805px]">
        {/* Priority Section */}
        <div className="flex flex-row items-start gap-[110px] w-full min-h-[56px] max-h-[56px]">
          <div className="w-[340px] h-[61px] pb-[5px]">
            <div className="w-full h-full rounded-[4px] border-[0.5px] border-[#333333] p-[4px_16px] flex flex-row items-center">
              <div className="flex flex-col items-start gap-[10px] flex-1">
                <div className="px-1 bg-white">
                  <span className="text-[12px] leading-[16px] text-[#333333] font-['Roboto']">
                    Priority
                  </span>
                </div>
                <div>
                  <span
                    className="text-[16px] leading-[24px] text-[#333333] font-['Roboto']"
                    style={{ letterSpacing: "0.5px" }}
                  >
                    Low
                  </span>
                </div>
              </div>
              <div className="w-12 h-12 flex items-center justify-center">
                <div className="p-2 rounded-full">
                  <div className="w-6 h-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Attachments Section */}
        <div className="flex flex-col items-start gap-3">
          <div className="flex flex-row gap-2 py-1 w-full min-h-[40px] max-h-[40px] items-center">
            <i className="fa-solid fa-folder-open text-[#474747] text-[16px]"></i>
            <span className="text-[14px] font-bold text-[#474747] font-['Inter'] leading-[19.6px]">
              Attachments
            </span>
          </div>
          <div className="flex flex-row items-start gap-[10px] p-4 w-full bg-white rounded-lg border-[0.5px] border-[#EBEBEB]">
            <div className="flex flex-col gap-[6px] flex-1 shadow-[0_4px_4px_rgba(0,0,0,0.04)]">
              <AttachmentItem icon="file-image" text="283718casS8s_21.jpeg" />
              <AttachmentItem icon="file" text="283718casS8s_21.txt" />
              <AttachmentItem icon="file-video" text="283718casS8s_21.mp4" />
              <AttachmentItem
                icon="file-archive"
                text="283718casS8s_21.zip"
                color="#E3822E"
                borderColor="#E3822E"
              />
            </div>
            <div
              className="w-[4px] bg-[#EBEBEB] rounded-[4px]"
              style={{ paddingBottom: "113.34px" }}
            >
              <div className="w-[4px] h-[463.66px] bg-[#474747] rounded-[4px]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketView;
