/*
 * Component Structure:
 * 1. SectionHeader: Reusable component for rendering section titles (Clients, Suppliers, Administration) with badge counts.
 *    - Props: title (section name), badgeCount (number of unread messages), isActive (to highlight active section).
 * 2. Inbox: Main component displaying an inbox interface.
 *    - Props: setMainContent (function to switch main content to "Chat").
 *    - Layout: 
 *      - Top: Three section headers (Clients, Suppliers, Administration).
 *      - Middle: Spacer (10px height).
 *      - Bottom: Message section with user details and clickable chat preview.
 * Features:
 * - Responsive design with Tailwind CSS and custom shadows.
 * - Clickable message preview to switch to chat view.
 * - Consistent typography using Inter font family.
 */

const SectionHeader = ({ title, badgeCount, isActive }) => (
  <div className={`flex-1 h-[54px] px-6 py-4 ${isActive ? 'bg-white border border-[#EBEBEB]' : 'bg-[#F0F0F0]'} border border-[#EBEBEB]`}>
    <div className="flex flex-row items-start justify-between">
      <p className="text-[#333333] text-base font-bold" style={{ lineHeight: '1.4' }}>
        {title}
      </p>
      <div className="w-8 h-5 px-2 bg-[#E4822F] rounded flex items-center justify-center">
        <p className="text-white text-xs font-normal" style={{ lineHeight: '1.4', letterSpacing: '-0.24px' }}>
          {badgeCount}
        </p>
      </div>
    </div>
  </div>
);

const Inbox = ({ setMainContent }) => {
  const handleChat = () => {
    setMainContent("Chat");
  };

  return (
    <div
      className="w-[1295px] h-[885px] bg-white rounded-lg shadow-[0_12px_24px_0_rgba(0,0,0,0.08)] overflow-hidden mt-[155px] ml-[155px]"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div className="flex flex-col items-start justify-start">
        <div className="w-full">
          <div className="flex flex-row items-start justify-start">
            <SectionHeader title="Clients" badgeCount={0} isActive={false} />
            <SectionHeader title="Suppliers" badgeCount={0} isActive={false} />
            <SectionHeader title="Administration" badgeCount={1} isActive={true} />
          </div>
        </div>
        <div className="h-[10px]"></div>
        <div className="w-full">
          <div className="py-4">
            <div className="px-5">
              <div className="rounded-[32px]" style={{ boxShadow: '0 4px 4px 0 rgba(36,57,138,0.08)' }}>
                <div className="py-2">
                  <p className="text-[#333333] text-xs font-medium" style={{ lineHeight: '1.4' }}>
                    Message
                  </p>
                </div>
                <div
                  className="w-full p-4 bg-white border border-[#EBEBEB] rounded-lg cursor-pointer"
                  onClick={handleChat}
                >
                  <div className="flex flex-row items-center justify-start">
                    <div className="w-[58px] h-[58px] border-2 border-[#E4822F] rounded">
                      <img
                        src="User-2.jpg"
                        className="w-full h-full object-cover"
                        alt="Placeholder"
                      />
                    </div>
                    <div className="ml-2 flex-1">
                      <div className="flex flex-row items-center justify-between">
                        <p
                          className="text-[#333333] text-base font-bold"
                          style={{ lineHeight: '1.4' }}
                        >
                          UserName
                        </p>
                        <p
                          className="text-[#333333] text-xs font-normal"
                          style={{ lineHeight: '1.4', letterSpacing: '-0.24px' }}
                        >
                          Today2 6:24 PM
                        </p>
                      </div>
                      <div className="flex flex-row items-center justify-between">
                        <p
                          className="text-[#333333] text-sm font-normal opacity-50"
                          style={{ lineHeight: '1.4', letterSpacing: '-0.28px' }}
                        >
                          The invoice has been issued!
                        </p>
                        <div className="w-8 h-5 bg-[#E4822F] rounded flex items-center justify-center">
                          <p
                            className="text-white text-xs font-normal"
                            style={{ lineHeight: '1.4', letterSpacing: '-0.24px' }}
                          >
                            4
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;