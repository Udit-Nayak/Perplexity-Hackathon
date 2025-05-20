// // lib/actions/patient.actions.js
// "use server";

// import { databases } from "@/lib/appwrite";
// import { PatientValidation } from "@/lib/validation";
// import { revalidatePath } from "next/cache";

// export const createUser = async (user) => {
//   try {
//     // First check if user already exists by email
//     const existingUsers = await databases.listDocuments(
//       process.env.NEXT_PUBLIC_DATABASE_ID,
//       process.env.NEXT_PUBLIC_PATIENTS_COLLECTION_ID,
//       [
//         // Filter users by email (assuming email is unique)
//         `email=${user.email}`
//       ]
//     );

//     // If user exists, return the user without creating a new one
//     if (existingUsers.documents.length > 0) {
//       const existingUser = existingUsers.documents[0];
      
//       // Check if user has completed registration (has medical details)
//       if (existingUser.isFirstVisit === false) {
//         // User has already completed registration
//         return { ...existingUser, isNewUser: false };
//       } else {
//         // User exists but hasn't completed medical registration
//         return { ...existingUser, isNewUser: true };
//       }
//     }

//     // Create new user if they don't exist
//     const newUser = await databases.createDocument(
//       process.env.NEXT_PUBLIC_DATABASE_ID,
//       process.env.NEXT_PUBLIC_PATIENTS_COLLECTION_ID,
//       "unique()",
//       {
//         name: user.name,
//         email: user.email,
//         phone: user.phone,
//         isFirstVisit: true, // Mark that they need to complete registration
//       }
//     );

//     return { ...newUser, isNewUser: true };
//   } catch (error) {
//     console.error("Error creating user:", error);
//     throw error;
//   }
// };

// export const updatePatientDetails = async (patientId, patientDetails) => {
//   try {
//     // Update the patient document with medical details
//     const updatedPatient = await databases.updateDocument(
//       process.env.NEXT_PUBLIC_DATABASE_ID,
//       process.env.NEXT_PUBLIC_PATIENTS_COLLECTION_ID,
//       patientId,
//       {
//         ...patientDetails,
//         isFirstVisit: false, // Mark that they've completed registration
//       }
//     );

//     revalidatePath("/dashboard");
    
//     return updatedPatient;
//   } catch (error) {
//     console.error("Error updating patient details:", error);
//     throw error;
//   }
// };

// export const getPatientById = async (patientId) => {
//   try {
//     const patient = await databases.getDocument(
//       process.env.NEXT_PUBLIC_DATABASE_ID,
//       process.env.NEXT_PUBLIC_PATIENTS_COLLECTION_ID,
//       patientId
//     );
    
//     return patient;
//   } catch (error) {
//     console.error("Error fetching patient:", error);
//     throw error;
//   }
// };