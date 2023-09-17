import { useRouter } from "next/router";

const Rooms: React.FC = () => {
  const router = useRouter();

  console.log("router.query", router.query);


  return (
    <>
      <h1>rooms {router.query.room}</h1>
      <h1>floor {router.query.floor}</h1>
    </>
  );
};    
export default Rooms;
