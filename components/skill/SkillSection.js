import Section from '../layout/Section';
import SkillCategory from './SkillCategory';
import { skillGroups } from '../../data/skills';

export default function SkillSection() {
  return (
    <Section id="skill" title="Skill">
      {skillGroups.map((g) => (
        <SkillCategory key={g.title} {...g} />
      ))}
    </Section>
  );
}
