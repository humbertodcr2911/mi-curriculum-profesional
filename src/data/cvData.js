export const cvData = {
  personalInfo: {
    name: "Tu Nombre",
    specialty: "Tu Especialidad",
    experienceYears: "X",
    availability: "Disponible para oportunidades",
    heroDescription: "Desarrollador apasionado con X años de experiencia creando soluciones innovadoras. Me especializo en tecnologías modernas y mejores prácticas de desarrollo.",
    aboutHistory: [
      "Apasionado desarrollador con X años de experiencia en la creación de aplicaciones web escalables y eficientes. Mi enfoque se centra en escribir código limpio, mantenible y siguiendo las mejores prácticas de la industria.",
      "Disfruto enfrentando nuevos desafíos tecnológicos y colaborando en equipos multidisciplinarios para crear soluciones innovadoras que generen un impacto real."
    ],
    initials: "TN"
  },
  experiences: [
    {
      id: 1,
      title: "Desarrollador Senior",
      company: "Empresa Tech",
      period: "2022 - Presente",
      location: "Remoto",
      description: "Lideré el desarrollo de aplicaciones web utilizando React, Node.js y microservicios. Implementé mejores prácticas que redujeron los bugs en producción en un 40%.",
      achievements: [
        "Arquitectura de sistema escalable",
        "Mentoría a 3 desarrolladores junior",
        "Optimización de rendimiento del 60%"
      ]
    },
    {
      id: 2,
      title: "Desarrollador Full Stack",
      company: "Startup Innovadora",
      period: "2020 - 2022",
      location: "Madrid, España",
      description: "Desarrollé aplicaciones completas desde el diseño hasta el deployment. Colaboré estrechamente con el equipo de producto.",
      achievements: [
        "Lanzamiento de 2 productos principales",
        "Integración de APIs de terceros",
        "Implementación de testing automatizado"
      ]
    }
  ],
  education: [
    {
      id: 1,
      degree: "Máster en Ingeniería de Software",
      institution: "Universidad de Tecnología",
      period: "2020 - 2022",
      description: "Especialización en arquitectura de software y desarrollo ágil."
    },
    {
      id: 2,
      degree: "Grado en Informática",
      institution: "Universidad Nacional",
      period: "2016 - 2020",
      description: "Enfoque en algoritmos, estructuras de datos y bases de datos."
    }
  ],
  certifications: [
    "AWS Certified Developer - Associate",
    "React Advanced Certification",
    "Scrum Master Professional",
    "MongoDB University Certification"
  ],
  skills: {
    frontend: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'HTML5/CSS3', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Next.js', level: 80 }
    ],
    backend: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'Express.js', level: 85 },
      { name: 'GraphQL', level: 70 }
    ],
    tools: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'CI/CD', level: 80 },
      { name: 'Jest', level: 85 },
      { name: 'Webpack', level: 75 }
    ],
    soft: [
      'Comunicación Efectiva',
      'Trabajo en Equipo',
      'Resolución de Problemas',
      'Gestión del Tiempo',
      'Pensamiento Crítico',
      'Adaptabilidad'
    ]
  },
  projects: [
    {
      id: 1,
      title: "Sistema de Gestión Empresarial",
      description: "Aplicación web completa para gestión de clientes, inventario y facturación.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      github: "https://github.com/tuusuario/proyecto1",
      demo: "https://demo.tusitio.com",
      featured: true
    },
    {
      id: 2,
      title: "Plataforma E-learning",
      description: "Sistema de cursos online con videos, quizzes y certificaciones automáticas.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind"],
      github: "https://github.com/tuusuario/proyecto2",
      demo: "https://cursos.tusitio.com"
    },
    {
      id: 3,
      title: "App de Gestión Financiera",
      description: "Aplicación para tracking de gastos e ingresos con análisis y reportes.",
      technologies: ["React Native", "Firebase", "Chart.js", "Redux"],
      github: "https://github.com/tuusuario/proyecto3",
      demo: "https://finanzas.tusitio.com"
    }
  ],
  contact: {
    email: "tu@email.com",
    phone: "+34 600 000 000",
    location: "Madrid, España",
    github: "https://github.com/tuusuario",
    linkedin: "https://linkedin.com/in/tuusuario",
    portfolio: "https://tusitio.com"
  },
  settings: {
    showExperience: true,
    showProjects: true,
    showEducation: true,
    showSkills: true,
    language: "es"
  }
};
