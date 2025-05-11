export default function button({
  content,
  customWidth,
  customPadding,
  customFontSize,
}) {
  return (
    <>
      <button
        className="btn rounded text-light"
        style={{
          backgroundColor: "#000000",
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
