import lovixPreview from "../assets/about2.jpg";
const foodDeliveryPreview = "https://tse3.mm.bing.net/th/id/OIP.A5nZKwTN5KFz_MUtzI4OgwHaEK?r=0&pid=Api&h=220&P=0";
import lovixGalleryOne from "../assets/1715371733808.jpeg";
import lovixGalleryTwo from "../assets/pngtree-person-holding-glowing-sphere-with-digital-icons-representing-data-security-and-image_17484318.webp";
import lovixGalleryThree from "../assets/imagesil.jpeg";

const shoppingCartPreview = "https://static.vecteezy.com/system/resources/previews/029/840/418/large_2x/e-commerce-shopping-cart-with-multiple-products-a-sunlit-abstract-background-e-commerce-concept-ai-generative-free-photo.jpg";

export const projects = [
  {
    id: "lovix-app",
    number: "01 / 03",
    name: "Lovix App",
    category: "Application Development",
    image: lovixPreview,
    imageAlt: "Digital application interface concept for the Lovix App project",
    previewLabel: "LOVIX / APP",
    previewMark: "l.",
    previewEyebrow: "YOUR SPACE",
    previewTitle: "Designed around you.",
    description:
      "Lovix App is a modern digital application project focused on delivering a simple, responsive, and user-friendly experience with a professional interface and smooth navigation.",
    technologies: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"],
    overview: [
      "Lovix App is a modern digital application project focused on delivering a simple, responsive, and user-friendly experience with a professional interface and smooth navigation.",
      "Its product direction emphasizes clarity and consistency, helping users move through the application naturally across desktop, tablet, and mobile screens.",
    ],
    overviewHeading: "A focused app experience, from first touch.",
    problem:
      "Deliver a polished digital application with a responsive interface, intuitive information structure, and navigation that feels consistent throughout the user journey.",
    objective: "Make every interaction feel clear and effortless.",
    features: [
      "Simple, responsive application experience",
      "Professional interface with a clear information hierarchy",
      "Smooth, predictable navigation between key areas",
      "Designed to support consistent use across screen sizes",
    ],
    role: "Project experience and design direction focused on a clear, responsive interface.",
    gallery: [
      { src: lovixGalleryOne, caption: "Application overview", alt: "Lovix application overview" },
      { src: lovixGalleryTwo, caption: "Technology concept", alt: "Digital technology concept for the Lovix app" },
      { src: lovixGalleryThree, caption: "Responsive experience", alt: "Responsive digital experience for the Lovix app" },
    ],
  },
  {
    id: "shopping-cart",
    number: "02 / 03",
    name: "Online Shopping Cart",
    category: "Web Development",
    image: shoppingCartPreview,
    imageAlt: "Shopping cart filled with products on a warm abstract background",
    previewLabel: "ONLINE / STORE",
    previewMark: "sc",
    previewEyebrow: "SHOP BY CATEGORY",
    previewTitle: "Everything you need.",
    description:
      "A full stack e-commerce application where users can browse products, add items to a cart, and place orders, with an admin panel to manage products and orders.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JPA",
      "MySQL",
      "React",
      "REST API",
    ],
    overview: [
      "The Online Shopping Cart is a full stack e-commerce application where customers can browse products, manage a shopping cart, place orders, and review their order history. Administrators can manage the product catalogue and customer orders from a dedicated panel.",
      "It addresses the friction of disconnected product browsing, cart management, and order administration by bringing the shopping journey and store operations together in one application.",
    ],
    overviewHeading: "A simpler way to shop online.",
    problem:
      "Bring product discovery, secure checkout, and store administration together in one straightforward online shopping experience.",
    objective: "Make browsing, buying, and managing orders feel seamless.",
    features: [
      "JWT login and registration",
      "Product listing with search and category filter",
      "Add to cart, update quantity, remove items",
      "Checkout and order history",
      "Admin panel for products and orders",
    ],
    role: "Built the backend REST APIs, database design, and frontend.",
    gallery: [
      { src: shoppingCartPreview, caption: "Home page", alt: "Shopping cart filled with products on a warm abstract background" },
      { src: "https://wpwinners.com/wp-content/uploads/2025/04/image_8a05c22718bfb2786537cd4c9b50c130-scaled.jpg", caption: "Cart page", alt: "Online shopping cart page" },
      { src: "https://img.freepik.com/premium-photo/online-shopping-checkout-page-laptop-with-cart-full-items_1235831-51914.jpg", caption: "Checkout page", alt: "Online shopping checkout page displayed on a laptop" },
    ],
  },
  {
    id: "food-delivery",
    number: "03 / 03",
    name: "Food Delivery Web App",
    category: "Web Development",
    image: foodDeliveryPreview,
    imageAlt: "Restaurant home page for the Food Delivery Web App",
    previewLabel: "FOOD / DELIVERY",
    previewMark: "fd",
    previewEyebrow: "FIND YOUR NEXT MEAL",
    previewTitle: "Good food, delivered.",
    description:
      "A food ordering application where users can browse restaurants, order food, and track order status, while restaurant owners manage menus and orders.",
    technologies: [
      "Java",
      "Spring Boot",
      "JPA",
      "MySQL",
      "React",
      "REST API",
    ],
    overview: [
      "The Food Delivery Web App connects diners with restaurants through an online ordering experience. Users can discover restaurants and menus, place orders, and follow progress, while restaurant owners manage their menus and incoming orders.",
      "It solves the coordination gap between customers placing an order and restaurants preparing it by keeping ordering and status updates clear in one place.",
    ],
    overviewHeading: "A clearer journey from menu to meal.",
    problem:
      "Make restaurant discovery, food ordering, and order progress easy to follow for customers and restaurant teams.",
    objective: "Connect every meal to a clear delivery journey.",
    features: [
      "User registration and login",
      "Restaurant and menu listing with search",
      "Cart and order placement",
      "Order status tracking (Placed, Preparing, Delivered)",
      "Restaurant dashboard for menu and order management",
    ],
    role: "Built the backend REST APIs, database design, and frontend.",
    gallery: [
      { src: "https://tse3.mm.bing.net/th/id/OIP.A5nZKwTN5KFz_MUtzI4OgwHaEK?r=0&pid=Api&h=220&P=0", caption: "Restaurant home page", alt: "Food delivery restaurant home page" },
      { src: "https://i.etsystatic.com/40752306/r/il/33e538/5946098476/il_fullxfull.5946098476_8uc5.jpg", caption: "Menu and cart", alt: "Food delivery menu and cart page" },
      { src: "https://oneclickpos.pk/wp-content/uploads/2026/03/restaurant-pos-management-system-billing-inventory-online-orders.webp", caption: "Order tracking", alt: "Restaurant order management and online order tracking system" },
    ],
  },
];
