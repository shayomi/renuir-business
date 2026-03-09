// components/contact/ContactSidebar.tsx
import { Mail, Phone, MapPin, Twitter, Globe, Github } from "lucide-react";
import { Typography } from "@/components/ui/typography";

export function ContactSidebar() {
  return (
    <div className="relative bg-linear-to-b from-[#050B1C] to-[#020617] p-10 text-white">
      <Typography
        variant="h5"
        className="uppercase tracking-wide text-secondary"
      >
        Contact Information
      </Typography>

      <div className="mt-10 space-y-8">
        {/* Email */}
        <div className="flex gap-4">
          <Mail className="h-5 w-5 text-primary/90 mt-1" />
          <div>
            <Typography variant="lead" className="text-secondary font-bold">
              Email
            </Typography>
            <p className="mt-1 text-sm text-secondary">
              sales@renuir.com
              <br />
              support@renuir.com
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex gap-4">
          <Phone className="h-5 w-5 text-primary/90 mt-1" />
          <div>
            <Typography variant="lead" className="text-secondary font-bold">
              Phone
            </Typography>
            <p className="mt-1 text-sm text-secondary">
              +49 (176) 3230-3721
              <br />
              Mon–Fri, 9am–6pm CET
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="mt-12 border-gray-700 border  rounded-xl bg-white/5 p-6 flex flex-col items-start ">
          <MapPin className="mb-6 h-8 w-8 text-destructive mx-auto mt-4" />
          <div className=" rounded-md bg-[#050B1C] p-2  ">
            <Typography variant="smallText" className="text-secondary mt-8">
              Berlin HQ
            </Typography>
          </div>
        </div>
      </div>

      {/* Socials */}
      <div className="mt-12">
        <Typography variant="lead" className="text-secondary font-bold">
          Follow us
        </Typography>
        <div className="mt-4 flex gap-3">
          {[Twitter, Globe, Github].map((Icon, i) => (
            <div
              key={i}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Icon className="h-5 w-5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
