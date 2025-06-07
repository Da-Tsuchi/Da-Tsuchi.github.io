import Section from '../layout/section';
import {awards} from '../../data/awards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

export default function AwardSection() {
  // 年で降順ソート
  const sorted = [...awards].sort((a, b) => b.year - a.year);

  return (
    <Section id="awards" title="Award">
    <div className="awards-text" data-aos="fade-up">
    <ul className="awards-list">
        {Array.from(
        sorted.reduce((map, a) => {
            map.has(a.year) ? map.get(a.year).push(a) : map.set(a.year, [a]);
            return map;
        }, new Map())
        ).map(([year, list]) => (
        <li key={year}>
            <strong>{year}</strong>
            <ul>
            {list.map((a, i) => (
                <li key={i}>
                <FontAwesomeIcon icon={Icons[a.icon]} />{' '}
                {a.url ? (
                    <a
                    href={a.url}
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    {a.text}
                    </a>
                ) : (
                    a.text
                )}
                </li>
            ))}
            </ul>
        </li>
        ))}
    </ul>
  </div>
</Section>

  );
}
