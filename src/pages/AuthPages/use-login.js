import { useUserLoginMutation } from "@/Redux/endpoints/authApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export default function useLogin() {
  const [userLogin] = useUserLoginMutation();
  const navigate = useNavigate();
  // 1. Defain form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. onSubmit function
  async function onSubmit(values) {
    // console.log("Form values:", values);
    try {
      const response = await userLogin(values).unwrap();
    //   console.log("Login successful:", response);
      if (response?.success) {
        toast.success(response?.message || "Login successful!");
        navigate("/admin/projects");
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error(error?.message);
    }
  }

  return { form, onSubmit };
}
