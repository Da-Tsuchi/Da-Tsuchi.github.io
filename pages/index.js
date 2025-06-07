import Section from '../components/layout/Section'; 
import ProfileSection from '../components/profile/ProfileSection';
import SkillSection from '../components/skill/SkillSection';
import ProductGallery from '../components/product/ProductGallery';
import PublicationSection from '../components/publication/PublicationSection';
import AwardSection from '../components/award/AwardSection';
import NoteSection from '../components/note/NoteSection';
import { products } from '../data/products';
import { getSortedArticlesData } from '../lib/articles';
import { useState, useEffect } from 'react';
import TypingAnimation from '../components/TypingAnimation';


export async function getStaticProps() {
  return { props: { allArticlesData: getSortedArticlesData() } };
}



export default function Home({ allArticlesData }) {
  const latestTwo = [...allArticlesData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 2);

  const [animationStarted, setAnimationStarted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 1000 + 1000); // 文字の表示が終わる時間 + 1秒の遅延

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="typing-animation-container">
         <TypingAnimation />
      </div>
      <div id="wrapper">
        <ProfileSection />
        <SkillSection />
        <Section id="product" title="Product">
          <ProductGallery items={products} />
        </Section>
        <PublicationSection />
        <AwardSection />
        <NoteSection latestTwo={latestTwo} />
      </div>
    </>
  );
}