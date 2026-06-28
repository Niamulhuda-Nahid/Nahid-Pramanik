import { useAppSelector } from "@/Redux/hook";

export default function useCurrentUser() {
  return useAppSelector((state) => state.auth.user);
}
