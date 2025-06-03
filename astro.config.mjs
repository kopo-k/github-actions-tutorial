import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static', // 静的サイトにする
  base: '/github-actions-tutorial/', // GitHubのリポジトリ名（例：blog）
});
