// 个人信息配置 - 在这里修改你的所有个人信息
const personalInfo = {
  // 基本信息
  name: "Tobias Wong",
  title: "Web Developer",
  subtitle: "Web Developer & UI/UX Enthusiast",

  // 简介
  greeting: "Hello, I'm",
  bio: `I’m a frontend engineer dedicated to continuous learning and staying up-to-date with the latest web technologies. 
        I’m passionate about adapting to industry changes and building modern, effective user experiences.​​​​​​​​​​​​​​​​`,

  // 关于我
  aboutDescription1: `Detail-oriented and collaborative front-end developer with strong proficiency in Vue.js, JavaScript, and Python. 
                    Experienced in building responsive, interactive web applications and integrating front-end components with back-end systems.`,
  aboutDescription2: `Eager to contribute to a dynamic development team to create highquality user experiences 
                    while leveraging a strong foundation in UI/UX design and version control.`,

  // 联系信息
  email: "wangliuliu241@gmail.com",
  phone: "+1 (249) 979-1482",
  location: "Canada",
  locationFull: "Canada",
  availability: "Open to opportunities",

  // 社交媒体链接
  social: {
    github: "https://github.com/wxhcw",
    linkedin: "https://www.linkedin.com/in/tobias-w-15468a210",
    twitter: "https://x.com",
    email: "mailto:wangliuliu241@gmail.com",
    dribbble: "https://dribbble.com",
  },

  // 图片配置（从独立文件加载）
  // heroImage 和 aboutImage 将从 hero-image.js 和 about-image.js 加载
  get heroImage() {
    return typeof heroImageData !== 'undefined' ? heroImageData : '';
  },
  get aboutImage() {
    return typeof aboutImageData !== 'undefined' ? aboutImageData : '';
  },

  // 简历下载链接（指向根目录的 PDF 文件）
  resumeLink: "./resource/Tobias_WebDeveloper.pdf",
  // 项目列表配置
  projects: [
    {
      id: "job-seeker",
      title: "Jobseeker Platform",
      description:
        "A responsive frontend for a job-search platform that lets users create profiles, browse and filter listings, and submit applications.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      viewLink: "https://job.klhiisa.org/",
      github: "https://github.com/wxhcw/jobseeker_frontend",
      image: "./resource/jobseeker.png",
    },
    {
      id: "ecommerce",
      title: "E-Commerce Platform",
      description:
        "A compact, modern e-commerce platform. It showcases a product listing with category filtering, reusable product cards, and a lightweight shopping cart.",
      tags: ["React", "TypeScript", "PostgreSQL"],
      viewLink: "https://ecommerce-frontend-inky-pi.vercel.app/",
      github: "https://github.com/wxhcw/ecommerce_frontend",
      image: "./resource/ecommerce.png",
    },
    {
      id: "local-community-map",
      title: "Local Community Map",
      description:
        "Use Leaflet to display and manage local places on an interactive map. Users can add places, filter by category, import/export data, and sort by distance.",
      tags: ["Leaflet", "OpenStreetMap", "Geolocation API"],
      viewLink: "https://local-community-map.vercel.app/",
      github: "https://github.com/wxhcw/local_community_map",
      image: "./resource/localmap.png",
    },
  ],
};
