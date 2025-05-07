"use client";
import { Phone, Mail, MapPin } from "lucide-react";

const TopNavBar = () => {
  return (
    <div className="sticky top-0 z-50 bg-blue-600 text-white px-6 py-3 text-sm shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0">
        {/* Phone & Email */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-2 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Phone size={16} />
            <span>561-609-4272</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone size={16} />
            <span>848-459-5056</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={16} />
            <span>paragonvanlines770@gmail.com</span>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-center space-x-2">
          <MapPin size={16} />
          <span>4838 NE 12 Ave, Oakland Park, Florida 33334, Suite #A</span>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
