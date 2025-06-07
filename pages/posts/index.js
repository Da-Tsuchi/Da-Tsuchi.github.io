import { getSortedArticlesData } from '../../lib/articles';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

export async function getStaticProps() {
    const allArticlesData = getSortedArticlesData();
    return {
      props: {
        allArticlesData
      }
    };
  }


const Articles = ({ allArticlesData }) => {
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
    allArticlesData.sort((a, b) => new Date(b.date) - new Date(a.date));
        
    return (
      <div>
        {/* <BackgroundAnimation /> */}
        <div id="wrapper">
          <section className="section" id="note">
            <div className="inner">
              <div className="section-title-block">
                <h2 className="section-title">Note</h2>
              </div>
              
              <div className="card-wrapper my-gallery">
              
                {allArticlesData.map(article => (
                  <a key={article.id} className="card-link" href={`/posts/${article.id}`}>
                    <figure className="card">
                      
                      <img className="card-image" src={article.image} alt={article.title} />
                      <div className="card-content">
                        <p className="card-caption-title">{article.title}</p>
                        
                        <p className="card-caption-date"><FontAwesomeIcon icon={faCalendarDays} />  {article.date}</p>
                        <p className="card-caption-info">{article.abst}</p>
                      </div>
                      
                    </figure>
                    </a>
                ))}
              </div>
            </div>
          </section>
        </div>
    </div>
    );
  };  

export default Articles;
