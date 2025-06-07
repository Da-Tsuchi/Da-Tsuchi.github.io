import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import SkillCard from './SkillCard';

export default function SkillCategory({ title, icon, items }) {
  const IconComp = Icons[icon];

  return (
    <div className="fade-up" data-aos="fade-up">
      <div className="inner">
        <div className="section-title-area">
          <h3 className="skill-section-title">
            <FontAwesomeIcon icon={IconComp} /> {title}
          </h3>
        </div>
      </div>

      <div className="inner">
        <div className="card-wrapper">
          {items.map((s) => (
            <SkillCard key={s.name} {...s} />
          ))}
        </div>
      </div>
    </div>
  );
}