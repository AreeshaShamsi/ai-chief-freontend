/* eslint-disable react/prop-types */
import TokenCard from "./TokenCard";
import "./design-tokens.css";

function TokenGroup({ title, tokens }) {
  return (
    <section className="dt-token-group" aria-label={title}>
      <h3 className="dt-token-group__title">{title}</h3>
      <div className="dt-token-group__box">
        {tokens.map((token) => (
          <TokenCard
            key={token.name}
            name={token.name}
            value={token.value}
            cssVar={token.cssVar}
            mode={token.mode}
          />
        ))}
      </div>
    </section>
  );
}

export default TokenGroup;
