// FontAwesome のアイコンは Category 側で指定
export const skillGroups = [
  {
    title: 'Front-End',
    icon: 'faImage',               // ← ここは文字列で渡しコンポーネント側で解決
    items: [
      {
        name: 'HTML',
        img: '/images/html.png',
        desc: '各アプリ・サイトのUI部分の実装に使用',
      },
      {
        name: 'CSS',
        img: '/images/css.png',
        desc: '各アプリ・サイトのUI部分の実装に使用',
      },
      {
        name: 'JavaScript',
        img: '/images/js.png',
        desc: '各アプリ・サイトのUI部分の実装に使用',
      },
      {
        name: 'React',
        img: '/images/react.png',
        desc: 'AIずんだWEBや本ホームページのUI実装に使用',
      },
    ],
  },
  {
    title: 'Back-End',
    icon: 'faGears',
    items: [
      {
        name: 'C',
        img: '/images/c.png',
        desc: '授業で学習（PIC16F88の電子ルーレットや音声制御する車の制作で使用）',
      },
      { name: 'C++', img: '/images/c++.png', desc: '授業で学習（連結リストの実装など）' },
      {
        name: 'Java',
        img: '/images/java.png',
        desc: '授業で学習（ペイントアプリや Pixel Craft Studio を開発）',
      },
      {
        name: 'Android',
        img: '/images/android.png',
        desc: 'IDE: Android Studio で Pixel Craft Studio を開発',
      },
      {
        name: 'Python',
        img: '/images/python.png',
        desc: '研究および各種制作物のバックエンドに使用',
      },
      {
        name: 'Django',
        img: '/images/django.png',
        desc: 'ShiftManagement のサーバーサイドに使用',
      },
      {
        name: 'Node.js',
        img: '/images/nodejs.png',
        desc: 'AIずんだWEBをホスト',
      },
    ],
  },
  {
    title: 'DB',
    icon: 'faDatabase',
    items: [
      {
        name: 'MySQL',
        img: '/images/mysql.png',
        desc: 'ShiftManagement で講師／生徒情報を管理',
      },
    ],
  },
  {
    title: 'Cloud',
    icon: 'faCloud',
    items: [
      {
        name: 'AWS',
        img: '/images/aws.png',
        desc: 'SageMaker と API Gateway で AI モデルを運用',
      },
    ],
  },
  {
    title: 'Research Tool',
    icon: 'faMagnifyingGlass',
    items: [
      { name: 'Python', img: '/images/python.png', desc: '' },
      {
        name: 'PyTorch',
        img: '/images/pytorch.png',
        desc: 'Deep Learning 実装に使用',
      },
      {
        name: 'Jupyter Notebook',
        img: '/images/jupyter.png',
        desc: '画像・グラフの可視化やデータ解析に使用',
      },
      {
        name: 'Matplotlib',
        img: '/images/matplot.png',
        desc: 'グラフ作成で使用',
      },
      {
        name: 'pandas',
        img: '/images/pandas.png',
        desc: 'CSV データの解析・整形に使用',
      },
    ],
  },
  {
    title: 'Infra',
    icon: 'faNetworkWired',
    items: [
      {
        name: 'Docker',
        img: '/images/docker.png',
        desc: 'GPUで学習するときの仮想環境として使用',
      },
      {
        name: 'Slurm',
        img: '/images/slurm.png',
        desc: '大規模GPUクラスターのジョブ管理ツールとして使用',
      },
    ],
  },
  {
    title: 'Tool',
    icon: 'faToolbox',
    items: [
      {
        name: 'Git',
        img: '/images/git.png',
        desc: 'チーム開発時のバージョン管理に使用',
      },
      {
        name: 'GitHub',
        img: '/images/github.png',
        desc: 'リポジトリホスティング／ファイルバックアップ／本サイトのデプロイとして使用',
      },
    ],
  },
  {
    title: 'Certifications',
    icon: 'faCertificate',      // ← FontAwesome でお好みのバッジを
    items: [
      {
        name: '基本情報技術者試験（FE）',
        img: '/images/ipa.png',
        desc: 'IPA 独立行政法人 情報処理推進機構（2021年12月）',
      },
      {
        name: '応用情報技術者試験（AP）',
        img: '/images/ipa.png',
        desc: 'IPA 独立行政法人 情報処理推進機構（2023年12月）',
      },
    ],
  },
];
