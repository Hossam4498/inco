import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SectionHeading from "../../components/SectionHeading";
import "./contact.scss";


// ==========================================================
// ======================= SEO Data =========================
// ==========================================================
export const metadata = {
  title: "INCO Contact",
  description: `Easily connect with INCO Architects for expert 
    architectural and interior design solutions. Contact us today 
    to discuss your project needs and bring your vision to life 
    with our experienced team.`,
};

export default function page() {
  return (
    <>
      <Header />
      <section className="contact" id="contact">
        <div className="container">
          <SectionHeading title="Contact" />

          <form
            action="https://formsubmit.co/incoarchitects.eg@gmail.com"
            method="POST"
            className="contact-form"
          >
            <div className="name">
              <input
                type="text"
                placeholder="My name is"
                name="name"
                id="name_input"
                required
              />
            </div>
            <div className="email">
              <input
                type="email"
                placeholder="My e-mail is"
                name="email"
                id="email_input"
                required
              />
            </div>
            <div className="telephone">
              <input
                type="text"
                placeholder="My number is"
                name="telephone"
                id="telephone_input"
                required
              />
            </div>
            <div className="subject">
              <select
                placeholder="Subject line"
                name="subject"
                id="subject_input"
                required
              >
                <option disabled="" hidden="" selected="">
                  Subject line
                </option>
                <option>Individual</option>
                <option>Company</option>
                <option>Contractor</option>
              </select>
            </div>
            <div className="message">
              <textarea
                name="message"
                placeholder="I'd like to chat about"
                id="message_input"
                cols={30}
                rows={5}
                required=""
                defaultValue={""}
              />
            </div>
            {/* <div class="checkbox">
                <input type="checkbox" required>
                <label for="checkbox"> I agree to the <a href="privacy-statement.html">Privacy Statement</a></label>
            </div> */}
            <div className="submit">
              <input
                type="submit"
                defaultValue="Send Message"
                className="form-button"
              />
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
