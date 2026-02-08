// Main React Application Entry Point
const { useState, useEffect } = React;

// Navigation configuration
const navigationItems = [
    { path: "/about", label: "About", icon: "user" },
    { path: "/education", label: "Education", icon: "graduation-cap" },
    { path: "/research", label: "Research", icon: "search" },
    { path: "/publications", label: "Publications", icon: "book-open" },
    {
        path: "/professional-experience",
        label: "Professional Experience",
        icon: "briefcase",
    },
    { path: "/curriculum-vitae", label: "Curriculum Vitae", icon: "file-text" },
    { path: "/contact", label: "Contact", icon: "mail" },
];

// Sidebar Component
function Sidebar({ isOpen, onToggle, activeSection }) {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        if (window.innerWidth <= 768) {
            onToggle();
        }
    };

    return React.createElement(
        "nav",
        {
            className: `sidebar ${isOpen ? "open" : ""}`,
        },
        React.createElement(
            "div",
            { className: "sidebar-profile" },
            React.createElement(
                "div",
                { className: "sidebar-avatar" },
                React.createElement("img", {
                    src: "haike.png",
                    alt: "Haike Yu",
                    className: "profile-image",
                }),
            ),
            React.createElement(
                "div",
                { className: "sidebar-name" },
                "Haike Yu",
            ),
        ),
        React.createElement(
            "ul",
            { className: "sidebar-nav" },
            navigationItems.map((item) =>
                React.createElement(
                    "li",
                    {
                        key: item.path,
                        className: "sidebar-nav-item",
                    },
                    React.createElement(
                        "button",
                        {
                            className: `sidebar-nav-link ${activeSection === item.path.substring(1) ? "active" : ""}`,
                            onClick: () =>
                                scrollToSection(item.path.substring(1)),
                        },
                        React.createElement("i", {
                            className: "sidebar-nav-icon",
                            "data-lucide": item.icon,
                        }),
                        item.label,
                    ),
                ),
            ),
        ),
    );
}

// Mobile Menu Toggle
function MobileMenuToggle({ onToggle }) {
    return React.createElement(
        "button",
        {
            className: "mobile-menu-toggle",
            onClick: onToggle,
        },
        React.createElement("i", { "data-lucide": "menu" }),
    );
}

// PageShell Layout Component
function PageShell({ children, sidebarOpen, onSidebarToggle, activeSection }) {
    return React.createElement(
        "div",
        { className: "app-layout" },
        React.createElement(MobileMenuToggle, { onToggle: onSidebarToggle }),
        React.createElement(Sidebar, {
            isOpen: sidebarOpen,
            onToggle: onSidebarToggle,
            activeSection: activeSection,
        }),
        React.createElement(
            "main",
            { className: "main-content" },
            React.createElement(
                "div",
                { className: "page-container" },
                children,
            ),
        ),
    );
}

// About Section Component
function AboutSection() {
    return React.createElement(
        "section",
        {
            id: "about",
            className: "content-section",
        },
        React.createElement("h2", { className: "section-title" }, "About"),

        React.createElement(
            "div",
            { id: "about-interests", className: "about-subsection" },
            React.createElement(
                "h3",
                { className: "subsection-title" },
                "Research Statement",
            ),
            React.createElement(
                "p",
                { className: "research-question" },
                "How can internal human states—such as thoughts, emotions, and self-understanding—be meaningfully represented, inferred, and interacted with through data-driven systems?",
            ),
            React.createElement(
                "p",
                { className: "about-paragraph" },
                "This question lies at the intersection of machine learning and cognitive science, with a focus on how data-driven systems can represent, interpret, and interact with human thoughts, emotions, and psychological processes.",
            ),
            React.createElement(
                "p",
                { className: "about-paragraph" },
                "As I continued to explore machine learning alongside my own mental health journey, I increasingly realized that these two domains are converging into an important and rapidly growing field. On a smaller scale, people are already turning to large language models for reflection, dialogue, and emotional support. On a larger scale, researchers and practitioners are beginning to construct computational models of emotion, cognition, and internal states. Together, these developments suggest a broader shift in how technology engages with the human mind.",
            ),
            React.createElement(
                "p",
                { className: "about-paragraph" },
                "I am motivated to contribute to and learn within this emerging space, exploring how machine learning systems can model, support, and ultimately deepen our understanding of human mental processes.",
            ),
        ),

        React.createElement(
            "div",
            { id: "about-background", className: "about-subsection" },
            React.createElement(
                "h3",
                { className: "subsection-title" },
                "Background",
            ),
            React.createElement(
                "p",
                { className: "about-paragraph" },
                "I graduated from the University of Toronto with a background in Computer Science and Mathematics, where I explored how algorithms and data can be used to represent and reason about complex systems. Through projects in computer vision, robotics, and natural language understanding, I became increasingly curious about how machines learn internal representations and make sense of the world.",
            ),
        ),

        React.createElement(
            "div",
            { id: "about-current", className: "about-subsection" },
            React.createElement(
                "h3",
                { className: "subsection-title" },
                "Current Focus",
            ),
            React.createElement(
                "p",
                { className: "about-paragraph" },
                "I am currently pursuing a Master of Science in Computer Science (Machine Learning specialization) at Georgia Tech (OMSCS). Over time, my interests have increasingly converged on the intersection of machine learning and cognitive science — particularly how data-driven systems can help model human cognition, emotion, and behavior. I believe this intersection represents one of the most promising long-term directions for ML: from large language models supporting human-centered interaction and decision-making, to simple surveys and signals embedded in everyday systems. As intelligent systems become increasingly woven into daily life, understanding and modeling cognition and emotion may become as fundamental as perception or language — and may eventually bring us closer to understanding emotion itself.",
            ),
        ),

        React.createElement(
            "div",
            { id: "about-future", className: "about-subsection" },
            React.createElement(
                "h3",
                { className: "subsection-title" },
                "Future Directions",
            ),
            React.createElement(
                "p",
                { className: "about-paragraph" },
                "Looking ahead, my long-term goal is to work at the intersection of Machine Learning and Psychology. At this stage, I see myself in a cultivation phase — focused on steadily building technical depth, practical engineering ability, and research intuition. I am motivated to keep exploring questions that connect intelligence, data, and the human mind through applied ML, research, or hybrid roles.",
            ),
        ),
    );
}

// Education Section Component
function EducationSection() {
    const education = [
        {
            degree: "M.Sc. in Computer Science",
            specialization: "Machine Learning Specialization",
            institution: "Georgia Institute of Technology",
            dates: "Aug 2025 – Present",
        },
        {
            degree: "Honours B.Sc. in Computer Science",
            specialization: "Computer Science Specialist, Mathematics Major",
            institution: "University of Toronto",
            dates: "Sep 2020 – Jun 2024",
        },
    ];

    return React.createElement(
        "section",
        {
            id: "education",
            className: "content-section",
        },
        React.createElement("h2", { className: "section-title" }, "Education"),
        React.createElement(
            "div",
            { className: "education-list" },
            education.map((edu, index) =>
                React.createElement(
                    "div",
                    {
                        key: index,
                        className: "education-entry",
                    },
                    React.createElement(
                        "div",
                        { className: "edu-row-1" },
                        React.createElement(
                            "h3",
                            { className: "edu-institution" },
                            edu.institution,
                        ),
                        React.createElement(
                            "span",
                            { className: "edu-dates" },
                            edu.dates,
                        ),
                    ),
                    React.createElement(
                        "div",
                        { className: "edu-row-2" },
                        React.createElement(
                            "div",
                            { className: "edu-degree" },
                            edu.degree,
                        ),
                        edu.specialization &&
                            React.createElement(
                                "div",
                                { className: "edu-specialization" },
                                edu.specialization,
                            ),
                    ),
                ),
            ),
        ),
    );
}

// Research Section Component
function ResearchSection() {
    const researchThemes = [
        {
            title: "DeepPHQ",
            description:
                "Evaluating textual granularity for PHQ-8 depression severity prediction. The project studies how input representation and model architecture affect robustness when modeling depression severity from clinical interview transcripts.",
            icon: "brain",
            url: "https://github.com/RemMyFav/DeepPHQ",
            isProject: true,
            pngPreview: "deepphq.png",
            pdfFile: "deepphq.pdf",
        },
        {
            title: "Comparative Analysis of Unscented and Extended Kalman Filters",
            description:
                "This project explored two classical nonlinear filtering techniques—UKF and EKF—in probabilistic state estimation for robotics. We implemented both filters from scratch in Python and compared their accuracy, runtime efficiency, and numerical robustness across three nonlinear systems.",
            icon: "activity",
            url: "https://github.com/RemMyFav/UKF-vs-EKF-Analysis",
            isProject: true,
            pngPreview: "ukfvsekf.png",
        },
        {
            title: "SynthWave-Maestro",
            description:
                "AI project generating seamless musical transitions between songs using RNNs. Implemented forward and backward LSTM models to compose bridge segments that connect song endings to beginnings, with automatic coherence verification.",
            icon: "music",
            url: "https://github.com/RemMyFav/synthwave-maestro",
            isProject: true,
            pngPreview: "synthwave.png",
        },
        {
            title: "Handy-the-Mystic-Hand",
            description:
                "Gesture-based interface system controlling computer without mouse/keyboard using hand signs. Implemented ResNet50 embeddings, MediaPipe landmarks, and Random Forest classifier achieving 83% accuracy with customizable OS-level command mapping.",
            icon: "hand",
            url: "https://github.com/RemMyFav/Handy-the-Mystic-Hand",
            isProject: true,
            pngPreview: "handy.png",
        },
        {
            title: "CinemaScopeAI",
            description:
                "Investigates whether single trailer frames can predict film budget and genres. Implemented dual-head CNN and VGG16 transfer learning approaches for multi-task prediction from IMDb Top 250 films using visual features.",
            icon: "film",
            url: "https://github.com/RemMyFav/CinemaScopeAI",
            isProject: true,
            pngPreview: "cinemascope.png",
        },
        {
            title: "DeepPHQ",
            description:
                "Evaluating textual granularity for PHQ-8 depression severity prediction. The project studies how input representation and model architecture affect robustness when modeling depression severity from clinical interview transcripts.",
            icon: "brain",
            url: "https://github.com/RemMyFav/DeepPHQ",
            isProject: true,
            pngPreview: "deepphq.png",
            pdfFile: "deepphq.pdf",
        },
        {
            title: "Comparative Analysis of Unscented and Extended Kalman Filters",
            description:
                "This project explored two classical nonlinear filtering techniques—UKF and EKF—in probabilistic state estimation for robotics. We implemented both filters from scratch in Python and compared their accuracy, runtime efficiency, and numerical robustness across three nonlinear systems.",
            icon: "activity",
            url: "https://github.com/RemMyFav/UKF-vs-EKF-Analysis",
            isProject: true,
            pngPreview: "ukfvsekf.png",
        },
        {
            title: "SynthWave-Maestro",
            description:
                "AI project generating seamless musical transitions between songs using RNNs. Implemented forward and backward LSTM models to compose bridge segments that connect song endings to beginnings, with automatic coherence verification.",
            icon: "music",
            url: "https://github.com/RemMyFav/synthwave-maestro",
            isProject: true,
            pngPreview: "synthwave.png",
        },
        {
            title: "Handy-the-Mystic-Hand",
            description:
                "Gesture-based interface system controlling computer without mouse/keyboard using hand signs. Implemented ResNet50 embeddings, MediaPipe landmarks, and Random Forest classifier achieving 83% accuracy with customizable OS-level command mapping.",
            icon: "hand",
            url: "https://github.com/RemMyFav/Handy-the-Mystic-Hand",
            isProject: true,
            pngPreview: "handy.png",
        },
        {
            title: "CinemaScopeAI",
            description:
                "Investigates whether single trailer frames can predict film budget and genres. Implemented dual-head CNN and VGG16 transfer learning approaches for multi-task prediction from IMDb Top 250 films using visual features.",
            icon: "film",
            url: "https://github.com/RemMyFav/CinemaScopeAI",
            isProject: true,
            pngPreview: "cinemascope.png",
        },
    ];

    return React.createElement(
        "section",
        {
            id: "research",
            className: "content-section",
        },
        React.createElement("h2", { className: "section-title" }, "Research"),
        React.createElement(
            "p",
            { className: "section-subtitle" },
            "My research interests broadly focus on machine learning methods for modeling complex real-world signals and systems. Within this space, I am particularly interested in how ML models represent human-centered signals—such as language, perception, and behavior—with mental health being one important application domain.",
        ),

        React.createElement(
            "div",
            { className: "research-themes" },
            researchThemes.map((theme, index) =>
                React.createElement(
                    theme.isProject ? "a" : "div",
                    {
                        key: index,
                        className: `research-row ${theme.isProject ? "research-project" : ""}`,
                        href: theme.isProject ? theme.url : undefined,
                        target: theme.isProject ? "_blank" : undefined,
                        rel: theme.isProject
                            ? "noopener noreferrer"
                            : undefined,
                    },
                    React.createElement(
                        "div",
                        { className: "research-content" },
                        React.createElement(
                            "div",
                            { className: "research-icon" },
                            React.createElement("i", {
                                "data-lucide": theme.icon,
                            }),
                        ),
                        React.createElement(
                            "div",
                            { className: "research-text" },
                            React.createElement(
                                "h3",
                                { className: "research-title" },
                                theme.title,
                            ),
                            React.createElement(
                                "p",
                                { className: "research-description" },
                                theme.description,
                            ),
                        ),
                    ),
                    theme.isProject &&
                        React.createElement(
                            "div",
                            { className: "pdf-preview-only" },
                            React.createElement("img", {
                                src: theme.pngPreview,
                                alt: `${theme.title} Paper Preview`,
                                className: "pdf-thumbnail",
                            }),
                        ),
                ),
            ),
        ),
    );
}

// Publications Section Component
function PublicationsSection() {
    return React.createElement(
        "section",
        {
            id: "publications",
            className: "content-section",
        },
        React.createElement(
            "h2",
            { className: "section-title" },
            "Publications",
        ),
        React.createElement(
            "p",
            { className: "section-subtitle" },
            "For a complete list of publications, please see my Google Scholar profile.",
        ),
    );
}

// Professional Experience Section Component
function ProfessionalExperienceSection() {
    const experiences = [
        {
            title: "Machine Learning Intern",
            company: "Vosyn Inc.",
            location: "Toronto, Ontario, Canada",
            period: "May 2025 – Dec 2025",
            details: [
                "Integrated DiarizationLM into a GCP-based FasterWhisper + NeMo speech pipeline, enabling LLM-enhanced speaker diarization and systematic experimentation on WER and WDER.",
                "Independently built an end-to-end experimental platform, including raw audio sourcing, data cleaning, formatting, and a reference-based evaluation pipeline for automated WDER scoring.",
                "Identified that major WDER instability originated from the ASR module rather than diarization models, and proactively proposed a strategic shift in debugging direction.",
                "Refactored the transcription stage using FasterWhisper, isolating root causes and improving modularity of the pipeline.",
                "Diagnosed timestamp alignment instability caused by timestampcfcforcealigner, and resolved it by combining WhisperX and NeMo diarization outputs, resulting in a 25% improvement in WDER stability.",
                "Tuned model parameters under tight GPU resource constraints, balancing inference latency, GPU memory usage, and transcription accuracy to ensure production stability.",
                "Quickly adapted to a fast-paced startup workflow and later mentored new team members, helping them understand pipeline architecture and debugging methodology.",
            ],
        },
        {
            title: "Data Analyst Intern",
            company: "People's Bank of China",
            location: "Guiyang, Guizhou, China",
            period: "Jul 2023 – Aug 2023",
            details: [
                "Reclassified loan categories using Oracle-based data pipelines, improving high-risk loan identification by 13% and enabling more accurate downstream risk assessment.",
                "Designed and implemented robust APIs to streamline analytical workflows across teams, improving data accessibility and operational efficiency.",
                "Explored Neo4j graph-based representations on historical financial data, laying groundwork for scalable integration with future machine learning models.",
            ],
        },
        {
            title: "Data Processing Intern",
            company: "Bank of Guiyang Co., Ltd.",
            location: "Guiyang, Guizhou, China",
            period: "May 2023 – Jun 2023",
            details: [
                "Built a large-scale web scraper using Python and Scrapy, extracting nearly 100,000 job postings from major recruitment platforms for workforce analysis.",
                "Designed and implemented a data processing pipeline to clean, filter, and consolidate raw data, identifying approximately 1,000 high-quality samples.",
                "Deployed the structured dataset using Flask on Alibaba Cloud, enabling real-time access and internal analytics for downstream analysis teams.",
            ],
        },
    ];

    return React.createElement(
        "section",
        {
            id: "professional-experience",
            className: "content-section",
        },
        React.createElement(
            "h2",
            { className: "section-title" },
            "Professional Experience",
        ),
        React.createElement(
            "div",
            { className: "experience-list" },
            experiences.map((exp, index) =>
                React.createElement(
                    "div",
                    {
                        key: index,
                        className: "experience-entry",
                    },
                    React.createElement(
                        "div",
                        { className: "exp-header" },
                        React.createElement(
                            "div",
                            { className: "exp-title-section" },
                            React.createElement(
                                "h3",
                                { className: "exp-title" },
                                exp.title,
                            ),
                            React.createElement(
                                "span",
                                { className: "exp-company" },
                                exp.company,
                            ),
                        ),
                        React.createElement(
                            "span",
                            { className: "exp-period" },
                            exp.period,
                        ),
                    ),
                    React.createElement(
                        "div",
                        { className: "exp-location" },
                        exp.location,
                    ),
                    React.createElement(
                        "div",
                        { className: "exp-details" },
                        exp.details.map((detail, detailIndex) =>
                            React.createElement(
                                "div",
                                {
                                    key: detailIndex,
                                    className: "exp-detail-item",
                                },
                                React.createElement(
                                    "span",
                                    { className: "exp-bullet" },
                                    "•",
                                ),
                                React.createElement(
                                    "span",
                                    { className: "exp-detail-text" },
                                    detail,
                                ),
                            ),
                        ),
                    ),
                ),
            ),
        ),
    );
}

// Curriculum Vitae Section Component
function CurriculumVitaeSection() {
    return React.createElement(
        "section",
        {
            id: "curriculum-vitae",
            className: "content-section",
        },
        React.createElement(
            "h2",
            { className: "section-title" },
            "Curriculum Vitae",
        ),
        React.createElement(
            "p",
            { className: "section-subtitle" },
            "A concise overview of my academic background, research projects, and applied machine learning experience.",
        ),
        React.createElement(
            "div",
            { className: "cv-previews" },
            React.createElement(
                "div",
                { className: "cv-preview-container" },
                React.createElement("img", {
                    src: "cv1.png",
                    alt: "CV Page 1",
                    className: "cv-preview",
                }),
                React.createElement("div", { className: "cv-preview-overlay" }),
                React.createElement(
                    "div",
                    { className: "cv-preview-label" },
                    "Page 1",
                ),
            ),
            React.createElement(
                "div",
                { className: "cv-preview-container" },
                React.createElement("img", {
                    src: "cv2.png",
                    alt: "CV Page 2",
                    className: "cv-preview",
                }),
                React.createElement("div", { className: "cv-preview-overlay" }),
                React.createElement(
                    "div",
                    { className: "cv-preview-label" },
                    "Page 2",
                ),
            ),
        ),
        React.createElement(
            "div",
            { className: "cv-download-section" },
            React.createElement(
                "a",
                {
                    href: "cv.pdf",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "cv-download-button",
                },
                React.createElement("i", {
                    "data-lucide": "download",
                    style: {
                        width: "20px",
                        height: "20px",
                        marginRight: "8px",
                    },
                }),
                "Download Full CV (PDF)",
            ),
        ),
    );
}

// Contact Section Component
function ContactSection() {
    return React.createElement(
        "section",
        {
            id: "contact",
            className: "content-section",
        },
        React.createElement("h2", { className: "section-title" }, "Contact"),
        React.createElement(
            "p",
            { className: "section-subtitle" },
            "I welcome research discussions, collaboration opportunities, and thoughtful conversations at the intersection of machine learning and cognitive science.",
        ),
        React.createElement(
            "div",
            { className: "contact-info" },
            React.createElement(
                "div",
                { className: "contact-item" },
                React.createElement("i", { className: "contact-icon" }, "mail"),
                React.createElement(
                    "a",
                    {
                        href: "mailto:haike.yu@outlook.com",
                        className: "contact-link",
                    },
                    "haike.yu@outlook.com",
                ),
            ),
            React.createElement(
                "div",
                { className: "contact-item" },
                React.createElement(
                    "i",
                    { className: "contact-icon" },
                    "github",
                ),
                React.createElement(
                    "a",
                    {
                        href: "https://github.com/RemMyFav",
                        className: "contact-link",
                    },
                    "github.com/RemMyFav",
                ),
            ),
            React.createElement(
                "div",
                { className: "contact-item" },
                React.createElement(
                    "i",
                    { className: "contact-icon" },
                    "linkedin",
                ),
                React.createElement(
                    "a",
                    {
                        href: "https://linkedin.com/in/haike-yu",
                        className: "contact-link",
                    },
                    "linkedin.com/in/haike-yu",
                ),
            ),
        ),
    );
}

// Main App Component
function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        // Setup IntersectionObserver for scroll-spy
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -60% 0px",
            threshold: 0,
        };

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;

                    // Check if it's a subsection
                    if (id.startsWith("about-")) {
                        setActiveSection("about");
                    } else {
                        setActiveSection(id);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(
            handleIntersection,
            observerOptions,
        );

        // Observe all sections and subsections
        const elements = document.querySelectorAll(
            "section[id], .about-subsection[id]",
        );
        elements.forEach((el) => observer.observe(el));

        // Initialize Lucide icons
        if (window.lucide) {
            window.lucide.createIcons();
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        // Re-create icons when component updates
        if (window.lucide) {
            window.lucide.createIcons();
        }
    });

    return React.createElement(
        PageShell,
        {
            sidebarOpen: sidebarOpen,
            onSidebarToggle: () => setSidebarOpen(!sidebarOpen),
            activeSection: activeSection,
        },
        React.createElement(
            "div",
            { className: "main-page" },
            React.createElement(AboutSection),
            React.createElement(EducationSection),
            React.createElement(ResearchSection),
            React.createElement(PublicationsSection),
            React.createElement(ProfessionalExperienceSection),
            React.createElement(CurriculumVitaeSection),
            React.createElement(ContactSection),
        ),
    );
}

// Initialize the app
function initializeApp() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(React.createElement(App));
}

// Start the application
initializeApp();
