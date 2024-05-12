import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ProjectHeading from "../../../components/ProjectHeading";
import ImageItem from "../../../components/ImageItem";

import mpaImage1 from '../../../public/images/projects/mpa/mpa_1.png';
import mpaImage2 from '../../../public/images/projects/mpa/mpa_2.png';
import mpaImage3 from '../../../public/images/projects/mpa/mpa_3.png';
import mpaImage4 from '../../../public/images/projects/mpa/mpa_4.jpg';
import "./mpa.scss";


// ==========================================================
// ======================= SEO Data =========================
// ==========================================================
export const metadata = {
  title: "MPA Project",
  description: `Discover the MPA residential building's captivating landscape 
    and architectural design by INCO Architects in collaboration with Innocon. 
    Embrace functionality and aesthetics in the narrow corridor, showcasing 
    the company's identity with a visually appealing entrance and relaxation area.`,
};

// ==========================================================
// ==================== MPA Project Data ====================
// ==========================================================
const mpaData = [
  {
    id: 1,
    content: [
      `Inco architects in cooperation with Innocon is proud to present a landscape design project
      and architectural planning for the main entrance of a residential building
      in the Fifth Settlement in Cairo, owned by a “ MPA ” real estate development company,
      With a total area of 85 square meters.`,

      `This project includes the main entrance, a relaxation area, a beautiful natural view
      along the long side of the hallway, with a wall dedicated to displaying the logo for
      the company that owns the building "MPA"`,
    ],
    imgSrc: [mpaImage1],
  },
  {
    id: 2,
    content: [
      `One of the main challenges of this project was the narrow corridor,
      Which required a decorative solution to provide both visual appeal and functionality.
      This challenge has been addressed by carefully designing to hide any sharp
      or obtuse corners, creating a smooth and comfortable visual experience.`,

      `There was a request from MPA to display the company's logo on the wall to emphasize
      the identity of the residential architecture.
      to ensure that the logo would be visible and effective,
      It was placed in the front wall at the end of the corridor and
      we used artificial lighting elements to focus on the wall and make insulation on the logo.`,
    ],
    imgSrc: [mpaImage2],
  },
  {
    id: 3,
    content: [
      `We believe that functionality and aesthetics go hand in hand.
      Our design of this entrance for residential architecture takes into account the needs
      and comfort of residents, while providing a visually comfortable environment,
      and to achieve this, it was necessary to link the materials used that are suitable for
      the space function with natural and artificial lighting elements.`,

      `The main entrance is spacious and welcoming with a simple design that creates
      a sense of comrort and calm. Light Pietra gray marble is used on the floors,
      and the relaxation and waiting area is located near the entrance, providing
      a comfortable and attractive space for residents to relax.`,
    ],
    imgSrc: [mpaImage3, mpaImage4],
  },
  {
    id: 4,
    content: [
      `The long entrance features a view of the natural trees along the right side of the corridor,
      which gives a sense of the fresh air and creates a connection with nature.
      The wall dedicated to the company logo is located along this entrance,
      providing a visual focal point and adding to the overall aesthetic of the space.`,
    ],
    imgSrc: [],
  },
];

function createBox(mpaData) {
  return (
    <div className="box">
      <div className="content">
        {mpaData.content.map((item) => (
          <p>{item}</p>
        ))}
      </div>
      {mpaData.imgSrc.map((img) => (
        <ImageItem src={img} width={3250} height={2000} />
      ))}
    </div>
  );
}

export default function page() {
  return (
    <>
      <Header />
      <section className="mpa" id="mpa">
        <ImageItem
          src={mpaImage4}
          width={2000}
          height={1250}
        />
        <div className="container">
          <ProjectHeading
            title="MPA l Skyline"
            subtitle="Fifth settlement l Cairo l Egypt"
          />

          <div className="boxes">{mpaData.map(createBox)}</div>
        </div>
      </section>

      <Footer />
    </>
  );
}
