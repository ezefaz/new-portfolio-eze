export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "/",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "LandFast",
    des: "AI-Powered Platform for Getting a Job Easy and Faster.",
    img: "/landfast.jpeg",
    iconLists: ["/ai.svg", "/ats.svg", "/mock.svg", "/resume.svg"], // Example icons, replace with actual ones
    link: "https://landfast.app/",
  },
  {
    id: 2,
    title: "Savemelin",
    des: "Smart Online Purchase Platform & Vendors Management System.",
    img: "/savemelin.jpg",
    iconLists: ["/savings.svg", "/shopping.svg", "/data.svg"], // Example icons, replace with actual ones
    link: "https://savemelin.com/",
  },
  {
    id: 3,
    title: "WebGeenix",
    des: "Software Development and IT Solutions Agency.",
    img: "/webgeenix.jpg",
    iconLists: ["/development.svg", "/it.svg", "/solutions.svg"], // Example icons, replace with actual ones
    link: "https://webgeenix.com/",
  },
  {
    id: 4,
    title: "PalermoJai",
    des: "Website for a fully furnished apartment rental agency.",
    img: "/palermito.jpg",
    iconLists: ["/rental.svg", "/booking.svg", "/lodging.svg"], // Example icons, replace with actual ones
    link: "https://palermojai.com/",
  },
  // {
  //   id: 5,
  //   title: "PsicoApp",
  //   des: "All-in-one platform for psychologists in Argentina. Connects patients with psychologists for remote consultations.",
  //   img: "/images/psicoapp2.jpg",
  //   iconLists: ["/health.svg", "/chat.svg", "/payment.svg"], // Example icons, replace with actual ones
  //   link: "https://psico-app.vercel.app/",
  // },
];

export const testimonials = [
  {
    quote:
      "Ezequiel is an excellent quality front-end oriented developer. He is creative, self-taught and decisive. He knows how to create intuitive and attractive designs. Thanks to the fact that it is aware of the clients needs, it manages to achieve the maximum experience for the user. I highlight his active listening, good camaraderie, and joy. He also knows how to ask for help when necessary!.",
    name: "Jessica",
    title: "Developer",
  },
  {
    quote:
      "I was part of the same team as Ezequiel in a project and he was a key person in the frontend, he is a genius, he had initiative when looking for different tools and implementing them in the project giving a great visual appearance to the page. He is a self-taught person who strives to achieve his goals. He is also an excellent companion and human being. It was a pleasure to work with him.",
    name: "Miguel",
    title: "Developer",
  },
  {
    quote:
      "Ezequiel worked very efficiently, always focusing on the details of the work. He also adapted very well to the team work. He knew how to apply his skills on the required tasks to reach our goals. I strongly recommend his skills.",
    name: "Pablo",
    title: "Developer",
  },
  {
    quote:
      "Ezequiel is an excellent colleague, I shared a team with him, although not in the same sector within the project, beyond this I could see that he knows how to handle himself very well within a team. He is a specialist in design, he likes things to look good and I notice good UX/UI oriented programming. On the other hand, Ezequiel manages good communication, listens actively and is always willing to learn new tools.",
    name: "Tomas",
    title: "Developer",
  },
  {
    quote:
      "Ezequiel is an excellent developer, has a great learning capacity and has great creativity. It can offer the most optimal solution for any problem or task assigned to it and has great potential for the frontend!",
    name: "Jhoskar",
    title: "Developer",
  },
  {
    quote:
      "Eze is an excellent professional not only technically but also socially, he works as a team, is self-taught and is also a front-end expert. A great pleasure to work with him.",
    name: "Alejandro",
    title: "Developer",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperiences = [
  {
    id: 1,
    title: "Software Developer at Envone",
    description:
      "Backend and Frontend development (Full Stack) of user-oriented applications. Monitor security updates and problems found with project dependencies. Necessary improvements and updates implementing modern security and development practices. Implementation of automated tests integrated into development and maintenance workflows.",
    stack:
      "Node.js - React.js - Next.js - Typescript - Redux - MySQL - JavaScript - Cypress - Mocha - Docker - Zustand",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Developer & Designer - PalermoJai",
    description:
      "As a web developer and social media manager, I had the opportunity to work with side by side with Palermojai, a luxury fully furnished rental apartments company based in Buenos Aires. My main responsibilities included: Designing and Developing a new website that showcases the company's stunning apartments, as well as integrating a reservation system to facilitate online bookings. Availability of the website in three languages. Configuration and maintenance of the website. Help improve the business through my knowledge and experience in digital business.",
    stack: "Node.js - React.js - Next.js - Typescript - Redux - SCSS",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Developer at Vicla SA",
    description:
      "Responsibilities included: Development of an e-commerce website, app, and admin dashboard catering specifically to Security Forces, Armed Forces, and Industrial Footwear customers. Aimed to create a user-friendly platform for an enhanced shopping experience and increased sales. Effectively collaborated within a team, managed time efficiently, and maintained a client-centric approach. Contributed ideas to enhance the website, focusing on delivering client value. ",
    stack:
      "Node.js - React.js - Next.js - Typescript - Zustand - MySQL - Tailwind CSS - Github",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Developer - App Savemelin",
    description:
      "Development of an smart online shopping platform that allow users to purchase their favorite products at their low cost. This app scrapes data from mercadolibre at ensure that the user is gonna purchase the lowest product price. This app was designed and developed for ensure an equal treat between seller-customer relationship.",
    stack:
      "Node.js - React.js - Next.js  - Typescript - Mongoose - MongoDB - Tailwind CSS - Cheerio - BrightData",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "github.com/ezefaz",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "x.com/fazdev",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/efaszczak",
  },
];
