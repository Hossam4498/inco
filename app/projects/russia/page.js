import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ProjectHeading from "../../../components/ProjectHeading";
import ImageItem from "../../../components/ImageItem";

import russiaImage1 from "../../../public/images/projects/russia/kitchen.jpg";
import russiaImage2 from "../../../public/images/projects/russia/bedroom_1.jpg";
import russiaImage3 from "../../../public/images/projects/russia/bedroom_2.jpg";
import russiaImage4 from "../../../public/images/projects/russia/dressing_1-2.png";
import russiaImage5 from "../../../public/images/projects/russia/bathroom_3.jpg";
import russiaImage6 from "../../../public/images/projects/russia/bathroom_1-2.png";
import russiaPlanImage from "../../../public/images/projects/russia/plan.png";
import "./russia.scss";

// ==========================================================
// ======================= SEO Data =========================
// ==========================================================
export const metadata = {
  title: "Inozemtsevo Studio Project",
  description: `Explore the Inozemtsevo Studio, a modern oasis in Stavropol 
    Krai, Russia, designed by INCO Office. Maximizing space and functionality 
    with a muted color palette, this elegant studio offers comfort and style 
    in a compact footprint. Experience luxury and tranquility in every detail.`,
};

// ==========================================================
// ================ Russa Flat Project Data =================
// ==========================================================
const russiaData = [
  {
    id: 1,
    content: [
      `INCO Office was invited to design a modern studio in Stavropol Krai, Russia.
      The studio is located in a prime area of the city,
      Taking advantage of the rich quality of park views, with an area of 48 square meters,
      Consisting of a master bedroom with a dressing room,
      A kitchen with a living room and a dining area,
      And the main bathroom is located in the entrance space of the studio.`,

      `The challenge was to maximize the architectural function of these small spaces
      And use multifunctional furniture with a muted and neutral color palette too
      Create a calm and elegant environment. While ensuring comfort and
      Aesthetic appeal-a challenge that was met with creativity.`,
    ],
    imgSrc: russiaImage1,
  },
  {
    id: 2,
    content: [
      `The challenge here in designing a kitchen space was to create an integrated space
      between the kitchen, living room, and dining area within a small space.`,

      `The kitchen features sleek cabinetry with a combination of closed cabinets
      and open shelving, providing both storage and display space.
      The countertops are made of a marble material, and the lighting under the cabinet
      that adds a warm glow to the work surfaces.`,

      `The living area is furnished with a comfortable sofa adorned with decorative pillows,
      a glass-top coffee table, and a soft rug that adds texture and creating
      a comfortable space for relaxation. `,

      `The color palette is neutral, with shades of grey, white, and beige,
      which makes the space feel open and airy and enhances
      the sense of spaciousness and elegance.`,

      `There is a wall-mounted TV opposite the sofa,
      and decorative items like plants and artwork give the space a comfortable feel.`,

      `The overall design is clean and minimalist, with a focus on functionality and style.
      The use of lighting, both natural and artificial, enhances the ambiance of the studio.
      The layout is efficient, making the most of the available space in a studio.`,
    ],
    imgSrc: russiaImage3,
  },
  {
    id: 3,
    content: [],
    imgSrc: russiaImage2,
  },
  {
    id: 4,
    content: [],
    imgSrc: russiaImage4,
  },
  {
    id: 5,
    content: [
      `The designers maximized space and storage while maintaining comfort and style.
      The bedroom features a minimalist, modern aesthetic with clean lines, neutral tones,
      and natural materials.`,

      `The walls and ceiling are painted by white and light-colored,
      accentuating the light and airy feel.`,

      `The floor is a light-colored Porcelain -ff white- adding space feeling.
      The focal point is the custom-designed bed frame and headboard in walnut wood.
      The child's bed has storage drawers built into the base, maximizing space efficiency. `,

      `For additional storage, the designers included a walk-in dressing room accessible
      through the bedroom. The closet provides ample room for clothing, shoes, and accessories.`,

      `The neutral color-palette and natural materials create a calming zone
      amid the compact apartment layout.`,
    ],
    imgSrc: russiaImage5,
  },
  {
    id: 6,
    content: [],
    imgSrc: russiaImage6,
  },
  {
    id: 7,
    content: [
      `The main bathroom is located in the reception space of the studio,
      despite its small footprint, designed with an emphasis on elegance and attention to detail.`,

      `The use of White Carrara marble on the walls and Light-grey granite tiles
      on the floor in muted tones that create a soothing ambiance, and countertop
      creates a sense of grandeur and luxury, while the white bathtub adds
      a touch of simplicity and tranquility,
      the large mirror above the sink serves a dual purpose,
      both functional and aesthetic, visually expanding the space and reflecting
      the clean and elegant design. `,
    ],
    imgSrc: russiaPlanImage,
  },
];

function createBox(russiaData) {
  return (
    <div className="box">
      <div className="content">
        {russiaData.content.map((item) => (
          <p>{item}</p>
        ))}
      </div>
      <ImageItem src={russiaData.imgSrc} width={2000} height={1500} />
    </div>
  );
}

export default function page() {
  return (
    <>
      <Header />
      <section className="russa" id="russa">
        <ImageItem
          src={russiaImage2}
          width={2000}
          height={1500}
        />
        <div className="container">
          <ProjectHeading
            title="Inozemtsevo Studio"
            subtitle="Stavropol Krai | Russia"
          />

          <div className="boxes">{russiaData.map(createBox)}</div>
        </div>
      </section>

      <Footer />
    </>
  );
}
