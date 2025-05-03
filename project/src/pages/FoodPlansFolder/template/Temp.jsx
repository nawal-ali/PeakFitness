import MainBanner from "./components/mainBanner/MainBanner";
import Sec2 from "./components/sec2/Sec2";
import Sec3 from "./components/sec3/Sec3";
import Sec4 from "./components/sec4/Sec4";
import PropTypes from "prop-types";
import "./Temp.css"; // Import the CSS file

export default function Temp({
  main_banner_bg,
  main_banner_title,
  sec2_title,
  sec2_description,
  sec2_cards,
  sec3_title,
  sec3_description,
  sec3_cards,
  sec4_title,
  sec4_list,
}) {
  return (
    <>
      <MainBanner main_bg={main_banner_bg} title={main_banner_title} />
      <div
        className="container"
        data-bs-spy="scroll"
        data-bs-target="#scroll"
        data-bs-root-margin="0px 0px 0px 0px"
        data-bs-smooth-scroll="true"
        tabIndex="0"
      >
        <hr
          className="hr1"
          style={{
            border: "5px solidrgb(0, 0, 0)",
            marginTop: "19.5rem",
            borderRadius: "10px",
          }}
        />
        <hr
          style={{
            border: "5px solidrgb(0, 0, 0)",
            borderRadius: "10px",
            width: "50%",
            margin: "auto",
          }}
        />
        <div id="scrollspyHeading1">
          <Sec2
            sec2_title={sec2_title}
            sec2_description={sec2_description}
            sec2_cards={sec2_cards}
          />
        </div>
        <div id="scrollspyHeading2">
          <Sec3
            sec3_title={sec3_title}
            sec3_description={sec3_description}
            sec3_cards={sec3_cards}
          />
        </div>
        <div id="scrollspyHeading3">
          <Sec4 sec4_title={sec4_title} sec4_list={sec4_list} />
        </div>
      </div>
    </>
  );
}

Temp.propTypes = {
  main_banner_bg: PropTypes.string.isRequired,
  main_banner_title: PropTypes.string.isRequired,
  sec2_title: PropTypes.string.isRequired,
  sec2_description: PropTypes.string.isRequired,
  sec2_cards: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      coloredText: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  sec3_title: PropTypes.string.isRequired,
  sec3_description: PropTypes.string.isRequired,
  sec3_cards: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      coloredText: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  sec4_title: PropTypes.string.isRequired,
  sec4_list: PropTypes.arrayOf(
    PropTypes.shape({
      coloredText: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};
