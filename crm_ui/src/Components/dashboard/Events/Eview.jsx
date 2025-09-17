import { FaSearch, FaUser } from "react-icons/fa";
const ViewEvent = () => {
  return (
    <div className="w-[1295px] h-[1378px] bg-white rounded-lg border border-[#EBEBEB] flex flex-col items-center ml-[10%] mt-[155px]">
      {/* Header Section */}
      <div className="w-full p-[20px_30px] border-b border-[#EBEBEB] flex justify-between items-center">
        <span className="text-[#333333] text-[20px] font-bold leading-[1.4]">View Event</span>
        <div className="flex space-x-2">
          <div className="px-4 py-3 border border-[#474747] rounded-lg flex items-center space-x-2">
            <div className="w-5 h-5"></div>
            <span className="text-[#474747] text-[14px] font-bold leading-[1.4] text-center">Modification</span>
            <div className="w-5 h-5"></div>
          </div>
          <div className="px-4 py-3 border border-[#E4822F] rounded-lg flex items-center space-x-2">
            <div className="w-5 h-5"></div>
            <span className="text-[#E4822F] text-[14px] font-bold leading-[1.4] text-center">Back</span>
            <div className="w-5 h-5"></div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full h-[1210px] p-[20px_30px] flex flex-col items-start">
        {/* Image */}
        <div className="w-[1235px] h-[400px] rounded-[16px] overflow-hidden">
          <img
            src="Event.jpg"
            alt="Event"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-4"></div>
        {/* Event Details */}
        <div className="w-full p-[20px_0] border-b border-[#EBEBEB] flex justify-between">
          <div className="w-[1046px] flex flex-col">
            <span className="text-[#333333] text-[28px] font-semibold leading-[1.2]">
              Playground for Entrepreneurs
            </span>
            <div className="mt-2 opacity-50 flex space-x-6">
              <div className="flex items-center space-x-1">
                <span className="text-[#333333] text-[16px] font-black">📅</span>
                <span className="text-[#333333] text-[16px] font-bold leading-[1.4]">
                  November 2, 2023
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-[#333333] text-[16px] font-black">🕒</span>
                <span className="text-[#333333] text-[16px] font-bold leading-[1.4]">14:00</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-[#333333] text-[16px] font-black">🚪</span>
                <span className="text-[#333333] text-[16px] font-bold leading-[1.4]">20:00</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-[#333333] text-[16px] font-black">👤</span>
                <span className="text-[#333333] text-[16px] font-bold leading-[1.4]">48 Slots</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-[#333333] text-[16px] font-black">📍</span>
                <span className="text-[#333333] text-[16px] font-bold leading-[1.4]">
                  Thecon Headquarters, Lalelelor Street, No. 10, Galați.
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="w-[111px] h-[30px] border border-[#69C98C] rounded-lg flex items-center justify-center bg-[#b6efcb] bg-opacity-20">
              <span className="text-[#69C98C] text-[16px] font-bold leading-[1.4]">Available</span>
            </div>
          </div>
        </div>
        <div className="mt-4"></div>
        {/* Description */}
        <div className="w-full h-[624px] flex flex-col items-start">
          <p className="text-[#333333] text-[16px] leading-[1.4]">
            Just one week after the success of our previous workshop, the OpenHub community was
            delighted to host the 7th workshop in our entrepreneurial series. "Playground for
            Entrepreneurs" on October 26th continued to explore the themes of entrepreneurship and
            innovation, providing participants with valuable opportunities for learning and
            networking.
          </p>
          <p className="text-[#333333] text-[16px] font-bold leading-[1.4] mt-2">
            Event Proceedings:
          </p>
          <p className="text-[#333333] text-[16px] leading-[1.4]">
            The workshop began with an inspirational speech from a successful local entrepreneur who
            shared experiences and lessons learned throughout their entrepreneurial journey.
            Participants had the opportunity to ask questions and interact directly with the
            speaker, creating a dynamic and interactive environment. After the Q&A session, working
            groups were formed to discuss and develop innovative business ideas. Mentors were
            present to provide guidance and advice, ensuring that all participants were engaged and
            benefited from the experience.
          </p>
          <p className="text-[#333333] text-[16px] font-bold leading-[1.4] mt-2">
            Workshop Results:
          </p>
          <p className="text-[#333333] text-[16px] leading-[1.4]">
            At the end of the workshop, each group presented the business idea they had developed,
            receiving constructive feedback. It was an excellent opportunity for participants to
            improve their presentation skills and validate their ideas in a friendly and supportive
            environment.
          </p>
          <p className="text-[#333333] text-[16px] font-bold leading-[1.4] mt-2">Conclusion:</p>
          <p className="text-[#333333] text-[16px] leading-[1.4]">
            Workshop number 7 in the entrepreneurial series was another important step in the
            development of our community. Participants left with new knowledge, valuable
            connections, and an extra dose of inspiration to pursue their entrepreneurial dreams. We
            look forward to the next event and hope to see even more enthusiastic entrepreneurs
            joining our community.
          </p>
          <p className="text-[#333333] text-[16px] font-bold leading-[1.4] mt-2">OpenInnoHub:</p>
          <p className="text-[#333333] text-[16px] leading-[1.4]">
            The project is co-financed by the European Union (EU) from the European Regional
            Development Fund through the Operational Program Competitiveness 2014-2020. Project
            title: Creation of an Open Innovation Hub in the South-East Region (OpenInnoHub) code
            SMIS 153386. The content of this material does not necessarily represent the official
            position of the European Union or the Romanian Government. For detailed information
            about other programs co-financed by the European Union, we invite you to visit...
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full h-[84px] p-[20px_30px] bg-white rounded-b-[12px] border-t border-[#EBEBEB] flex justify-end items-center">
        <div className="px-4 py-3 border border-[#E4822F] rounded-lg flex items-center space-x-2">
          <div className="w-5 h-5"></div>
          <span className="text-[#E4822F] text-[14px] font-bold leading-[1.4] text-center">Back</span>
          <div className="w-5 h-5"></div>
        </div>
      </div>

      <div className="mt-6"></div>

      {/* Participants Section */}
      <div className="w-full h-[592px] bg-white rounded-[8px] border border-[#EBEBEB] flex flex-col items-center">
        {/* Participants Header */}
        <div className="w-full p-[20px_30px] border-b border-[#EBEBEB] flex justify-between items-center">
          <span className="text-[#333333] text-[20px] font-bold leading-[1.4]">Participants</span>
        </div>

        {/* Search and Table */}
        <div className="w-full h-[428px] flex flex-col">
          {/* Search Bar */}
          <div className="w-full h-[88px] p-[16px_0] border-b border-[#EBEBEB] flex items-center justify-between">
            <div className="w-full p-[0_30px] flex justify-between items-center">
              <div className="w-[751px] h-[56px] border border-[#333333] rounded-[4px] flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center">
                  <FaSearch alt="icon" />
                </div>
                <span className="text-[#333333] text-[16px] font-normal leading-[1.5] ml-1.5">Search</span>
              </div>
              <div className="px-7 py-[18px] bg-[#E4822F] rounded-lg flex items-center space-x-2">
                <div className="w-5 h-5"></div>
                <span className="text-white text-[14px] font-bold leading-[1.4] text-center">Search</span>
                <div className="w-5 h-5"></div>
              </div>
            </div>
          </div>

          {/* Table Header */}
          <div className="w-full h-10 p-[0_30px] bg-[#EBEBEB] border-b border-[#EBEBEB] flex items-center">
            <div className="w-[60px] h-10 flex items-center justify-start">
              <span className="text-[#474747] text-[14px] font-bold leading-[1.4]">No.</span>
              <span className="ml-4 text-[#474747] text-[14px] font-black">↓</span>
            </div>
            <div className="w-[320px] h-10 px-6 py-2.5 flex items-center justify-start">
              <span className="text-[#474747] text-[14px] font-bold leading-[1.4]">Name</span>
              <span className="ml-4 text-[#474747] text-[14px] font-black">↓</span>
            </div>
            <div className="flex-1 h-10 px-4 py-2.5 flex items-center justify-start">
              <span className="text-[#474747] text-[14px] font-bold leading-[1.4]">Email</span>
              <span className="ml-4 text-[#474747] text-[14px] font-black">↓</span>
            </div>
            <div className="w-[160px] h-10 px-4 py-2.5 flex items-center justify-center">
              <span className="text-[#474747] text-[14px] font-bold leading-[1.4]">Date Enrollment</span>
              <span className="ml-4 text-[#474747] text-[14px] font-black">↓</span>
            </div>
            <div className="w-[160px] h-10 px-4 py-2.5 flex items-center justify-center">
              <span className="text-[#474747] text-[14px] font-bold leading-[1.4]">Status</span>
              <span className="ml-4 text-[#474747] text-[14px] font-black">↓</span>
            </div>
            <div className="w-[80px] h-10 py-2.5 flex items-center justify-end">
              <span className="text-[#474747] text-[14px] font-bold leading-[1.4]">Acation</span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="w-full h-[300px] flex flex-col">
            {/* Row 1 */}
            <div className="w-full h-[60px] p-[0_30px] border-b border-[#EBEBEB] flex items-center">
              <div className="w-[60px] px-2 text-[#333333] text-[14px] font-bold leading-[1.4] text-center">1</div>
              <div className="w-[320px] px-6 flex items-center">
                <div className="w-10 h-10 rounded-[8px] border border-[#333333] overflow-hidden">
                  <FaUser alt="avatar" className="w-full h-full object-fill" />
                </div>
                <span className="ml-2.5 text-[#474747] text-[14px] font-bold leading-[1.4]">Jane Cooper</span>
              </div>
              <div className="flex-1 px-4 text-[#333333] text-[14px] font-normal leading-[1.4]">lmcclure@hotmail.com</div>
              <div className="w-[160px] px-4 text-[#333333] text-[14px] font-bold leading-[1.4] text-center">3/11/2023</div>
              <div className="w-[160px] px-4 flex justify-center">
                <div className="w-[96px] h-7 p-1.5 bg-[#defbe9] bg-opacity-20 rounded-[8px] flex items-center justify-center">
                  <span className="text-[#32b763] text-[10px] font-black">✓</span>
                  <span className="text-[#32b763] text-[12px] font-normal leading-[1.4] ml-1">Disponibil</span>
                </div>
              </div>
              <div className="w-[80px] flex justify-end">
                <div className="p-1.5 border border-[#E4822F] rounded-[8px]">
                  <span className="text-[#E4822F] text-[14px] font-black">⋯</span>
                </div>
              </div>
            </div>
            {/* Row 2 */}
            <div className="w-full h-[60px] p-[0_30px] border-b border-[#EBEBEB] flex items-center">
              <div className="w-[60px] px-2 text-[#333333] text-[14px] font-bold leading-[1.4] text-center">2</div>
              <div className="w-[320px] px-6 flex items-center">
                <div className="w-10 h-10 rounded-[8px] border border-[#333333] overflow-hidden">
                  <FaUser alt="avatar" className="w-full h-full object-fill" />
                </div>
                <span className="ml-2.5 text-[#474747] text-[14px] font-bold leading-[1.4]">Leslie Alexander</span>
              </div>
              <div className="flex-1 px-4 text-[#333333] text-[14px] font-normal leading-[1.4]">merle00@feest.com</div>
              <div className="w-[160px] px-4 text-[#333333] text-[14px] font-bold leading-[1.4] text-center">2/11/2023</div>
              <div className="w-[160px] px-4 flex justify-center">
                <div className="w-[96px] h-7 p-1.5 bg-[#defbe9] bg-opacity-20 rounded-[8px] flex items-center justify-center">
                  <span className="text-[#32b763] text-[10px] font-black">✓</span>
                  <span className="text-[#32b763] text-[12px] font-normal leading-[1.4] ml-1">Disponibil</span>
                </div>
              </div>
              <div className="w-[80px] flex justify-end">
                <div className="p-1.5 border border-[#E4822F] rounded-[8px]">
                  <span className="text-[#E4822F] text-[14px] font-black">⋯</span>
                </div>
              </div>
            </div>
            {/* Row 3 */}
            <div className="w-full h-[60px] p-[0_30px] border-b border-[#EBEBEB] flex items-center">
              <div className="w-[60px] px-2 text-[#333333] text-[14px] font-bold leading-[1.4] text-center">3</div>
              <div className="w-[320px] px-6 flex items-center">
                <div className="w-10 h-10 rounded-[8px] border border-[#333333] overflow-hidden">
                  <FaUser alt="avatar" className="w-full h-full object-fill" />
                </div>
                <span className="ml-2.5 text-[#474747] text-[14px] font-bold leading-[1.4]">Albert Flores</span>
              </div>
              <div className="flex-1 px-4 text-[#333333] text-[14px] font-normal leading-[1.4]">schimmel.garnet@hotmail.com</div>
              <div className="w-[160px] px-4 text-[#333333] text-[14px] font-bold leading-[1.4] text-center">2/11/2023</div>
              <div className="w-[160px] px-4 flex justify-center">
                <div className="w-[96px] h-7 p-1.5 bg-[#defbe9] bg-opacity-20 rounded-[8px] flex items-center justify-center">
                  <span className="text-[#32b763] text-[10px] font-black">✓</span>
                  <span className="text-[#32b763] text-[12px] font-normal leading-[1.4] ml-1">Disponibil</span>
                </div>
              </div>
              <div className="w-[80px] flex justify-end">
                <div className="p-1.5 border border-[#E4822F] rounded-[8px]">
                  <span className="text-[#E4822F] text-[14px] font-black">⋯</span>
                </div>
              </div>
            </div>
            {/* Row 4 */}
            <div className="w-full h-[60px] p-[0_30px] border-b border-[#EBEBEB] flex items-center">
              <div className="w-[60px] px-2 text-[#333333] text-[14px] font-bold leading-[1.4] text-center">4</div>
              <div className="w-[320px] px-6 flex items-center">
                <div className="w-10 h-10 rounded-[8px] border border-[#333333] overflow-hidden">
                  <FaUser alt="avatar" className="w-full h-full object-fill" />
                </div>
                <span className="ml-2.5 text-[#474747] text-[14px] font-bold leading-[1.4]">Ronald Richards</span>
              </div>
              <div className="flex-1 px-4 text-[#333333] text-[14px] font-normal leading-[1.4]">imuller@auer.com</div>
              <div className="w-[160px] px-4 text-[#333333] text-[14px] font-bold leading-[1.4] text-center">2/11/2023</div>
              <div className="w-[160px] px-4 flex justify-center">
                <div className="w-[96px] h-7 p-1.5 bg-[#defbe9] bg-opacity-20 rounded-[8px] flex items-center justify-center">
                  <span className="text-[#32b763] text-[10px] font-black">✓</span>
                  <span className="text-[#32b763] text-[12px] font-normal leading-[1.4] ml-1">Disponibil</span>
                </div>
              </div>
              <div className="w-[80px] flex justify-end">
                <div className="p-1.5 border border-[#E4822F] rounded-[8px]">
                  <span className="text-[#E4822F] text-[14px] font-black">⋯</span>
                </div>
              </div>
            </div>
            {/* Row 5 */}
            <div className="w-full h-[60px] p-[0_30px] border-b border-[#EBEBEB] flex items-center">
              <div className="w-[60px] px-2 text-[#333333] text-[14px] font-bold leading-[1.4] text-center">5</div>
              <div className="w-[320px] px-6 flex items-center">
                <div className="w-10 h-10 rounded-[8px] border border-[#333333] overflow-hidden">
                  <FaUser alt="avatar" className="w-full h-full object-fill" />
                </div>
                <span className="ml-2.5 text-[#474747] text-[14px] font-bold leading-[1.4]">Ralph Edwards</span>
              </div>
              <div className="flex-1 px-4 text-[#333333] text-[14px] font-normal leading-[1.4]">bergstrom.mandy@hoppe.com</div>
              <div className="w-[160px] px-4 text-[#333333] text-[14px] font-bold leading-[1.4] text-center">1/11/2023</div>
              <div className="w-[160px] px-4 flex justify-center">
                <div className="w-[96px] h-7 p-1.5 bg-[#defbe9] bg-opacity-20 rounded-[8px] flex items-center justify-center">
                  <span className="text-[#32b763] text-[10px] font-black">✓</span>
                  <span className="text-[#32b763] text-[12px] font-normal leading-[1.4] ml-1">Disponibil</span>
                </div>
              </div>
              <div className="w-[80px] flex justify-end">
                <div className="p-1.5 border border-[#E4822F] rounded-[8px]">
                  <span className="text-[#E4822F] text-[14px] font-black">⋯</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="w-full p-[20px_30px] flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="text-[#333333] text-[14px] font-normal leading-[1.4]">Elements per page</span>
            <div className="w-[105px] px-3 bg-white border border-[#EBEBEB] rounded-[8px] flex items-center justify-between">
              <span className="text-[#333333] text-[14px] font-normal leading-[1.4] text-center">5</span>
              <span className="text-[#333333] text-[12px] font-black">↓</span>
            </div>
          </div>
          <div className="flex space-x-2">
            <div className="w-[33px] h-[33px] bg-white border border-[#EBEBEB] rounded-[8px] flex items-center justify-center">
              <span className="text-[#EBEBEB] text-[12px] font-black">«</span>
            </div>
            <div className="w-[33px] h-[33px] bg-white border border-[#EBEBEB] rounded-[8px] flex items-center justify-center">
              <span className="text-[#EBEBEB] text-[12px] font-black">‹</span>
            </div>
            <div className="w-[33px] h-[33px] bg-[#E4822F] border border-[#EBEBEB] rounded-[8px] flex items-center justify-center">
              <span className="text-white text-[12px] font-medium">1</span>
            </div>
            <div className="w-[33px] h-[33px] bg-white border border-[#EBEBEB] rounded-[8px] flex items-center justify-center">
              <span className="text-[#E4822F] text-[12px] font-medium">2</span>
            </div>
            <div className="w-[33px] h-[33px] bg-white border border-[#EBEBEB] rounded-[8px] flex items-center justify-center">
              <span className="text-[#E4822F] text-[12px] font-medium">3</span>
            </div>
            <div className="w-[33px] h-[33px] bg-white border border-[#EBEBEB] rounded-[8px] flex items-center justify-center">
              <span className="text-[#E4822F] text-[12px] font-black">›</span>
            </div>
            <div className="w-[33px] h-[33px] bg-white border border-[#EBEBEB] rounded-[8px] flex items-center justify-center">
              <span className="text-[#E4822F] text-[12px] font-black">»</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEvent;