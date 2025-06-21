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
              <strong>Yes,</strong>  many of the workout routines are designed to be done at home using just your body weight or minimal equipment. However, for certain exercises, having basic gym tools can enhance the results.
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
              How do I know which workout is right for my fitness goal?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <strong>Our platform helps guide you</strong>  by categorizing exercises based on different fitness goals like weight loss, muscle gain, or general health. You can explore exercises by muscle group and read descriptions to choose what suits you best.
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
              <strong>Currently,</strong>  we don’t offer specialized plans for medical conditions or injuries, but we’re working on adding them soon to better support all users.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
