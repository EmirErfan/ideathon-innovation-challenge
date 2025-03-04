import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Intro2 from '@/components/Intro2';
import Objectives from '@/components/Objectives';
import Overview from '@/components/Overview';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Intro />
      <Intro2 />
      <Objectives />
      <Overview />
      <Footer />
    </main>
  );
}