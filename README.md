# Goodbuy(Chrome_extension)

> A Vue.js project

## インストールする時にすること

- zipブランチに移動する
- CodeタブからDownload ZIPを選択する
- chromeの「拡張機能を管理」を選択する
- 「パッケージ化されていない機能を読み込む」を選択し、ダウンロードしたフォルダをルートディレクトリごと選択する。


## 最初にすること
- このリポジトリをクローンしビルドまでする
    ```
    git clone https://github.com/Memolution/buybye.git
    cd buybye
    npm install
    npm run dev
    npm run build
    ```
ビルドするとルート直下にdistフォルダが生成される

- リポジトリのルートディレクトリごとchrome拡張として読み込む（chrome://extensions/　からパッケージ化されてない拡張機能を読み込むを選択）

## 開発するとき
- 開発サーバを立てる
`npm run dev`

- 開発したものをchrome拡張に読み込む
`npm run build`
を実行しchrome拡張を更新する。


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
