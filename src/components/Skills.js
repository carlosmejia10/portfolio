
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import {ProgressBar1, ProgressBar2, ProgressBar3, ProgressBar4} from "./ProgressBar";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Me especializo en el uso de herramientas para crear paginas de frontend, sin embargo tambien poseo habilidades de backend. Lenguajes: React, node, SQL, HTML, CSS, javaScript.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <ProgressBar1 percentage={65} className="progressbar1" />
                  <h5>Frontend</h5>
                </div>
                <div className="item">
                  <ProgressBar2 percentage={85} className="progressbar2" />
                  <h5>Backed</h5>
                </div>
                <div className="item">
                  <ProgressBar3 percentage={90} className="progressbar3" />
                  <h5>Ux Design</h5>
                </div>
                <div className="item">
                  <ProgressBar4 percentage={75} className="progressbar4" />
                  <h5>Databases</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
