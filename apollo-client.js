import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-eu-west-2.hygraph.com/v2/clk0yktzq08es01ujba6cguex/master',
  cache: new InMemoryCache(),
  headers: {
    authorization:
      'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODkyNDIyODMsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY2xrMHlrdHpxMDhlczAxdWpiYTZjZ3VleC9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNWQyMzFkYzUtNmRmYy00NmVhLTlmNGUtM2ZhYWVjNzFhZWVjIiwianRpIjoiY2xrMHo4bnFqMDhlNTAxdXFkNXY5ZDlseiJ9.O_SHP6m3PDpKZfa6H157Gf1ZhfnsWmgYNPE_H-jECvreWt-7z5O-Tmh2TMMyttB710N5zm0fFRB_SR49JZgqYWtlTglbkQ4zxf8rXDcm5f1-Ddab5sTRxXS6gfJAW1lK0WWAI2Xf7n6KEgYwNeQMzeUjtm5tHfpd2NK-Ehh5Pz5nHTl9uHtkoIyksVpSd23mBgxIa3Afhq7scmwmZCEikjiYMhLM-wtzFFcBsQy1LlIQW6WWWaAw6NF9j0eMb_GgK5kXYdUrEC6N2YpQUsTjk0IQIGyaXSuppaLDd9_pXKdCA1VoSIzkXt-c98qyv0hZrX6awl3TsPGTgjvO__T8hzsx7TiV5hhOjkaxDi1mucVOXjY2H1opdrcSB0HWtgur2BQ9c7Ngs2iKcbK64I8HJTKWnB_kzPRDrOVHPxbGkybCiY_rIMhnjsbWybFjHp-dHV2IFXaI6RLraDezZXqK1Qj-1KvNkTP7XJmApHFiL9-_b0DNSxU94yQvwnGB4O0nrDwp0zb292YqL4glUBqPi2jdixZYjSbi9iEsZd7SSm8LkYzjj1pj4lr3pDdWnXV-Jf42qC5CUIf7Su0YDyHZ4YEn8-_SMSN0qn0ERGgzNZnuM0abNcuyKSzWpz-Gv-HO0L9GLvvMlOmRdUtLYr-RvGgEih__fLgykJZK4DAj3ew',
  },
});

export default client;
