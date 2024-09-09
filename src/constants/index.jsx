import { IoLinkSharp, IoStatsChart } from "react-icons/io5";
import { FaSliders } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { IoIosCloud } from "react-icons/io";
import { RiCustomerServiceFill } from "react-icons/ri";

import client1 from "../assets/images/client-1.jpg";
import client2 from "../assets/images/client-2.jpg";
import client3 from "../assets/images/client-3.jpg";
import client4 from "../assets/images/client-4.jpg";
import client5 from "../assets/images/client-5.jpg";
import client6 from "../assets/images/client-6.jpg";

export const features = [
  {
    id: 1,
    title: "Real-Time Analytics",
    content:
      "Monitor your business metrics in real-time with our advanced analytics tools, helping you make informed decisions instantly.",
    icon: <IoStatsChart />,
  },
  {
    id: 2,
    title: "Customizable Dashboards",
    content:
      "Tailor your dashboard to display the most relevant information, giving you full control over how you view your data.",
    icon: <FaSliders />,
  },
  {
    id: 3,
    title: "Seamless Integrations",
    content:
      "Easily connect with your favorite tools and services to create a unified workflow that enhances your productivity.",
    icon: <IoLinkSharp />,
  },
  {
    id: 4,
    title: "Enhanced Security",
    content:
      "Protect your data with our state-of-the-art security protocols, ensuring that your business information stays safe and secure.",
    icon: <MdOutlineSecurity />,
  },
  {
    id: 5,
    title: "Cloud-Based Access",
    content:
      "Access your data anytime, anywhere with our secure cloud-based platform, designed to keep your business running smoothly on the go.",
    icon: <IoIosCloud />,
  },
  {
    id: 6,
    title: "24/7 Support",
    content:
      "Get round-the-clock support from our expert team, ready to assist you with any issues or questions you might have.",
    icon: <RiCustomerServiceFill />,
  },
];

export const pricingPlans = [
  {
    id: 1,
    title: "Basic Plan",
    price: "$29",
    features: ["Basic support", "Access to all features", "1 user account"],
    description:
      "Ideal for individuals or small teams looking for essential features to get started.",
    mostPopular: false,
  },
  {
    id: 2,
    title: "Pro Plan",
    price: "$79",
    features: [
      "Priority support",
      "Advanced features",
      "Up to 5 user accounts",
    ],
    description:
      "Perfect for growing teams that need more advanced tools and priority support.",
    mostPopular: true,
  },
  {
    id: 3,
    title: "Enterprise Plan",
    price: "$119",
    features: ["24/7 support", "Custom solutions", "Unlimited user accounts"],
    description:
      "Designed for larger organizations requiring custom solutions and unlimited access.",
    mostPopular: false,
  },
];

export const sections = [
  {
    id: 1,
    type: "hero",
    title: "Empowering Your Business with",
    subtitle: "Innovative Solutions",
    description:
      "We provide innovative solutions to help your business succeed. From start-ups to established companies, our tailored strategies ensure growth and efficiency at every stage.",
    component: "Hero",
  },
  {
    id: 2,
    type: "features",
    title: "Our",
    subtitle: "Features",
    description: "Discover what makes our product stand out from the rest.",
    component: "Features",
  },
  {
    id: 3,
    type: "pricing",
    title: "Pricing Plans",
    subtitle: "",
    description: "",
    component: "Pricing",
  },
  {
    id: 4,
    type: "testimonials",
    title: "What Our Clients Say",
    subtitle: "",
    description: "",
    component: "Testimonials",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    role: "CEO at TechCorp",
    content:
      "This service has transformed our business operations. The innovative solutions provided are top-notch and have significantly improved our efficiency.",
    image: client1,
  },
  {
    id: 2,
    name: "John Smith",
    role: "Founder of StartupX",
    content:
      "An exceptional experience from start to finish. The team understood our needs and delivered results beyond our expectations. The personalized approach really set them apart.",
    image: client2,
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "Marketing Director at MarketMasters",
    content:
      "Highly recommend their services. The strategies and solutions offered have been crucial in driving our growth and achieving our goals. Our marketing campaigns have never been more successful.",
    image: client3,
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "COO at FinTech Solutions",
    content:
      "Their expertise and innovative thinking have been a game-changer for us. Our operational efficiency has increased dramatically, and we've seen a significant improvement in our bottom line.",
    image: client4,
  },
  {
    id: 5,
    name: "Sarah Wilson",
    role: "Head of Product at Creatives Inc.",
    content:
      "Working with this team has been a pleasure. Their solutions are creative, well-executed, and have made a noticeable impact on our product development cycle. We're now able to launch new features faster and with greater confidence.",
    image: client5,
  },
  {
    id: 6,
    name: "David Lee",
    role: "CTO at InnovateX",
    content:
      "The level of innovation and dedication this team brings to the table is unmatched. Their solutions have propelled our technology infrastructure to new heights, allowing us to scale efficiently.",
    image: client6,
  },
];

export const resourcesLinks = [
  { label: "Documentation", href: "/" },
  { label: "API Reference", href: "/" },
  { label: "Guides", href: "/" },
  { label: "Tutorials", href: "/" },
  { label: "Blog", href: "/" },
];

export const platformLinks = [
  { label: "Overview", href: "/" },
  { label: "Features", href: "/" },
  { label: "Pricing", href: "/" },
  { label: "Integrations", href: "/" },
  { label: "Status", href: "/" },
];

export const communityLinks = [
  { label: "Forum", href: "/" },
  { label: "Events", href: "/" },
  { label: "Slack", href: "/" },
  { label: "GitHub", href: "/" },
  { label: "Twitter", href: "/" },
];

export const signInInputFields = [
  { id: 1, type: "email", placeholder: "you@company.com" },
  { id: 2, type: "password", placeholder: "Password" },
];

export const signUpInputFields = [
  {
    label: "Full Name",
    placeholder: "First and last name",
    type: "text",
    id: 1,
  },
  {
    label: "Company Name",
    placeholder: "Your company or project name",
    type: "text",
    id: 2,
  },
  { label: "Work Email", placeholder: "you@company.com", type: "email", id: 3 },
  { label: "Password", placeholder: "Password", type: "password", id: 4 },
];
