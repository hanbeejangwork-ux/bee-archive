/* =========================================
   ✏️ EDIT HERE — ARCHIVE
   ARCHIVE 페이지 전용 데이터입니다.

   ⚠️ 중요: 이 파일은 src/data/projects.js와 완전히 분리되어 있습니다.
   projects.js에 새 프로젝트를 추가해도 ARCHIVE에는 반영되지 않고,
   여기에 항목을 추가해도 HOME / WORK에는 반영되지 않습니다.
   ARCHIVE는 클라이언트 프로젝트가 아닌 개인 작업을 자유롭게
   올려두는 별도의 공간이기 때문입니다.

   ✅ 새 항목 추가하는 법
   아래 객체 하나를 통째로 복사해서 배열 맨 아래에 붙여넣고
   값만 바꿔주세요. id와 slug는 다른 항목과 겹치지 않게 적어주세요.
   ========================================= */

export const archiveItems = [
 {
  id: '01',
  slug: 'chromatic-drift',
  title: 'CHROMATIC DRIFT',
  category: 'AI / Branding',
  year: '2026',

  archiveColor: '#9EC8D8',

  thumbnail: '/images/archive-01-thumb.jpg',
  heroImage: '/images/archive-01-hero.jpg',

  ratio: '3/4',

  description:
    'This is an AI-driven perfume branding project inspired by the form and movement of a snake. Its fluid curves, mysterious presence, and symbolic imagery were translated into the bottle design and visual identity. AI-generated visuals were used to create a sensual and enigmatic atmosphere throughout the brand.',

  content: [
    { type: 'image', src: '/images/archive-01-01.jpg', size: 'full' },
    { type: 'image', src: '/images/archive-01-02.jpg', size: 'full' },
    { type: 'image', src: '/images/archive-01-03.jpg', size: 'full' },
    { type: 'image', src: '/images/archive-01-04.jpg', size: 'full' },
    { type: 'image', src: '/images/archive-01-05.jpg', size: 'full' },
  ],
},

{
  id: '02',
  slug: 'laneige',
  title: 'LANEIGE',
  category: 'MOTION / 3D',
  year: '2024',

  archiveColor: '#3DA9FC',

  thumbnail: '/images/archive-02-thumb.jpg',
  heroImage: '/images/archive-02-hero.jpg',

  ratio: '3/4',

  description:
    'This is a brand film for LANEIGE, designed to capture a sense of freshness and hydration. Fluid visuals and refreshing imagery highlight the brand’s clean, moisture-rich identity.',

  content: [
    {
      type: 'vimeo',
      url: 'https://player.vimeo.com/video/1141218867?badge=0&autopause=0&player_id=0&app_id=58479',
    },
    { type: 'image', src: '/images/archive-02-01.jpg', size: 'full' },
    { type: 'image', src: '/images/archive-02-02.jpg', size: 'full' },
    { type: 'image', src: '/images/archive-02-03.jpg', size: 'full' },
  ],
},

{
  id: '03',
  slug: 'jeep',
  title: 'JEEP',
  category: 'AI / MOTION',
  year: '2025',

  archiveColor: '#B03A2E',

  thumbnail: '/images/archive-03-thumb.jpg',
  heroImage: '/images/archive-03-hero.jpg',

  ratio: '3/4',

  description:
    'This AI motion film for the Jeep Snow Edition embodies the purity of white and the vastness of snowy landscapes. The visuals capture the bold presence of Jeep within a pristine winter atmosphere.',

  content: [
    {
      type: 'vimeo',
      url: 'https://player.vimeo.com/video/1140890489?badge=0&autopause=0&player_id=0&app_id=58479',
    },
    { type: 'image', src: '/images/archive-03-01.jpg', size: 'full' },
    { type: 'image', src: '/images/archive-03-02.jpg', size: 'full' },
    { type: 'image', src: '/images/archive-03-03.jpg', size: 'full' },
  ],
},

{
  id: '04',
  slug: 'rollwith',
  title: 'ROLLWITH',
  category: '3D / Branding',
  year: '2025',

  archiveColor: '#7C9C78',

  thumbnail: '/images/archive-04-thumb.jpg',
  heroImage: '/images/archive-04-hero.jpg',

  ratio: '3/4',

  description:
    'This is a fictional character design that captures a vibrant and sporty personality. Dynamic visuals emphasize its energetic and playful identity.',

  content: [
    { type: 'image', src: '/images/archive-04-01.jpg', size: 'full' },
    { type: 'image', src: '/images/archive-04-02.jpg', size: 'full' },
    { type: 'image', src: '/images/archive-04-03.jpg', size: 'full' },
  ],
},
  {
    id: '05',
    slug: 'quiet-machine',
    title: 'QUIET MACHINE',
    category: '3D',
    year: '2024',
    archiveColor: '#8C7BA5',
    thumbnail: '/images/archive-05-thumb.jpg',
    heroImage: '/images/archive-05-hero.jpg',
    ratio: '3/4',
    description: 'Mechanical forms rendered without narrative — restraint, material, silence.',
    content: [{ type: 'image', src: '/images/archive-05-01.jpg', size: 'full' }],
  },
  {
    id: '06',
    slug: 'field-notes',
    title: 'FIELD NOTES',
    category: 'EXPERIMENT',
    year: '2023',
    archiveColor: '#D9C6E0',
    thumbnail: '/images/archive-06-thumb.jpg',
    heroImage: '/images/archive-06-hero.jpg',
    ratio: '3/4',
    description: 'Daily motion studies made without a brief — texture, timing, type.',
    content: [{ type: 'image', src: '/images/archive-06-01.jpg', size: 'full' }],
  },
  {
    id: '07',
    slug: 'afterimage',
    title: 'AFTERIMAGE',
    category: 'MOTION / 3D',
    year: '2023',
    archiveColor: '#FF5B35',
    thumbnail: '/images/archive-07-thumb.jpg',
    heroImage: '/images/archive-07-hero.jpg',
    ratio: '3/4',
    description: 'Layered afterimages of motion-captured gesture, rebuilt as 3D geometry.',
    content: [{ type: 'image', src: '/images/archive-07-01.jpg', size: 'full' }],
  },
  {
    id: '08',
    slug: 'still-frame',
    title: 'STILL FRAME',
    category: '3D / STILL',
    year: '2023',
    archiveColor: '#2E8B67',
    thumbnail: '/images/archive-08-thumb.jpg',
    heroImage: '/images/archive-08-hero.jpg',
    ratio: '3/4',
    description: 'A single-frame study of light falling across matte and reflective surfaces.',
    content: [{ type: 'image', src: '/images/archive-08-01.jpg', size: 'full' }],
  },
  {
    id: '09',
    slug: 'signal-noise',
    title: 'SIGNAL / NOISE',
    category: 'EXPERIMENT',
    year: '2022',
    archiveColor: '#E0C64D',
    thumbnail: '/images/archive-09-thumb.jpg',
    heroImage: '/images/archive-09-hero.jpg',
    ratio: '3/4',
    description: 'Broadcast-signal artifacts treated as raw material for abstract motion.',
    content: [{ type: 'image', src: '/images/archive-09-01.jpg', size: 'full' }],
  },
  {
    id: '10',
    slug: 'material-study',
    title: 'MATERIAL STUDY',
    category: '3D / MOTION',
    year: '2022',
    archiveColor: '#4D6B99',
    thumbnail: '/images/archive-10-thumb.jpg',
    heroImage: '/images/archive-10-hero.jpg',
    ratio: '3/4',
    description: 'Cloth, liquid and glass simulations run side by side as a material vocabulary.',
    content: [{ type: 'image', src: '/images/archive-10-01.jpg', size: 'full' }],
  },
  {
    id: '11',
    slug: 'counterweight',
    title: 'COUNTERWEIGHT',
    category: 'MOTION',
    year: '2023',
    archiveColor: '#C4D93D',
    thumbnail: '/images/archive-11-thumb.jpg',
    heroImage: '/images/archive-11-hero.jpg',
    ratio: '3/4',
    description: 'A personal study built around balance, tension and the moment before release.',
    content: [{ type: 'image', src: '/images/archive-11-01.jpg', size: 'full' }],
  },
  {
    id: '12',
    slug: 'index-01',
    title: 'INDEX 01',
    category: '3D / STILL',
    year: '2022',
    archiveColor: '#A65D8E',
    thumbnail: '/images/archive-12-thumb.jpg',
    heroImage: '/images/archive-12-hero.jpg',
    ratio: '3/4',
    description: 'The first entry in an ongoing archive of unreleased still-life renders.',
    content: [{ type: 'image', src: '/images/archive-12-01.jpg', size: 'full' }],
  },
]

// slug로 archive 항목 하나를 찾습니다 (상세페이지에서 사용)
export const getArchiveItemBySlug = (slug) => archiveItems.find((item) => item.slug === slug)
