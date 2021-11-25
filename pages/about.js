import Layout from '../components/Layout';
import Image from 'next/image';
import myImg from '../public/images/lyon.jpg';

export default function About() {
  return (
    <Layout pageTitle={'About Us'}>
      about page
      <Image alt='lyon' src={myImg} layout='responsive' />
    </Layout>
  );
}
