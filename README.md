# 無の部屋。 | Aonull's Personal Space

Aonull の活動・制作物・趣味を紹介するシングルページの個人サイトです。
HTML / CSS / JavaScript のみの静的サイトで、ビルド不要・外部ライブラリなしで GitHub Pages に公開できます。

## ファイル構成
| ファイル | 役割 |
|---|---|
| `index.html` | ページ構造・SEO/OGP |
| `404.html` | 404ページ |
| `css/themes.css` | ライト/ダークの色（CSS変数） |
| `css/style.css` | 基本スタイル・アニメーション |
| `css/responsive.css` | タブレット/スマホ対応 |
| `js/data.js` | **編集用データ（文言・作品・SNS・メール等）** |
| `js/main.js` | 言語切替・テーマ・描画・スクロール演出 |
| `assets/` | 画像・アイコン・favicon |

## ローカルでの確認
`index.html` をブラウザで開くだけで動作します。
サブパスなどの確認には簡易サーバーを推奨します。

```
python3 -m http.server 8000   # → http://localhost:8000
```

## GitHub へのアップロード
1. GitHub で新しいリポジトリを作成（例: `aonull-site`）
2. このフォルダの中身をリポジトリ直下に置く
```
git init && git add . && git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

## GitHub Pages の有効化
1. リポジトリの **Settings → Pages**
2. **Source: Deploy from a branch** / Branch: `main` / Folder: `/ (root)` → Save
3. 数分後に `https://USERNAME.github.io/REPO/` で公開されます（HTTPS は自動）

すべて相対パスのため、サブパス公開でもそのまま動きます。`.nojekyll` は削除しないでください。

## 設定の変更（すべて `js/data.js`）
- **メールアドレス**: `CONTACT_EMAIL` を書き換える（表示とmailtoリンクに自動反映）
- **ヒーロー紹介文**: `ui.ja["hero.lead"]` / `ui.en["hero.lead"]`
- **title / description**: `meta`
- **プロフィール**: `profile`（画像は `assets/images/` に置いてパスを指定）
- 空文字・空配列は「未設定」表示になります（架空の内容は出ません）

## コンテンツの追加
- **作品**: `works` に1オブジェクト追加（`url` を入れると「作品を見る」リンクが出ます）
- **これまで（HISTORY）**: `history` に `{ date:"YYYY-MM", dateLabel:{ja,en}, title:{ja,en}, body:{ja,en} }` を追加。1件が路線図の1駅になります
- **好きなもの**: `interests` にカテゴリを追加、または既存カテゴリの `items` に追加
- **スキル**: `skills` のグループ内 `items` に追加。`level` は書いた時だけ表示
- **活動履歴**: `activity` に `{ date:"2026-01-01", title:{ja:"",en:""}, body:{ja:"",en:""}, category:{ja:"",en:""}, url:"" }` を追加（日付の新しい順に自動表示）
- **リンク**: `links` に追加。`url` が空の間は無効表示

## OGP画像
`assets/images/ogp.png`（1200×630推奨）を置き、`index.html` 内のコメントアウトされた `og:image` を有効化し、公開URLを絶対パスで指定してください。

## 備考
- フォントは Google Fonts（Inter / Noto Sans JP）を読み込みます。オフライン時はシステムフォントに自動で切り替わります
- 404ページは深い階層のURLでも崩れないよう、CSSを埋め込んでいます
