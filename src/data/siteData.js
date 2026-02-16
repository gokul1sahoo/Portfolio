const profile = {
  name: "GOKUL SAHOO",
  role: "Full Stack Developer",
  tagline: "I build clean, fast, and human-friendly web experiences.",
  photo: "/images/FORMAL PICTURE.jpg",
  about:
    "I am a dedicated full-stack developer passionate about creating scalable and efficient web applications. I focus on writing clean code, building responsive interfaces, and developing robust backend systems. Always eager to learn and explore new technologies, I strive to deliver impactful digital solutions.",
  skills: [
    "🌐 Frontend Development",
    "⚙️ Backend Development (MERN)",
    "🗄️ Database",
    "🅱️ Bootstrap",
    "🎨 Tailwind CSS",
    "🐍 Python",
    "📊 NumPy",
    "📈 Pandas",
    "🔀 Git",
    "🐙 GitHub",
    "☕ Java"
  ],
  experience: [
    {
      role: "Full Stack Developer",
      company: "Fresher (Seeking Opportunities)",
      period: "2026 - Present",
      details: "Building projects, improved performance, and shipped features quickly."
    }
  ],
  education: [
    "🎓 B.Tech in CSE — Bengal College of Engineering&Technology(CGPA: 8.325)",
    "📚 XII (WBCHSE) — Chak Garupota S.S High School (86.8%)",
    "📖 X (WBBSE) — Chak Garupota S.S High School (90.4%)"
  ],
  contact: {
    email: "gokulsahoojb05@gmail.com",
    phone: "+91 8167602808",
    location: "Durgapur, India",
    socials: {
      facebook: "https://www.facebook.com/share/1CksanpF7D/",
      instagram: "https://www.instagram.com/gokul1sahoo?igsh=ZHFodncyN3hvcnVx",
      linkedin: "https://www.linkedin.com/in/gokul-sahoo-b19794315",
      github: "https://github.com/gokul1sahoo",
      gmail: "mailto:gokulsahoojb05@gmail.com"
    }
  }
};

const projects = [
  {
    title: "Project One",
    summary: "Hotel Management System: A web application for managing hotel bookings, room availability, and customer information.",
    stack: ["MERN Stack", "Bootstrap"],
    links: {
      live: "https://wandarlust-grqt.onrender.com",
      repo: "https://github.com/gokul1sahoo/Wanderlust.git"
    },
    image: "",
    order: 1
  },
  {
    title: "Project Two",
    summary: "Portfolio Website: A responsive and interactive portfolio website showcasing projects, skills, and experience.",
    stack: ["MERN Stack", "Bootstrap"],
    links: {
      live: "https://gokul1sahoo-portfolio.onrender.com",
      repo: "https://github.com/gokul1sahoo/Portfolio.git"
    },
    image: "",
    order: 2
  }
];

module.exports = { profile, projects };
