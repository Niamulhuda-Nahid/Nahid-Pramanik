import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters"),
  subject: z
    .string()
    .trim()
    .min(2, "Subject must be at least 2 characters")
    .max(100, "Subject must be less than 100 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters"),
});

export default function useSubmitContact() {
  // 1. Defain form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      subject: "",
      message: "",
    },
  });

  // 2. onSubmit function
  function onSubmit(values) {
    console.log("values", values);
  }

  return { form, onSubmit };
}
