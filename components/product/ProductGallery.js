export default function ProductGallery({ items }) {
  return (
    <div className="card-wrapper my-gallery" data-aos="fade-up">
      {items.map((p) => (
        <figure key={p.id} className="card">
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="card-link">
            <img className="card-image" src={p.img} alt={p.title} />
            <figcaption className="card-caption">
              <p className="card-caption-title">{p.title}</p>
              <p className="card-caption-info">{p.info}</p>
            </figcaption>
          </a>
        </figure>
      ))}
    </div>
  );
}
