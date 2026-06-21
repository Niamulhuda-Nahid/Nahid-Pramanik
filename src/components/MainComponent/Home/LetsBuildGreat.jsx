import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CircleCheck, Mail, MapPinIcon } from "lucide-react";
import React from "react";
import useSubmitContact from "./use-submitContact";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import ContactForm from "./ContactForm";

export default function LetsBuildGreat() {
  const { form, onSubmit } = useSubmitContact();
  return (
    <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-12 md:py-24 flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
        {/* Left Column: Visual copy & Info blocks */}
        <div className="lg:col-span-5 space-y-10">
          {/* Title Block aligning exactly with image_4ebfe9.png */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-[52px] leading-[1.15] font-extrabold tracking-tight text-white">
              Let’s build{" "}
              <span className="bg-linear-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
                something
              </span>{" "}
              great.
            </h1>
            <p className="text-[#94a3b8] text-base md:text-lg leading-relaxed max-w-md font-normal">
              Currently available for new projects, remote collaborations, or
              full-time opportunities.
            </p>
          </div>

          {/* List details matched directly to image_4ebfe9.png */}
          <div className="space-y-6 pt-2">
            {/* Card item 1: Email */}
            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 rounded-full bg-teal-950/30 border border-teal-500/20 flex items-center justify-center">
                <Mail className="text-[#5ce1e6] size-5" />
              </div>
              <div>
                <p className="text-xs text-gray-300 font-semibold tracking-wide uppercase">
                  Email me at
                </p>
                <a
                  href="mailto:hello@devcore.tech"
                  className="text-white hover:text-[#76e2cb] text-[15px] md:text-base font-medium transition-colors duration-200"
                >
                  hello@devcore.tech
                </a>
              </div>
            </div>

            {/* Card item 2: Location */}
            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 rounded-full bg-teal-950/30 border border-teal-500/20 flex items-center justify-center">
                <MapPinIcon className="text-[#5ce1e6] size-5" />
              </div>
              <div>
                <p className="text-xs text-gray-300 font-semibold tracking-wide uppercase">
                  Location
                </p>
                <p className="text-white text-[15px] md:text-base font-medium">
                  San Francisco, CA
                </p>
              </div>
            </div>

            {/* Card item 3: Current Status */}
            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 rounded-full bg-teal-950/30 border border-teal-500/20 flex items-center justify-center">
                <CircleCheck className="text-[#5ce1e6] size-5" />
              </div>
              <div>
                <p className="text-xs text-gray-300 font-semibold tracking-wide uppercase">
                  Current Status
                </p>
                <p className="text-[#5ce1e6] text-[15px] md:text-base font-semibold tracking-wide">
                  Open for Proposals
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form Box (matches card in image_4ebfe9.png) */}
        <div className="lg:col-span-7">
          <div className="bg-[#111827]/30 border border-[#1e293b]/70 rounded-2xl p-6 md:p-10 shadow-2xl backdrop-blur-md relative overflow-hidden">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
