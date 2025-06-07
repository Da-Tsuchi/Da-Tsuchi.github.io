import Section from '../layout/section';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

export default function NoteSection({ latestTwo }) {
  return (
    <Section id="note" title="Note">
      <div className="card-wrapper my-gallery" data-aos="fade-up">
        {latestTwo.map((a) => (
          <Link key={a.id} href={`/posts/${a.id}`} className="card-link">
            <figure className="card">
              <img className="card-image" src={a.image} alt={a.title} />
              <div className="card-content">
                <p className="card-caption-title">{a.title}</p>
                <p className="card-caption-date">
                  <FontAwesomeIcon icon={faCalendarDays} /> {a.date}
                </p>
                <p className="card-caption-info">{a.abst}</p>
              </div>
            </figure>
          </Link>
        ))}
      </div>

      <ul className="note-list">
        <li>
          <Link href="/posts">もっと見る</Link>
        </li>
      </ul>
    </Section>
  );
}
