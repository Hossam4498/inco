import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SectionHeading from "../../components/SectionHeading";
import ImageItem from "../../components/ImageItem";

import aboutImg1 from '../../public/images/about/about-1.jpg';
import aboutImg2 from '../../public/images/about/about-2.jpg';
import aboutImg3 from '../../public/images/about/about-3.jpg';
import "./about.scss";

// ==========================================================
// ======================= SEO Data =========================
// ==========================================================
export const metadata = {
  title: "INCO About",
  description: `Learn about INCO Architects - established in 2023 by 
    experienced architects. Specializing in diverse projects, from 
    governmental to commercial, blending functionality and creativity 
    to bring visions to reality.`,
};

// ==================================================================
// =========================== About Data ===========================
// ==================================================================
const aboutData = [
  {
    id: 1,
    class: "box",
    title: "",
    content: [
      `INCO Architects Was established in 2023 by two partners
      architects having professional experience being responsible
      for the design of various types of major buildings in Egypt.`,

      `We offers expertise and specialised services in architectural
      and interior design, in planning and construction management,
      the firm has experiences in project designs ranging from
      governmental and educational , offices and commercial
      complexes, hotels, resorts.`,
    ],
    imgSrc: aboutImg1,
  },
  {
    id: 2,
    class: "box reverse",
    title: "",
    content: [
      `We are specializes in designing and creating exceptional
      spaces. With a team of talented architects and designers, we
      offer a range of services including residential, commercial,
      and industrial architecture.`,

      `Our focus is creating functional pleasing designs that meet
      the unique needs of our clients. We pride ourselves on our
      attention to detail, collaborative approach, and commitment to
      delivering projects on time and within budget.`,
    ],
    imgSrc: aboutImg2,
  },
  {
    id: 3,
    class: "box",
    title: "Crafting design story",
    content: [
      `At INCO Architects Design and Interiors, we are inspired by
      how people live in the world. We believe in building a
      symbiotic relationship between people and the environments
      they interact with. That’s why we approach each project with a
      sense of utility&nbsp;and&nbsp;creativity.`,

      `Whether you are looking to build a new home, renovate an
      existing space, or design a commercial building, our team is
      dedicated to bringing your vision to life.`,
    ],
    imgSrc: aboutImg3,
  },
];

function createBox(aboutData) {
  return (
    <div className={aboutData.class}>
      <div className="content">
        <h3 className="span">{aboutData.title}</h3>
        {aboutData.content.map((item) => (
          <p>{item}</p>
        ))}
      </div>
      <ImageItem src={aboutData.imgSrc} width={2000} height={1400} />
    </div>
  );
}

export default function page() {
  return (
    <>
      <Header />
      <section className="about" id="about">
        <div className="container">
          <SectionHeading title="About" />

          <div className="boxes">{aboutData.map(createBox)}</div>
        </div>
      </section>
      <Footer />
    </>
  );
}
