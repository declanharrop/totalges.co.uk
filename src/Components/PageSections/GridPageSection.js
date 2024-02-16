import Link from 'next/link';
import { GridPageSectionStyles } from './PageSection.styles';

export default function GridPageSection({
  background = 'var(--orange)',
  tileBackground = 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 90%)',
  title = 'Services',
  sections = [
    { title: 'windows', image: 'windows.jpg', slug: 'services/windows' },
  ],
}) {
  return (
    <GridPageSectionStyles style={{ background: `${background}` }}>
      <h2>{title}</h2>
      <div className="container">
        {sections.map((section, i) => (
          <div key={i} className="grid-item">
            <Link href={section.slug}>
              <img src={section.image} alt="" />
              <div
                className="overlay"
                style={{ background: `${tileBackground}` }}
              >
                <h3>{section.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </GridPageSectionStyles>
  );
}
