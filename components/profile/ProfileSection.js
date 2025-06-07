import Section from '../layout/section';
import ProfileCard from './ProfileCard';
import Timeline from '../layout/Timeline';
import { profile } from '../../data/profile';
import { education } from '../../data/education';

export default function ProfileSection() {
  return (
    <Section id="profile" title="Profile">
        
      <ProfileCard {...profile} />
      <div className="text" data-aos="fade-up"><Timeline items={education} /></div>
      
    </Section>
  );
}
