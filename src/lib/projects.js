import imvio from "@/assets/Images/imvio.png";
import sandy from "@/assets/Images/sandy.png";
import gtasign from "@/assets/Images/gtasign.png";
import imvio_banner from "@/assets/Images/imvio-banner.png";
import imvio_gallery_1 from "@/assets/Images/imvio_gallery-1.png";
import imvio_gallery_2 from "@/assets/Images/imvio_gallery-2.png";
import imvio_gallery_3 from "@/assets/Images/imvio_gallery-3.png";
import imvio_gallery_4 from "@/assets/Images/imvio_gallery-4.png";

export const projects = [
  {
    id: 1,
    title: "Imvio – AI Image Generation & Editing Platform",
    category: "AI SaaS Platform",
    shortDescription:
      "AI-powered image generation and editing platform with wall art creation, style transformation, printing, sharing, and download capabilities.",
    description:
      "Imvio is a modern AI-powered creative platform that enables users to generate images from text prompts, edit existing images using AI instructions, apply artistic styles, create wall art, download high-quality outputs, share creations, and order print-ready artwork. The platform provides a complete workflow from idea generation to final visual creation.",
    thumbnail: imvio,
    banner: imvio_banner,
    liveUrl: "https://imvio.com.au",
    githubUrl: "https://github.com/imvio",
    duration: "2 Months",
    role: "Frontend Developer",
    client: "Confidential",
    status: "Completed",
    technologies: [
      "React",
      "Javascript",
      "Tailwind CSS",
      "Redux Toolkit",
      "REST API",
      "AI Integration",
      "Meta Pixel",
    ],
    features: [
      "AI Text-to-Image Generation",
      "Prompt-Based Image Editing",
      "Multiple Artistic Styles",
      "Wall Art Generation",
      "Image Download",
      "Image Sharing",
      "Print Ready Artwork",
      "Responsive Design",
      "User Authentication",
      "Project Management Dashboard",
    ],
    gallery: [imvio_gallery_1, imvio_gallery_2, imvio_gallery_3, imvio_gallery_4],
  },
];
