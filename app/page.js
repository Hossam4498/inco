import Header from "../components/Header";
import "./home.scss";

const page = () => {
  return (
    <>
      <Header />
      <section className="home" id="home">
        <video src="/images/home/home.mp4" className="video" autoPlay muted loop />
        <div className="container">
          <div className="content">
            <h1 className="title">INCO Architects</h1>
            <div className="line" />
            <p className="subtitle">
              <span>IN</span>ovation <span>CO</span>mpany For Architecture &amp;
              Interior Design
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
