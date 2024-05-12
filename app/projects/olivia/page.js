import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ProjectHeading from "../../../components/ProjectHeading";
import ImageItem from "../../../components/ImageItem";

import oliviaImage1 from "../../../public/images/projects/olivia/olivia_1.png";
import oliviaImage2 from "../../../public/images/projects/olivia/olivia_2.png";
import oliviaImage3 from "../../../public/images/projects/olivia/olivia_3.png";
import oliviaImage4 from "../../../public/images/projects/olivia/olivia_4.png";
import oliviaImage5 from "../../../public/images/projects/olivia/olivia_5.png";
import oliviaImage6 from "../../../public/images/projects/olivia/olivia_6.png";
import oliviaPlanImage from "../../../public/images/projects/olivia/olivia_plan.png";

import "./olivia.scss";

// ==========================================================
// ======================= SEO Data =========================
// ==========================================================
export const metadata = {
  title: "Olivia Project",
  description: `Discover Olivia, a stunning residential project located 
    in Madinaty, blending convenience with elegance. Experience spacious 
    living areas, infused with natural light and warmth through thoughtful 
    design and the use of natural materials.`,
};

// ==========================================================
// ================ Hany Allam Project Data =================
// ==========================================================
const oliviaData = [
  {
    id: 1,

    content: [
      `The Olivia is located in Madinaty, a location situated between New Cairo
      and the New Administrative Capital District.It is conveniently located just a short walk from South Park.`,
    ],

    imgSrc: [
      oliviaImage2,
      oliviaImage3,
      oliviaImage4,
      oliviaImage1,
      oliviaImage5,
      oliviaImage6,
    ],
  },
  {
    id: 2,

    content: [
      `The space design has been reconfigured to increase the living space
      while maintaining the net floor-to-ceiling height to add
      a sense of spaciousness creating an open and spacious living area.
      one of the main considerations in the redesign was the use of natural materials
      to add a sense of warmth, and one of the main considerations in the redesign
      was to increase the area of the openings to improve the natural light entering the space.`,

      `We used a solvent of light colors with the color of natural wood with
      inlays of olive green hue that appear in the design of the kitchen,
      Carpet colors and wooden upholstery behind the TV.`,
    ],

    imgSrc: [oliviaPlanImage],
  },
];

function createBox(oliviaData) {
  return (
    <div className="box">
      <div className="content">
        {oliviaData.content.map((item) => (
          <p>{item}</p>
        ))}
      </div>
      {oliviaData.imgSrc.map((img) => (
        <ImageItem src={img} width={2000} height={1250} />
      ))}
    </div>
  );
}

export default function page() {
  return (
    <>
      <Header />
      <section className="olivia" id="olivia">
        <ImageItem
          src={oliviaImage1}
          width={2000}
          height={1250}
        />
        <div className="container">
          <ProjectHeading title="Olivia" subtitle="Madinaty | Cairo" />
          <div className="boxes">{oliviaData.map(createBox)}</div>
        </div>
      </section>
      <Footer />
    </>
  );
}
