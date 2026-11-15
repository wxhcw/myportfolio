// 个人信息配置 - 在这里修改你的所有个人信息
const personalInfo = {
  // 基本信息
  name: "Tobias Wong",
  title: "Web Developer",
  subtitle: "Web Developer & UI/UX Enthusiast",

  // 简介
  greeting: "Hello, I'm",
  bio: `I'm a full stack developer who builds web applications end to end — modern, 
  responsive front ends with React, Next.js, and Vue, backed by Python and Node.js APIs,
   PostgreSQL, and Docker deployments on AWS. I like turning complex requirements into clean, 
   usable products.​`,

  // 关于我
  aboutDescription1: `Full stack developer with about three years of combined experience building web applications. At Zhejiang Dahua Technology,
  I developed core modules of a multi-tenant enterprise platform with Vue 3 and TypeScript, integrating front-end features with back-end REST APIs. 
  More recently, I designed and built a community job platform for KLHIISA — Next.js, React, and TypeScript on the front end, 
  Django REST Framework and PostgreSQL on the back end — and deployed it to AWS with Docker and a GitHub Actions CI/CD pipeline`,
  aboutDescription2: `I work comfortably across the whole stack: component architecture and state management on the front end; 
  API design, authentication, and database modelling on the back end. I hold a Master's in Computational Science from Laurentian University, 
  and I'm based in the Vancouver area and open to opportunities across Canada.`,

  // 联系信息
  email: "wangliuliu241@gmail.com",
  phone: "+1 (236) 967-6916",
  location: "Canada",
  locationFull: "Canada",
  availability: "Open to opportunities",

  // 社交媒体链接
  social: {
    github: "https://github.com/wxhcw",
    linkedin: "#",
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
