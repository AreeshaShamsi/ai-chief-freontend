/* eslint-disable react/prop-types */
import "./design-tokens.css";

function TokenCard({ name, value, cssVar, mode }) {
  return (
    <article className="dt-token-card">
      <div className="dt-token-card__name">{name}</div>
      <div className="dt-token-card__body">
        <span
          className="dt-token-card__swatch"
          style={{ backgroundColor: value }}
          aria-hidden="true"
        />
        <div className="dt-token-card__details">
          <div className="dt-token-card__value">{value}</div>
          <div className="dt-token-card__css-var">{cssVar}</div>
        </div>
      </div>
      <div className="dt-token-card__mode">{mode}</div>
    </article>
  );
}

export default TokenCard;
