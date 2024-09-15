import { LuCode2 } from "react-icons/lu";
import { MdOutlineDraw } from "react-icons/md";
import { GrOptimize } from "react-icons/gr";
import { BsBrowserChrome } from "react-icons/bs";
import { GrIntegration } from "react-icons/gr";
import { SiProtonvpn } from "react-icons/si";

const serviceItems = [
  {
    id: 1,
    icon: <LuCode2 />,
    name: "Web Development",
    description:
      "Creating visually appealing and responsive websites using HTML, CSS, and JavaScript. This includes building the user interface (UI) and ensuring a great user experience (UX) across devices.",
  },
  {
    id: 2,
    icon: <MdOutlineDraw />,
    name: "Responsive Design",
    description:
      "Ensuring websites work seamlessly across a range of devices (desktops, tablets, and smartphones) through responsive design techniques.",
  },
  {
    id: 3,
    icon: <GrOptimize />,
    name: "Performance Optimization",
    description:
      "Optimizing websites for speed and performance by minimizing load times, optimizing images, and using efficient coding practices.",
  },
  {
    id: 4,
    icon: <BsBrowserChrome />,
    name: "Cross-Browser Compatibility",
    description:
      "Making sure websites function consistently across different web browsers (Chrome, Firefox, Safari, etc.).",
  },
  {
    id: 5,
    icon: <GrIntegration />,
    name: "Integration with Backend",
    description:
      "Connecting the frontend with backend services and APIs to fetch or submit data, often using technologies like AJAX, RESTful APIs, or GraphQL.",
  },
  {
    id: 6,
    icon: <SiProtonvpn />,
    name: "UI/UX Prototyping",
    description:
      "Creating interactive prototypes and wireframes to visually demonstrate the layout, functionality, and flow of a website or web application before development. This helps clients understand the design and user experience in advance.",
  },
];

export default serviceItems;
