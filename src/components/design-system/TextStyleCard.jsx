/* eslint-disable react/prop-types */
import "./design-system.css";

function TextStyleCard({
  name,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  text,
}) {
  return (
    <article className="ds-text-card">
      <div className="ds-text-card__name">{name}</div>
      <div
        className="ds-text-card__preview"
        style={{
          fontSize,
          fontWeight,
          lineHeight,
          letterSpacing,
        }}
      >
        {text}
      </div>
      <dl className="ds-text-card__meta">
        <div>
          <dt>Font:</dt>
          <dd>Inter</dd>
        </div>
        <div>
          <dt>Size:</dt>
          <dd>{fontSize}</dd>
        </div>
        <div>
          <dt>Line height:</dt>
          <dd>{lineHeight}</dd>
        </div>
        <div>
          <dt>Letter spacing:</dt>
          <dd>{letterSpacing}</dd>
        </div>
      </dl>
    </article>
  );
}

export default TextStyleCard;
