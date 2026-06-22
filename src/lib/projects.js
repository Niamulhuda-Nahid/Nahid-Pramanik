import imvio from "@/assets/Images/imvio.png";
import fullseat_thumbnail from "@/assets/Images/sandy.png";
import fullseat_banner from "@/assets/Images/fullseat_banner.png";
import fullseat_gallery_1 from "@/assets/Images/fullseat_gallery_1.png";
import fullseat_gallery_2 from "@/assets/Images/fullseat_gallery_2.png";
import fullseat_gallery_3 from "@/assets/Images/fullseat_gallery_3.png";
import fullseat_gallery_4 from "@/assets/Images/fullseat_gallery_4.png";
import secaax_thumbnail from "@/assets/Images/gtasign.png";
import secaax_gallery_1 from "@/assets/Images/secaax_gallery_1.png";
import secaax_gallery_2 from "@/assets/Images/secaax_gallery_2.png";
import secaax_gallery_3 from "@/assets/Images/secaax_gallery_3.png";
import secaax_gallery_4 from "@/assets/Images/secaax_gallery_4.png";
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
  {
  id: 2,
  title: "Full Seat – AI-Powered Restaurant Campaign Platform",
  category: "Marketing Automation SaaS",

  shortDescription:
    "Restaurant-focused marketing automation platform that helps business owners create AI-powered campaigns, engage customers through SMS and email, and track campaign performance from a centralized dashboard.",

  description:
    "Full Seat is a comprehensive restaurant marketing and customer engagement platform designed to help restaurant owners increase customer retention and drive repeat business. The platform enables restaurants to create and manage promotional campaigns, collect customer information through QR code interactions, generate marketing content with AI, and send targeted SMS and email campaigns. With built-in analytics, branding tools, customer management, and campaign automation features, Full Seat provides restaurants with an all-in-one solution for modern customer marketing.",

  thumbnail: fullseat_thumbnail,
  banner: fullseat_banner,

  liveUrl: "https://full-seat-azure.vercel.app",
  githubUrl: "Private Repository",

  duration: "3 Months",
  role: "Frontend Developer",
  client: "Confidential",
  status: "Completed",

  technologies: [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Redux Toolkit",
    "REST API",
    "AI Integration",
    "SMS Integration",
    "Email Integration",
    "QR Code Generator",
    "Chart Analytics",
    "Responsive Design"
  ],

  features: [
    "AI Campaign Generator",
    "Campaign Creation & Management",
    "Restaurant Marketing Automation",
    "Customer Management Dashboard",
    "QR Code Customer Acquisition",
    "SMS Campaign Delivery",
    "Email Campaign Delivery",
    "Customer Segmentation",
    "Campaign Scheduling",
    "Campaign Performance Analytics",
    "Logo Upload & Brand Customization",
    "Unlimited Campaign Support",
    "Customer Engagement Tracking",
    "Responsive Admin Dashboard",
    "Role-Based Access Management",
    "Real-Time Campaign Monitoring"
  ],

  challenges: [
    "Building a scalable campaign management workflow",
    "Managing large customer datasets efficiently",
    "Integrating AI-generated campaign content",
    "Handling SMS and email delivery workflows",
    "Creating responsive dashboards with analytics visualization"
  ],

  responsibilities: [
    "Developed responsive frontend interfaces using React and Tailwind CSS",
    "Integrated REST APIs for campaign, customer, and analytics management",
    "Implemented campaign creation and editing workflows",
    "Built customer management and segmentation features",
    "Integrated AI-powered campaign generation functionality",
    "Developed analytics dashboards and reporting interfaces",
    "Collaborated with backend developers and stakeholders to deliver features"
  ],

  gallery: [
    fullseat_gallery_1,
    fullseat_gallery_2,
    fullseat_gallery_3,
    fullseat_gallery_4
  ]
},
{
  id: 3,
  title: "Secaax – Freelance Marketplace Platform",
  category: "Marketplace SaaS Platform",

  shortDescription:
    "A Fiverr-style freelance marketplace connecting clients and freelancers with gig management, order processing, real-time messaging, Stripe payments, and an admin-controlled delivery approval workflow.",

  description:
    "Secaax is a modern freelance marketplace platform built to connect clients with skilled freelancers across various service categories. Similar to Fiverr, freelancers can create and publish gigs, while clients can browse services, place orders, communicate through real-time chat, and manage project progress. A unique feature of the platform is its quality assurance workflow, where completed orders are first submitted to a Super Admin review queue before being delivered to clients. This ensures service quality, compliance, and customer satisfaction. The platform also includes Stripe payment integration, order tracking, user management, and a comprehensive admin dashboard.",

  thumbnail: secaax_thumbnail,
  banner: secaax_thumbnail,

  liveUrl: "https://secaa.vercel.app/",
  githubUrl: "Private Repository",

  duration: "4 Months",
  role: "Frontend Developer",
  client: "Confidential",
  status: "Completed",

  technologies: [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Redux Toolkit",
    "REST API",
    "Stripe",
    "Socket.io",
    "Real-Time Messaging",
    "Role-Based Access Control",
    "Responsive Design"
  ],

  features: [
    "Client, Freelancer & Super Admin Roles",
    "Gig Creation & Publishing",
    "Gig Search & Discovery",
    "Service Categories & Filtering",
    "Order Placement & Management",
    "Real-Time Chat System",
    "Stripe Payment Integration",
    "Order Progress Tracking",
    "Freelancer Dashboard",
    "Client Dashboard",
    "Super Admin Dashboard",
    "Delivery Approval Workflow",
    "Admin Review Queue",
    "Order Revision Requests",
    "Notifications System",
    "User Profile Management",
    "Secure Authentication",
    "Responsive Marketplace Experience"
  ],

  gallery: [
    secaax_gallery_1,
    secaax_gallery_2,
    secaax_gallery_3,
    secaax_gallery_4
  ]
}
];
