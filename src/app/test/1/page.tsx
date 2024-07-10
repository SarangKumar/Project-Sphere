import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

const Test1 = async () => {
  const data = await getServerSession(authOptions);
  // {"user":{"email":"satvik@gmail.com","image":null}}

  return <div>Test1 {JSON.stringify(data)}</div>;
};

export default Test1;
