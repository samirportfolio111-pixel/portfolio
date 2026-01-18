import Link from "next/link";

// Arrays of client logos
const clientLogos = [
  "client-logo1.png",
  "client-logo2.png",
  "client-logo3.png",
  "client-logo4.png",
  "client-logo5.png",
  "client-logo6.png",
  "client-logo7.png",
  "client-logo8.png",
  "client-logo9.png",
  "client-logo10.png",
  "client-logo11.png",
  "client-logo12.png",
  "client-logo13.png",
  "client-logo14.png",
  "client-logo15.png",
  "client-logo16.png",
  "client-logo17.png",
  "client-logo18.png",


];

const clientLogosTwo = [
  "client-logo-two1.png",
  "client-logo-two2.png",
  "client-logo-two3.png",
  "client-logo-two4.png",
  "client-logo-two5.png",
];

const Clients = () => {
  return (
    <div className="client-logo-area rel z-1 pt-130 rpt-100 pb-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center pt-5 mb-65 wow fadeInUp delay-0-2s">
              <h6>
                Worked With <span>22+ Clients</span> Across Web & Digital Projects
              </h6>
            </div>
          </div>
        </div>

        <div className="client-logo-wrap">
          {clientLogos.map((logo, index) => (
            <Link
              key={index}
              href="#contact"
              className={`client-logo-item wow fadeInUp delay-0-${index + 2}s`}
            >
              <img
                src={`assets/images/client-logos/${logo}`}
                alt="Client Logo"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-lines">
        {[...Array(10)].map((_, i) => (
          <span key={i} />
        ))}
      </div>
    </div>
  );
};

export default Clients;

export const Clients2 = () => {
  return (
    <div className="client-logo-area bgc-black rel z-1 pt-25 pb-60">
      <div className="container">
        <div className="client-logo-wrap style-two">
          {clientLogosTwo.map((logo, index) => (
            <Link
              key={index}
              href="#contact"
              className={`client-logo-item wow fadeInUp delay-0-${index + 2}s`}
            >
              <img
                src={`assets/images/client-logos/${logo}`}
                alt="Client Logo"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-lines">
        {[...Array(10)].map((_, i) => (
          <span key={i} />
        ))}
      </div>
    </div>
  );
};
