const Hero = () => {
  return (
    <section id="home" className="main-hero-area rel z-1">
      <div className="container container-1620">
        <div className="row align-items-center hero-row">
          
          {/* LEFT : TEXT */}
          <div className="col-lg-6 col-md-12">
            <div className="hero-content wow fadeInUp delay-0-2s">
              <span className="h2">Hello, I’m</span>
              <h1>
                <b>Samir Valimbe</b><br />
                Graphic Designer & Sketch Artist
              </h1>
              <p>
                Crafting visual stories that elevate brands and engage audiences
                through creative design.
              </p>

              <div className="hero-btns">
                <a href="#contact" className="theme-btn">
                  Hire Me <i className="far fa-angle-right" />
                </a>

                <a
  href="/assets/resume/Samir-Valimbe.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="read-more"
>
  View Resume <i className="far fa-angle-right" />
</a>

              </div>
            </div>
          </div>

          {/* RIGHT : IMAGE */}
          <div className="col-lg-6 col-md-12">
            <div className="author-image-part wow fadeIn delay-0-3s">
              <div className="bg-circle" />
              <img
                src="/assets/images/hero/me.png"
                alt="Author"
                className="hero-image"
              />
            </div>
          </div>

        </div>
      </div>

      <div className="bg-lines">
        {[...Array(10)].map((_, i) => <span key={i} />)}
      </div>
    </section>
  );
};

export default Hero;
