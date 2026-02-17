# skill-test-app

先生一覧の閲覧・検索・ページネーション機能を備えた管理画面です。

## 動作環境

- Node.js: 20.19.0
- npm: 10.8.2

## 起動方法

1. リポジトリをクローン

```bash
git clone <repository-url>
cd <project-name>
```

2. 依存関係インストール

```bash
npm install
```

3. 開発サーバー起動

```bash
npm run dev
```

4. ブラウザでアクセス

```
http://localhost:3000
```

※ 先生一覧ページは以下URLで確認できます。

```
http://localhost:3000/teacher
```

## 技術スタック

- Next.js（App Router）
- TypeScript
- React
- Tailwind CSS

## アーキテクチャ

- App Routerを採用
- Server Componentでデータ取得
- loading.tsx / error.tsx によるUI制御
- lib配下 APIロジック分離
- components 配下にUIコンポーネントを配置
- types 配下に型定義を分離
