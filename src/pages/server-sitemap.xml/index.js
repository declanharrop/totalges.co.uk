import { gql } from '@apollo/client';
import { getServerSideSitemapLegacy } from 'next-sitemap';
import client from '../../../apollo-client';

const GET_PAGE_URLS = gql`
  query Pages {
    pages {
      slug
      updatedAt
    }
  }
`;
// const GET_STORY_URLS = gql`
//   query stories {
//     stories {
//       slug
//       updatedAt
//     }
//   }
// `;
// const GET_BRANDS_URLS = gql`
//   query MyQuery {
//     brands {
//       slug
//       updatedAt
//     }
//   }
// `;

export const getServerSideProps = async (ctx) => {
  // const [getStoryUrls, { data }] = useLazyQuery(GET_STORY_URLS);

  const pageUrls = await client.query({ query: GET_PAGE_URLS });
  // const storyUrls = await client.query({ query: GET_STORY_URLS });
  // const brandUrls = await client.query({ query: GET_BRANDS_URLS });

  const pageSitemaps = pageUrls.data.pages.map((item) => ({
    loc: `https://totalhomeimprovements.uk/services/${item.slug}`,
    lastmod: item.updatedAt,
  }));

  // const storySitemaps = storyUrls.data.stories.map((item) => ({
  //   loc: `https://america-uk.com/Stories/${item.slug}`,
  //   lastmod: item.updatedAt,
  // }));

  // const brandSitemaps = brandUrls.data.brands.map((item) => ({
  //   loc: `https://america-uk.com/brands/${item.slug}`,
  //   lastmod: item.updatedAt,
  // }));

  const fields = pageSitemaps;

  return getServerSideSitemapLegacy(ctx, fields);
};

export default function Site() {}
