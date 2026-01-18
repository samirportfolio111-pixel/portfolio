const items = [
  {
    id: 1,
    name: "Adobe Photoshop",
    image: "assets/images/skills/skill3.png",
    value: "80",
  },
  {
    id: 2,
    name: "Adobe Illustrator",
    image: "assets/images/skills/skill2.png",
    value: "80",
  },
  {
    id: 3,
    name: "Adobe After Effects",
    image: "assets/images/skills/skill4.png",
    value: "50",
  },
  {
    id: 4,
    name: "Adobe Premiere Pro",
    image: "assets/images/skills/skill5.png",
    value: "60",
  },
  {
    id: 5,
    name: "canva",
    image: "assets/images/skills/skill1.png",
    value: "80",
  },
  {
    id: 6,
    name: "Figma",
    image: "assets/images/skills/skill6.png",
    value: "60",
  },
];

const Skill = () => {
  return (
    <section id="skills" className="skill-area rel z-1">

      <div className="container-fluid px-4">

        {/* ===== HEADING ===== */}
        <div className="row justify-content-center mb-60">
          <div className="col-lg-8 text-center">
            <h2 style={{marginTop: "20px"}} className="section-title">My Skills</h2>
            <span></span>
            <span className="sub-title">Software</span>
          </div>
        </div>

        {/* ===== SKILLS GRID ===== */}
        <div className="skill-items-wrap">
          <div className="row">
            {items.map((item) => (
              <div key={item.id}>
                <div className="skill-item wow fadeInUp delay-0-2s">
                  <img src={item.image} alt={item.name} />
                  <h5>{item.name}</h5>
                  <span className="percent">{item.value}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Background lines (unchanged) */}
      <div className="bg-lines">
        <span /><span /><span /><span /><span />
        <span /><span /><span /><span /><span />
      </div>

    </section>
  );
};

export default Skill;
