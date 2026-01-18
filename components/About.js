

const About = () => {
  return (
    <section id="about" className="about-area rel z-1">
      <div className="for-bgc-black py-130 rpy-100">
        <div className="container">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-7">
              <div className="about-content-part rel z-2 rmb-55">
                <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                  <h4>About Me</h4>
                  <h2>
  Creative <span>Visual Solutions</span> For Modern Brands
</h2>

                  <p>
  I am a passionate graphic designer specializing in branding, social media
  creatives, and visual storytelling. I help businesses communicate their
  ideas clearly through clean, creative, and meaningful designs.
</p>

                </div>
                <ul className="list-style-one two-column wow fadeInUp delay-0-2s">
                  <li>Brand Identity Design</li>
<li>Social Media Creatives</li>
<li> Graphic Design</li>
<li>Typography &amp; Layout</li>

                </ul>
             <div className="about-info-box mt-25 wow fadeInUp delay-0-2s">

  {/* Email */}
  <div className="info-box-item">
    <i className="far fa-envelope" />
    <div className="content">
      <span>Email Us</span>
      <br />
      <a href="mailto:samirvalimbe111@gmail.com">
        samirvalimbe111@gmail.com
      </a>
    </div>
  </div>

  {/* Call */}
  <div className="info-box-item">
    <i className="far fa-phone" />
    <div className="content">
      <span>Make A Call</span>
      <br />
      <a href="tel:+917796275340">
        +91 7796275340
      </a>
    </div>
  </div>

  {/* Instagram */}
  <div className="info-box-item">
    <i className="fab fa-instagram" />
    <div className="content">
      <span>Instagram</span>
      <br />
      <a
        href="https://www.instagram.com/art_lover_sam111"
        target="_blank"
        rel="noreferrer"
      >
        @art_lover_sam111
      </a>
    </div>
  </div>

</div>

              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-image-part wow fadeInUp delay-0-3s">
                <img src="assets/images/about/about.jpg" alt="About Me" />
                <div className="about-btn btn-one wow fadeInRight delay-0-4s">
                  <img src="assets/images/about/btn-image1.png" alt="Image" />
                  <h6>Creative Graphic Designer</h6>

                  <i className="fas fa-arrow-right" />
                </div>
                <div className="about-btn btn-two wow fadeInRight delay-0-5s">
                  <img src="assets/images/about/btn-image2.png" alt="shape" />
                  <h6>Samir Valimbe</h6>

                  <i className="fas fa-arrow-right" />
                </div>
                
                <div className="dot-shape">
                  <img src="assets/images/shape/about-dot.png" alt="Shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};
export default About;

export const About2 = () => {
  return (
    <section
      id="about"
      className="about-area-two rel z-1 pt-130 rpt-100 pb-130 rpb-100"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="about-content-two rel z-2 rmb-55">
              <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">
                  <i className="flaticon-asterisk-1" />
                  Introduction of Myself
                </span>
                <h2>
  I'm a creative <span>graphic designer</span> connecting brands with people
  through visuals
</h2>

              </div>
              <div className="text pb-5">
                I focus on creating meaningful designs that enhance brand identity,
engage audiences, and communicate ideas effectively.

              </div>
              <div className="row">
                <div className="col-xl-3 col-sm-4 col-6">
                  <div className="about-info-item wow fadeInUp delay-0-2s">
                    <small>born In</small>
                    <b>India</b>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-4 col-6">
                  <div className="about-info-item wow fadeInUp delay-0-3s">
                    <small>experience</small>
                    <b>3+ Years</b>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-4 col-6">
                  <div className="about-info-item wow fadeInUp delay-0-4s">
                    <small>date of birth</small>
                    <b>27 May 2001</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-counter-wrap">
              <div className="row gap-40 justify-content-center">
                <div className="col-lg-5 col-6 mx-5">
                  
                </div>
                <div className="col-lg-5 col-6">
                 
                </div>
                <div className="col-lg-5 col-6">
                  
                </div>
              </div>
              <div className="counter-logo">
                <img
                  className="wow zoomIn delay-0-2s"
                  src="assets/images/shape/circle-logo.png"
                  alt="Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
