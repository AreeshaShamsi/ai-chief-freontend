/* eslint-disable react/prop-types */
import "./design-system.css";

function DesignSection({ title, children }) {
  return (
    <section className="ds-section" aria-label={title}>
      <div className="ds-section__title">{title}</div>
      <div className="ds-section__content">{children}</div>
    </section>
  );
}

export default DesignSection;
