## Feasy

本プロジェクトは、[Next.js](https://nextjs.org/)であり、[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)でブートストラップされています。

## はじめに

はじめに、環境構築のために次のコマンドを実行してください：

```bash
npm install
```

次に、サーバーを立ち上げてください：

```bash
npm run dev
```

結果を見るためには、ブラウザで[http://localhost:3000](http://localhost:3000)を開いてください。

`pages/index.tsx`を修正することによって、ページの編集を行うことができます。
またそのページはファイル編集する度に自動アップデートされます。

[API routes](https://nextjs.org/docs/api-routes/introduction)は、[http://localhost:3000/api/hello](http://localhost:3000/api/hello)によってアクセスされています。このエンドポイントは`pages/api/hello.ts`で編集されています。

`pages/api`ディクショナリは、`/api/*`と紐づけされています。 このディクショナリ内のファイルは React ページの代わりに、[API routes](https://nextjs.org/docs/api-routes/introduction) として取り扱われています。

## 更に学ぶには

Next.js について更に学ぶには、次の文献を参照してください：

■Next.js の特徴や API について

- [Next.js Documentation](https://nextjs.org/docs)

■ 対話式の Next.js チュートリアルについて

- [Learn Next.js](https://nextjs.org/learn)

[the Next.js GitHub repository](https://github.com/vercel/next.js/)にチェックアウトすることができます。フェードバックや貢献は歓迎されます!

## Vercel にてデプロイするには

Next.js アプリにデプロイするもっとも簡単な方法は、Next.js のクリエータから[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)を使うことです。

より詳細については、[Next.js deployment documentation](https://nextjs.org/docs/deployment)をチェックアウトしてください。
