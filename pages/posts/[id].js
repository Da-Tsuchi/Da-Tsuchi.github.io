// pages/articles/[id].js
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import { getAllArticleIds, getArticleData } from '../../lib/articles';

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
      <div>
        
        <div className="container">
          <div className="article">
            <div className="article-image-wrapper">
              <img className="article-image" src={articleData.image} alt={articleData.title} />
            </div>
            <h1>{articleData.title}</h1>
            <div>{articleData.date}</div>
            <div dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
          </div>
        </div>
        <style jsx>{`
        .article-image-wrapper {
          width: 100%; // コンテナの幅に合わせる
          height: 400px; // 画像の高さを統一
          position: relative; // 画像を絶対位置で配置するための基点
          overflow: hidden; // はみ出した部分は隠す
          display: flex; // Flexboxを利用して中央揃え
          justify-content: center; // 水平方向の中央揃え
          align-items: center; // 垂直方向の中央揃え
        }
        .article-image {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain; // 画像のアスペクト比を保ちながらコンテナに収める
        }
        .article {
          margin-top: 100px;
          text-align: left;
          font-size: 20px;
        }
      `}</style>
      </div>
    );
  }
