import { useSearchParams } from "react-router";
import Modal from "./modal";

export default function useModal() {
  const [searchParams, setSearchParams] = useSearchParams();

  const close = (modalId) => {
    modalId.forEach((id) => searchParams.delete(id));
    setSearchParams(searchParams);
  };

  const open = (modals) => {
    modals.forEach(({ modalId, openId }) => searchParams.set(modalId, openId));
    setSearchParams(searchParams);
  };

  return { close, open, Modal };
}
