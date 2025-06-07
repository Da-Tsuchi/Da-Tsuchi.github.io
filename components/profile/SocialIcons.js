import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import * as BrandIcons from '@fortawesome/free-brands-svg-icons';

const AllIcons = { ...SolidIcons, ...BrandIcons };
export default function SocialIcons({ links }) {
  return (
    <div className="content-icon">
      {links.map((s) => (
        <a
          key={s.href}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
        >
          <FontAwesomeIcon icon={AllIcons[s.icon]} />
        </a>
      ))}
    </div>
  );
}
