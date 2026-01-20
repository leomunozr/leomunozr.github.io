export const translations = {
  en: {
    nav: {
      about: 'About me',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
      language: 'Español',
    },
    hero: {
      greeting: "Hi, I'm",
      subtext: "I'm a passionate developer from Mexico City with 9+ years of experience in both front-end and back-end development.",
      cta: "View My Work",
    },
    about: {
      title: "About Me",
      p1: "I'm a passionate developer from Mexico City with 9+ years of experience in both front-end and back-end development. I love building user-friendly web apps that also look great and take pride in writing clean, efficient code.",
      p2: ""
    },
    skills: {
      title: "My Tech Stack",
      categories: {
        languages: "Languages",
        frameworks: "Frameworks & Libraries",
        databases: "Databases & APIs",
        tools: "Tools & DevOps"
      }
    },
    experience: {
      title: "Work Experience",
      jobs: [
        {
          company: "NEORIS",
          title: "Front-end Developer",
          dates: "Oct 2023 - Today",
          details: [
            "Developed a password management system web app to securely store secrets, and provided an API to integrate them on third party apps.",
            "Build user interfaces using React, react-query, Material UI, React Context API and Typescript.",
            "Built API with Node.js and Express for securely exposing secrets to third-party apps, implementing OAuth identity-based authentication.",
            "Automated CI/CD pipeline using GitHub Actions, Docker and Google Kubernetes Engine (GKE).",
            "Create an error log dashboard with Grafana and Google Cloud Monitoring to report API’s health.",
            "Create entities and stored procedures in PostgreSQL to securely store data."
          ]
        },
        {
          company: "GRIO MEXICO",
          title: "React Developer",
          dates: "Jul 2019 - Oct 2023",
          details: [
            "Built a modular component library using React, Redux, and Material UI.",
            "Optimized form-handling system, reducing user input validation errors using React Hook Form and Yup.",
            "Identified UI responsiveness bottlenecks by profiling components and debugging complex state management logic using React Context API.",
            "Reduced loading and rendering time by virtualizing large datasets with react-window and memoize components to avoiding unnecesary re-renders.",
            "Reduce redundant network request by integrating GraphQL and REST APIs caching."
          ]
        },
        {
          company: "GLOBANT MEXICO",
          title: "Angular Developer",
          client: "Sourceability",
          dates: "Oct 2018 - Jul 2019",
          details: [
            "Optimized performance and responsiveness of data-intensive interactive dashboards using Angular and RxJ.",
            "Reduced initial load time by optimizing DOM rendering and implementing lazy loading modules.",
            "Implemented dynamic filtering and sorting system to streamline data visualization.",
            "Improved state management by implementing RxJS and reactive programming patterns.",
            "Designed interactive dashboards with custom widgets, allowing users to personalize views and manipulate data."
          ]
        },
        {
          company: "Zaplabs",
          title: "Javascript / Node Developer",
          dates: "Sept 2017 - Oct 2018",
          details: [
            "Built a library of reusable UI components that allowed brands to extend and personalize specific features while maintaining consistency across the corporation.",
            "Developed custom Web components and enhanced functionality using ES6 features, ensuring cross-brand usability.",
            "Collaborated with UI/UX designers to ensure the components met brand-specific needs while maintaining consistency.",
            "Integrated components with RESTful APIs and third-party services to improve performance and user interaction."
          ]
        },
        {
          company: "DWA Nova",
          title: "React / Node developer",
          dates: "Sept 2016 - Aug 2017",
          details: [
            "Built a cross-platform desktop interface using React, Redux, and Electron.",
            "Implemented a REST API using Node.js and Express for upload/download assets to Firebase Storage.",
            "Developed a local server with Node.js to retrieve metadata from the local file system in real-time and syncing data with Firebase.",
            "Created an Adobe plugin with HTML/JavaScript to facilitate real-time metadata updates and asset synchronization with Firebase."
          ]
        },
        {
          company: "United Airlines",
          title: "AngularJS Developer",
          dates: "Nov 2015 - Sept 2016",
          details: [
            "Built a personnel task management with an admin panel using AngularJS, ES6, and SASS, integrating dynamic views and role-based access.",
            "Developed reusable widgets to standardize UI components accross screens.",
            "Automated builds and component scaffolding with Webpack and Gulp, optimizing asset bundling and CSS preprocessing."
          ]
        },
        {
          company: "INDIGO SMART SOFTWARE DEVELOPMENT",
          title: ".NET Developer",
          dates: "Aug 2015 - Nov 2015",
          details: [
            "Designed and created an API for processing payments in an e-commerce application using .NET.",
            "Maintenance of existing RESTful web services created with .Net MVC4."
          ]
        },
        {
          company: "KMMX",
          title: "Instructor",
          dates: "2014 - 2015",
          details: [
            "Taught courses about HTML5 APIs and features, AJAX with PHP and Java Fundamentals to students from beginners to IT specialists."
          ]
        }
      ]
    },
    projects: {
      title: "Projects",
      subtitle: "Recent open source work.",
      techLabel: "Tech:",
      liveDemo: "Live Demo",
      viewCode: "View Code",
      items: [
        {
          title: 'Project Lorem Ipsum',
          description: 'You can use this section for your side projects. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          tech: 'Open Source',
          imgSrc: 'https://placehold.co/600x400/1f2937/2dd4bf?text=Project+Lorem',
          liveUrl: '#',
          codeUrl: '#'
        },
        {
          title: 'Project Sed Fringilla',
          description: 'You can use this section for your side projects. Cras dapibus. Vivamus elementum semper nisi.',
          tech: 'Open Source',
          imgSrc: 'https://placehold.co/600x400/1f2937/2dd4bf?text=Project+Sed',
          liveUrl: '#',
          codeUrl: '#'
        },
        {
          title: 'Project Praesent',
          description: 'You can use this section for your side projects. Cras dapibus. Vivamus elementum semper nisi.',
          tech: 'Open Source',
          imgSrc: 'https://placehold.co/600x400/1f2937/2dd4bf?text=Project+Praesent',
          liveUrl: '#',
          codeUrl: '#'
        }
      ]
    },
    contact: {
      title: "Get In Touch",
      text: "I'm currently open to new opportunities and collaborations. My inbox is always open, so feel free to reach out!",
      cta: "Email Me"
    },
    footer: {
      text: "Made with ❤️ by me.",
    }
  },
  es: {
    nav: {
      about: 'Sobre mí',
      skills: 'Habilidades',
      experience: 'Experiencia',
      projects: 'Proyectos',
      contact: 'Contacto',
      language: 'English',
    },
    hero: {
      greeting: "Hola, soy",
      subtext: "Ingeniero de Software. Soy un desarrollador apasionado de la Ciudad de México con más de 9 años de experiencia en desarrollo front-end y back-end.",
      cta: "Ver Mis Trabajos",
    },
    about: {
      title: "Sobre Mí",
      p1: "Soy un desarrollador apasionado de la Ciudad de México con más de 9 años de experiencia en desarrollo front-end y back-end. Me encanta crear aplicaciones web amigables que también se vean bien y me enorgullezco de escribir código limpio y eficiente.",
      p2: ""
    },
    skills: {
      title: "Mi Stack Tecnológico",
      categories: {
        languages: "Lenguajes",
        frameworks: "Frameworks y Librerías",
        databases: "Bases de Datos y APIs",
        tools: "Herramientas y DevOps"
      }
    },
    experience: {
      title: "Experiencia Laboral",
      jobs: [
        {
          company: "NEORIS",
          title: "Front-end Developer",
          dates: "Oct 2023 - Hoy",
          details: [
            "Desarrollé una aplicación web de gestión de contraseñas para almacenar secretos de forma segura y proporcioné una API para integrarlos en aplicaciones de terceros.",
            "Construí interfaces de usuario usando React, react-query, Material UI, React Context API y Typescript.",
            "Construí API con Node.js y Express para exponer secretos de forma segura a aplicaciones de terceros, implementando autenticación basada en identidad OAuth.",
            "Automaticé el pipeline de CI/CD usando GitHub Actions, Docker y Google Kubernetes Engine (GKE).",
            "Creé un panel de registro de errores con Grafana y Google Cloud Monitoring para informar sobre la salud de la API.",
            "Creé entidades y procedimientos almacenados en PostgreSQL para almacenar datos de forma segura."
          ]
        },
        {
          company: "GRIO MEXICO",
          title: "React Developer",
          dates: "Jul 2019 - Oct 2023",
          details: [
            "Construí una biblioteca de componentes modulares usando React, Redux y Material UI.",
            "Optimicé el sistema de manejo de formularios, reduciendo errores de validación de entrada de usuario usando React Hook Form y Yup.",
            "Identifiqué cuellos de botella en la capacidad de respuesta de la interfaz de usuario perfilando componentes y depurando lógica compleja de gestión de estado usando React Context API.",
            "Reduje el tiempo de carga y renderizado virtualizando grandes conjuntos de datos con react-window y componentes memoize para evitar re-renderizados innecesarios.",
            "Reduje solicitudes de red redundantes integrando caché de APIs GraphQL y REST."
          ]
        },
         {
          company: "GLOBANT MEXICO",
          title: "Angular Developer",
          client: "Sourceability",
          dates: "Oct 2018 - Jul 2019",
          details: [
            "Optimicé el rendimiento y la capacidad de respuesta de paneles interactivos intensivos en datos utilizando Angular y RxJ.",
            "Reduje el tiempo de carga inicial optimizando la renderización del DOM e implementando módulos de carga diferida.",
            "Implementé un sistema dinámico de filtrado y clasificación para agilizar la visualización de datos.",
            "Mejoré la gestión del estado implementando RxJS y patrones de programación reactiva.",
            "Diseñé paneles interactivos con widgets personalizados, permitiendo a los usuarios personalizar vistas y manipular datos."
          ]
        },
        // ... Keeping other jobs in English for brevity in ES section unless requested, 
        // but for a good user experience I should try to provide at least the same structure.
        // Since I'm an AI, I can translate the rest easily.
         {
          company: "Zaplabs",
          title: "Javascript / Node Developer",
          dates: "Sept 2017 - Oct 2018",
          details: [
            "Construí una biblioteca de componentes de interfaz de usuario reutilizables que permitió a las marcas extender y personalizar características específicas manteniendo la coherencia en toda la corporación.",
            "Desarrollé componentes web personalizados y mejoré la funcionalidad utilizando características de ES6, asegurando la usabilidad entre marcas.",
            "Colaboré con diseñadores de UI/UX para asegurar que los componentes cumplieran con las necesidades específicas de la marca manteniendo la coherencia.",
            "Integré componentes con APIs RESTful y servicios de terceros para mejorar el rendimiento y la interacción del usuario."
          ]
        },
        {
          company: "DWA Nova",
          title: "React / Node developer",
          dates: "Sept 2016 - Ago 2017",
          details: [
            "Construí una interfaz de escritorio multiplataforma utilizando React, Redux y Electron.",
            "Implementé una API REST utilizando Node.js y Express para subir/bajar activos a Firebase Storage.",
            "Desarrollé un servidor local con Node.js para recuperar metadatos del sistema de archivos local en tiempo real y sincronizar datos con Firebase.",
            "Creé un plugin de Adobe con HTML/JavaScript para facilitar actualizaciones de metadatos en tiempo real y sincronización de activos con Firebase."
          ]
        },
        {
          company: "United Airlines",
          title: "AngularJS Developer",
          dates: "Nov 2015 - Sept 2016",
          details: [
            "Construí una gestión de tareas de personal con un panel de administración utilizando AngularJS, ES6 y SASS, integrando vistas dinámicas y acceso basado en roles.",
            "Desarrollé widgets reutilizables para estandarizar componentes de interfaz de usuario en todas las pantallas.",
            "Automaticé construcciones y andamiaje de componentes con Webpack y Gulp, optimizando la agrupación de activos y el preprocesamiento de CSS."
          ]
        },
        {
          company: "INDIGO SMART SOFTWARE DEVELOPMENT",
          title: ".NET Developer",
          dates: "Ago 2015 - Nov 2015",
          details: [
            "Diseñé y creé una API para procesar pagos en una aplicación de comercio electrónico utilizando .NET.",
            "Mantenimiento de servicios web RESTful existentes creados con .Net MVC4."
          ]
        },
        {
          company: "KMMX",
          title: "Instructor",
          dates: "2014 - 2015",
          details: [
            "Impartí cursos sobre APIs y características de HTML5, AJAX con PHP y Fundamentos de Java a estudiantes desde principiantes hasta especialistas en TI."
          ]
        }
      ]
    },
    projects: {
      title: "Proyectos Personales",
      subtitle: "Trabajo reciente de código abierto.",
      techLabel: "Tecnología:",
      liveDemo: "Demo en Vivo",
      viewCode: "Ver Código",
      items: [
        {
          title: 'Project Lorem Ipsum',
          description: 'Puedes usar esta sección para tus proyectos paralelos. Lorem ipsum dolor sit amet.',
          tech: 'Open Source',
          imgSrc: 'https://placehold.co/600x400/1f2937/2dd4bf?text=Project+Lorem',
          liveUrl: '#',
          codeUrl: '#'
        },
        {
          title: 'Project Sed Fringilla',
          description: 'Puedes usar esta sección para tus proyectos paralelos. Cras dapibus. Vivamus elementum semper nisi.',
          tech: 'Open Source',
          imgSrc: 'https://placehold.co/600x400/1f2937/2dd4bf?text=Project+Sed',
          liveUrl: '#',
          codeUrl: '#'
        },
        {
          title: 'Project Praesent',
          description: 'Puedes usar esta sección para tus proyectos paralelos. Cras dapibus. Vivamus elementum semper nisi.',
          tech: 'Open Source',
          imgSrc: 'https://placehold.co/600x400/1f2937/2dd4bf?text=Project+Praesent',
          liveUrl: '#',
          codeUrl: '#'
        }
      ]
    },
    contact: {
      title: "Ponte en Contacto",
      text: "Actualmente estoy abierto a nuevas oportunidades y colaboraciones. ¡Mi bandeja de entrada siempre está abierta, así que no dudes en contactarme!",
      cta: "Envíame un Email"
    },
    footer: {
      text: "Hecho con ❤️ por mí.",
    }
  }
};
