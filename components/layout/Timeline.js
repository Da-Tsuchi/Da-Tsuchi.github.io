export default function Timeline({ items }) {
  return (
    <div className="text-content">
    <div className="timeline-section">
      {items.map((e) => (
        <div className="timeline-entry" key={e.id}>
          <div className="timeline-blob" />
          <div className="timeline-content">
            <p className="timeline-date">{e.date}</p>
            <h4 className="timeline-title">{e.title}</h4>

            {e.institution.url ? (
              <a
                href={e.institution.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link timeline-institution"
              >
                {e.institution.name}
              </a>
            ) : (
              <p className="timeline-institution">{e.institution.name}</p>
            )}

            {e.description && (
              <p className="timeline-description">{e.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
    </div>
  );}