const unzaLogo = "data:image/png;base64,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"

export const Bio = {
    name: "Edward Manela Jr",
    roles: [
      "a Software Developer",
      // "an ICT Tutor"
    ],
    description:
      "I hold a Bachelor's Degree in Information and Communication Technologies and a Postgraduate Diploma in Computer Science, I am also pursuing my Msc in Computer Science. I have hands-on experience in full-stack development, with a focus on React, React Native, and Python-based backend systems. I'm currently involved in projects related to medical imaging, data analysis, and system development. I’m passionate about building impactful software solutions, and I'm always eager to collaborate, learn, and contribute meaningfully to team objectives.",
    github: "https://github.com/elijahchileshe",
    resume:
      "https://drive.google.com/file/d/1Fh7T9EfCqD9NittdFPAnisqgYUBpQfux/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/elijah-chileshe-4277b3187",
    github: "https://github.com/elijahchileshe",
    gmail: "mailto:chilesheelijah01@gmail.com",
    facebook: "",
  };
  
  export const skills = [
    {
      title: "Frontend",
      skills: [
        {
          name: "React Js",
          image:
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
        },
        // {
        //   name: "Redux",
        //   image:
        //     "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
        // },
        // {
        //   name: "Next Js",
        //   image:
        //     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
        // },
        // {
        //   name: "Angular Js",
        //   image:
        //     "https://camo.githubusercontent.com/8886130b3d8aba95dbdd7c4f9a41029606424cc06d1873c1ced87dd55a222fef/68747470733a2f2f616e67756c61722e696f2f6173736574732f696d616765732f6c6f676f732f616e67756c61722f616e67756c61722e737667",
        // },
        {
          name: "HTML",
          image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
        },
        {
          name: "CSS",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
        },
        {
          name: "JavaScript",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
        },
        {
          name: "Bootstrap",
          image:
            "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
        },
        // {
        //   name: "Material UI",
        //   image:
        //     "data:image/png;base64,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",
        // },
        // {
        //   name: "Flutter",
        //   image:
        //     "https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png",
        // },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node Js",
          image: "https://nodejs.org/static/images/logo.svg",
        },
        {
          name: "Express Js",
          image:
            "data:image/png;base64,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",
        },
        // {
        //   name: "Graph Ql",
        //   image: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
        // },
        {
          name: "Python",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        },
        // {
        //   name: "Flask",
        //   image:
        //     "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/1280px-Flask_logo.svg.png",
        // },
        // {
        //   name: "Django",
        //   image:
        //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlFFyY16N5NRhzoG24RqB7x8Ok2t8Bdgs-tuMsOBXS2Q&s",
        // },
        {
          name: "MySQL",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
        },
        // {
        //   name: "Postgresql",
        //   image: "https://www.postgresql.org/media/img/about/press/elephant.png",
        // },
        {
          name: "MongoDB",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
        },
        // {
        //   name: "Firebase",
        //   image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
        // },
      ],
    },
    {
      title: "DevOps",
      skills: [
        {
          name: "AWS",
          image:
            "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png",
        },
        // {
        //   name: "Google Cloud",
        //   image:
        //     "https://static-00.iconduck.com/assets.00/google-cloud-platform-logo-icon-2048x1824-pg4wzspq.png",
        // },
        // {
        //   name: "Docker",
        //   image:
        //     "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
        // },
        // {
        //   name: "Jenkins",
        //   image:
        //     "https://toppng.com/uploads/preview/jenkins-logo-11609365847mufysaivph.png",
        // },
        // {
        //   name: "Nginx",
        //   image: "https://download.logo.wine/logo/Nginx/Nginx-Logo.wine.png",
        // },
        // {
        //   name: "Grafana",
        //   image:
        //     "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Grafana_logo.svg/1200px-Grafana_logo.svg.png",
        // },
        // {
        //   name: "Kubernetes",
        //   image:
        //     "https://upload.wikimedia.org/wikipedia/commons/0/00/Kubernetes_%28container_engine%29.png",
        // },
        // {
        //   name: "Prometheus",
        //   image:
        //     "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/1200px-Prometheus_software_logo.svg.png",
        // },
      ],
    },
    {
      title: "Android",
      skills: [
        {
          name: "React Native",
          image:
            "https://seeklogo.com/images/R/react-native-logo-221C671C70-seeklogo.com.png",
        },
        // {
        //   name: "Kotlin",
        //   image:
        //     "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
        // },
        // {
        //   name: "Jetpack Compose",
        //   image:
        //     "https://3.bp.blogspot.com/-VVp3WvJvl84/X0Vu6EjYqDI/AAAAAAAAPjU/ZOMKiUlgfg8ok8DY8Hc-ocOvGdB0z86AgCLcBGAsYHQ/s1600/jetpack%2Bcompose%2Bicon_RGB.png",
        // },
        // {
        //   name: "XML",
        //   image:
        //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMw6_RdwKQ9bDFfnKDX1iwMl4bVJEvd9PP53XuIw&s",
        // },
        // {
        //   name: "Android Studio",
        //   image:
        //     "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
        // },
      ],
    },
    {
      title: "Machine Learning",
      skills: [
        {
          name: "Python",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        },
        // {
        // //   name: "Tenserflow",
        // //   image:
        // //     "https://static-00.iconduck.com/assets.00/tensorflow-icon-1911x2048-1m2s54vn.png",
        // // },
        // // {
        // //   name: "Keras",
        // //   image:
        // //     "https://miro.medium.com/v2/resize:fit:600/1*DKu_54iqz6C-p6ndo7rO3g.png",
        // // },
        // {
        //   name: "Jupyter",
        //   image:
        //     "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1767px-Jupyter_logo.svg.png",
        // },
        {
          name: "Google Colab",
          image:
            "https://logowik.com/content/uploads/images/google-colaboratory6512.jpg",
        },
        // {
        //   name: "Sk Learn Kit",
        //   image:
        //     "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/2560px-Scikit_learn_logo_small.svg.png",
        // },
      ],
    },
    {
      title: "Others",
      skills: [
        {
          name: "Linux (Ubuntu)",
          image:
          "https://images.seeklogo.com/logo-png/27/2/ubuntu-logo-png_seeklogo-274045.png"
        },
        {
          name: "Git",
          image:
            "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png",
        },
        {
          name: "RaspberryPI",
          image:
            "https://seeklogo.com/images/R/raspberry-pi-logo-8240ABBDFE-seeklogo.com.png",
        },
        {
          name: "Lucid Chart",
          image:
            "https://seeklogo.com/images/L/Lucid-logo-50307CAB1F-seeklogo.com.gif",
        },
        {
          name: "VS Code",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
        },
        {
          name: "Postman",
          image:
            "https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png",
        },
        {
          name: "Trello",
          image:
          "https://seeklogo.com/images/T/trello-logo-CE7B690E34-seeklogo.com.png",  
        },
        {
          name: "Drupal",
          image:
            "https://seeklogo.com/images/D/drupal-open-source-contentmanagement-system-logo-2D7E54F0C1-seeklogo.com.png",
        },
      ],
    },
  ];
  
  export const publications = [
    {
      id: 1,
      title: "Zambia National ETD Portal: Implementation of an Interoperable National Electronic Thesis and Dissertation Portal",
      authors: "Elijah Chileshe, Lighton Phiri",
      journal: "",
      year: "2025",
      doi: "",
      link: "http://docs.ndltd.org/collection/etd2024/docs-poster-etd24-47.pdf"
    },
    {
      id: 2,
      title: "Intelligent DICOM Viewers for Low-Resource Settings: Lightweight In-Browser Intelligent DICOM Viewers for Semi-Automated Analysis of Medical Images",
      authors: "Malaizyo Muzumala, Andrew Shawa, Elijah Chileshe, Peter Chibuta, Lighton Phiri",
      journal: "Proceedings of the International Conference on Information and Communication Technology (ICICT)",
      year: "2025",
      doi: "",
      link: ""
    },
    {
      id: 3,
      title: "User Centred Design and Implementation of Useful Picture Archiving and Communication Systems for Effective Radiological Workflows in Public Health Facilities in Zambia",
      authors: "Andrew Shawa, Elijah Chileshe, Brighton Mwaba, John Mwanza, Wilkins Sikazwe, Ernest Obbie Zulu, Lighton Phiri",
      journal: "Annual Conference of South African Institute of Computer Scientists and Information Technologists",
      year: "2024",
      doi: "",
      link: "https://link.springer.com/chapter/10.1007/978-3-031-64881-6_10"
    },
    {
      id: 4,
      title: "Evaluating DICOM Compliance for Medical Images in Public Health Facilities in Zambia",
      authors: "Elijah Chileshe, Mr Claytone Sikasote, Lighton Phiri",
      journal: "",
      year: "2024",
      doi: "",
      link: "https://datalab.unza.zm/sites/default/files/2024-06/etds-datalab24-pdip-dissertation-elijah_chileshe.pdf"
    },
    {
      id: 5,
      title: "Large-scale analysis of medical image metadata",
      authors: "Elijah Chileshe, Lighton Phiri",
      journal: "Proceedings of International Conference for ICT (ICICT)-Zambia",
      year: "2023",
      doi: "",
      link: "https://ictjournal.icict.org.zm/index.php/icict/article/view/277"
    },
    {
      id: 6,
      title: "Effective Tools for Self-Archiving in Institutional Repositories",
      authors: "Trey Chakulya, Elijah Chileshe, Sharon Kangwa, Royce Mwanza, Victor Mwelwa",
      journal: "University of Zambia",
      year: "2021",
      doi: "",
      link: ""
    }
  ];

  export const experiences = [
    {
      id: 0,
      img: unzaLogo,  // replace with appropriate logo/image variable if available
      role: "Editorial Support Assistant",
      company: "University of Zambia - EIFL-JABS Diamond Open Access Project",
      date: "June 2025 – Present",
      desc: `Maintain and troubleshoot the Open Journal Systems (OJS) platform for JABS, JONAS, and JLSS journals.
    Audit and update historical journal issues to ensure accurate metadata formatting.
    Deposit article metadata and references to Crossref for proper indexing and citation tracking.
    Ensure journal articles are indexed in academic databases such as Google Scholar and Scholar Archive.
    Coordinate with the Centre for ICT and Chief Editors to ensure smooth editorial workflows.`,
      skills: [
        "Open Journal Systems (OJS)",
        "Metadata Management",
        "Crossref",
        "Academic Indexing",
        "Editorial Coordination"
      ],
      // doc: "link if any",
    },
    {
      id: 1,
      img: unzaLogo,
      role: "Research Assistant",
      company: "The University of Zambia",
      date: "Feb 2023 - Present",
      desc: "I am implementing Efficient, Effective, Useful, and Inter-operable Picture Archiving and Communication System (PACS) Platforms that are supposed to help Radiologists easily access Medical Images. I am also working on Automatic Classification of Medical Image Data using Python as well as maintaining the Enterprise Medical Imaging Project in Zambia website using Drupal",
      skills: [
        "Data Analysis",
        "Python",
        "Drupal",
        "HTML",
        "CSS"
      ],
      // doc: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/Screenshot%20from%202024-01-25%2022-38-31.png?alt=media&token=2785903f-1a4e-41f5-afd2-6adcfe56d058",
    },
    {
      id: 2,
      img: "https://qualikeeper.com/images/logo4.png",
      role: "Part Time - Full Stack Developer",
      company: "QualiKeeper Investments Limited",
      date: "June 2022 - Present",
      desc: "implemented a Python server that interact with an external Radio Frequency Identification (RFID) System to help counting animal tags as well as automatically check weights of passing animals. I also implemented a web application using the MERN Stack to help users access the farm data regardless of where they are. I also implemented a mobile application using React Native",
      skills: [
        "Python",
        "JavaScript",
        "Express.js",
        "MongoDB",
        "React Native",
        "HTML",
        "CSS",
        "Node Js",
      ],
      // doc: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/1696514649120.jpeg?alt=media&token=e7f6757b-edfa-4138-a692-d6709eeef3e2",
    },
    {
      id: 3,
      img: unzaLogo,
      role: "Information and Communication Technologies Tutor",
      company: "The University of Zambia",
      date: "May 2022 - Dec 2022",
      desc: "I worked as a tutor at the University of Zambia where I taught Second, Third and Fourth Year Students. The courses I tutored include Computational Mathematics, Database and Web Technologies, Fundamentals of Software Engineering and Project Management and Mobile Applications and Technologies",
      skills: [
        "Presentation",
        "Communication",
        "SQL",
        "HTML",
        "CSS",
        "Lucid Chart",
      ]},
      {
        id: 2,
        img: "data:image/png;base64,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",  // replace with Jesuit Centre logo/image variable if you have one
        role: "Support Specialist",
        company: "Jesuit Centre for Theological Reflection",
        date: "Oct 2021 - Feb 2022",
        desc: `Provided crucial support and implemented modifications to the Jesuit Centre for Theological Reflection (JCTR) repository infrastructure form upload process.
      Conducted training on batch ingestion of documents into the repository using various techniques.
      Carried out batch ingestion of digital content using Bash and Excel, increasing digital content size.
      Helped develop the Digital Asset Management System (DAMS)`,
        skills: [
          "Repository Management",
          "Batch Ingestion",
          "Bash Scripting",
          "Excel",
          "Digital Asset Management"
        ],
        // doc: "link if any",
      }
      
  ];
  
  export const education = [
    {
      id: 0,
      img: unzaLogo,
      school: "The University of Zambia",
      date: "Jan 2025 - Nov 2026",
      // grade: "8.41 CGPA",
      desc: "Currently pursuing my Msc in Computer Science at the University of Zambia, Lusaka.",
      degree: "Msc in Computer Science",
    },
    {
      id: 1,
      img: unzaLogo,
      school: "The University of Zambia",
      date: "Jan 2023 - Nov 2023",
      // grade: "8.41 CGPA",
      desc: "I complemented my Postgraduate Diploma in Computer Science at the University of Zambia, Lusaka. The courses I took include Data Structures, Algorithms, Object-Oriented Programming (Java), Database Management Systems, Operating Systems, and Computer Networks.",
      degree: "Postgraduate Diploma in Computer Science",
    },
    {
      id: 2,
      img: unzaLogo,
      school: "The University of Zambia",
      date: "Jan 2018 - Nov 2021",
      grade: "Grade: 3.08/4.0",
      desc: "I completed my Undergraduate Degree Program in Information and Communication Technologies from the University of Zambia, Lusaka. Some of the course work includes Computer Systems and Architecture, Computational Mathematics, Computer Programming, Software Engineering and Project Management and Data and Communication Networks",
      degree: "Information and Communication Technologies with Education",
    },
    {
      id: 3,
      img: "data:image/png;base64,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",
      school: "CISCO Networking Academy",
      date: "July 2023 - Nov 2023",
      // grade: "92.3%",
      desc: "I completed the Cisco® CCNAv7: Introduction to Networks course as part of the Cisco Networking Academy® program. This hands-on, lab-oriented course taught me the fundamentals of configuring switches and end devices to provide access to local and remote network resources. Explain how physical and data link layer protocols support the operation of Ethernet in a switched network. Configure routers to enable end-to-end connectivity between remote devices.",
      degree: "CISCO Certificate",
    },
  ];
  
  export const projects = [
    // {
    //   id: 11,
    //   title: "Enterprise Medical Imaging for Streamlined Radiological Diagnosis in Zambia",
    //   date: "Feb 2023 - Present",
    //   description:
    //     "The work I am currently involved in delves into the realm of Large Scale Medical Image Analysis, where we explore effective methods to process and analyze medical images with precision and accuracy. Leveraging advanced computing techniques, we aim to derive meaningful insights that empower healthcare professionals to make informed decisions",
    //   image:
    //     unzaLogo,
    //   tags: [
    //     "Data Analysis",
    //     "Drupal",
    //     "Python",
    //     "Google Cola",
    //     "Git",
    //     "HTML",
    //     "CSS"
    //   ],
    //   category: "web app",
    //   // github: "https://github.com/rishavchanda/DecisionHub",
    //   webapp: "https://emi.org.zm/",
    // },
    {
      id: 0,
      title: "Zambia National Electronic Thesis and Dissertation Portal",
      date: "Jan 2021 - Present",
      description:
        "The Zambia National Electronic Thesis and Dissertation Portal is a system that is meant to support seamless data sharing and communication between higher learning institutions in Zambia",
      image:
        unzaLogo,
      tags: [
        "Drupal",
      ],
      category: "web app",
      // github: "https://github.com/rishavchanda/Project-Management-App",
      // webapp: "https://datalab.unza.zm/",
    },
    {
      id: 1,
      title: "JCTR Reposity",
      date: "Oct 2021 - Feb 2022",
      description:
        "My role in the project involved providing crucial support and implementing modifications to the repository infrastructure. Specifically, I worked towards enhancing the repository's functionality, enabling seamless document uploads. These enhancements contribute to JCTR's broader mission of facilitating access to valuable research and data",
      image:
        "data:image/png;base64,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",
      tags: [
        "DSpace",
      ],
      category: "web app",
      // github: "https://github.com/rishavchanda/Trackify",
      webapp: "https://repository.jctr.org.zm/",
    },
    // {
    //   id: 0,
    //   title: "Self-Archiving Tool",
    //   date: "Jab 2021 - Dec 2021",
    //   description:
    //     "The SmartIRDeposit Application is an application that is used for depositing Electronic Theses and Dissertations produced at The University of Zambia. The smartIRDeposit application is meant to be used by postgraduate students, when depositing Electronic Theses and Dissertations (ETDs), prior to graduating. ",
    //   image:
    //     unzaLogo,
    //   tags: ["MongoDb", "Node Js", "Express Js"],
    //   category: "web app",
    //   // github: "https://github.com/rishavchanda/Podstream",
    //   // webapp: "https://podstream.netlify.app/",
    //   // member: [
    //   //   {
    //   //     name: "Rishav Chanda",
    //   //     img: "https://avatars.githubusercontent.com/u/64485885?v=4",
    //   //     linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
    //   //     github: "https://github.com/rishavchanda/",
    //   //   },
    //   //   {
    //   //     name: "Upasana Chaudhuri",
    //   //     img: "https://avatars.githubusercontent.com/u/100614635?v=4",
    //   //     linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
    //   //     github: "https://github.com/upasana0710",
    //   //   },
    //   // ],
    // },
    {
      id: 2,
      title: "The University of Zambia DataLab Website",
      date: "Jan 2021 - May 2021",
      description:
        "The DataLab Website is a site that contains information related to the DataLab Research Group at the University of Zambia. The DataLab group is a research laboratory at The University of Zambia that primarily conducts research focused on data analysis and data management",
      image:
        unzaLogo,
      tags: [
        "Drupal",
      ],
      category: "web app",
      // github: "https://github.com/rishavchanda/Project-Management-App",
      webapp: "https://datalab.unza.zm/",
    },
    // {
    //   id: 2,
    //   title: "SmartIRDeposit Application",
    //   date: "Jan 2021 - Dec 2021",
    //   description:
    //     "The SmartIRDeposit Application is an application that is used for depositing Electronic Theses and Dissertaitons produced at The University of Zambia. The smartIRDeposit application is meant to be used by postgraduate students, when depositing Electronic Theses and Dissertations (ETDs), prior to graduating",
    //   image:
    //     unzaLogo,
    //   tags: ["Express.js", "MongoDB", "Nodejs", "LucidChart"],
    //   category: "web app",
    //   // github: "https://github.com/rishavchanda/Brain-Tumor-Detection",
    //   // webapp: "https://brain-tumor.netlify.app/",
    //   // member: [
    //   //   {
    //   //     name: "Rishav Chanda",
    //   //     img: "https://avatars.githubusercontent.com/u/64485885?v=4",
    //   //     linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
    //   //     github: "https://github.com/rishavchanda/",
    //   //   },
    //   //   {
    //   //     name: "Upasana Chaudhuri",
    //   //     img: "https://avatars.githubusercontent.com/u/100614635?v=4",
    //   //     linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
    //   //     github: "https://github.com/upasana0710",
    //   //   },
    //   // ],
    // },
    

  ];
  
  export const TimeLineData = [
    { year: 2017, text: "Started my journey" },
    { year: 2018, text: "Worked as a freelance developer" },
    { year: 2019, text: "Founded JavaScript Mastery" },
    { year: 2020, text: "Shared my projects with the world" },
    { year: 2021, text: "Started my own platform" },
  ];