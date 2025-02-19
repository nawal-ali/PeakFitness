export default function button({
  content,
  customWidth,
  customPadding,
  customFontSize,
}) {
  return (
    <>
      <button
        className="btn rounded-pill text-light"
        style={{
          backgroundColor: "#EC7E4A",
          width: customWidth,
          padding: customPadding,
          fontSize: customFontSize,
        }}
      >
        {content}
      </button>
    </>
  );
}
