// components/Awards.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faAward, faMedal, faStar, faRibbon } from '@fortawesome/free-solid-svg-icons'
import { faSquareXTwitter, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope ,faDatabase } from '@fortawesome/free-solid-svg-icons';
import { basePath } from "../next.config" // 追加
const BASE_PATH = basePath ? basePath : "" // 追加
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';

export const getStaticProps = () => {
  const files = fs.readdirSync('posts');
  const posts = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fileContent = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data } = matter(fileContent);
    return {
      frontMatter: data,
      slug,
    };
  });

  return {
    props: {
      posts,
    },
  };
};

const Home = ({posts}) => {
  console.log(posts);
  return (
    <div id="wrapper">
      <section className="section" id="Profile">
        <div className="inner">
          <div className="section-title-block">
            <h2 className="section-title"><span className="section-title-css">PROFILE</span></h2>
          </div>
        </div>
        <div className="text">
        <img src="images/me.jpg" alt=""></img>
        <div className="content-icon">
            <a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer">
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
            <p><strong>（予定）2024.04 -：<a className="link" href="https://gnst.gifu-u.ac.jp/intellscieng/infomatics/" target="_blank" rel="noopener noreferrer">岐阜大学大学院 自然科学技術研究科 知能理工学専攻</a></strong></p>
            <p><strong>2022.10 - 現在：<a className="link" href="http://www.cv.info.gifu-u.ac.jp/index.html" target="_blank" rel="noopener noreferrer">加藤研究室</a> 所属</strong></p>
            <p><strong>2020.04 - 現在：<a className="link" href="https://www.eng.gifu-u.ac.jp/denkidenshi-jyouhou/" target="_blank" rel="noopener noreferrer">岐阜大学 工学部 電気電子・情報工学科</a><a href="https://www.info.gifu-u.ac.jp" className="link" target="_blank" rel="noopener noreferrer"> 情報コース</a></strong></p>
            
            </div>
          </div>

      </section>

      <section className="section" id="skill">
        <div className="inner">
          <div className="section-title-block">
            <h2 className="section-title"><span className="section-title-css">SKILL</span></h2>
            <p className="section-desc"></p>
          </div>
          <div className="card-wrapper">

            <div className="card">
              <div className="skill-desc">
                <h3 className="skill-desc-title">フロントエンド</h3>
              
                <img src="images/html.png" alt=""></img>
                <img src="images/css.png" alt=""></img>
                <img src="images/js.png" alt=""></img>
                <img src="images/react.png" alt=""></img>
                <p>本サイトや各種プロダクトで使用</p>
                
              </div>
            </div>

            <div className="card">
              <div className="skill-desc">
                <h3 className="skill-desc-title">バックエンド</h3>
                <img src="images/python.png" alt=""></img>
                <img src="images/django.png" alt=""></img>
                <img src="images/nodejs.png" alt=""></img>
                <img src="images/nextjs.png" alt=""></img>
                <p>本サイトや各種プロダクトで使用</p>
                
              </div>
            </div>


            <div className="card">
              <div className="skill-desc">
                <h3 className="skill-desc-title">データベース</h3>
                
                <img src="images/mysql.png" alt=""></img>
                <p>djangoと組み合わせて使用</p>
              </div>
            </div>

            <div className="card">
              <div className="skill-desc">
                <h3 className="skill-desc-title">クラウド</h3>
                
                <img src="images/aws.png" alt=""></img>
                <p>SageMakerやAPIGatewayを使用</p>
              </div>
            </div>

            <div className="card">
              <div className="skill-desc">
                <h3 className="skill-desc-title">スマホアプリ</h3>
                
                <img src="images/java.png" alt=""></img>
                <img src="images/android.png" alt=""></img>
                <p>Androidアプリの開発に使用</p>
                {/* <img src="images/.png" alt=""></img> */}
              </div>
            </div>

            <div className="card">
              <div className="skill-desc">
                <h3 className="skill-desc-title">組み込みシステム</h3>
                
                <img src="images/c.png" alt=""></img>
                <img src="images/c++.png" alt=""></img>
                {/* <img src="images/aruduino.png" alt=""></img> */}
                <p>組み込み開発の自由課題や試験で使用</p>
                
              </div>
            </div>

            <div className="card">
              <div className="skill-desc">
                <h3 className="skill-desc-title">研究ツール</h3>
                <img src="images/python.png" alt=""></img>
                <img src="images/pytorch.png" alt=""></img>
                <img src="images/matlab.png" alt=""></img>
                <img src="images/pandas.png" alt=""></img>
                
                
                <p>深層学習やデータ解析で使用</p>
                {/* <img src="images/.png" alt=""></img> */}
              </div>
            </div>

            <div className="card">
              <div className="skill-desc">
                <h3 className="skill-desc-title">バージョン管理</h3>
                <img src="images/git.png" alt=""></img>
                <img src="images/github.png" alt=""></img>
                <p>チーム開発でのソースコード管理で使用</p>
                
              </div>
            </div>

            <div className="card">
              <div className="skill-desc">
                <h3 className="skill-desc-title"><i className="fas fa-list-alt"></i>保有資格</h3>
                
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <th scope="row">基本情報技術者</th>
                    </tr>
                    <tr>
                      <th scope="row">応用情報技術者</th>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="section" id="product">
        <div className="inner">
          <div className="section-title-block">
            <h2 className="section-title"><span className="section-title-css">PRODUCT</span></h2>
            <div className="section-desc"></div>
          </div>
          <div className="card-wrapper my-gallery">
          
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
                <p className="card-caption-title">Shift Mangement</p>
                <p className="card-caption-info">個別指導のシフトを自動作成するツール</p>
                {/* <p className="card-caption-info">HTML/CSS/Javascript/python/django/mysql</p> */}
  
              </figcaption>
              </a>
            </figure>
            

          </div>
        </div>
      </section>
      
      <section className="section" id="awards">
      <div className="inner">
          <div className="section-title-block">
            <h2 className="section-title"><span className="section-title-css">AWARD</span></h2>
            <div className="section-desc"></div>
          </div>
          <div className="awards-text">
            <ul className="awards-list">
            <li><strong>2023</strong></li>
            <li><FontAwesomeIcon icon={faAward} />  岐阜大学 工学部学部長表彰 課外活動（ハッカソン活動）</li>
            <li><FontAwesomeIcon icon={faTrophy} /> 技育CAMPアドバンスvol.4 大賞（チームずんだ）</li>
            <li><FontAwesomeIcon icon={faTrophy} /> 技育CAMPマンスリーハッカソンvol.11 最優秀賞（チームずんだ）</li>
            <li><strong>2022</strong></li>
            <li><FontAwesomeIcon icon={faAward} />  岐阜大学 学長表彰 学業成績</li>
            <li><strong>2021</strong></li>
            <li><FontAwesomeIcon icon={faAward} />  岐阜大学 工学部学部長表彰 学業成績</li>
          </ul>
        </div>
      </div>
      </section>

      <section className="section" id="note">
        <div className="inner">
          <div className="section-title-block">
            <h2 className="section-title"><span className="section-title-css">NOTE</span></h2>
            <div className="section-desc"></div>
          </div>

          <div className="awards-text">
            <ul className="awards-list">
            <li><Link href="/posts">記事一覧へ</Link></li>
            </ul>
            </div>
        </div>
      </section>

      <section className="section" id="paper">
        <div className="inner">
          <div className="section-title-block">
            <h2 className="section-title"><span className="section-title-css">PAPER</span></h2>
            <div className="section-desc"></div>
          </div>
        </div>
        <div className='text'>
          <div className="content-icon">
            <a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faDatabase} />
            </a>
          </div>
          <div className='text-content'>
            <p>Notionにてまとめています</p>
            <p>アイコンからアクセスできます</p>
          </div>
          </div>
        
      </section>

    </div>
    
  );
};

export default Home;
