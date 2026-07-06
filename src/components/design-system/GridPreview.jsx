import "./design-system.css";

const gridPreviews = [
  {
    label: "Desktop grid",
    className: "ds-grid-preview__box--desktop",
    columns: 12,
  },
  {
    label: "Mobile grid",
    className: "ds-grid-preview__box--mobile",
    columns: 4,
  },
];

function GridPreview() {
  return (
    <div className="ds-grid-preview">
      {gridPreviews.map((preview) => (
        <div className="ds-grid-preview__item" key={preview.label}>
          <div className="ds-grid-preview__label">{preview.label}</div>
          <div
            className={`ds-grid-preview__box ${preview.className}`}
            style={{ "--ds-preview-columns": preview.columns }}
          >
            {Array.from({ length: preview.columns }).map((_, index) => (
              <span className="ds-grid-preview__column" key={index} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default GridPreview;
