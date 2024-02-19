// lib/articles.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {remark} from 'remark';
import html from 'remark-html';

const articlesDirectory = path.join(process.cwd(), 'posts');

export function getSortedArticlesData() {
  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticlesData = fileNames
    .filter(fileName => fileName.endsWith('.md')) // '.md'で終わるファイルのみを対象にする
    .map(fileName => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);
      return {
        id,
        ...matterResult.data,
        ...matterResult.abst,
        ...matterResult.image,
        ...matterResult.genre,
    };
  });

  return allArticlesData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export async function getArticleData(id) {
  const fullPath = path.join(articlesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // メタデータ部分を解析
  const matterResult = matter(fileContents);

  // マークダウンをHTMLに変換
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // データをidと合わせて返す
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export function getAllArticleIds() {
  const fileNames = fs.readdirSync(articlesDirectory);

  // 以下のようなオブジェクトの配列を返す：
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    };
  });
}
