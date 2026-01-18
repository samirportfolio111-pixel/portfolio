import Link from "next/link";

const Services = ({ extraClass }) => {
  const services = [
    {
      id: 1,
      title: "Logo Design & Brand Identity",
      text: "Custom logo design, color palette, typography and brand guidelines for startups and personal brands.",
    },
    {
      id: 2,
      title: "Social Media Creative Design",
      text: "Instagram & Facebook posts, stories, carousel designs and ad creatives for high engagement.",
    },
    {
      id: 3,
      title: "Poster, Flyer & Print Design",
      text: "Event posters, political campaigns, flyers, banners, hoardings and print-ready creatives.",
    },
    {
      id: 4,
      title: "Presentation & Pitch Deck Design",
      text: "Professional business presentations, pitch decks and clean infographic slides.",
    },
    {
      id: 5,
      title: "Marketing & Advertising Creatives",
      text: "Promotional banners, festive creatives and high-conversion ad visuals.",
    },
    {
      id: 6,
      title: "Portrait Sketches (Hand-Drawn)",
      text: "Pencil & charcoal sketches, realistic black & white portraits — perfect for gifts.",
    },
  ];

  return (
    <section
      id="services"
      className={`services-area pt-130 rpt-100 pb-100 rpb-70 rel z-1 ${extraClass}`}
    >
      <div className="container">

        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <h4>Services</h4>
              <h2>
                What I <span>Design</span> For You
              </h2>
            </div>
          </div>
        </div>

        {/* SERVICES LIST */}
        <div className="row">
          {services.map((service) => (
            <div className="col-lg-6" key={service.id}>
              <div className="service-item wow fadeInUp delay-0-2s">
                <div className="number">
                  {service.id < 10 ? `0${service.id}` : service.id}.
                </div>

                <div className="content">
                  <h4>{service.title}</h4>
                  <p>{service.text}</p>
                </div>
<Link href="#contact" className="details-btn">
  <i className="fas fa-arrow-right" />
</Link>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BACKGROUND LINES */}
      <div className="bg-lines">
        <span /><span /><span /><span /><span />
        <span /><span /><span /><span /><span />
      </div>
    </section>
  );
};

export default Services;
