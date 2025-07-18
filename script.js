// Inicialización de i18next con recursos embebidos, español por defecto
i18next
    .use(i18nextBrowserLanguageDetector)
    .init({
        fallbackLng: "es",
        debug: false,
        resources: {
            es: {
                translation: {
                    nav: {
                        about: "Sobre mí",
                        skills: "Habilidades",
                        experience: "Experiencia",
                        courses: "Cursos",
                        education: "Formación",
                        projects: "Proyectos",
                        contact: "Contacto",
                    },
                    hero: {
                        subtitle: "Desarrollador Java Full Stack Jr.",
                        button: "Ver mis proyectos",
                    },
                    about: {
                        title: "Sobre mí",
                        text1:
                            "Me esfuerzo por escribir código limpio y escalable, aplicando metodologías ágiles y aprendiendo constantemente nuevas tecnologías.",
                        text2:
                            "Busco aportar valor real en cada proyecto, desde el backend con Java y Spring, hasta interfaces intuitivas con CSS, JavaScript y Bootstrap.",
                    },
                    skills: {
                        title: "Habilidades Técnicas",
                        levelIntermediate: "Intermedio",
                        levelBeginner: "Principiante",
                    },
                    experience: {
                        title: "Experiencia",
                        job1Title: "Desarrollador Full Stack Jr. - Repairman",
                        job1List: [
                            "Desarrollé una plataforma de e-commerce utilizando Java y Spring, implementando funcionalidades de gestión de productos, carrito de compras y procesamiento de pagos",
                            "Creé la interfaz de usuario con HTML, CSS y JavaScript, asegurando una experiencia de usuario intuitiva y responsiva",
                            "Implementé APIs RESTful para la integración de servicios de terceros, como pasarelas de pago y sistemas de envío, optimizando la comunicación entre el frontend y el backend",
                        ],
                        job2Title: "Diseñador Web - Mar & Cocos Resort",
                        job2List: [
                            "Diseñé la apariencia visual de la página web del hotel, desarrollando propuestas alineadas con la identidad de marca y seleccionando paletas de colores, tipografías e imágenes para lograr una presentación atractiva y coherente",
                            "Elaboré wireframes y mockups para definir la estructura, navegación y organización del contenido, priorizando la experiencia del usuario y la usabilidad en todos los dispositivos",
                            "Organicé la información y los elementos gráficos en el sitio para garantizar una navegación intuitiva y una comunicación clara de los servicios del hotel",
                        ],
                    },
                    courses: {
                        title: "Cursos",
                        javaBasicTitle: "Introducción a Java",
                        javaBasicDesc: "(2025)",
                        iaTitle: "IA para profesionistas",
                        iaDesc: "(2024)",
                        frontEmdTitle: "Front-end",
                        frontEmdDesc: "(2024)",
                        dataScienceTitle: "Ciencia de Datos",
                        dataScienceDesc: "(2023)",
                    },
                    education: {
                        title: "Formación Educativa",
                        degree1Title: "Licenciatura en Administración Pública y Ciencia Política",
                        degree1School: "Universidad de Colima",
                        degree2Title: "Bootcamp Desarrollador(a) Java FullStack Jr.",
                        degree2School: "Generation México",
                    },
                    projects: {
                        title: "Proyectos Destacados",
                        taskManagerTitle: "Repairman",
                        taskManagerDesc:
                            "Repairman es un website de reparación y venta de celulares.",
                        blogReactTitle: "Proyecto Pendiente",
                        blogReactDesc: "Este proyecto está pendiente.",
                        technologiesLabel: "Tecnologías:",
                        viewGitHub: "Ver en GitHub",
                        comingSoonBtn: "Próximamente",
                    },
                    languages: {
                        title: "Idiomas",
                        native: "Nativo",
                        intermediate: "Intermedio (B2)",
                    },
                    contact: {
                        title: "Contacto",
                        subtitle: "¿Quieres trabajar conmigo o tienes alguna pregunta? ¡Escríbeme!",
                        nameLabel: "Nombre",
                        nameInvalid: "Por favor, ingresa tu nombre.",
                        emailLabel: "Correo electrónico",
                        emailInvalid: "Por favor, ingresa un correo válido.",
                        messageLabel: "Mensaje",
                        messageInvalid: "Por favor, escribe un mensaje.",
                        sendButton: "Enviar",
                        formInvalid: "Por favor, completa correctamente el formulario.",
                        sending: "Enviando mensaje...",
                        success: "¡Mensaje enviado con éxito! Gracias por contactarme.",
                    },
                },
            },
            en: {
                translation: {
                    nav: {
                        about: "About Me",
                        skills: "Skills",
                        experience: "Experience",
                        courses: "Courses",
                        education: "Education",
                        projects: "Projects",
                        contact: "Contact",
                    },
                    hero: {
                        subtitle: "Java Full Stack Jr. Developer | Modern and efficient web solutions",
                        button: "See my projects",
                    },
                    about: {
                        title: "About Me",
                        text1:
                            "I strive to write clean and scalable code, applying agile methodologies and constantly learning new technologies.",
                        text2:
                            "I seek to add real value in every project, from backend with Java and Spring to intuitive interfaces with React and Bootstrap.",
                    },
                    skills: {
                        title: "Technical Skills",
                        levelIntermediate: "Intermediate",
                        levelBeginner: "Beginner",
                    },
                    experience: {
                        title: "Experience",
                        job1Title: "Full Stack Developer Jr. - Repairman",
                        job1List: [
                            "Developed an e-commerce platform using Java and Spring, implementing product management, shopping cart, and payment processing features",
                            "Created user interfaces with HTML, CSS, and JavaScript, ensuring intuitive and responsive user experiences",
                            "Implemented RESTful APIs for third-party service integration, optimizing communication between frontend and backend",
                        ],
                        job2Title: "Web Designer - Mar & Cocos Resort",
                        job2List: [
                            "Designed the visual appearance of the hotel website, aligning proposals with brand identity and choosing color palettes, typography and images for attractive and coherent presentation",
                            "Created wireframes and mockups to define structure, navigation, and content organization, prioritizing user experience and usability across devices",
                            "Organized information and graphic elements on the site to ensure intuitive navigation and clear communication of hotel services",
                        ],
                    },
                    courses: {
                        title: "Courses",
                        javaBasicTitle: "Introduction to Java",
                        javaBasicDesc: "Fundaula (2025)",
                        iaTitle: "AI for Professionals",
                        iaDesc: "BEDU (2024)",
                        frontEmdTitle: "Front-end",
                        frontEmdDesc: "Alura (2024)",
                        dataScienceTitle: "Data Science",
                        dataScienceDesc: "BEDU (2023)",
                    },
                    education: {
                        title: "Education",
                        degree1Title: "Systems Engineering",
                        degree1School: "University of Guadalajara",
                        degree2Title: "Java FullStack Jr. Developer Bootcamp",
                        degree2School: "Generation Mexico",
                    },
                    projects: {
                        title: "Featured Projects",
                        taskManagerTitle: "Repairman",
                        taskManagerDesc:
                            "Repairman is a website for cell phone repair and sales.",
                        blogReactTitle: "Upcoming Project",
                        blogReactDesc: "This project is upcoming.",
                        technologiesLabel: "Technologies:",
                        viewGitHub: "View on GitHub",
                        comingSoonBtn: "Coming Soon",
                    },
                    languages: {
                        title: "Languages",
                        native: "Native",
                        intermediate: "Intermediate (B2)",
                    },
                    contact: {
                        title: "Contact",
                        subtitle: "Want to work with me or have any questions? Write me!",
                        nameLabel: "Name",
                        nameInvalid: "Please enter your name.",
                        emailLabel: "Email",
                        emailInvalid: "Please enter a valid email.",
                        messageLabel: "Message",
                        messageInvalid: "Please write a message.",
                        sendButton: "Send",
                        formInvalid: "Please complete the form correctly.",
                        sending: "Sending message...",
                        success: "Message sent successfully! Thanks for contacting me.",
                    },
                },
            },
        },
    },
        function (err, t) {
            // Forzar idioma español al inicio
            i18next.changeLanguage("es", () => {
                updateContent();
                updateLanguageToggleIcon("es");
            });
        });

// Función para actualizar contenido traducible
function updateContent() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (key === "experience.job1List" || key === "experience.job2List") {
            const items = i18next.t(key, { returnObjects: true });
            el.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
        } else {
            el.innerHTML = i18next.t(key);
        }
    });

    const placeholders = {
        name: "contact.nameLabel",
        email: "contact.emailLabel",
        message: "contact.messageLabel",
    };
    Object.entries(placeholders).forEach(([id, key]) => {
        const el = document.getElementById(id);
        if (el) {
            el.placeholder = i18next.t(key);
        }
    });

    // Actualizar aria-labels botones idiomas sección idiomas
    document.querySelectorAll(".lang-select").forEach((btn) => {
        const lang = btn.getAttribute("data-lang");
        if (lang === "es") {
            btn.setAttribute("aria-label", i18next.t("languages.title") + " Español");
        } else if (lang === "en") {
            btn.setAttribute("aria-label", i18next.t("languages.title") + " English");
        }
    });
}

// Actualizar icono idioma navbar invertido
function updateLanguageToggleIcon(lang) {
    const btn = document.getElementById("languageToggle");
    if (!btn) return;
    if (lang === "es") {
        btn.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" alt="English" width="24" style="object-fit: contain;" />`;
        btn.setAttribute("aria-label", "Cambiar a Inglés");
    } else {
        btn.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg" alt="Español" width="24" style="object-fit: contain;" />`;
        btn.setAttribute("aria-label", "Switch to Spanish");
    }
}

// Cambiar idioma botones sección
document.querySelectorAll(".lang-select").forEach((el) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        const lang = el.getAttribute("data-lang");
        i18next.changeLanguage(lang, () => {
            updateContent();
            updateLanguageToggleIcon(lang);
        });
    });
});

// Cambiar idioma al hacer click en icono idioma navbar
document.getElementById("languageToggle").addEventListener("click", () => {
    const currentLang = i18next.language || "es";
    const newLang = currentLang === "es" ? "en" : "es";
    i18next.changeLanguage(newLang, () => {
        updateContent();
        updateLanguageToggleIcon(newLang);
    });
});

// Máquina de escribir para intro "Sobre mí"
window.addEventListener("DOMContentLoaded", () => {
    const introElems = document.querySelectorAll(".intro-text");
    if (introElems.length < 2) return;

    introElems[0].textContent = "";
    introElems[1].textContent = "";

    const introTexts = [i18next.t("about.text1"), i18next.t("about.text2")];
    let i = 0,
        j = 0;

    function typeWriter1() {
        if (i < introTexts[0].length) {
            introElems[0].textContent += introTexts[0].charAt(i);
            i++;
            setTimeout(typeWriter1, 40);
        } else {
            setTimeout(typeWriter2, 500);
        }
    }
    function typeWriter2() {
        if (j < introTexts[1].length) {
            introElems[1].textContent += introTexts[1].charAt(j);
            j++;
            setTimeout(typeWriter2, 40);
        }
    }
    typeWriter1();
});

// Animar barras de progreso
const skillBars = document.querySelectorAll(".progress-bar");

function animateSkills() {
    skillBars.forEach((bar) => {
        const width = bar.style.width;
        bar.style.width = "0";
        setTimeout(() => {
            bar.style.transition = "width 2s ease-in-out";
            bar.style.width = width;
        }, 300);
    });
}

window.addEventListener("scroll", () => {
    const skillsSection = document.getElementById("skills");
    const rect = skillsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        animateSkills();
    }
});

// GSAP animaciones hero y secciones
window.addEventListener("load", () => {
    gsap.from("#hero-title", { duration: 1, y: -50, opacity: 0, ease: "power3.out" });
    gsap.from("#hero-subtitle", { duration: 1, y: 50, opacity: 0, delay: 0.3, ease: "power3.out" });
    gsap.from("#hero-btn", { duration: 1, scale: 0.8, opacity: 0, delay: 0.6, ease: "back.out(1.7)" });

    const faders = document.querySelectorAll(".fade-in");
    const options = { threshold: 0.1 };
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, options);
    faders.forEach((fader) => appearOnScroll.observe(fader));
});

// Navegación suave navbar
document.querySelectorAll("#navbar a.nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
        const navCollapse = document.querySelector(".navbar-collapse");
        if (navCollapse.classList.contains("show")) {
            new bootstrap.Collapse(navCollapse).toggle();
        }
    });
});

// Envío formulario con EmailJS
const form = document.getElementById("contact-form");
const alertBox = document.getElementById("form-alert");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        form.classList.add("was-validated");

        if (!form.checkValidity()) {
            alertBox.innerHTML = '<div class="alert alert-danger">' + i18next.t("contact.formInvalid") + "</div>";
            return;
        }

        alertBox.innerHTML = '<div class="alert alert-info">' + i18next.t("contact.sending") + "</div>";

        const serviceID = "default_service";
        const templateID = "template_XXXXX"; // Reemplaza con tu template ID

        emailjs
            .sendForm(serviceID, templateID, form)
            .then(() => {
                alertBox.innerHTML = '<div class="alert alert-success">' + i18next.t("contact.success") + "</div>";
                form.reset();
                form.classList.remove("was-validated");
            })
            .catch((err) => {
                alertBox.innerHTML = `<div class="alert alert-danger">Error al enviar el mensaje: ${err.text}</div>`;
            });
    });
}
