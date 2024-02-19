---
title: "Deep Autoencoding Gaussian Mixture Model for Unsupervised Anomaly Detection"
date: "2023-11-03"
abst: "testです"
image: "/images/articles/pytorch.png"
genre: "paper"

---
## 記事のタイトル

### 実装した機能
・アンシャープマスクフィルタ(使うフィルターサイズ、重みは変更可能)\
・画像に映る物体の輪郭抽出(ガウシアンフィルタ、2値化などの前処理で実装)\
・編集した画像にペイント\
・編集後の画像をギャラリーに保存

### 注意事項
・AndroidStudioで作成\
・OpenCVのバーションは4.6.0\
・リポジトリ容量を食うので、ライブラリ(openCV)はPUSHしていない

### ライブラリのインストール手順
１．https://opencv.org/releases/ よりダウンロード(バージョンは**4.6.0、Android版**を選択)

２．ダウンロードしたzipファイルを任意のディレクトリで展開

３．AndroidStudioのプロジェクトで、左上の「File -> New -> Import Module」を選択

４．ディレクトリ選択の画面で、展開したライブラリの「OpenCV-android-sdk -> sdk」を選択(module nameはsdkからopencv-4.6.0に変更しておくとわかりやすい)

５．メニューバーから「File -> Project Structure」を選択

６．左側のメニューから「Dependencies -> app」を選択