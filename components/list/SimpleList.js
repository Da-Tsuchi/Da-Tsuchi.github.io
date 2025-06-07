
export default function SimpleList({ items, heading }) {
  if (!items?.length) return null;

  return (
    <>
      {heading && <h4 className="list-heading">{heading}</h4>}
      <ul className="simple-list">
        {items.map((it, idx) => (
          <li key={idx}>
            {typeof it === 'string' ? (
              it
            ) : (
              <>
                {it.url ? (
                  <a href={it.url} target="_blank" rel="noopener noreferrer">
                    {it.title}
                  </a>
                ) : (
                  it.title
                )}
                {it.authors && ` — ${it.authors}`}
                {it.conf && ` (${it.conf} ${it.year})`}
                {it.issuer && ` — ${it.issuer} (${it.date})`}
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
