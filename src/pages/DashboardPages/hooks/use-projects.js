import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
// import { useCreateProjectMutation } from "@/Redux/endpoints/projectApi";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  category: z.string().min(1, "Category is required"),
  shortDescription: z
    .string()
    .min(10, "Short description is required"),
  description: z.string().min(20, "Description is required"),
  liveUrl: z
    .string()
    .url("Please enter a valid URL"),
  githubUrl: z
    .string()
    .url("Please enter a valid GitHub URL")
    .optional()
    .or(z.literal("")),

  duration: z.string().min(1, "Duration is required"),
  role: z.string().min(1, "Role is required"),
  client: z.string().min(1, "Client is required"),
  status: z.string().min(1, "Status is required"),

  technologies: z
    .array(z.string())
    .min(1, "Add at least one technology"),

  features: z
    .array(z.string())
    .min(1, "Add at least one feature"),

  thumbnail: z.any().optional(),
  banner: z.any().optional(),
  gallery: z.array(z.any()).optional(),
});

export default function useProjectForm() {
  // const [createProject] = useCreateProjectMutation();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      category: "",
      shortDescription: "",
      description: "",
      liveUrl: "",
      githubUrl: "",
      duration: "",
      role: "",
      client: "",
      status: "",
      technologies: [],
      features: [],
      thumbnail: null,
      banner: null,
      gallery: [],
    },
  });

  async function onSubmit(values) {
    try {
      console.log(values);

      // await createProject(values).unwrap();

      toast.success("Project created successfully!");
    } catch (error) {
      console.error(error);
      toast.error(error?.data?.message || "Something went wrong");
    }
  }

  return {
    form,
    onSubmit,
  };
}