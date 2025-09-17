import { useState, useCallback, useRef } from "react";
import { MdCall, MdMail } from "react-icons/md";
import { FaFolderOpen, FaTrash, FaPhotoVideo, FaEye, FaEyeSlash, FaCopy } from "react-icons/fa";

/*
 * Profile Component Structure:
 * 1. InputField: Reusable component for standard input fields with optional password visibility toggle.
 * 2. WideInputField: Reusable component for wider input fields without password toggle.
 * 3. Profile: Main component containing:
 *    - State management for tabs (Personal, Company, Security) and form data.
 *    - Refs for file inputs (profile picture and file import).
 *    - Handlers for input changes, password generation, and clipboard copying.
 *    - UI sections: Header, User Info (with image and buttons), Tabs, Data Fields, Attachments, and Save Button.
 * Features:
 * - Tabbed interface for switching between Personal, Company, and Security data.
 * - File input triggers for "Change Picture" and "Import" buttons.
 * - Hover effects on buttons with custom shadow styling.
 * - Responsive design with Tailwind CSS and custom RGB colors.
 */

const InputField = ({ label, type, name, value, onChange, showPassword, toggleShowPassword }) => (
  <div className="flex-1 min-h-[56px] relative">
    <div className="border border-[rgb(51,51,51)] focus-within:border-[rgb(227,130,46)] rounded p-[4px_16px_4px_8px] h-[56px]">
      <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-[rgb(51,51,51)] leading-[16px] font-['Roboto']">
        {label}
      </label>
      <input
        type={showPassword !== undefined ? (showPassword ? "text" : "password") : type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full h-full text-[16px] text-[rgb(51,51,51)] leading-[24px] font-['Roboto'] tracking-[0.5px] bg-transparent outline-none pr-10"
      />
      {showPassword !== undefined && (
        <button onClick={toggleShowPassword} className="absolute right-2 text-[rgb(51,51,51)]">
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      )}
    </div>
  </div>
);

const WideInputField = ({ label, type, name, value, onChange }) => (
  <div className="w-[396.5px] h-[56px] relative">
    <div className="border border-[rgb(51,51,51)] focus-within:border-[rgb(227,130,46)] rounded p-[4px_16px_4px_8px] h-[56px] flex items-center">
      <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-[rgb(51,51,51)] leading-[16px] font-['Roboto']">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full h-full text-[16px] text-[rgb(51,51,51)] leading-[24px] font-['Roboto'] tracking-[0.5px] bg-transparent outline-none"
      />
    </div>
  </div>
);

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Personal");

  const [personalData, setPersonalData] = useState({
    name: "Pană",
    firstName: "Bogdan",
    email: "panabogdan@thecon.ro",
    phone: "0770 123 456",
    country: "Romania",
    city: "Galați",
  });

  const [companyData, setCompanyData] = useState({
    name: "Company Name",
    urc: "URC12345",
    fieldOfActivity: "Technology",
    phone: "0770 987 654",
    country: "Romania",
    city: "Bucharest",
    address: "123 Business Street",
  });

  const [securityData, setSecurityData] = useState({
    name: "User",
    address: "secure123",
    confirmNewPassword: "",
    fieldOfActivity: "Security",
  });

  const [showAddress, setShowAddress] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const profilePictureInputRef = useRef(null);
  const importFileInputRef = useRef(null);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    if (activeTab === "Personal") {
      setPersonalData((prev) => ({ ...prev, [name]: value }));
    } else if (activeTab === "Company") {
      setCompanyData((prev) => ({ ...prev, [name]: value }));
    } else if (activeTab === "Security") {
      setSecurityData((prev) => ({ ...prev, [name]: value }));
    }
  }, [activeTab]);

  const generatePassword = useCallback(() => {
    const randomPassword = Math.random().toString(36).slice(-8);
    setSecurityData((prev) => ({ ...prev, confirmNewPassword: randomPassword }));
  }, []);

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(securityData.confirmNewPassword);
    alert("Password copied to clipboard!");
  }, [securityData.confirmNewPassword]);

  return (
    <div className="pt-[30px] pb-[30px] mt-30">
      <div className="w-[1295px] bg-white rounded-lg mx-auto shadow-lg">
        <div className="flex justify-between items-center h-[80px] px-[30px] border-b border-[rgb(235,235,235)]">
          <div className="flex items-start gap-[10px]">
            <span className="text-[20px] font-bold text-[rgb(71,71,71)] leading-[28px] font-['Inter']">
              My Profile
            </span>
          </div>
          <div className="flex gap-[8px]"></div>
        </div>

        <div
          style={{
            height: "168px",
            background: "linear-gradient(to right, rgb(240,240,240), rgba(240,240,240,0))",
          }}
        >
          <div className="p-[24px_30px] border-b border-[rgb(235,235,235)]">
            <div className="flex gap-4 items-start">
              <div className="w-[120px] h-[120px] bg-[rgb(227,130,46)] rounded-lg overflow-hidden">
                <div className="w-full h-full">
                  <img
                    src="User-1.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-4 px-[24px]">
                  <span className="text-[28px] font-semibold text-[rgb(51,51,51)] leading-[33.6px] font-['Inter']">
                    Client Name
                  </span>
                  <div className="px-3 py-1 border border-[rgb(227,130,46)] rounded-full">
                    <span className="text-[14px] text-[rgb(227,130,46)] leading-[19.6px] font-['Inter']">
                      Client
                    </span>
                  </div>
                </div>
                <div className="mt-2 flex flex-col gap-2 px-[24px] min-h-[56px]">
                  <div className="flex items-center gap-2">
                    <MdMail className="w-8 h-8 text-[rgb(51,51,51)]" />
                    <span className="text-[16px] font-bold text-[rgb(51,51,51)] leading-[22.4px] font-['Inter']">
                      johnD@email.com
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdCall className="w-8 h-8 text-[rgb(51,51,51)]" />
                    <span className="text-[16px] font-bold text-[rgb(51,51,51)] leading-[22.4px] font-['Roboto']">
                      +(44) 0771 234 567
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <button 
                  className="px-4 py-3 bg-[rgb(227,130,46)] text-white font-bold text-[14px] rounded-lg font-['Inter'] hover:shadow-md hover:shadow-[rgba(227,130,46,0.4)] transition-shadow duration-200"
                  onClick={() => profilePictureInputRef.current.click()}
                >
                  <div className="flex items-center justify-between gap-2 cursor-pointer">
                    <div className="w-5 h-5"></div>
                    <span className="leading-[19.6px]">Change Picture</span>
                    <div className="w-5 h-5"></div>
                  </div>
                </button>
                <button className="px-4 py-3 border border-[rgb(227,130,46)] text-[rgb(227,130,46)] font-bold text-[14px] rounded-lg font-['Inter'] hover:shadow-md hover:shadow-[rgba(227,130,46,0.4)] transition-shadow duration-200">
                  <div className="flex items-center justify-between gap-2 cursor-pointer">
                    <div className="w-5 h-5"></div>
                    <span className="leading-[19.6px]">Remove Picture</span>
                    <div className="w-5 h-5"></div>
                  </div>
                </button>
              </div>
              <input
                type="file"
                accept="image/*"
                ref={profilePictureInputRef}
                className="hidden"
              />
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="w-[877px]">
            <div className="flex px-[30px] h-[60px] bg-white border border-[rgb(235,235,235)]">
              <div
                className={`w-[117px] h-full flex items-center justify-center py-2 px-4 cursor-pointer ${
                  activeTab === "Personal" ? "border-b-2 border-[rgb(227,130,46)]" : "border-b border-[rgb(235,235,235)]"
                }`}
                onClick={() => setActiveTab("Personal")}
              >
                <div className="w-[85px] px-2">
                  <span className={`text-[16px] font-bold leading-[22.4px] font-['Inter'] ${
                    activeTab === "Personal" ? "text-[rgb(227,130,46)]" : "text-[rgb(71,71,71)]"
                  }`}>
                    Personal
                  </span>
                </div>
              </div>
              <div
                className={`w-[120px] h-full flex items-center justify-center py-2 px-4 cursor-pointer ${
                  activeTab === "Company" ? "border-b-2 border-[rgb(227,130,46)]" : "border-b border-[rgb(235,235,235)]"
                }`}
                onClick={() => setActiveTab("Company")}
              >
                <div className="w-[88px] px-2">
                  <span className={`text-[16px] font-bold leading-[22.4px] font-['Inter'] ${
                    activeTab === "Company" ? "text-[rgb(227,130,46)]" : "text-[rgb(71,71,71)]"
                  }`}>
                    Company
                  </span>
                </div>
              </div>
              <div
                className={`w-[111px] h-full flex items-center justify-center py-2 px-4 cursor-pointer ${
                  activeTab === "Security" ? "border-b-2 border-[rgb(227,130,46)]" : "border-b border-[rgb(235,235,235)]"
                }`}
                onClick={() => setActiveTab("Security")}
              >
                <div className="w-[79px] px-2">
                  <span className={`text-[16px] font-bold leading-[22.4px] font-['Inter'] ${
                    activeTab === "Security" ? "text-[rgb(227,130,46)]" : "text-[rgb(71,71,71)]"
                  }`}>
                    Security
                  </span>
                </div>
              </div>
            </div>

            <div className="w-[877px] h-[60px] bg-[rgb(227,130,46)] flex items-center px-[30px]">
              <span className="text-[20px] font-bold text-white leading-[28px] font-['Inter']">
                {activeTab === "Personal" ? "Personal data" : activeTab === "Company" ? "Company data" : "Security data"}
              </span>
            </div>

            <div className="p-[24px_0] h-[312px] bg-white">
              <div className="p-[16px_30px]">
                {activeTab === "Personal" ? (
                  <>
                    <div className="flex gap-6">
                      <InputField label="Name" type="text" name="name" value={personalData.name} onChange={handleInputChange} />
                      <InputField label="First Name" type="text" name="firstName" value={personalData.firstName} onChange={handleInputChange} />
                    </div>
                    <div className="flex gap-6 mt-4">
                      <InputField label="Email" type="email" name="email" value={personalData.email} onChange={handleInputChange} />
                      <InputField label="Phone Number" type="text" name="phone" value={personalData.phone} onChange={handleInputChange} />
                    </div>
                    <div className="flex gap-6 mt-4">
                      <WideInputField label="Country" type="text" name="country" value={personalData.country} onChange={handleInputChange} />
                      <WideInputField label="City" type="text" name="city" value={personalData.city} onChange={handleInputChange} />
                    </div>
                  </>
                ) : activeTab === "Company" ? (
                  <>
                    <div className="flex gap-6">
                      <InputField label="Name" type="text" name="name" value={companyData.name} onChange={handleInputChange} />
                      <InputField label="URC" type="text" name="urc" value={companyData.urc} onChange={handleInputChange} />
                    </div>
                    <div className="flex gap-6 mt-4">
                      <InputField label="Field of Activity" type="text" name="fieldOfActivity" value={companyData.fieldOfActivity} onChange={handleInputChange} />
                      <InputField label="Phone Number" type="text" name="phone" value={companyData.phone} onChange={handleInputChange} />
                    </div>
                    <div className="flex gap-6 mt-4">
                      <WideInputField label="Country" type="text" name="country" value={companyData.country} onChange={handleInputChange} />
                      <WideInputField label="City" type="text" name="city" value={companyData.city} onChange={handleInputChange} />
                    </div>
                    <div className="mt-4">
                      <InputField label="Address" type="text" name="address" value={companyData.address} onChange={handleInputChange} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex gap-6">
                      <InputField label="Name" type="text" name="name" value={securityData.name} onChange={handleInputChange} />
                    </div>
                    <div className="flex gap-6 mt-4">
                      <InputField
                        label="Address"
                        type="text"
                        name="address"
                        value={securityData.address}
                        onChange={handleInputChange}
                        showPassword={showAddress}
                        toggleShowPassword={() => setShowAddress(!showAddress)}
                      />
                    </div>
                    <div className="flex gap-6 mt-4">
                      <InputField
                        label="Confirm New Password"
                        type="text"
                        name="confirmNewPassword"
                        value={securityData.confirmNewPassword}
                        onChange={handleInputChange}
                        showPassword={showConfirmPassword}
                        toggleShowPassword={() => setShowConfirmPassword(!showConfirmPassword)}
                      />
                    </div>
                    <div className="flex gap-6 mt-4">
                      <InputField label="Field of Activity" type="text" name="fieldOfActivity" value={securityData.fieldOfActivity} onChange={handleInputChange} />
                      <div className="flex-1 min-h-[56px] flex items-center gap-50">
                        <button
                          onClick={generatePassword}
                          className="px-4 py-2 bg-[rgb(227,130,46)] text-white font-bold text-[14px] rounded-lg font-['Inter'] hover:shadow-md hover:shadow-[rgba(227,130,46,0.4)] transition-shadow duration-200 cursor-pointer"
                        >
                          Generate Password
                        </button>
                        <button
                          onClick={copyToClipboard}
                          className="p-2 border border-[rgb(227,130,46)] text-[rgb(227,130,46)] rounded-lg"
                        >
                          <FaCopy />
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

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
                  <button 
                    onClick={() => importFileInputRef.current.click()}
                    className="w-[134px] py-3 bg-[rgb(71,71,71)] text-white font-bold text-[14px] rounded-lg font-['Inter'] hover:shadow-md hover:shadow-[rgba(71,71,71)] transition-shadow duration-200"
                  >
                    <div className="flex items-center justify-between gap-2 px-4 cursor-pointer">
                      <div className="w-5 h-5"></div>
                      <span className="leading-[19.6px]">Import</span>
                      <div className="w-5 h-5"></div>
                    </div>
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center border border-[rgb(227,130,46)] rounded-lg p-[6px]">
                    <span className="text-[14px] text-[rgb(227,130,46)] font-['Font_Awesome_6_Free'] font-black cursor-pointer">
                      <FaTrash />
                    </span>
                  </button>
                </div>
                <input
                  type="file"
                  multiple
                  ref={importFileInputRef}
                  className="hidden"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-[20px_30px] bg-white rounded-xl border border-[rgb(235,235,235)] flex justify-end min-h-[84px] space-y-[30px]">
          <div>
            <button className="px-4 py-3 bg-[rgb(227,130,46)] text-white font-bold text-[14px] rounded-lg font-['Inter'] hover:shadow-md hover:shadow-[rgba(227,130,46,0.4)] transition-shadow duration-200">
              <div className="flex items-center justify-between gap-2 cursor-pointer">
                <div className="w-5 h-5"></div>
                <span className="leading-[19.6px]">Save</span>
                <div className="w-5 h-5"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;