"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface SubmitButtonProps {
  isLoading: boolean;
  children: React.ReactNode;
}

const SubmitButton = ({ isLoading, children }: SubmitButtonProps) => {
  return (
    <Button
      type="submit"
      className="flex-center w-full gap-2 rounded-md bg-primary px-4 py-3 text-white"
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <Image
            src="/assets/icons/loader.svg"
            alt="loader"
            width={24}
            height={24}
            className="animate-spin"
          />
          Loading...
        </>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;