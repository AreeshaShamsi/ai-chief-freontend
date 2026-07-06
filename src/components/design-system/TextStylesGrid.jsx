import TextStyleCard from "./TextStyleCard";
import "./design-system.css";

const previewText = "Design with confidence";

const textStyles = [
  ["display/desktop/bold", "48px", 700, "56px", "0px"],
  ["display/desktop/semibold", "48px", 600, "56px", "0px"],
  ["display/desktop/regular", "48px", 400, "56px", "0px"],
  ["heading/desktop/bold", "32px", 700, "40px", "0px"],
  ["heading/desktop/semibold", "32px", 600, "40px", "0px"],
  ["heading/desktop/regular", "32px", 400, "40px", "0px"],
  ["title/desktop/bold", "24px", 700, "32px", "0px"],
  ["title/desktop/semibold", "24px", 600, "32px", "0px"],
  ["title/desktop/regular", "24px", 400, "32px", "0px"],
  ["body/desktop/bold", "16px", 700, "24px", "0px"],
  ["body/desktop/medium", "16px", 500, "24px", "0px"],
  ["body/desktop/regular", "16px", 400, "24px", "0px"],
  ["caption/desktop/semibold", "12px", 600, "16px", "0px"],
  ["caption/desktop/regular", "12px", 400, "16px", "0px"],
  ["display/mobile/bold", "36px", 700, "44px", "0px"],
  ["display/mobile/semibold", "36px", 600, "44px", "0px"],
  ["heading/mobile/bold", "28px", 700, "36px", "0px"],
  ["heading/mobile/semibold", "28px", 600, "36px", "0px"],
  ["title/mobile/bold", "20px", 700, "28px", "0px"],
  ["title/mobile/regular", "20px", 400, "28px", "0px"],
  ["body/mobile/medium", "15px", 500, "22px", "0px"],
  ["body/mobile/regular", "15px", 400, "22px", "0px"],
  ["caption/mobile/medium", "11px", 500, "16px", "0px"],
  ["caption/mobile/regular", "11px", 400, "16px", "0px"],
];

function TextStylesGrid() {
  return (
    <div className="ds-text-grid">
      {textStyles.map(([name, fontSize, fontWeight, lineHeight, letterSpacing]) => (
        <TextStyleCard
          key={name}
          name={name}
          fontSize={fontSize}
          fontWeight={fontWeight}
          lineHeight={lineHeight}
          letterSpacing={letterSpacing}
          text={previewText}
        />
      ))}
    </div>
  );
}

export default TextStylesGrid;
