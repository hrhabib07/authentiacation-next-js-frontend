import { authOptions } from "@/utlis/authOption";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div>
      {session?.user && (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome {session?.user.name}
          </h1>
          <p className="text-xl text-center mt-10">
            Logged-in user Email: {session?.user.email}
          </p>
          <div>
            <Image
              src={session?.user.image as string}
              width={200}
              height={200}
              className="mx-auto my-5 rounded-full border-2 border-gray-600"
              alt="user image"
            ></Image>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardPage;
