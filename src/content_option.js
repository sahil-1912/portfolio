const logotext = "Sahil Thakur";
const meta = {
    title: "Sahil Thakur",
    description: "I’m Sahil Tahkur, Full stack devloper,currently working in India",
};

const introdata = {
    title: "I’m Sahil Thakur",
    animated: {
        first: "I build modern and responsive websites",
        second: "Crafting seamless user experiences",
        third: "Turning ideas into functional web apps",
    },
    description: "A passionate web developer with expertise in creating dynamic websites and applications. I love turning challenges into solutions with clean and efficient code. Let's build something great together!",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};


const dataabout = {
    title: "A Bit About Myself",
    aboutme: "I am a full-stack developer with 3 years of experience working on both the front-end and back-end. I specialize in the MERN stack and Next.js, building modern and responsive web applications. What drives me is the endless scope of coding and how it challenges my creativity and problem-solving skills. I've worked on diverse projects, including payment systems, trading platforms, data analytics, and graphic design tools. Outside of coding, I enjoy playing pool, cricket, chess, and video games. My strength lies in solving complex problems and creating strong, scalable logic for applications."
};
const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },
];

const skills = [{
        name: "NodeJs",
        value: 90,
    },
    {
        name: "NextJs",
        value: 85,
    },
    {
        name: "Javascript",
        value: 98,
    },
    {
        name: "React",
        value: 90,
    },
    {
        name: "AWS Services",
        value: 85,
    },
];

const services = [
    {
        title: "UI & UX Design",
        description: "Crafting intuitive and engaging user interfaces with a focus on enhancing user experience. I design layouts that are not only visually appealing but also highly functional, ensuring a smooth and enjoyable experience for users.",
    },
    {
        title: "Web Apps",
        description: "Building dynamic, responsive, and scalable web applications using the latest technologies like the MERN stack and Next.js. Whether it's a simple website or a complex web app, I ensure high performance and seamless functionality.",
    },
    {
        title: "Server & DevOps Management",
        description: "Providing reliable back-end solutions and managing deployment pipelines across platforms like AWS, Vercel, Heroku, GitHub, Azure, and GoDaddy. My expertise in server management and DevOps ensures your applications are secure, scalable, and optimized for high availability.",
    },
];


const dataportfolio = [{
        img: "assets/cake-prints/cake-platform.png",
        description: "Design with delight, create with confidence.",
        link: "#",
    },

    {
        img: "assets/cake-prints/cake-template.png",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "assets/cake-prints/cake-design.png",
        description: "Transform your vision, one design at a time.",
        link: "#",
    },
    {
        img: "assets/cake-prints/cake-preview.png",
        description: "Your imagination, perfectly frosted.",
        link: "#",
    },
    {
        img: "assets/data-analytics/analytics-start.png",
        description: "Your data journey starts here, your insights lead everywhere.",
        link: "#",
    },

    {
        img: "assets/data-analytics/analytic-features.png",
        description: "From clicks to clarity: Your site's story unveiled.",
        link: "#",
    },
    {
        img: "assets/data-analytics/analytic-feature2.png",
        description: "Where your digital footprints become your roadmap.",
        link: "#",
    },
    {
        img: "assets/data-analytics/analytics-integrated.png",
        description: "One platform, endless possibilities.",
        link: "#",
    },
    {
        img: "assets/llm/llm-login.png",
        description: "Enterprise AI, simplified and scaled.",
        link: "#",
    },
    {
        img: "assets/llm/llm-chatsection.png",
        description: "Where business meets breakthrough AI.",
        link: "#",
    },
    {
        img: "assets/llm/llm-settings.png",
        description: "One key, all AI: Enterprise solutions unleashed.",
        link: "#",
    },
    {
        img: "assets/llm/llm-login.png",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "assets/llm/llm-usermgt.png",
        description: "Your AI kingdom, your rules.",
        link: "#",
    },
];
const contactConfig = {
    YOUR_EMAIL: "sahil00thakur1997@gmail.com",
    YOUR_NAME: "Sahil Thakur",
    YOUR_FONE: "(+91)7018442313",
    description: "Feel free to get in touch with me! I'm based in Mohali, Punjab, India, and I'm always excited to collaborate on interesting projects, whether it's building web apps, designing user interfaces, or managing server infrastructure. Let's connect and make something amazing together!",
    YOUR_SERVICE_ID: process.env.REACT_APP_YOUR_SERVICE_ID, // Replace with your actual service ID from EmailJS
    YOUR_TEMPLATE_ID: process.env.REACT_APP_YOUR_TEMPLATE_ID, // Replace with your actual template ID from EmailJS
    YOUR_USER_ID: process.env.REACT_APP_YOUR_USER_ID, // Replace with your actual user ID from EmailJS
};

const socialprofils = {
    github: "https://github.com/sahil-1912",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};