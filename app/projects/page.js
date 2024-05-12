import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SectionHeading from "../../components/SectionHeading";
import ImageItem from "../../components/ImageItem";
import Link from "next/link";

import oliviaImage from "../../public/images/projects/olivia.png";
import mpaImage from "../../public/images/projects/mpa.png";
import russiaImage from "../../public/images/projects/russia.png";
import "./projects.scss";

// ==========================================================
// ======================= SEO Data =========================
// ==========================================================
export const metadata = {
  title: "INCO Projects",
  description: `Explore INCO Architects' portfolio of visionary projects, 
    ranging from governmental and educational institutions to commercial 
    complexes and resorts. Discover how our expertise can elevate your 
    next architectural endeavor.`,
};

// ==================================================================
// ========================= Projects Data ==========================
// ==================================================================
const projectsData = [
  {
    id: 1,
    title: "MPA",
    subtitle: "Cairo | Egypt",
    imgSrc: mpaImage,
    projectSrc: "projects/mpa",
  },
  {
    id: 2,
    title: "Inozemtsevo Studio",
    subtitle: "Stavropol | Russia",
    imgSrc: russiaImage,
    projectSrc: "projects/russia",
  },
  {
    id: 3,
    title: "Olivia",
    subtitle: "Cairo | Egypt",
    imgSrc: oliviaImage,
    projectSrc: "projects/olivia",
  },
];

function createProject(projectsData) {
  return (
    <Link className="project" href={projectsData.projectSrc}>
      <ImageItem src={projectsData.imgSrc} width={2000} height={1400} />
      <div className="content">
        <h3>{projectsData.title}</h3>
        <div className="line" />
        <h4>{projectsData.subtitle}</h4>
      </div>
    </Link>
  );
}

export default function page() {
  return (
    <>
      <Header />
      <section className="projects" id="projects">
        <div className="container">
          <SectionHeading title="Projects" />

          <div className="projects-box">{projectsData.map(createProject)}</div>
        </div>
      </section>

      <Footer />
    </>
  );
}
