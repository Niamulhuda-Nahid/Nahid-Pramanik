import { useSearchParams } from "react-router";


export default function OpenModal({
  query,
  children,
  className,
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleModalOpen = () => {
    query.forEach(({ modalId, openId }) => searchParams.set(modalId, openId));
    setSearchParams(searchParams, { replace: true });
  };

  return (
    <span onClick={handleModalOpen} className={className}>
      {children}
    </span>
  );
}
