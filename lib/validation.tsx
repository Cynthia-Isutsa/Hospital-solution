import { z } from "zod";


const UserFormValidation = z.object({
    name: z.string()
    .min(4, "Name must be at least 4 characters.")
    .max(50, "Name must be at most 50 characters."),

    email: z.string().email( "Invalid Email."),
      phone: z.string().refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number."),
  });

  
export default UserFormValidation;