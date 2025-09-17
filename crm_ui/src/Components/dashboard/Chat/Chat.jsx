import { useState } from 'react';
import { FaSmile } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

const Chat = () => {
  // State to manage the message input
  const [message, setMessage] = useState('');

  // Function to handle sending the message
  const handleSend = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top header with user profile and options */}
      <div className="w-[1295px] h-[90px] bg-white shadow-[0_4px_8px_rgba(0,0,0,0.04)] py-4 px-6 flex items-center space-x-4 mt-[155px] ml-[155px]">
        {/* User profile image */}
        <img
          src="User-3.jpg"
          alt="Profile"
          className="w-[58px] h-[58px] rounded-[4px]"
        />
        {/* Container for user details and options icon */}
        <div className="flex-1 h-full flex items-center justify-between">
          {/* User name and email */}
          <div className="flex flex-col items-start">
            <p className="text-[#E4822F] font-['Inter'] text-[20px] font-bold leading-[28px]">Ricky Smith</p>
            <p className="text-[#333333] font-['Inter'] text-[16px] leading-[22.4px]">rickysmith@thecon.ro</p>
          </div>
          {/* Options icon */}
          <div className="p-[6px] rounded-[8px] border border-[#E4822F]">
            <div className="w-[20px] h-[20px] flex items-center justify-center">
              <FontAwesomeIcon icon={faEllipsis} className="text-[14px] text-[#E4822F]"/>
            </div>
          </div>
        </div>
      </div>

      {/* Chat messages display area */}
      <div className="w-[1295px] h-[673px] bg-[rgba(0,0,0,0.04)] p-[0_48px] ml-[155px]">
        <div className="flex flex-col space-y-0">
          {/* First message (right-aligned) */}
          <div className="flex flex-col space-y-6 max-w-full min-h-[114px] max-h-[114px] py-6">
            <div className="flex flex-row justify-between space-x-80">
              <div className="flex-1"></div>
              <div className="flex flex-col items-end space-y-2 max-w-full">
                <div className="bg-white rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.08)] p-4">
                  <p className="font-['Inter'] text-[16px] leading-[22.4px] text-[#333333]">
                    Good afternoon! Is everything okay with the offer #18273?
                  </p>
                </div>
                <p className="font-['Inter'] text-[14px] leading-[19.6px] text-[#333333]">
                  Thursday 11:43 AM
                </p>
              </div>
            </div>
          </div>

          {/* Second message (left-aligned) */}
          <div className="flex flex-row justify-start space-x-80 max-w-full">
            <div className="flex flex-col items-start space-y-2 max-w-full min-h-[66px] max-h-[66px]">
              <div className="bg-white rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.08)] p-4">
                <p className="font-['Inter'] text-[16px] leading-[22.4px] text-[#333333]">
                  Good afternoon! I will check it soon. Thank you!
                </p>
              </div>
              <p className="font-['Inter'] text-[14px] leading-[19.6px] text-[#333333]">
                Today 09:43 AM
              </p>
            </div>
            <div className="flex-1"></div>
          </div>

          {/* Today separator line */}
          <div className="flex flex-row items-center space-x-2 max-w-full min-h-[48px] max-h-[48px]">
            <div className="flex-1 h-[1px] bg-[#EBEBEB]"></div>
            <p className="font-['Inter'] text-[14px] leading-[19.6px] text-[#E4822F]">Today</p>
            <div className="flex-1 h-[1px] bg-[#EBEBEB]"></div>
          </div>

          {/* Third message (left-aligned) */}
          <div className="flex flex-col space-y-6 max-w-full min-h-[216px] max-h-[216px]">
            <div className="flex flex-row justify-start space-x-80 max-w-full">
              <div className="flex flex-col items-start space-y-2 max-w-full min-h-[126px] max-h-[126px]">
                <div className="bg-white rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.08)] p-4 min-h-[98px] max-h-[98px]">
                  <p className="font-['Inter'] text-[16px] leading-[22.4px] text-[#333333]">
                    Everything seems to be in order! I will send the invoice immediately, have a nice day!
                  </p>
                </div>
                <p className="font-['Inter'] text-[14px] leading-[19.6px] text-[#333333]">
                  Today 09:43 AM
                </p>
              </div>
              <div className="flex-1"></div>
            </div>

            {/* Fourth message (right-aligned) */}
            <div className="flex flex-col items-end space-y-2 max-w-full min-h-[66px] max-h-[66px]">
              <div className="bg-white rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.08)] p-4">
                <p className="font-['Inter'] text-[16px] leading-[22.4px] text-[#333333]">
                  Thank you too!
                </p>
              </div>
              <p className="font-['Inter'] text-[14px] leading-[19.6px] text-[#333333]">
                Today 09:43 AM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section with message input and send button */}
      <div className="w-[1295px] h-[122px] p-[24px] mt-auto mx-auto mb-[100px] bg-[#ffffff] ml-[155px]">
        <div className="flex flex-row items-start space-x-0 bg-white rounded-[8px] border-[0.5px] border-[#EBEBEB]">
          {/* Message input area with typing functionality */}
          <div className="flex-1 h-[74px] p-[0_24px] bg-[#F0F0F0] rounded-[8px] border-[0.5px] border-[#EBEBEB] flex flex-row items-center space-x-[10px]">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write the message here..."
              className="flex-1 bg-transparent outline-none font-['Inter'] text-[16px] leading-[22.4px] text-[#333333] placeholder:text-[#333333]/50"
            />
            <FaSmile className="text-[#E4822F] text-[24px]"/>
          </div>
          {/* Send button with click functionality */}
          <div className="pl-[16px] pr-[16px] h-[74px] flex items-center">
            <button onClick={handleSend} className="bg-[#E4822F] rounded-[8px] p-[12px_16px] flex flex-row items-center space-x-2">
              <div className="w-[20px] h-[20px]"></div>
              <p className="font-['Inter'] text-[14px] font-bold leading-[19.6px] text-white">Send</p>
              <div className="w-[20px] h-[20px]"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;