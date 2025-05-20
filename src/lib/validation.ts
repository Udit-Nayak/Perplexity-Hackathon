import { z } from "zod";

// Validation schema for the initial patient form
export const UserFormValidation = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(1, "Phone number is required"),
});

// Validation schema for the patient registration form (second step)
export const PatientRegistrationSchema = z.object({
  bloodGroup: z.string().min(1, "Blood group is required").refine(val => val !== "select", {
    message: "Please select a blood group"
  }),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  gender: z.string().min(1, "Gender is required").refine(val => val !== "select", {
    message: "Please select a gender"
  }),
  weight: z.string().min(1, "Weight is required"),
  height: z.string().min(1, "Height is required"),
  emergencyContact: z.string().min(1, "Emergency contact is required"),
  emergencyContactPhone: z.string().min(1, "Emergency contact phone is required"),
  address: z.string().min(1, "Address is required"),
});