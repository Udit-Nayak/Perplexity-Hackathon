"use client";

import { PatientRegisterForm } from "@/components/forms/RegisterForm";
import Image from "next/image";
import Link from "next/link";

interface PatientRegisterPageProps {
  params: {
    patientId: string;
  };
}

const PatientRegisterPage = ({ params }: PatientRegisterPageProps) => {
  const { patientId } = params;

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <img src="/assets/icons/logo-full.svg" alt="patient" className="mb-12 h-10 w-fit" />
          <PatientRegisterForm patientId={patientId} />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 CarePluse
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
};

export default PatientRegisterPage;