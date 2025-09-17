import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSync, faArrowRight, faSort, faCheck, faEllipsis, faAngleDoubleLeft, faAngleLeft, faAngleRight, faAngleDoubleRight, faChevronDown} from "@fortawesome/free-solid-svg-icons";
import CreateTicket from "./CreateTicket";
import TicketView from "./TicketView";


const VoucherManagement = () => {
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [showTicketView, setShowTicketView] = useState(false);

  if (showTicketForm) {
    return <CreateTicket onClose={() => setShowTicketForm(false)} />;
  } else if ( showTicketView) {
    return <TicketView onClose={() => setShowTicketView(false)} /> 
  }
  
  return (
    <div className="px-[180px] py-[30px] w-full h-[450px] rounded-lg mt-[155px]">
      <div className="flex flex-col space-y-0 w-full bg-white">
        {/* Header Section */}
        <div className="flex flex-row space-x-0 px-[30px] py-[20px] w-full bg-white border border-[#EBEBEB]">
          <div className="flex items-center space-x-10 max-w-full min-h-[28px] max-h-[28px] flex-1">
            <span className="font-['Inter'] text-[20px] font-bold leading-[28px] text-[#333333]">
              Vouchers
            </span>
          </div>
          <div className="flex items-center space-x-[8px]">
            <div className="flex items-center space-x-[8px] px-[16px] py-[12px] rounded-lg border-[0.5px] border-[#E3822E]">
              <div className="w-[20px] h-[20px] text-transparent"></div>
              <span 
                className="font-['Inter'] text-[14px] font-bold leading-[19.6px] text-[#E3822E] cursor-pointer"
                onClick={() => setShowTicketForm(true)}>
                Create
              </span>
              <div className="w-[20px] h-[20px] text-transparent"></div>
            </div>
          </div>
        </div>

      {/* Ticket Creation Form as Modal */}
      {showTicketForm && (
          <div className="absolute inset-0 flex justify-center items-center">
            <CreateTicket onClose={() => setShowTicketForm(false)} />
          </div>
        )}

        {/* Filter Section */}
        <div className="flex flex-col items-start space-y-[16px] px-0 py-[16px] w-full min-h-[88px] max-h-[88px] border border-[#EBEBEB]">
          <div className="flex flex-col items-start space-y-[16px] px-[30px] py-0 w-full min-h-[56px] max-h-[56px]">
            <div className="flex items-end space-x-[16px] w-full">
              {/* Search Input */}
              <div className="flex flex-col items-start space-y-0 flex-1 min-h-[56px] max-h-[56px] rounded-[4px]">
                <div className="flex flex-col items-start space-y-[10px] w-full rounded-[4px]">
                  <div className="flex items-center space-x-0 px-0 py-[4px] pr-[16px] w-full max-h-full rounded-[4px] border-[0.5px] border-[#333333]">
                    <div className="flex flex-col space-y-[10px] w-[48px] h-[48px]">
                      <div className="flex space-x-[10px] p-[8px] rounded-full">
                        <div className="w-[24px] h-[24px]">
                          <FontAwesomeIcon
                            icon={faSearch}
                            className="text-[#333333]"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start space-y-0 px-0 py-[4px] w-full min-h-[48px] max-h-[48px]">
                      <div className="flex space-x-0">
                        <input
                          type="text"
                          placeholder="Search"
                          className="font-['Roboto'] text-[16px] leading-[24px] tracking-[0.5px] text-[#333333] w-full outline-none bg-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category Dropdown */}
              <div className="relative flex space-x-0 w-[315.5px] h-[56px] rounded-[4px] border-[0.5px] border-[#333333]">
                <span className="absolute top-0 left-[16px] transform -translate-y-1/2 bg-white px-[4px] font-['Roboto'] text-[12px] leading-[16px] text-[#333333]">
                  Categoriy
                </span>
                <div className="flex items-start space-x-0 px-[16px] py-[4px] w-full max-h-full rounded-[4px] pt-[20px]">
                  <div className="flex flex-col items-start space-y-0 w-full min-h-[48px] max-h-[48px]">
                    <div className="flex space-x-0">
                      <span className="font-['Inter'] text-[14px] leading-[19.6px] text-[#333333]">
                        Products & Services
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-[10px] w-[48px] h-[48px]">
                    <div className="flex space-x-[10px] p-[8px] rounded-full">
                      <div className="w-[24px] h-[24px]">
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className="text-[#333333]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Priority Dropdown */}
              <div className="relative flex space-x-0 w-[160px] h-[56px] rounded-[4px] border-[0.5px] border-[#333333]">
                <span className="absolute top-0 left-[16px] transform -translate-y-1/2 bg-white px-[4px] font-['Roboto'] text-[12px] leading-[16px] text-[#333333]">
                  Priority
                </span>
                <div className="flex items-start space-x-0 px-[16px] py-[4px] w-full max-h-full rounded-[4px] pt-[20px]">
                  <div className="flex flex-col items-start space-y-0 w-full min-h-[48px] max-h-[48px]">
                    <div className="flex space-x-0">
                      <span className="font-['Roboto'] text-[16px] leading-[24px] tracking-[0.5px] text-[#333333]">
                        All
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-[10px] w-[48px] h-[48px]">
                    <div className="flex space-x-[10px] p-[8px] rounded-full">
                      <div className="w-[24px] h-[24px]">
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className="text-[#333333]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Dropdown */}
              <div className="relative flex space-x-0 w-[160px] h-[56px] rounded-[4px] border-[0.5px] border-[#333333]">
                <span className="absolute top-0 left-[16px] transform -translate-y-1/2 bg-white px-[4px] font-['Roboto'] text-[12px] leading-[16px] text-[#333333]">
                  Status
                </span>
                <div className="flex items-start space-x-0 px-[16px] py-[4px] w-full max-h-full rounded-[4px] pt-[20px]">
                  <div className="flex flex-col items-start space-y-0 w-full min-h-[48px] max-h-[48px]">
                    <div className="flex space-x-0">
                      <span className="font-['Roboto'] text-[16px] leading-[24px] tracking-[0.5px] text-[#333333]">
                        All
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-[10px] w-[48px] h-[48px]">
                    <div className="flex space-x-[10px] p-[8px] rounded-full">
                      <div className="w-[24px] h-[24px]">
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className="text-[#333333]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sync Button */}
              <div className="flex flex-col space-y-0 w-[56px] h-[56px] rounded-lg border-[0.5px] border-[#E3822E]">
                <span className="flex items-center justify-center h-full font-['Font_Awesome_6_Free'] text-[14px] font-black text-[#E3822E]">
                  <FontAwesomeIcon icon={faSync} />
                </span>
              </div>

              {/* Filter Button */}
              <div className="flex items-start space-x-[10px] w-[148px]">
                <div className="flex items-center space-x-[8px] px-[28px] py-[18px] rounded-lg bg-[#E3822E] border-[0.5px] border-[#E3822E]">
                  <div className="w-[20px] h-[20px] text-transparent"></div>
                  <span className="font-['Inter'] text-[14px] font-bold leading-[19.6px] text-white">
                    Filter
                  </span>
                  <div className="flex flex-col space-y-0 w-[20px] h-[20px]">
                    <span className="font-['Font_Awesome_6_Free'] text-[14px] font-black text-white">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table Header */}
        <div className="flex items-center space-x-[10px] w-full bg-[#F0F0F0]">
          <div className="flex space-x-0 px-[30px] py-0 w-full min-h-[40px] max-h-[40px] border border-[#EBEBEB]">
            <div className="flex items-center space-x-[16px] w-[60px] h-[40px]">
              <span className="font-['Inter'] text-[14px] font-bold leading-[19.6px] text-[#474747]">
                No.
              </span>
              <span className="font-['Font_Awesome_5_Free'] text-[14px] font-black text-[#474747]">
                <FontAwesomeIcon icon={faSort} />
              </span>
            </div>
            <div className="flex items-center space-x-[16px] px-[24px] py-[10px] flex-1 min-h-[40px] max-h-[40px]">
              <span className="font-['Inter'] text-[14px] font-bold leading-[19.6px] text-[#474747]">
                Subject
              </span>
              <span className="font-['Font_Awesome_5_Free'] text-[14px] font-black text-[#474747]">
                <FontAwesomeIcon icon={faSort} />
              </span>
            </div>
            <div className="flex items-center space-x-[16px] px-[16px] py-[10px] w-[240px] h-[40px]">
              <span className="font-['Inter'] text-[14px] font-bold leading-[19.6px] text-[#474747]">
                Category
              </span>
              <span className="font-['Font_Awesome_5_Free'] text-[14px] font-black text-[#474747]">
                <FontAwesomeIcon icon={faSort} />
              </span>
            </div>
            <div className="flex items-center space-x-[16px] px-[16px] py-0 w-[160px] h-[40px]">
              <span className="font-['Inter'] text-[14px] font-bold leading-[19.6px] text-[#474747]">
                Priority
              </span>
              <span className="font-['Font_Awesome_5_Free'] text-[14px] font-black text-[#474747]">
                <FontAwesomeIcon icon={faSort} />
              </span>
            </div>
            <div className="flex items-center space-x-[16px] px-[16px] py-0 w-[160px] h-[40px]">
              <span className="font-['Inter'] text-[14px] font-bold leading-[19.6px] text-[#474747]">
                Status
              </span>
              <span className="font-['Font_Awesome_5_Free'] text-[14px] font-black text-[#474747]">
                <FontAwesomeIcon icon={faSort} />
              </span>
            </div>
            <div className="flex items-center space-x-[16px] px-[16px] py-0 w-[160px] h-[40px]">
              <span className="font-['Inter'] text-[14px] font-bold leading-[19.6px] text-[#474747]">
                Created at
              </span>
              <span className="font-['Font_Awesome_5_Free'] text-[14px] font-black text-[#474747]">
                <FontAwesomeIcon icon={faSort} />
              </span>
            </div>
            <div className="flex items-center space-x-[10px] px-0 py-[10px] w-[80px] h-[40px]">
              <span className="font-['Inter'] text-[14px] font-bold leading-[19.6px] text-[#474747]">
                Actions
              </span>
            </div>
          </div>
        </div>

        {/* Table Row */}
        <div className="flex flex-col space-y-0 w-full min-h-[60px] max-h-[60px]">
          <div className="flex items-start space-x-0 w-full min-h-[60px] max-h-[60px]">
            <div className="flex space-x-0 px-[30px] py-0 w-full min-h-[60px] max-h-[60px] border border-[#EBEBEB]">
              <div className="flex space-x-[10px] w-[60px] h-[60px] items-center">
                <span className="font-['Inter'] text-[14px] font-bold leading-[19.6px] text-[#333333]">
                  #18248
                </span>
              </div>
              <div 
                className="flex space-x-[10px] px-[24px] py-0 flex-1 min-h-[60px] max-h-[60px] items-center cursor-pointer"
                onClick={ () => setShowTicketView(true) }>
                <span className="font-['Inter'] text-[14px] leading-[19.6px] text-[#333333]">
                  The vouchers don't have an intuitive design... what do you
                  think about a change?
                </span>
              </div>
              <div className="flex space-x-0 px-[16px] py-0 w-[240px] h-[60px] items-center">
                <span className="font-['Inter'] text-[14px] leading-[19.6px] text-[#333333]">
                  Products & Services
                </span>
              </div>
              <div className="flex space-x-0 px-[16px] py-0 w-[160px] h-[60px] items-center">
                <span className="font-['Inter'] text-[14px] leading-[19.6px] text-[#333333]">
                  Decreased
                </span>
              </div>
              <div className="flex space-x-0 px-[16px] py-0 w-[160px] h-[60px] items-center">
                <div className="flex space-x-1 p-[6px] w-[96px] h-[28px] bg-[#68C98C33] rounded-lg border border-[rgba(255,255,255,0.48)]">
                  <span className="font-['Font_Awesome_6_Free'] text-[10px] font-black leading-[14px] text-[#68C98C]">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span className="font-['Inter'] text-[12px] leading-[16.8px] text-[#68C98C]">
                    Activ
                  </span>
                </div>
              </div>
              <div className="flex flex-col space-y-0 px-[16px] py-0 w-[160px] h-[60px] justify-center items-center">
                <span className="font-['Inter'] text-[14px] font-bold leading-[19.6px] text-[#333333]">
                  10/11/2023
                </span>
                <span className="font-['Inter'] text-[14px] leading-[19.6px] text-[#333333]">
                  2:00 PM
                </span>
              </div>
              <div className="flex space-x-[5px] w-[80px] h-[60px] justify-center items-center">
                <div className="flex space-x-[8px] p-[6px] rounded-lg border-[0.5px] border-[#E3822E]">
                  <div className="flex flex-col space-y-0 w-[20px] h-[20px]">
                    <span className="font-['Font_Awesome_6_Free'] text-[14px] font-black text-[#E3822E]">
                      <FontAwesomeIcon icon={faEllipsis} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Section */}
        <div className="flex flex-row space-x-0 px-[30px] py-[20px] w-full">
          <div className="flex space-x-[15px]">
            <span className="font-['Inter'] text-[14px] leading-[19.6px] text-[#333333]">
              Elements per page
            </span>
            <div className="flex space-x-[6px] px-[12px] py-0 w-[105px] bg-white rounded-lg border-[0.5px] border-[#EBEBEB]">
              <div className="flex items-start space-x-[10px]">
                <span className="font-['Inter'] text-[14px] leading-[19.6px] text-[#333333]">
                  5
                </span>
              </div>
              <div className="flex flex-col items-start space-y-[10px]">
                <span className="font-['Font_Awesome_5_Free'] text-[12px] font-black text-[#333333]">
                  <FontAwesomeIcon icon={faSort} />
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-start space-x-[5px] ml-auto">
            <div className="flex shrink-0 w-[33px] h-[33px] bg-white rounded-lg border-[0.5px] border-[#EBEBEB] justify-center items-center">
              <span className="font-['Font_Awesome_6_Free'] text-[12px] font-black text-[#EBEBEB]">
                <FontAwesomeIcon icon={faAngleDoubleLeft} />
              </span>
            </div>
            <div className="flex shrink-0 w-[33px] h-[33px] bg-white rounded-lg border-[0.5px] border-[#EBEBEB] justify-center items-center">
              <span className="font-['Font_Awesome_6_Free'] text-[12px] font-black text-[#EBEBEB]">
                <FontAwesomeIcon icon={faAngleLeft} />
              </span>
            </div>
            <div className="flex shrink-0 w-[33px] h-[33px] bg-[#E3822E] rounded-lg border-[0.5px] border-[#EBEBEB] justify-center items-center">
              <span className="font-['Roboto'] text-[12px] font-medium text-white">
                1
              </span>
            </div>
            <div className="flex shrink-0 w-[33px] h-[33px] bg-white rounded-lg border-[0.5px] border-[#EBEBEB] justify-center items-center">
              <span className="font-['Roboto'] text-[12px] font-medium text-[#E3822E]">
                2
              </span>
            </div>
            <div className="flex shrink-0 w-[33px] h-[33px] bg-white rounded-lg border-[0.5px] border-[#EBEBEB] justify-center items-center">
              <span className="font-['Roboto'] text-[12px] font-medium text-[#E3822E]">
                3
              </span>
            </div>
            <div className="flex shrink-0 w-[33px] h-[33px] bg-white rounded-lg border-[0.5px] border-[#EBEBEB] justify-center items-center">
              <span className="font-['Font_Awesome_6_Free'] text-[12px] font-black text-[#E3822E]">
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </div>
            <div className="flex shrink-0 w-[33px] h-[33px] bg-white rounded-lg border-[0.5px] border-[#EBEBEB] justify-center items-center">
              <span className="font-['Font_Awesome_6_Free'] text-[12px] font-black text-[#E3822E]">
                <FontAwesomeIcon icon={faAngleDoubleRight} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoucherManagement;
