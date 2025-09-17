const Services = () => {
  return (
    <div className="w-[1295px] h-[704px] flex flex-col mt-[155px] ml-[150px]">
      {/* Header Section */}
      <div className="w-[1295px] h-[96px] p-[20px_30px] bg-white rounded-[8px] flex justify-between items-center">
        <div className="text-[#474747] text-[20px] font-bold font-['Inter'] leading-[1.4]">
          Table Sections
        </div>
        <div className="w-[490px] p-[4px] bg-[#EBEBEB] rounded-[6px] flex">
          <div className="w-[241px] h-[48px] bg-white border border-[#EBEBEB] rounded-[4px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] flex items-center justify-center">
            <div className="text-[#E4822F] text-[16px] font-bold font-['Inter'] leading-[1.4] text-right w-full pr-[16px]">
              Services
            </div>
          </div>
          <div className="w-[241px] h-[48px] flex items-center justify-center">
            <div className="text-[#474747] text-[16px] font-bold font-['Inter'] leading-[1.4] text-right w-full pr-[16px] opacity-50">
              Orders
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="w-[1295px] h-[588px] bg-white rounded-[8px] flex flex-col mt-4.5">
        {/* Table Title and New Service Button */}
        <div className="w-[1295px] h-[80px] p-[0_30px] border-b border-[#EBEBEB] flex items-center justify-between">
          <div className="text-[#474747] text-[20px] font-bold font-['Inter'] leading-[1.4]">
            Services
          </div>
          <button className="w-[174px] h-[44px] bg-[#E4822F] rounded-[8px] flex items-center justify-center text-white text-[14px] font-bold font-['Inter'] leading-[1.4]">
            New Service
          </button>
        </div>

        {/* Filters Section */}
        <div className="w-[1295px] h-[88px] p-[16px_0] border-b border-[#EBEBEB] flex items-center justify-center">
          <div className="w-[1235px] h-[56px] flex space-x-[20px]">
            {/* Search Input */}
            <div className="w-[315.33px] h-[56px] border border-[#333333] rounded-[4px] flex items-center p-[4px_16px]">
              <input
                type="text"
                placeholder="Search"
                className="w-full text-[#333333] text-[16px] font-['Roboto'] leading-[1.5]"
              />
            </div>
            {/* Status Dropdown */}
            <div className="w-[315.33px] h-[56px] border border-[#333333] rounded-[4px] flex items-center p-[4px_16px]">
              <select className="w-full text-[#333333] text-[16px] font-['Roboto'] leading-[1.5]">
                <option>Active</option>
              </select>
            </div>
            {/* Currency Dropdown */}
            <div className="w-[315.33px] h-[56px] border border-[#333333] rounded-[4px] flex items-center p-[4px_16px]">
              <select className="w-full text-[#333333] text-[16px] font-['Roboto'] leading-[1.5]">
                <option>EUR</option>
              </select>
            </div>
            {/* Sync Button */}
            <button className="w-[56px] h-[56px] border border-[#E4822F] rounded-[8px] flex items-center justify-center">
              <i className="fas fa-sync text-[#E4822F] text-[14px]"></i>
            </button>
            {/* Filtering Button */}
            <button className="w-[169px] h-[56px] bg-[#E4822F] rounded-[8px] flex items-center justify-center text-white text-[14px] font-bold font-['Inter'] leading-[1.4]">
              Filtering
              <i className="fas fa-arrow-right ml-[8px]"></i>
            </button>
          </div>
        </div>

        {/* Table Headers */}
        <div className="w-[1295px] h-[40px] bg-[#F0F0F0] flex items-center p-[0_30px] border-b border-[#EBEBEB]">
          <div className="w-[89px] text-center text-[#474747] text-[14px] font-bold font-['Inter'] leading-[1.4]">
            No. <i className="fas fa-sort"></i>
          </div>
          <div className="w-[586px] text-center text-[#474747] text-[14px] font-bold font-['Inter'] leading-[1.4]">
            Name <i className="fas fa-sort"></i>
          </div>
          <div className="w-[160px] text-center text-[#474747] text-[14px] font-bold font-['Inter'] leading-[1.4]">
            Price <i className="fas fa-sort"></i>
          </div>
          <div className="w-[160px] text-center text-[#474747] text-[14px] font-bold font-['Inter'] leading-[1.4]">
            Currency <i className="fas fa-sort"></i>
          </div>
          <div className="w-[160px] text-center text-[#474747] text-[14px] font-bold font-['Inter'] leading-[1.4]">
            Status <i className="fas fa-sort"></i>
          </div>
          <div className="w-[80px] text-center text-[#474747] text-[14px] font-bold font-['Inter'] leading-[1.4]">
            Action
          </div>
        </div>

        {/* Table Rows */}
        {[
          { no: '1', name: 'Coffee for Event', price: '1000', currency: 'EUR', status: 'Available' },
          { no: '2', name: 'General Cleaning', price: '2000', currency: 'EUR', status: 'Available' },
          { no: '3', name: 'Event Transport', price: '5000', currency: 'EUR', status: 'Available' },
          { no: '4', name: 'Event Catering', price: '3000', currency: 'EUR', status: 'Unavailable' },
          { no: '5', name: 'WorkShop – Online Marketing and resources for influencers', price: '1000', currency: 'EUR', status: 'Unavailable' },
        ].map((row, index) => (
          <div key={index} className="w-[1295px] h-[60px] flex items-center p-[0_30px] border-b border-[#EBEBEB]">
            <div className="w-[89px] text-center text-[#333333] text-[14px] font-bold font-['Inter'] leading-[1.4]">
              {row.no}
            </div>
            <div className="w-[586px] text-[#333333] text-[14px] font-['Inter'] leading-[1.4] text-left pl-[24px]">
              {row.name}
            </div>
            <div className="w-[160px] text-[#333333] text-[14px] font-['Inter'] leading-[1.4] text-left pl-[16px]">
              {row.price}
            </div>
            <div className="w-[160px] text-[#333333] text-[14px] font-['Inter'] leading-[1.4] text-left pl-[16px]">
              {row.currency}
            </div>
            <div className="w-[160px] flex justify-center">
              {row.status === 'Available' ? (
                <div className="w-[96px] h-[28px] bg-[#69C98C]/20 border-2 border-white/48 rounded-[8px] flex items-center justify-center">
                  <i className="fas fa-check text-[#69C98C] text-[10px] mr-[4px]"></i>
                  <span className="text-[#69C98C] text-[12px] font-['Inter'] leading-[1.4]">Available</span>
                </div>
              ) : (
                <div className="w-[96px] h-[28px] bg-[#E6536C]/20 border-2 border-white/48 rounded-[8px] flex items-center justify-center">
                  <span className="text-[#E6536C] text-[12px] font-['Inter'] leading-[1.4]">Unavailable</span>
                </div>
              )}
            </div>
            <div className="w-[80px] flex justify-end">
              <button className="w-[32px] h-[32px] border border-[#E4822F] rounded-[8px] flex items-center justify-center">
                <i className="fas fa-ellipsis-h text-[#E4822F] text-[14px]"></i>
              </button>
            </div>
          </div>
        ))}

        {/* Pagination */}
        <div className="w-[1295px] h-[80px] p-[20px_30px] flex justify-between items-center">
          <div className="flex items-center space-x-[20px]">
            <span className="text-[#333333] text-[14px] font-['Inter'] leading-[1.4]">Elements per page</span>
            <div className="w-[105px] h-[40px] bg-white border border-[#EBEBEB] rounded-[8px] flex items-center justify-between p-[0_12px]">
              <span className="text-[#333333] text-[14px] font-['Inter'] leading-[1.4]">5</span>
              <i className="fas fa-sort text-[#333333] text-[12px]"></i>
            </div>
          </div>
          <div className="flex space-x-[8px]">
            <button className="w-[33px] h-[33px] bg-white border border-[#EBEBEB] rounded-[8px] flex items-center justify-center">
              <i className="fas fa-angle-double-left text-[#EBEBEB] text-[12px]"></i>
            </button>
            <button className="w-[33px] h-[33px] bg-white border border-[#EBEBEB] rounded-[8px] flex items-center justify-center">
              <i className="fas fa-angle-left text-[#EBEBEB] text-[12px]"></i>
            </button>
            <button className="w-[33px] h-[33px] bg-[#E4822F] border border-[#EBEBEB] rounded-[8px] flex items-center justify-center text-white text-[12px] font-['Roboto'] font-medium">
              1
            </button>
            <button className="w-[33px] h-[33px] bg-white border border-[#EBEBEB] rounded-[8px] flex items-center justify-center text-[#E4822F] text-[12px] font-['Roboto'] font-medium">
              2
            </button>
            <button className="w-[33px] h-[33px] bg-white border border-[#EBEBEB] rounded-[8px] flex items-center justify-center text-[#E4822F] text-[12px] font-['Roboto'] font-medium">
              3
            </button>
            <button className="w-[33px] h-[33px] bg-white border border-[#EBEBEB] rounded-[8px] flex items-center justify-center">
              <i className="fas fa-angle-right text-[#E4822F] text-[12px]"></i>
            </button>
            <button className="w-[33px] h-[33px] bg-white border border-[#EBEBEB] rounded-[8px] flex items-center justify-center">
              <i className="fas fa-angle-double-right text-[#E4822F] text-[12px]"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;