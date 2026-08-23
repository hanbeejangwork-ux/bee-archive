# Hanbee Jang — Portfolio

Editorial / Swiss-grid portfolio site for a motion & 3D designer.
Built with React + Vite. No animation libraries — CSS transitions only.

---

## ★ 가장 자주 수정하는 파일

1. `src/data/site.js` — 사이트 이름, HOME 문구, 이메일, SNS 링크, 대표 이미지
2. `src/data/projects.js` — HOME/WORK에 쓰이는 프로젝트 전체 (제목, 이미지, 설명, 상세페이지 등)
3. `src/data/archive.js` — ARCHIVE 전용 데이터 (개인 작업). **projects.js와 완전히 분리**되어 있어서, 둘 중 하나를 수정해도 다른 하나에는 영향이 없습니다
4. `public/images/` — 실제 이미지 파일을 넣는 폴더

이 네 개만 알면 사이트 내용을 전부 수정할 수 있습니다.
아래 가이드는 각 항목을 실제 예시와 함께 설명합니다.

---

## 로컬에서 실행하기

```bash
npm install
npm run dev
```

빌드:

```bash
npm run build
npm run preview
```

## 배포 (Vercel)

1. 이 폴더를 GitHub 새 저장소에 업로드합니다.
2. Vercel에서 해당 저장소를 Import 합니다. Framework preset: **Vite**.
   별도 설정 없이 `npm run build`가 자동 실행되고 `dist/` 폴더가 배포됩니다.

---

## 수정 가이드

### ① 사이트 이름 바꾸는 곳

`src/data/site.js` 파일을 열고 `name` 값을 바꿉니다.

```js
name: 'HANBEE JANG',
```

헤더 왼쪽 이름과 Footer 저작권 표기(`© 2026 HANBEE JANG`)에 자동 반영됩니다.

### ② HOME 소개문 바꾸는 곳

같은 `src/data/site.js`에서 `homeIntro`와 `homeDescription`을 수정합니다.

```js
homeIntro: 'MOTION DESIGNER\nWORKING ACROSS\n3D, IMAGE AND MOTION.',
homeDescription: 'Independent motion designer working across 3D, moving image and visual experimentation.',
```

`homeIntro`의 첫 줄은 작은 라벨, 나머지 줄은 큰 헤드라인으로 표시됩니다.
줄바꿈은 `\n`으로 해주세요.

### ③ HOME 대표 이미지 바꾸는 법

`src/data/site.js`의 `heroImage` 경로를 실제 이미지 파일명으로 바꿉니다.

```js
heroImage: '/images/home-hero.jpg',
```

이미지 파일: `public/images/home-hero.jpg`
코드: `/images/home-hero.jpg`

이미지가 아직 없어도 사이트는 깨지지 않고 회색 placeholder("HERO IMAGE")가 대신 표시됩니다.

### ④ 프로젝트 제목 바꾸는 곳

`src/data/projects.js`에서 해당 프로젝트 객체의 `title` 값을 바꿉니다.

```js
title: 'CHROMATIC DRIFT',
```

### ⑤ 프로젝트 이미지 바꾸는 법

같은 파일에서 `thumbnail`, `heroImage`, `content` 안의 `src` 경로를 바꿉니다.

```js
thumbnail: '/images/project-01-thumb.jpg',   // WORK / ARCHIVE / HOME 썸네일
heroImage: '/images/project-01-hero.jpg',    // 상세페이지 맨 위 큰 이미지
content: [
  { type: 'image', src: '/images/project-01-01.jpg', size: 'full' },
  { type: 'image', src: '/images/project-01-02.jpg', size: 'medium' },
],
```

이미지 파일은 항상 `public/images/` 폴더에 넣고, 코드에는 `/images/파일명.jpg` 형태로만 적어주세요.

### ⑥ 새 프로젝트 추가하는 법

`src/data/projects.js`의 `projects` 배열 안에서 프로젝트 객체 하나를 통째로 복사해
배열 맨 아래에 붙여넣고 값만 바꿉니다. `id`와 `slug`는 다른 프로젝트와 겹치지 않게 적어주세요.

```js
{
  id: '13',
  slug: 'new-project-name',
  title: 'NEW PROJECT',
  category: '3D / MOTION',
  year: '2026',
  role: 'Motion Design',
  tools: ['Cinema 4D', 'After Effects'],
  archiveColor: '#FF8A65',
  thumbnail: '/images/project-13-thumb.jpg',
  heroImage: '/images/project-13-hero.jpg',
  ratio: '16/9',
  description: '프로젝트 설명을 여기에 입력합니다.',
  content: [
    { type: 'image', src: '/images/project-13-01.jpg', size: 'full' },
  ],
},
```

이렇게 추가하면 HOME과 WORK 페이지에 자동으로 반영됩니다.
같은 정보를 다른 파일에 다시 적을 필요는 없습니다.

⚠️ **ARCHIVE에는 반영되지 않습니다.** ARCHIVE는 `src/data/archive.js`라는
완전히 별도의 파일을 사용합니다 — 아래 ⑪번 항목을 확인해주세요.

### ⑦ ARCHIVE hover 색상 변경법

`src/data/archive.js` 안의 해당 항목에서 `archiveColor` 값만 바꾸면 됩니다.
(projects.js의 `archiveColor`는 더 이상 ARCHIVE에서 쓰이지 않습니다.)

```js
archiveColor: '#FF4D32',
```

이 값을 바꾸면 ARCHIVE 페이지에서 해당 항목에 마우스를 올렸을 때 나오는 배경색만 바뀝니다.

### ⑧ Instagram / Behance / Email 변경법

`src/data/site.js`에서 수정합니다.

```js
email: 'hello@hanbeejang.com',
instagram: 'https://instagram.com/아이디',
behance: 'https://behance.net/아이디',
```

헤더, Footer, Contact 페이지에 모두 자동 반영됩니다.

### ⑨ Vimeo 넣는 법

프로젝트의 `content` 배열에 vimeo 타입 블록을 추가합니다.

```js
content: [
  { type: 'image', src: '/images/project-01-01.jpg', size: 'full' },
  { type: 'vimeo', url: 'https://player.vimeo.com/video/123456789' },
],
```

`content` 안에서 이미지와 영상 블록을 원하는 순서대로 자유롭게 배치할 수 있습니다.
`size: 'full'`은 화면 전체 폭, `size: 'medium'`은 오른쪽으로 살짝 치우친 중간 크기입니다.

### ⑩ 이미지를 public/images에 넣었을 때 경로 작성법

이미지 파일을 아래처럼 넣었다면:

```
public/images/test.jpg
```

코드에서는 항상 이렇게 적어주세요:

```
"/images/test.jpg"
```

`import image from ...` 방식은 사용하지 않습니다 — 파일명을 텍스트로 적기만 하면 됩니다.
이미지가 아직 없거나 경로가 틀려도 사이트는 깨지지 않고 회색 placeholder가 표시됩니다.

### ⑪ ARCHIVE에 개인 작업 추가하는 법

ARCHIVE는 `src/data/archive.js`라는 별도 파일에서 관리합니다. **projects.js와는
전혀 연결되어 있지 않아서**, 여기에 항목을 추가하거나 수정해도 HOME/WORK에는
아무 영향이 없습니다. 반대로 projects.js에 프로젝트를 추가해도 ARCHIVE는
그대로입니다.

새 항목을 추가하려면 `archiveItems` 배열 안 객체 하나를 복사해서 아래에
붙여넣고 값만 바꿉니다.

```js
{
  id: '13',
  slug: 'new-archive-item',
  title: 'NEW ARCHIVE ITEM',
  category: 'PERSONAL',
  year: '2026',
  archiveColor: '#5CACDE',
  thumbnail: '/images/archive-13-thumb.jpg',
  heroImage: '/images/archive-13-hero.jpg',
  ratio: '3/4',
  description: '개인 작업 설명을 여기에 입력합니다.',
  content: [
    { type: 'image', src: '/images/archive-13-01.jpg', size: 'full' },
  ],
},
```

---

## 구조

```
src/
  App.jsx                라우팅 + light/dark 테마 전환
  data/
    site.js              ✏️ 사이트 기본 정보 (이름, HOME 문구, 이메일, SNS, Hero 이미지)
    projects.js           ✏️ HOME/WORK 프로젝트 데이터
    archive.js             ✏️ ARCHIVE 전용 데이터 (projects.js와 독립적)
  components/
    Header.jsx
    Footer.jsx
    HeroMedia.jsx          HOME/ABOUT 대표 이미지 (항상 표시, placeholder 자동 대체)
    ImageFrame.jsx         일반 이미지 + placeholder 대체
    ContentBlock.jsx       상세페이지 content 배열을 순서대로 렌더링 (Project/Archive 공용)
    ProjectCard.jsx        HOME selected work 카드
    ProjectGrid.jsx        WORK 3-column 아카이브 그리드
    ArchiveGrid.jsx        ARCHIVE hover 컬러 그리드
  pages/
    Home.jsx
    Work.jsx
    Archive.jsx
    ProjectDetail.jsx      WORK 프로젝트 상세페이지
    ArchiveDetail.jsx      ARCHIVE 항목 상세페이지 (독립)
    About.jsx               검정 배경 페이지, 히어로 이미지 + SKILLS 슬라이드
    Contact.jsx
  styles/global.css        디자인 토큰 + 12-column 그리드 시스템 + 전체 스타일
```

## 디자인 원칙 (변경하지 않고 유지 중인 것들)

- Desktop 12-column / Mobile 4-column 그리드, breakpoint 768px
- border-radius, drop shadow, gradient, pill button 없음
- hover 인터랙션은 이미지 scale 1.01~1.02, opacity 변화 정도로 최소화
- 실제 이미지가 없어도 모든 이미지 영역은 회색 placeholder로 항상 표시되고, 섹션 자체가 사라지지 않음
