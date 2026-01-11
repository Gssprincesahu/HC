import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="border border-[#565656] p-6 bg-[#D7CEC7] text-black">

      {/* Title */}
      <h2 className="text-3xl font-semibold text-[#76323F] mb-6">
        Contact Details
      </h2>

      {/* Gradient Card */}
      <div
        className="
          rounded-xl p-6
          w-full
          text-black
        "
      >
        <h3 className="text-2xl font-semibold mb-1">
          Dr. Harish Chandra
        </h3>

        <p className="text-sm mb-4">
          Assistant Professor
        </p>

        <div className="space-y-1 text-sm mb-6">
          <p>Department of Mathematics and Scientific Computing</p>
          <p>Madan Mohan Malaviya University of Technology</p>
          <p>Gorakhpur, Uttar Pradesh – 273010, India</p>
        </div>

        <div className="flex items-start gap-4 mb-4">
          <div className="bg-white/20 p-2 rounded-lg">
            <Phone size={18} />
          </div>
          <p className="text-sm">
            +91-9450565757; +91-9235501647
          </p>
        </div>

        <div className="flex items-start gap-4 mb-4">
          <div className="bg-white/20 p-2 rounded-lg">
            <Mail size={18} />
          </div>
          <p className="text-sm underline underline-offset-2">
            hcmsc@mmmut.ac.in; hc19856@gmail.com
          </p>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-white/20 p-2 rounded-lg">
            <MapPin size={18} />
          </div>
          <p className="text-sm">
            26°43′53.2″N 83°25′59.3″E
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
