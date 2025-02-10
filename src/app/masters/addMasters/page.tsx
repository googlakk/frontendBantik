import AddMasters from "@/components/Pages/Masters/AddMasters/addMasters";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import FormElements from "@/components/FormElements";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Form Elements | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Form Elements page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const AddMastersPage = () => {
  return (
    <DefaultLayout>
      <AddMasters />
    </DefaultLayout>
  );
};

export default AddMastersPage;
