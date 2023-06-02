![Vercel](https://vercelbadge.vercel.app/api/xxrjun/xxrjun.github.io?style=flat-square)

# xxrjun Portfolio

- [xxrjun Portfolio](#xxrjun-portfolio)
  - [Todo List](#todo-list)
  - [使用工具 Built With](#使用工具-built-with)
  - [參考資料 References](#參考資料-references)
    - [參考專案 Reference Projects](#參考專案-reference-projects)
    - [其他參考資料 Other References](#其他參考資料-other-references)
  - [Getting Started](#getting-started)
    - [Learn More](#learn-more)
    - [Deploy on Vercel](#deploy-on-vercel)

## Todo List

- [x] Introduction 首頁部分
  - [x] 3D 動畫
  - [x] 自我概述
- [x] About page 關於我的部分，包含經歷(Work Experience, Education...)
- [x] Skills 技術能力部分
  - Front-end: HTML, CSS, JavaScript, React, Redux, TailwindCSS
  - Back-end: Nodejs, Expressjs, MySQL, PostgreSQL, MongoDB
  - Programming Languages: C, C++, Java, Python
  - Other tools: Git, GitHub, Postman, Figma, VSCode, Intellij
- [x] Projects 做過的專案 (串接 GitHub API 提供 Repositories 資料)
  - [x] 三個主要顯示的專案: [carryu](https://github.com/CARRYUU/carryu)、[cs-resources](https://github.com/xxrjun/cs-resources)、[total-repos-size](https://github.com/xxrjun/total-repos-size)
  - [x] More Projects Button: Link to GitHub Repositories
- [x] RWD

**Bus & Improvments**

- [x] 首頁部分添加下滑按鈕，增加手機板的使用者體驗

## 使用工具 Built With

![VSCode](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white) ![Next.js 13](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/tailwindcss-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Chakra UI](https://img.shields.io/badge/Chakra%20UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white) ![GitHub Copilot](https://img.shields.io/badge/GitHub%20Copilot-000000?style=for-the-badge&logo=github&logoColor=white) ![ChatGPT(4.0)](<https://img.shields.io/badge/ChatGPT(4.0)-000000?style=for-the-badge&logo=openai&logoColor=white>) ![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) ![Axios](https://img.shields.io/badge/axios-5A2D9C?style=for-the-badge&logo=axios&logoColor=white) ![GitHub API](https://img.shields.io/badge/GitHub%20API-181717?style=for-the-badge&logo=github&logoColor=white) ![package.json](https://img.shields.io/badge/package.json-000000?style=for-the-badge&logo=json&logoColor=white)

| 類別         | 名稱                                                                                                             |
| ------------ | ---------------------------------------------------------------------------------------------------------------- |
| 文字編輯器   | [VSCode](https://code.visualstudio.com/)                                                                         |
| 前端框架     | [Next.js 13](https://nextjs.org/)、[Tailwind CSS](https://tailwindcss.com/)、[Chakra UI](https://chakra-ui.com/) |
| 輔助工具     | [GitHub Copilot](https://github.com/features/copilot)、[ChatGPT(4.0)](https://chat.openai.com/)                  |
| 套件管理工具 | [NPM](https://www.npmjs.com/)                                                                                    |
| API          | [GitHub API](https://docs.github.com/en/rest)                                                                    |
| API 套件     | [Axios](https://axios-http.com/docs/intro)                                                                       |
| 其他套件     | [package.json](./package.json)                                                                                   |

## 參考資料 References

### 參考專案 Reference Projects

- [adrianhajdin/project_3D_developer_portfolio](https://github.com/adrianhajdin/project_3D_developer_portfolio)
  - Youtube 上有教學 [Build and Deploy an Amazing 3D Web Developer Portfolio in React JS | Beginner Three.js Tutorial](https://youtu.be/0fYi8SGA20k)
  - 原作者是使用 React，但想嘗試新技術的我選擇使用 Next.js
- [Infvyr/nextjs-portfolio](https://github.com/Infvyr/nextjs-portfolio)
  - 有取得原作者授權許可，非常感謝!
  - 原作者是使用 Sanity.io 作為 CMS，為求簡便我是使用 GitHub API 導入專案資料，缺點是無法取得專案圖片。

與原作差別:

- 結合兩者，以後者專案為基底新增 3D 動畫，使用 NextJS 作為前端開發框架
- 對於 3D 動畫新增 RWD
- 修正 Canvas 會被右鍵拖走的問題
- 優化 Canvas 效能，針對 3D 模型紋理進行低失真壓縮
- 針對 Accessibility 做些微優化
- 新增 metadata 優化網站 SEO
- 使用 Axios 套件呼叫 GitHub API 取得專案資料

### 其他參考資料 Other References

- [Next.js Docs](https://nextjs.org/docs)
- [TailwindCSS 官網](https://tailwindcss.com/)
- [chakra-ui/chakra-ui](https://github.com/chakra-ui/chakra-ui)
- [react-three-fiber docs](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [framer-motion Docs](https://www.framer.com/motion/)
- [Three.js Docs](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene) - 3D 動畫框架
- [Sketchfab](https://sketchfab.com/) - 3D 模型下載網站
- Favicon 使用 <a href="https://www.flaticon.com/free-icons/cross" title="cross icons">Cross icons created by Pixelmeetup - Flaticon</a>

## Getting Started

Clone this repository:

```bash
git clone
```

Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
