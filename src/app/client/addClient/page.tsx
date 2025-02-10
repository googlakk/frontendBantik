import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ClientProfile from "@/components/Pages/ClientProfile/ClientProfile";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Profile | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Profile page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const Profile = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-242.5">
        <Breadcrumb pageName="Client" />

        <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="relative z-20 h-35 md:h-65">
            <Image
              src={"/images/cover/cover-01.png"}
              alt="profile cover"
              className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
              width={970}
              height={260}
              style={{
                width: "auto",
                height: "auto",
              }}
            />
          </div>
          <ClientProfile />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Profile;
