import SocialIcons from './SocialIcons';
import { faEnvelope ,faDatabase,faCloud,faNetworkWired,faToolbox,faMagnifyingGlass,faImage,faGears,faGraduationCap,faBookOpenReader,faFileLines } from '@fortawesome/free-solid-svg-icons';

export default function ProfileCard({ avatar, name, tagline, socials }) {
  return (
    <div className="text" data-aos="fade-up">
      <img src={avatar} alt={name} />

      <SocialIcons links={socials} />

      <div className="text-content">
        <p>大学院で情報工学を専攻しているM2の {name} です。</p>
        <p>{tagline}</p>
      </div>
    </div>
  );
}
