import PropTypes from "prop-types";
import "./Sec2.css";
export default function Sec2({ sec2_title, sec2_description, sec2_cards }) {
  const text_color = "#CB8778";
  let cards = sec2_cards;
  // for (let i=0; i<3; i++) {
  //     cards.push(
  //         {
  //             img:'',
  //             coloredText:'',
  //             text:''
  //         }
  //     )
  // }
  return (
    <div className="sec2">
      <h1 style={{ color: text_color, marginTop: "20rem", fontWeight: "bold" }}>
        {sec2_title}
      </h1>
      <p className="text-black fs-4 w-75 my-4 sec2-desc">{sec2_description}</p>
      <div className="row ">
        {cards.map((card, index) => {
          return (
            <div
              key={index}
              className="col-12 col-md-6 col-lg-3 my-3 my-lg-0 text-center"
            >
              <div className="card" style={{ width: " 100%", height: "400px" }}>
                <img src={card.img} alt="" className="card-img-top" />
                <div
                  className="card-body"
                  style={{ backgroundColor: "#EAE7E7" }}
                >
                  <h5 className="card-title" style={{ color: text_color }}>
                    {card.coloredText}
                  </h5>
                  <p className="card-text">{card.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
Sec2.propTypes = {
  sec2_title: PropTypes.string.isRequired,
  sec2_description: PropTypes.string.isRequired,
  sec2_cards: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      coloredText: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};
