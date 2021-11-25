import { useState } from 'react';
import Layout from '../components/Layout';

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <Layout pageTitle={'Home'}>
      Home page
      <button onClick={() => setCount(count + 1)}>+1</button>
      {count}
    </Layout>
  );
}
