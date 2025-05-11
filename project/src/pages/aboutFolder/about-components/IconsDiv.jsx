export default function IconsDiv() {
  const divWithIcons = [
    {
      icon: "./logo/about_experience.svg",
      number: "+10",
      text: "Years Experience",
    },
    {
      icon: "./logo/about_customers.svg",
      number: "+12k",
      text: "Happy Customers",
    },
    {
      icon: "./logo/about_programs.svg",
      number: "+50",
      text: "Training programs",
    },
  ];
  return (
    <div className="d-flex-column d-sm-flex justify-content-between mb-5 mb-sm-0">
      {divWithIcons.map((item) => (
        <div className="d-flex align-items-center" key={item.text}>
          <img
            src={item.icon}
            alt="Logo"
            width="50%"
            height="50%"
            className="d-inline-block align-text-top d-flex align-items-center"
          />
          <div>
            <p className="fs-1 mb-0">{item.number}</p>
            <p className="fs-5 mt-0" style={{ color: "#CB8778" }}>
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
