export default function SkillCard({ img, iconClass, name, desc }) {
  return (
    <div className="card">
      <div className="skill-icon">
        {img ? (
          <img src={img} alt={name} />
        ) : iconClass ? (
          <i className={iconClass} style={{ fontSize: "2.5rem" }}></i>
        ) : null}
      </div>

      <div className="skill-desc">
        <h3 className="skill-desc-title">{name}</h3>
        {desc && <p>{desc}</p>}
      </div>
    </div>
  );
}
