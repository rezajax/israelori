import { useRouter } from "next/router";

const Rooms = () => {
  const router = useRouter();
  return (
    <>
      <h1>rooms {router.query.room}</h1>
    </>
  );
};
export default Rooms;
  