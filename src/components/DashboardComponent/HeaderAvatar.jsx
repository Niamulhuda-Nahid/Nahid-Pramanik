import React from "react";
import useModal from "../Modal/useModal";
import { Link, useSearchParams } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import OpenModal from "../Modal/OpenModal";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ChevronDown, Crown, UserRound } from "lucide-react";
import { Separator } from "../ui/separator";
import { useGetCurrentUserQuery } from "@/Redux/endpoints/authApi";

export default function HeaderAvatar() {
  //   const { open } = useModal();
  const [searchParams, setSearchParams] = useSearchParams();
  const pop = searchParams.get("pop");
  const handleChange = (open) => {
    if (!open) {
      // Close the popover by removing the pop query parameter
      searchParams.delete("pop");
      setSearchParams(searchParams);
    }
  };

  const { data: currentUser } = useGetCurrentUserQuery();
  const user = currentUser?.data || null;
  // console.log(user);

  return (
    <Popover open={pop === "profile"} onOpenChange={handleChange}>
      <PopoverTrigger>
        <OpenModal query={[{ modalId: "pop", openId: "profile" }]}>
          <div className="flex items-center gap-3 cursor-pointer bg-[#191919] px-3 py-1 rounded-lg">
            <img
              src={"https://api.dicebear.com/7.x/avataaars/svg?seed=John"}
              className="w-10 h-10 rounded-full border border-[#000000] shadow-[0_0_15px_5px_rgba(245,192,67,0.3)] object-cover"
              alt={user?.full_name || "User Avatar"}
            />
            <div className="hidden sm:block">
              <p className="text-sm font-semibold flex items-center gap-1">
                {user?.full_name} <ChevronDown size={14} />
              </p>
              {/* <p className="text-xs text-gray-500">Mechanics</p> */}
            </div>
          </div>
        </OpenModal>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className={
          "mt-1.5 bg-[#000000] text-[#919EAB] p-0 shadow-[0_0_15px_5px_rgba(245,192,67,0.2)]"
        }
      >
        <div>
          <div className="flex items-center gap-3 px-6 pt-6 pb-4">
            <img
              src={"https://api.dicebear.com/7.x/avataaars/svg?seed=John"}
              alt={user?.full_name || "User Avatar"}
              className="w-10 h-10 rounded-full border border-[#000000] shadow-[0_0_15px_5px_rgba(245,192,67,0.3)] object-cover"
            />
            <div className="">
              <p className="text-base text-[#DFE3E8] font-normal">
                {user?.full_name}
              </p>
              <p className="text-sm text-gray-500">{user?.email}</p>
            </div>
          </div>
        </div>
        <Separator className={`bg-[#22272D]`} />
        <Link
          to="/dashboard/profile"
          className="flex items-center gap-3  px-6 pt-4 pb-4 text-base font-semibold"
        >
          <UserRound />
          Edit Profile
        </Link>
        <Separator className={`bg-[#22272D]`} />
        <Link
          to="/dashboard/upgrade"
          className="flex items-center gap-3  px-6 pt-4 pb-6 text-base font-semibold"
        >
          <Crown />
          Upgrade your plan
        </Link>
      </PopoverContent>
    </Popover>
  );
}
