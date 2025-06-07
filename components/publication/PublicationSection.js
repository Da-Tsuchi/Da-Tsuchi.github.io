import Section from '../layout/section';
import { publications } from '../../data/publications';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';

function highlightNames(text, targets) {
  const pattern = new RegExp(`(${targets.join('|')})`, 'gi');

  const parts = text.split(pattern);

  return parts.map((seg, idx) =>
    targets.some((t) => seg.toLowerCase() === t.toLowerCase()) ? (
      <strong key={idx}>{seg}</strong>
    ) : (
      seg
    )
  );
}

function PubList({ title, list }) {
  const highlightTargets = ['土田 裕登', 'Hiroto Tsuchida'];

  return (
    <div className="section-title-area" data-aos="fade-up">
      <h3 className="skill-section-title">
        <FontAwesomeIcon icon={faFileLines} /> {title}
      </h3>

      <ul className="pub-list">
        {list.map((p, i) => (
          <li key={i}>
            <a
              className="link"
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {highlightNames(p.authors, highlightTargets)}，“{p.title}”，
              {p.conf} {p.id && `, ${p.id}`}，{p.date}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PublicationSection() {
  return (
    <Section id="pub" title="Publication">
      <PubList title="国内学会" list={publications.domestic} />
      <PubList title="国際学会" list={publications.international} />
    </Section>
  );
}
