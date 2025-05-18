import "../accordionFolder/acco.css";
export default function accordion() {
  return (
    <>
      <div
        className="accordion w-75 m-auto"
        id="accordionPanelsStayOpenExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              What is Pure Vitality and how can it help me reach my fitness
              goals?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body" style={{ color: "#CB8778" }}>
              Pure Vitality is a personalized fitness platform designed to help
              you achieve your goals through tailored workout plans and
              nutrition guidance. Whether you&apos;re aiming for weight loss,
              muscle gain, or improved overall health.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Are the workout routines suitable for home training, or do I need
              gym equipment?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <strong>This is the second item&apos;s accordion body.</strong> It
              is hidden by default, until the collapse plugin adds the
              appropriate classes that we use to style each element. These
              classes control the overall appearance, as well as the showing and
              hiding via CSS transitions. You can modify any of this with custom
              CSS or overriding our default variables. It&apos;s also worth
              noting that just about any HTML can go within the{" "}
              <code>.accordion-body</code>, though the transition does limit
              overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Can I access the platform from my smartphone or computer?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <strong>This is the third item&apos;s accordion body.</strong> It
              is hidden by default, until the collapse plugin adds the
              appropriate classes that we use to style each element. These
              classes control the overall appearance, as well as the showing and
              hiding via CSS transitions. You can modify any of this with custom
              CSS or overriding our default variables. It&apos;s also worth
              noting that just about any HTML can go within the{" "}
              <code>.accordion-body</code>, though the transition does limit
              overflow.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFour"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFour"
            >
              Are there specialized plans for people with medical conditions or
              injuries?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFour"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <strong>This is the third item&apos;s accordion body.</strong> It
              is hidden by default, until the collapse plugin adds the
              appropriate classes that we use to style each element. These
              classes control the overall appearance, as well as the showing and
              hiding via CSS transitions. You can modify any of this with custom
              CSS or overriding our default variables. It&apos;s also worth
              noting that just about any HTML can go within the{" "}
              <code>.accordion-body</code>, though the transition does limit
              overflow.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
