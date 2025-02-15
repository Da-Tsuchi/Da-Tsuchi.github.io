import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faAward, faMedal, faStar, faRibbon } from '@fortawesome/free-solid-svg-icons'
import { faSquareXTwitter, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope ,faDatabase,faCloud,faNetworkWired,faToolbox,faMagnifyingGlass,faImage,faGears,faGraduationCap,faBookOpenReader,faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { basePath } from "../next.config" // 追加
import { getSortedArticlesData } from '../lib/articles';
import Link from 'next/link';
import TypingAnimation from '../components/TypingAnimation';

import React, { useState, useEffect } from 'react';

export async function getStaticProps() {
  const allArticlesData = getSortedArticlesData();
  return {
    props: {
      allArticlesData
    }
  };
}

const Home = ({allArticlesData}) => {
  // console.log(posts);
  // 選択されたジャンルに基づいて記事をフィルタリング

  // 日付でソートして最新の2つの記事を取得
  const latestTwoArticles = allArticlesData.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 2);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 1000 + 1000); // 文字の表示が終わる時間 + 1秒の遅延

    return () => clearTimeout(timer);
  }, []);

  return (
 <div>
    <div className="typing-animation-container">
        <TypingAnimation />
      </div>
    <div id="wrapper">
      
      <section className="section" id="Profile">
        <div className="inner">
          <div className="section-title-block" data-aos="fade-up">
            <h2 className="section-title">Profile</h2>
          </div>
        </div>
        <div className="text" data-aos="fade-up">
        <img src="images/me.jpg" alt=""></img>
        <div className="content-icon">
            <a href="https://twitter.com/tsuchi_da" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faSquareXTwitter}/>
            </a>
            <a href="https://github.com/Da-Tsuchi" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub}/>
            </a>
            <a href="mailto:tsuchida@cv.info.gifu-u.ac.jp">
              <FontAwesomeIcon icon={faEnvelope}/>
            </a>
          </div>
          <div className='text-content'>
            <p>情報系専攻の土田裕登です。</p>
            <p>視覚情報とLLMを融合したVision＆Languageの研究に取り組んでいます。</p>
          </div>
            <div className="text-content">
            <p><FontAwesomeIcon icon={faBookOpenReader}/><strong> 2024.04 - 現在：<a className="link" href="https://gnst.gifu-u.ac.jp/intellscieng/infomatics/" target="_blank" rel="noopener noreferrer">岐阜大学大学院 自然科学技術研究科 知能理工学専攻</a></strong></p>
            <p><FontAwesomeIcon icon={faBookOpenReader}/><strong> 2022.10 - 現在：<a className="link" href="http://www.cv.info.gifu-u.ac.jp/index.html" target="_blank" rel="noopener noreferrer">加藤研究室</a> 所属</strong></p>
            <p><strong><FontAwesomeIcon icon={faGraduationCap}/> 2020.04 - 2024.03：<a className="link" href="https://www.eng.gifu-u.ac.jp/denkidenshi-jyouhou/" target="_blank" rel="noopener noreferrer">岐阜大学 工学部 電気電子・情報工学科</a><a href="https://www.info.gifu-u.ac.jp" className="link" target="_blank" rel="noopener noreferrer"> 情報コース</a></strong></p>
            
            </div>
          </div>

      </section>

      <section className="section" id="skill">
        <div className="inner">
          <div className="section-title-block" data-aos="fade-up">
            <h2 className="section-title">Skill</h2>
            <p className="section-desc"></p>
          </div>
          </div>
          
          <div className="fade-up" data-aos="fade-up">
          <div className="inner">
            <div className="section-title-area">
            <h3 className="skill-section-title"><FontAwesomeIcon icon={faImage}/> Front-End</h3>
            </div>
          </div>
          <div className="inner">
            <div className="card-wrapper">
              <div className="card">
                <div className='skill-icon'>
                  <img src="images/html.png" alt=""></img>
                </div>
                <div className="skill-desc">
                  <h3 className="skill-desc-title">HTML</h3>
                  <p>各アプリ・サイトのUI部分の実装に使用しています。</p>
                  
                </div>
              </div>
              
              <div className="card">
                <div className="skill-icon">
                  <img src="images/css.png" alt=""></img>
                  </div>
                <div className="skill-desc">
                  <h3 className="skill-desc-title">CSS</h3>
                  <p>各アプリ・サイトのUI部分の実装に使用しています。</p>
                </div>
              </div>
              <div className="card">
                <div className="skill-icon">
                  <img src="images/js.png" alt=""></img>
                  </div>
                <div className="skill-desc">
                  <h3 className="skill-desc-title">Javascript</h3>
                  <p>各アプリ・サイトのUI部分の実装に使用しています。</p>
                </div>
              </div>
              <div className="card">
                <div className="skill-icon">
                  <img src="images/react.png" alt=""></img>
                  </div>
                <div className="skill-desc">
                  <h3 className="skill-desc-title">React</h3>
                  <p>AIずんだWEBや本ホームページのUI実装に使用しています。</p>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="fade-up" data-aos="fade-up">
          <div className="inner">
            <div className="section-title-area">
            <h3 className="skill-section-title"><FontAwesomeIcon icon={faGears}/> Back-End</h3>
            </div>
          </div>
          <div className="inner">
            <div className="card-wrapper">
              <div className="card">
                <div className='skill-icon'>
                  <img src="images/c.png" alt=""></img>
                </div>
                <div className="skill-desc">
                  <h3 className="skill-desc-title">C</h3>
                  <p>大学の講義で学習しました。PIC16F88による電子ルーレットの制作や音声制御の車を実装する際に使用しました。</p>
                  
                </div>
              </div>
              <div className="card">
                <div className='skill-icon'>
                  <img src="images/c++.png" alt=""></img>
                </div>
                <div className="skill-desc">
                  <h3 className="skill-desc-title">C++</h3>
                  <p>大学の講義で学習しました。ポインタと構造体を用いた連結リストの作成に使用しました。</p>
                  
                </div>
              </div>
              <div className="card">
                <div className='skill-icon'>
                  <img src="images/java.png" alt=""></img>
                </div>
                <div className="skill-desc">
                  <h3 className="skill-desc-title">Java</h3>
                  <p>大学の講義で学習しました。ペイントアプリやPixel Craft Studioの開発に使用しています。</p>
                  
                </div>
              </div>
              <div className="card">
                <div className='skill-icon'>
                  <img src="images/android.png" alt=""></img>
                </div>
                <div className="skill-desc">
                  <h3 className="skill-desc-title">Android</h3>
                  <p>Pixel Craft Studioにおいて、IDEにAndorid Studio、言語にJavaを使用し開発しました。</p>
                </div>
              </div>
              <div className="card">
                <div className='skill-icon'>
                  <img src="images/python.png" alt=""></img>
                </div>
                <div className="skill-desc">
                  <h3 className="skill-desc-title">Python</h3>
                  <p>研究や制作物のバックエンドとして最も多く使用しています。</p>
                  
                </div>
              </div>
              <div className="card">
                <div className='skill-icon'>
                  <img src="images/django.png" alt=""></img>
                </div>
                <div className="skill-desc">
                  <h3 className="skill-desc-title">Django</h3>
                  <p>ShiftManagementでサイトを動かすフレームワークとして使用しています。</p>
                  
                </div>
              </div>
              <div className="card">
                <div className='skill-icon'>
                  <img src="images/nodejs.png" alt=""></img>
                </div>
                <div className="skill-desc">
                  <h3 className="skill-desc-title">Node.js</h3>
                  <p>AIずんだWEBや本ホームページを動かすために使用しています。</p>
                  
                </div>
              </div>
              </div>
          </div>
          </div>

          <div className="fade-up" data-aos="fade-up">
          <div className="inner">
            <div className="section-title-area">
            <h3 className="skill-section-title"><FontAwesomeIcon icon={faDatabase}/> DB</h3>
            </div>
          </div>
          <div className="inner">
            <div className="card-wrapper">
              <div className="card">
                <div className='skill-icon'>
                  <img src="images/mysql.png" alt=""></img>
                </div>
                <div className="skill-desc">
                  <h3 className="skill-desc-title">MySQL</h3>
                  <p>ShiftMangementで講師や生徒の情報を登録するために使用しました。</p>
                </div>
              </div>
              </div>
          </div>
          
          <div className="inner">
            <div className="section-title-area">
            <h3 className="skill-section-title"><FontAwesomeIcon icon={faCloud}/> Cloud</h3>
            </div>
          </div>
          <div className="inner">
            <div className="card-wrapper">
              <div className="card">
                <div className='skill-icon'>
                  <img src="images/aws.png" alt=""></img>
                </div>
                <div className="skill-desc">
                  <h3 className="skill-desc-title">AWS</h3>
                  <p>AIずんだWEBのAIモデルを動かすSageMakerとAPIGatewayを立ち上げるために使用しました。</p>
                  
                </div>
              </div>
              </div>
          </div>
          </div>

          <div className="fade-up" data-aos="fade-up">
          <div className="inner">
            <div className="section-title-area">
            <h3 className="skill-section-title"><FontAwesomeIcon icon={faMagnifyingGlass}/> Research Tool</h3>
            </div>
          </div>
          <div className="inner">
            <div className="card-wrapper">
              <div className="card">
                <div className='skill-icon'>
                  <img src="images/python.png" alt=""></img>
                </div>
                <div className="skill-desc">
                  <h3 className="skill-desc-title">Python</h3>
                  <p></p>
                  
                </div>
              </div>
              <div className="card">
                <div className='skill-icon'>
                  <img src="images/pytorch.png" alt=""></img>
                </div>
                <div className="skill-desc">
                  <h3 className="skill-desc-title">pytorch</h3>
                  <p>Deep Learningの実装で使用します。</p>
                  
                </div>
              </div>
              <div className="card">
                <div className='skill-icon'>
                  <img src="images/jupyter.png" alt=""></img>
                </div>
                <div className="skill-desc">
                  <h3 className="skill-desc-title">Jupyter Notebook</h3>
                  <p>対話型のPython実行環境であり、画像やグラフの可視化に使用しています。</p>
                  
                </div>
              </div>
              <div className="card">
                <div className='skill-icon'>
                  <img src="images/matplot.png" alt=""></img>
                </div>
                <div className="skill-desc">
                  <h3 className="skill-desc-title">Matplotlib</h3>
                  <p>グラフ作成時に使用しています。</p>
                  
                </div>
              </div>
              <div className="card">
                <div className='skill-icon'>
                  <img src="images/pandas.png" alt=""></img>
                </div>
                <div className="skill-desc">
                  <h3 className="skill-desc-title">pandas</h3>
                  <p>csvデータを解析、整理するために使用しています。</p>
                  
                </div>
              </div>
              </div>
          </div>
          </div>

          <div className="fade-up" data-aos="fade-up">
          <div className="inner">
            <div className="section-title-area">
            <h3 className="skill-section-title"><FontAwesomeIcon icon={faNetworkWired}/> Infra</h3>
            </div>
          </div>
          <div className="inner">
            <div className="card-wrapper">
              <div className="card">
                <div className='skill-icon'>
                  <img src="images/docker.png" alt=""></img>
                </div>
                <div className="skill-desc">
                  <h3 className="skill-desc-title">Docker</h3>
                  <p>GPUを動かすときの仮想環境として、普段から使用しています。</p>
                  
                </div>
              </div>
              <div className="card">
                <div className='skill-icon'>
                  <img src="images/slurm.png" alt=""></img>
                </div>
                <div className="skill-desc">
                  <h3 className="skill-desc-title">Slurm</h3>
                  <p>ジョブ管理ツールです。研究室で導入されたため、使いこなすために勉強中です。</p>
                  
                </div>
              </div>
              {/* <div className="card">
                <div className='skill-icon'>
                  <img src="images/singularity.png" alt=""></img>
                </div>
                <div className="skill-desc">
                  <h3 className="skill-desc-title">Singularity</h3>
                  <p>スパコンなどで利用される仮想環境ツールです。管理者権限がなくても動かせるため便利です。</p>
                  
                </div>
              </div> */}
              </div>
          </div>
          </div>

          <div className="fade-up" data-aos="fade-up">
          <div className="inner">
            <div className="section-title-area">
            <h3 className="skill-section-title"><FontAwesomeIcon icon={faToolbox}/> Tool</h3>
            </div>
          </div>
          <div className="inner">
            <div className="card-wrapper">
              <div className="card">
                <div className='skill-icon'>
                  <img src="images/git.png" alt=""></img>
                </div>
                <div className="skill-desc">
                  <h3 className="skill-desc-title">Git</h3>
                  <p>チーム開発時のバージョン管理に使用しています。</p>
                  
                </div>
              </div>
              <div className="card">
                <div className='skill-icon'>
                  <img src="images/github.png" alt=""></img>
                </div>
                <div className="skill-desc">
                  <h3 className="skill-desc-title">GitHub</h3>
                  <p>チーム開発時のバージョン管理、個人データのバックアップ先、本ホームページのデプロイなどで使用しています。</p>
                  
                </div>
              </div>
              
              </div>
          </div>

          <div className="inner">
            <div className="section-title-area">
            <h3 className="skill-section-title">Others</h3>
            </div>
          </div>
          <div className="inner">
            <div className="card-wrapper">
              <div className="card">
                <div className='skill-icon'>
                  <img src="images/ipa.png" alt=""></img>
                </div>
                <div className="skill-desc">
                  <h3 className="skill-desc-title">基本情報技術者</h3>
                  <p></p>
                  
                </div>
              </div>
              <div className="card">
                <div className='skill-icon'>
                  <img src="images/ipa.png" alt=""></img>
                </div>
                <div className="skill-desc">
                  <h3 className="skill-desc-title">応用情報技術者</h3>
                  {/* <p>本サイトや各種プロダクトで使用</p> */}
                  
                </div>
              </div>
              
              </div>
              </div>
          </div>
          

      </section>

      <section className="section" id="product">
        <div className="inner">
          <div className="section-title-block" data-aos="fade-up">
            <h2 className="section-title">Product</h2>
            <div className="section-desc">制作物の一覧です。クリックするとリポジトリに飛べます。</div>
          </div>
          <div className="card-wrapper my-gallery" data-aos="fade-up">
            <figure className="card">
              <a href="https://github.com/Da-Tsuchi/Da-Tsuchi.github.io" target="_blank" className="card-link">
                <img className="card-image" src="images/portfolio.png" alt="" />
                <figcaption className="card-caption">
                  <p className="card-caption-title">ポートフォリオサイト</p>
                  <p className="card-caption-info">スキルや制作物を紹介するためのサイトです</p>
                  </figcaption>
                </a>
            </figure>

            <figure className="card">
            <a href="https://github.com/mkt11/AI_Zunda_web_release" target="_blank" className="card-link">
                <img className="card-image" src="images/aizunda.png" alt="" />
                <figcaption className="card-caption">
                  <p className="card-caption-title">AIずんだWEB</p>
                  <p className="card-caption-info">AIモデルによる声質変換アプリです</p>
                  <p className="card-caption-info">新聞等で紹介されました</p>
                  {/* <p className="card-caption-info">HTML/CSS/Javascript/react/nodejs/python</p> */}
                  </figcaption>
                </a>
            </figure>
            
    
          
            <figure className="card">
            <a href="https://github.com/Da-Tsuchi/ImageProcessingApp" target="_blank" className="card-link">
              <img className="card-image" src="images/pixellogo.png" alt="" />
              <figcaption className="card-caption">
                <p className="card-caption-title">Pixel Craft Studio</p>
                <p className="card-caption-info">画像処理の技術をアプリ上で実装しました</p>
                {/* <p className="card-caption-info">投稿とコメント機能を作成しました。</p> */}
                {/* <p className="card-caption-info">Java/AndroidStudio/OpenCV</p> */}
              </figcaption>
              </a>
            </figure>
          
            
          
            <figure className="card">
            <a href="https://github.com/Da-Tsuchi/Hack" target="_blank" className="card-link">
            <img className="card-image" src="images/shiftlogo.png" alt="" />
              <figcaption className="card-caption">
                <p className="card-caption-title">Shift Management</p>
                <p className="card-caption-info">個別指導のシフトを自動的に作成するためのツールです</p>
                {/* <p className="card-caption-info">HTML/CSS/Javascript/python/django/mysql</p> */}
  
              </figcaption>
              </a>
            </figure>
            

          </div>
        </div>
      </section>
      
      <section className="section" id="pub" data-aos="fade-up">
      <div className="inner">
          <div className="section-title-block">
            <h2 className="section-title">Publication</h2>
            <div className="section-desc"></div>
          </div>
          <div className="inner">
            <div className="section-title-area">
            <h3 className="skill-section-title"><FontAwesomeIcon icon={faFileLines}/> 国内学会</h3>
            </div>
          </div>
          <div className="pub-text">
            <ul className="pub-list">
            <li><a className="link" href="https://www.ite.or.jp/study/me/ss/2024/#program" target="_blank" rel="noopener noreferrer"><strong>土田裕登</strong>，梁瀬和哉，加藤邦人，"大規模視覚言語モデルにおける未見タスクの効率的な追加学習法の検討"，画像応用技術専門委員会，サマーセミナー2024，1-2，vol.48，pp.5-7，2024.8.22</a></li>
            <li><a className="link" href="https://www.tc-iaip.org/dia/2024/program.html#os3" target="_blank" rel="noopener noreferrer">軸屋敬介，梁瀬和哉，表英輝，<strong>土田裕登</strong>，加藤邦人，"大規模Vision&Languageマルチタスクモデルの学習効率化とHuman-Object Interactionへの適用"，動的画像処理実利用化ワークショップ DIA 2024，OS3-2 (IS3-2)，2024.3.5</a></li>
          </ul>
          </div>

          <div className="inner">
            <div className="section-title-area">
            <h3 className="skill-section-title"><FontAwesomeIcon icon={faFileLines}/> 国際学会</h3>
            </div>
          </div>
          <div className="pub-text" >
            <ul className="pub-list">
            <li><a className="link" href="https://sites.google.com/view/iw-fcv2024/conference" target="_blank" rel="noopener noreferrer">Kazuya Yanase，Keisuke Jikuya，Hideaki Omote，<strong>Hiroto Tsuchida</strong>，Kunihito Kato，"Constructing Lightweight Large Vision-Language Model: A Target Approach to Downstream Tasks"，IW-FCV 2024，OS6-1，2024.2.20</a></li>
          </ul>
          </div>
      </div>
      </section>

      <section className="section" id="awards">
      <div className="inner">
          <div className="section-title-block" data-aos="fade-up">
            <h2 className="section-title">Award</h2>
            <div className="section-desc"></div>
          </div>
          
          <div className="awards-text" data-aos="fade-up">
            <ul className="awards-list">
            <li><strong>2024</strong></li>
            <li><FontAwesomeIcon icon={faAward} /> 電子情報通信学会東海支部 学業成績優秀者賞</li>
            <li><FontAwesomeIcon icon={faAward} />  <a className="link" href="https://www.eng.gifu-u.ac.jp/topics/2024/04/02.html" target="_blank" rel="noopener noreferrer">岐阜大学 学長表彰（学業成績 卒業表彰）</a></li>
            <li><FontAwesomeIcon icon={faTrophy} /> 技育博 企業賞（チームずんだ）</li>
            <li><FontAwesomeIcon icon={faAward} />  岐阜大学 工学部学部長表彰（課外活動）</li>
            <li><strong>2023</strong></li>
            <li><FontAwesomeIcon icon={faAward} />  岐阜大学 工学部学部長表彰（課外活動）</li>
            <li><FontAwesomeIcon icon={faTrophy} /> 技育CAMPアドバンスvol.4 大賞（チームずんだ）</li>
            <li><FontAwesomeIcon icon={faTrophy} /> 技育CAMPマンスリーハッカソンvol.11 最優秀賞（チームずんだ）</li>
            <li><strong>2022</strong></li>
            <li><FontAwesomeIcon icon={faAward} />  岐阜大学 学長表彰（学業成績 学年表彰）</li>
            <li><strong>2021</strong></li>
            <li><FontAwesomeIcon icon={faAward} />  岐阜大学 工学部学部長表彰（学業成績 学年表彰）</li>
          </ul>
          </div>
      </div>
      </section>

      <section className="section" id="note">
        <div className="inner">
          <div className="section-title-block" data-aos="fade-up">
            <h2 className="section-title">Note</h2>
            <div className="section-desc"></div>
          </div>

          <div className="card-wrapper my-gallery" data-aos="fade-up">
          {latestTwoArticles.map(article => (
            <a key={article.id} className="card-link" href={`/posts/${article.id}`}>
              <figure className="card">
                <img className="card-image" src={article.image} alt={article.title} />
                <div className="card-content">
                  <p className="card-caption-title">{article.title}</p>
                  <p className="card-caption-date"><FontAwesomeIcon icon={faCalendarDays} /> {article.date}</p>
                  <p className="card-caption-info">{article.abst}</p>
                </div>
              </figure>
            </a>
          ))}
          </div>
          <div className="awards-text">
            <ul className="awards-list">
            <li><Link href="/posts">もっと見る</Link></li>
            </ul>
            </div>
        </div>
      </section>
    </div>
    </div>
    
    
  );
};

export default Home;
