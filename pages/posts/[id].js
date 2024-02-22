// pages/articles/[id].js
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import { getAllArticleIds, getArticleData } from '../../lib/articles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

export async function getStaticPaths() {
  const paths = getAllArticleIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articleData = await getArticleData(params.id);
  return {
    props: {
      articleData,
    },
  };
}

export default function Post({ articleData }) {
    return (
      <div id="wrapper">
        <section className="section" id="note-content">
          <div className="inner">
            <div className="section-title-block">
            <div className="article-image-wrapper">
              <img className="article-image" src={articleData.image} alt={articleData.title} />
            </div>
            <h2 className="section-title"><span className="section-title-css">{articleData.title}</span></h2>
            <h3 className="card-caption-date"><FontAwesomeIcon icon={faCalendarDays} /> {articleData.date}</h3>
            </div>
            <div className="article-content" dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
          </div>
        
          <div className="article">
            
            
          </div>
        
        

      </section>
      </div>
          

    );
  }
