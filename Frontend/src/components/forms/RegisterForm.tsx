"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import SubmitButton from "../SubmitButton";

// Define the validation schema for patient registration
const PatientRegistrationSchema = z.object({
  bloodGroup: z.string().min(1, "Blood group is required"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  gender: z.string().min(1, "Gender is required"),
  weight: z.string().min(1, "Weight is required"),
  height: z.string().min(1, "Height is required"),
  allergies: z.string().optional(),
  medicalConditions: z.string().optional(),
  emergencyContact: z.string().min(1, "Emergency contact is required"),
  emergencyContactPhone: z.string().min(1, "Emergency contact phone is required"),
  address: z.string().min(1, "Address is required"),
});

export const PatientRegisterForm = ({ patientId }: { patientId: string }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof PatientRegistrationSchema>>({
    resolver: zodResolver(PatientRegistrationSchema),
    defaultValues: {
      bloodGroup: "",
      dateOfBirth: "",
      gender: "",
      weight: "",
      height: "",
      allergies: "",
      medicalConditions: "",
      emergencyContact: "",
      emergencyContactPhone: "",
      address: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof PatientRegistrationSchema>) => {
    setIsLoading(true);

    try {
      console.log("Patient registration data:", values);
      console.log("Patient ID:", patientId);
      
      // Implement your registration logic here
      // const updatedPatient = await updatePatientDetails(patientId, values);
      
      // If successful, redirect to dashboard or confirmation page
      router.push('/dashboard');
    } catch (error) {
      console.error("Error registering patient details:", error);
    }

    setIsLoading(false);
  };

  // Blood group options
  const bloodGroupOptions = [
    { label: "Select Blood Group", value: "select" },
    { label: "A+", value: "A+" },
    { label: "A-", value: "A-" },
    { label: "B+", value: "B+" },
    { label: "B-", value: "B-" },
    { label: "AB+", value: "AB+" },
    { label: "AB-", value: "AB-" },
    { label: "O+", value: "O+" },
    { label: "O-", value: "O-" },
  ];

  // Gender options
  const genderOptions = [
    { label: "Select Gender", value: "select" },
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
    { label: "Prefer not to say", value: "not_specified" },
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
        <section className="mb-6 space-y-4">
          <h1 className="header">Patient Registration</h1>
          <p className="text-dark-700">Please provide your medical details to complete registration.</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CustomFormField
            fieldType={FormFieldType.SELECT}
            control={form.control}
            name="bloodGroup"
            label="Blood Group"
            options={bloodGroupOptions}
            iconSrc="/assets/icons/blood-drop.svg"
            iconAlt="blood group"
          />

          <CustomFormField
            fieldType={FormFieldType.DATE}
            control={form.control}
            name="dateOfBirth"
            label="Date of Birth"
            iconSrc="/assets/icons/calendar.svg"
            iconAlt="calendar"
          />

          <CustomFormField
            fieldType={FormFieldType.SELECT}
            control={form.control}
            name="gender"
            label="Gender"
            options={genderOptions}
            iconSrc="/assets/icons/user.svg"
            iconAlt="gender"
          />

          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="weight"
            label="Weight (kg)"
            placeholder="70"
            iconSrc="/assets/icons/weight.svg"
            iconAlt="weight"
          />

          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="height"
            label="Height (cm)"
            placeholder="170"
            iconSrc="/assets/icons/height.svg"
            iconAlt="height"
          />

          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="emergencyContact"
            label="Emergency Contact Name"
            placeholder="Jane Doe"
            iconSrc="/assets/icons/user.svg"
            iconAlt="emergency contact"
          />

          <CustomFormField
            fieldType={FormFieldType.PHONE_INPUT}
            control={form.control}
            name="emergencyContactPhone"
            label="Emergency Contact Phone"
            placeholder="(555) 123-4567"
          />

          <div className="md:col-span-2">
            <CustomFormField
              fieldType={FormFieldType.TEXTAREA}
              control={form.control}
              name="address"
              label="Address"
              placeholder="Your full address"
              iconSrc="/assets/icons/map-pin.svg"
              iconAlt="address"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <SubmitButton isLoading={isLoading}>Complete Registration</SubmitButton>
          <button
            type="button"
            onClick={() => router.back()}
            className="text-center text-gray-500 hover:text-gray-700"
          >
            Back
          </button>
        </div>
      </form>
    </Form>
  );
};