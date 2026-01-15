export const cvData = {
  personalInfo: {
    name: "Humberto Chacón",
    birthDate: "29-11-1992",
    specialty: "Ingeniero de Sistemas | Especialista en Automatización y Backend",
    experienceYears: "8",
    availability: "Entrega de soluciones de alta criticidad",
    heroDescription: "Ingeniero de Sistemas con más de 8 años de experiencia especializado en la arquitectura de sistemas complejos y automatización de procesos bancarios. Experto en transformar requerimientos de negocio en soluciones técnicas robustas y escalables.",
    aboutHistory: [
      "Graduado de la Universidad Nacional Experimental Politécnica (UNEXPO) - Vicerrectorado Luis Caballero Mejías, mi carrera se ha forjado en la intersección de la ingeniería de sistemas y el desarrollo de software de alto impacto.",
      "Con una sólida base en arquitecturas Java y procesos de Core Banking, actualmente lidero la automatización en Amagi, integrando monitoreo de auditoría en MongoDB y visualización en Grafana para asegurar la excelencia operativa.",
      "Mi enfoque combina la rigurosidad técnica con la agilidad necesaria para resolver incidencias críticas y optimizar procesos masivos de datos."
    ],
    initials: "HC"
  },
  experiences: [
    {
      id: 1,
      title: "Líder de Automatización / Desarrollador Senior Full Stack",
      company: "Amagi",
      period: "12/2024 - Presente",
      location: "Remoto / Caracas",
      description: "Liderazgo técnico en la automatización de pruebas para el Core Banking de Banplus. Implementación de sistemas de monitoreo y auditoría.",
      achievements: [
        "Arquitectura de suite de pruebas con Selenium y Python para flujos críticos y OTP",
        "Configuración de tableros en Grafana para monitoreo de ejecuciones en tiempo real",
        "Análisis y consulta de auditorías en MongoDB para validación de integridad",
        "Orquestación híbrida Java/Python para el backend de automatización"
      ]
    },
    {
      id: 2,
      title: "Desarrollador Senior Full Stack",
      company: "NDC Solutions",
      period: "2023 - 2024",
      location: "Caracas, Venezuela",
      description: "Optimización de servicios críticos para el Banco de Venezuela y desarrollo de sistemas médicos integrales.",
      achievements: [
        "Optimización de carga masiva para BDV procesando más de 1 millón de registros",
        "Desarrollo de Sistema de Gestión Médica con Angular, Spring Boot y Oracle",
        "Gestión de servidores Weblogic y configuración de entornos Linux/Windows",
        "Diseño de modelos de datos avanzados y procedimientos almacenados"
      ]
    },
    {
      id: 3,
      title: "Desarrollador Full Stack / Junior",
      company: "Acorde Internacional 9S",
      period: "2018 - 2023",
      location: "Caracas, Venezuela",
      description: "Desarrollo de aplicaciones web modernas bajo metodologías ágiles.",
      achievements: [
        "Desarrollo de interfaces dinámicas con Angular 5+ y Bootstrap",
        "Integración de servicios REST y gestión de despliegues en AWS",
        "Mantenimiento y resolución de bugs en sistemas productivos"
      ]
    },
    {
      id: 4,
      title: "Desarrollador .NET Junior",
      company: "Zeven Software",
      period: "2017 - 2018",
      location: "Caracas, Venezuela",
      description: "Inicio de carrera profesional enfocado en el ecosistema Microsoft.",
      achievements: [
        "Desarrollo de servicios web SOAP y REST utilizando C# y ASP.NET",
        "Implementación de lógica de negocio y capas de acceso a datos",
        "Creación de pantallas administrativas bajo estándares corporativos"
      ]
    }
  ],
  education: [
    {
      id: 1,
      degree: "Ingeniero de Sistemas",
      institution: "Universidad Nacional Experimental Politécnica (UNEXPO) - Vicerrectorado Luis Caballero Mejías",
      period: "2010 - 2017",
      description: "Especialización en desarrollo de sistemas, algoritmos y gestión de proyectos tecnológicos."
    },
    {
      id: 2,
      degree: "Bachiller en Ciencias",
      institution: "Liceo de Aplicación",
      period: "2005 - 2010",
      description: "Formación básica con énfasis en ciencias exactas."
    }
  ],
  certifications: [
    "Certificado Profesional de JavaScript - Benllisoft",
    "Angular: De cero a Experto - Udemy",
    "Especialista en Bases de Datos Oracle 19c/21c",
    "Arquitectura Java Spring Boot para Sistemas Financieros"
  ],
  skills: {
    frontend: [
      { name: 'Angular (Versiones 5 a 17)', level: 95 },
      { name: 'React / Next.js / Vite', level: 90 },
      { name: 'JavaScript / TypeScript', level: 95 },
      { name: 'CSS3 / Tailwind / Material UI', level: 90 },
      { name: 'Bootstrap / Responsive Design', level: 95 }
    ],
    backend: [
      { name: 'Arquitectura Java (Spring Boot)', level: 95 },
      { name: 'Python (Selenium / Automatización)', level: 90 },
      { name: 'C# / .NET / Web API', level: 85 },
      { name: 'Diseño de APIs REST y SOAP', level: 95 },
      { name: 'Oracle / SQL Server / PostgreSQL', level: 90 },
      { name: 'Auditoría en MongoDB / Redis', level: 85 }
    ],
    tools: [
      { name: 'Git / SVN / GitHub', level: 95 },
      { name: 'Docker / Servidores Linux', level: 80 },
      { name: 'Grafana / Dashboarding', level: 85 },
      { name: 'AWS / Infraestructura Cloud', level: 75 },
      { name: 'Weblogic / Tomcat / IIS', level: 85 },
      { name: 'Postman / Swagger / Documentación', level: 95 }
    ],
    soft: [
      'Liderazgo de Equipos Técnicos',
      'Resolución de Problemas Críticos',
      'Manejo de Estrés Operativo',
      'Comunicación Efectiva',
      'Gestión de Tiempo y Prioridades',
      'Pensamiento de Diseño e Innovación'
    ]
  },
  projects: [
    {
      id: 1,
      title: "B-TEST: Dashboard de Automatización Bancaria",
      description: "Plataforma premium para el monitoreo y gestión de pruebas Selenium en Core Banking. Cuenta con integración de WebSockets y auditorías en vivo.",
      technologies: ["React", "Spring Boot", "Python", "MongoDB", "Grafana"],
      github: "https://github.com/humbertodcr2911/mi-curriculum-profesional",
      featured: true
    },
    {
      id: 2,
      title: "Motor de Procesamiento Masivo BDV",
      description: "Optimización de flujos de datos para el Banco de Venezuela, permitiendo el procesamiento concurrente de millones de transacciones bancarias.",
      technologies: ["Java 17", "Spring Boot", "Oracle 21c", "Performance"],
      featured: true
    },
    {
      id: 3,
      title: "Gestión Médica y Odontológica",
      description: "Sistema integral para la administración de historias clínicas, inventarios y agendas, con seguridad integrada a nivel corporativo.",
      technologies: ["Angular", "Spring Boot", "Oracle", "LDAP"],
      featured: false
    }
  ],
  contact: {
    email: "humbertodcr2911@gmail.com",
    phone: "+58 412 XXX XXXX",
    location: "Caracas, Venezuela",
    github: "https://github.com/humbertodcr2911",
    linkedin: "https://linkedin.com/in/humbertochacon",
    portfolio: "https://humbertochacon.netlify.app"
  },
  settings: {
    showExperience: true,
    showProjects: true,
    showEducation: true,
    showSkills: true,
    language: "es"
  }
};
