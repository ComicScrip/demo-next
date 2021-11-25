import Layout from '../../components/Layout';
import { getArticles } from '../../models/article';
import Link from 'next/link';

export default function ArticleList({ articles }) {
  return (
    <Layout pageTitle='All articles'>
      <ul>
        {articles.map((a) => (
          <li key={a.id}>
            <Link href={`/articles/${a.id}`}>
              <a> {a.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const articles = await getArticles();
  return {
    props: {
      articles,
    }, // will be passed to the page component as props
  };
}
