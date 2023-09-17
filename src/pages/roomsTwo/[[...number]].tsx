import { useRouter } from "next/router";

const Rooms = () => {
  const router = useRouter();
  return (
    <>
      <h1>rooms {router.query.number}</h1>
    </>
  );
};
export default Rooms;
