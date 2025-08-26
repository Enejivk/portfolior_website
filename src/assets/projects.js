// projects.js
import eventPlanner from "./eventPlanner360.png";
import work1 from "./work1.jpg";
import work4 from "./work4.jpg";

export const projects = [
  {
    id: 1,
    name: "Event Planner 360",
    image: eventPlanner,
    description:
      "A comprehensive event planning application with real-time updates and interactive features.",
    longDescription:
      "Event Planner 360 is a full-stack application designed to streamline the event planning process. It offers real-time updates, collaborative features, and a user-friendly interface that makes organizing events efficient and enjoyable. Users can create events, invite participants, manage RSVPs, and track all aspects of their event planning journey.",
    stacks: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    features: [
      "Real-time collaboration with Socket.io",
      "Interactive drag-and-drop event timeline",
      "Automated email notifications",
      "Mobile-responsive design",
      "User authentication and role management",
    ],
    challenges:
      "One of the biggest challenges was implementing real-time updates across multiple users without performance degradation. This was solved by optimizing Socket.io connections and implementing efficient data synchronization strategies.",
    link: "https://eventplanner360.example.com",
    github: "https://github.com/yourusername/event-planner-360",
    videoDemo: "https://www.youtube.com/embed/your-video-id",
    category: "Fullstack",
  },
  {
    id: 2,
    name: "E-Commerce Dashboard",
    image: work1,
    description:
      "An intuitive admin dashboard for managing online store operations.",
    longDescription:
      "This E-Commerce Dashboard provides store owners with powerful tools to manage their online business. The dashboard includes comprehensive analytics, inventory management, order processing, and customer relationship management features. Built with performance and scalability in mind, it can handle stores of any size.",
    stacks: ["React", "Redux", "Material UI", "Chart.js", "Firebase"],
    features: [
      "Real-time sales analytics",
      "Inventory management with low-stock alerts",
      "Customer segmentation and targeting",
      "Order processing and fulfillment tracking",
      "Customizable reporting dashboard",
    ],
    challenges:
      "Designing a system that could scale with growing businesses while maintaining performance was challenging. We implemented efficient data structures and lazy loading techniques to ensure the dashboard remains responsive even with large datasets.",
    link: "https://ecommerce-dash.example.com",
    github: "https://github.com/yourusername/ecommerce-dashboard",
    videoDemo: "https://www.youtube.com/embed/your-video-id",
    category: "React",
  },
  {
    id: 3,
    name: "FitTrack Mobile App",
    image: work4,
    description:
      "A fitness tracking mobile application with personalized workout plans.",
    longDescription:
      "FitTrack is a comprehensive fitness companion designed to help users achieve their health goals. The app offers personalized workout plans, nutrition tracking, progress visualization, and social features to keep users motivated. Built with React Native, it provides a seamless experience across both iOS and Android platforms.",
    stacks: [
      "React Native",
      "TypeScript",
      "Redux",
      "Firebase",
      "HealthKit/Google Fit APIs",
    ],
    features: [
      "Personalized workout recommendations based on user goals",
      "Nutrition tracking and meal planning",
      "Integration with wearable devices",
      "Progress visualization with interactive charts",
      "Social community features for motivation",
    ],
    challenges:
      "Integrating with various health tracking APIs across different devices presented significant challenges. We developed a unified adapter pattern to normalize data from different sources while maintaining accuracy.",
    link: "https://fittrack.example.com",
    github: "https://github.com/yourusername/fittrack-app",
    videoDemo: "https://www.youtube.com/embed/your-video-id",
    category: "Mobile App",
  },
];

export const getProjectById = (id) => {
  return projects.find((project) => project.id === parseInt(id));
};
