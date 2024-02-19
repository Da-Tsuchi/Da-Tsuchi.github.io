import Link from 'next/link';
import Layout from '../../components/Layout';
import { getSortedArticlesData } from '../../lib/articles';
import Header from '../../components/Header';
import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';


export async function getStaticProps() {
    const allArticlesData = getSortedArticlesData();
    return {
      props: {
        allArticlesData
      }
    };
  }



const ArticleView = ({ allArticlesData }) => {
    // 選択されているジャンルの状態
  const [selectedGenre, setSelectedGenre] = useState('');
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    // ジャンルのリストを記事データから抽出
    const extractedGenres = new Set(allArticlesData.map(article => article.genre));
    setGenres([...extractedGenres]);
  }, [allArticlesData]); // 依存配列に allArticlesData を指定

  // ジャンルが選択されたときのハンドラ
  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  // 選択されたジャンルに基づいて記事をフィルタリング
  const filteredArticles = allArticlesData.filter((article) => {
    return selectedGenre === '' || article.genre === selectedGenre;
  });

  // 日付でソート
  filteredArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
    return (
        <div className="article-view">
        <select value={selectedGenre} onChange={handleGenreChange} className="select-genre">
        <option value="">All</option>
        {genres.map(genre => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>
        <div className="article-list">
          {filteredArticles.map(article => (
            <a key={article.id} className="article-item" href={`/posts/${article.id}`}>
              <div className="article-image-wrapper">
                <img className="article-image" src={article.image} alt={article.title} />
              </div>
              <div className="article-content">
                <h1 className="article-title">{article.title}</h1>
                <p className="article-description">{article.abst}</p>
                <small className="article-date">{article.date}</small>
                <span className="article-genre">{article.genre}</span>
              </div>
            </a>
          ))}
          </div>
          <style jsx>{`
          /* styles.css */
          .article-view {
            
            text-align: left;
            font-size: 20px;

            .article-title {
                font-size: 30px;
                font-weight: bold;
              }
            
            .article-page-title {
              text-align: center;
              font-size: 50px;              
            } 

            .article-list {
            margin: 0;
            padding: 0;
            list-style: none;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            grid-gap: 20px;
            margin: 20px 0;
            }
            
            .article-item {
            margin: 10px;
            display: flex;
            align-items: flex-start;
            border: 5px solid #ccc;
            border-radius: 8px;
            overflow: hidden;
            margin-bottom: 20px; /* 各記事アイテムの下の余白 */
            
            padding-bottom: 20px; /* 境界線とコンテンツの間の余白 */
            transition: box-shadow 0.3s, transform 0.3s;
            text-decoration: none; /* リンクの下線を消す */
            color: inherit; /* 親要素から色を継承 */
            }
            .article-item:hover {
                text-decoration: none;
                transform: translateY(-5px);
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
              }
            
            .article-image-wrapper {
            flex: 0 0 auto; /* 画像サイズを固定する */
            width: 300px; /* 画像の幅を固定 */
            height: 150px; /* 高さは自動調整されるように */
            margin-right: 20px; /* 画像とコンテンツの間の余白 */
            overflow: hidden; /* はみ出した画像を隠す */
            }
            
            .article-image {
            width: 100%;
            height: 100%;
            object-fit: contain; // 画像のアスペクト比を保ちながらコンテナに収める
            }
            
            .article-content {
            flex: 1; /* 残りのスペースを全部使う */
            }
            
            .article-title {
            font-size: 1.5em;
            margin-bottom: 0.5em;
            }
            
            .article-description {
            margin-bottom: 1em;
            color: #444;
            }
            
            .article-info {
            font-size: 0.9em;
            color: #666;
            }
            
            .article-date {
            margin-right: 10px;
            }
            
            .article-genre {
            background-color: #efefef;
            border-radius: 4px;
            padding: 2px 6px;
            }
              
          .select-genre {
            padding: 12px 20px; /* より大きなパディングを適用 */
            border-radius: 8px; /* ボーダーラジウスを増やす */
            border: 2px solid #ddd; /* ボーダーを太くする */
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
            outline: none;
            font-size: 18px; /* 文字サイズを大きくする */
            color: #444;
            background-color: white;
            cursor: pointer;
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            position: relative;
            transition: border-color 0.3s, box-shadow 0.3s; /* スムーズな遷移効果 */
          }
        
          .select-genre:hover,
          .select-genre:focus {
            border-color: #aaa; /* ホバーとフォーカスでボーダー色を変更 */
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2); /* ホバーとフォーカスでシャドウを強調 */
          }
        
          /* オプションホバー時のスタイル */
          .select-genre option:hover,
          .select-genre option:focus {
            background-color: #f7f7f7; /* 背景色を変更 */
          }
        
          /* セレクトボックスの矢印のスタイルをここで定義 */
          .select-genre {
            background-image: url('data:image/svg+xml;charset=US-ASCII,<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 7l5 5 5-5" stroke="%23333" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>');
            background-repeat: no-repeat;
            background-position: right 20px top 50%; /* 位置を調整 */
            padding-right: 40px; /* 矢印のスペースを確保 */
          }
          
          `}</style>

        </div>
      );
};

const Articles = ({ allArticlesData }) => {
    return (
    <div id="wrapper">
      <section className="section" id="Profile">
        <div className="inner">
          <div className="section-title-block">
            <h2 className="section-title"><span className="section-title-css">NOTE</span></h2>
          </div>
        </div>
          <ArticleView allArticlesData={allArticlesData} />
      </section>  
      </div>
    );
  };  

export default Articles;
