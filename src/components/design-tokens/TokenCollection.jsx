/* eslint-disable react/prop-types */
import "./design-tokens.css";

function TokenCollection({ title, children }) {
  return (
    <section className="dt-token-collection" aria-label={title}>
      <h2 className="dt-token-collection__title">{title}</h2>
      <div className="dt-token-collection__content">{children}</div>
    </section>
  );
}

export default TokenCollection;
