import Layout from '../../components/Layout';
import { getArticles, getOneArticle } from '../../models/article';

export default function ArticleDetails({ article }) {
  if (!article) return 'loading...';

  return (
    <Layout pageTitle={article.title}>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
    </Layout>
  );
}

export async function getStaticPaths() {
  const articles = await getArticles();

  return {
    paths: articles.map((a) => {
      return { params: { id: a.id.toString() } };
    }),
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const article = await getOneArticle(context.params.id);
  return {
    props: {
      article,
    }, // will be passed to the page component as props
  };
}
