import Link from 'next/link';
import Hero from '../Components/Hero/Hero';
import ImagePageSection from '../Components/PageSections/ImagePageSection';
import StandardPageSection from '@/Components/PageSections/StandardPageSection';
import Head from '@/Elements/Head';

export default function ServicePageTemplate({ page }) {
  if (page) {
    return (
      <div>
        <Head
          title={`${page.title} - Total Home Improvements`}
          description={page.intro}
          url={`https://totalhomeimprovements.co.uk/services/${page.slug}`}
          ogImage={page.hero.url}
        />
        <Hero
          src={page.hero.url}
          alt={page.title}
          height="70vh"
          overlayPadding="0"
        >
          <div className="service-title">
            <h1>{page.title}</h1>
            <h5>{page.intro}</h5>
          </div>
        </Hero>
        {page.pageSections.map((section) => (
          <div key={section.id}>
            {section.imageSection ? (
              <ImagePageSection data={section} />
            ) : (
              <StandardPageSection data={section} />
            )}
          </div>
        ))}
      </div>
    );
  }
}
