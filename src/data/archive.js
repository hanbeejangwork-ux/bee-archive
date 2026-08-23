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
    // ARCHIVE 그리드에 표시되는 번호
    id: '01',

    // 상세페이지 주소에 쓰이는 영문 slug (예: /archive/tools-for-slowing-down)
    slug: 'chromatic-drift',

    // 작업 제목
    title: 'CHROMATIC DRIFT',

    // 카테고리
    category: '3D / MOTION',

    // 연도
    year: '2026',

    // ARCHIVE 그리드에서 마우스를 올렸을 때 나오는 배경색
    // 이 값만 바꾸면 해당 항목의 hover 색이 바뀝니다
    archiveColor: '#C9C2AE',

    // ARCHIVE 그리드 썸네일
    thumbnail: '/images/archive-01-thumb.jpg',

    // 상세페이지 맨 위 큰 이미지
    heroImage: '/images/archive-01-hero.jpg',

    // 썸네일·히어로 이미지 가로세로 비율
    ratio: '3/4',

    // 상세페이지 설명
    description:
      'An ongoing study in fluid simulation and refracted light — translucent forms moving through a controlled studio environment.',

    // 상세페이지에 순서대로 나오는 콘텐츠 블록 (선택 사항)
    // type: 'image' 또는 'vimeo', size: 'full' 또는 'medium'
    content: [{ type: 'image', src: '/images/archive-01-01.jpg', size: 'full' }],
  },
  {
    id: '02',
    slug: 'surface-tension',
    title: 'SURFACE TENSION',
    category: 'MOTION',
    year: '2025',
    archiveColor: '#3DA9FC',
    thumbnail: '/images/archive-02-thumb.jpg',
    heroImage: '/images/archive-02-hero.jpg',
    ratio: '3/4',
    description: 'A short personal study exploring tension between typography and material.',
    content: [{ type: 'image', src: '/images/archive-02-01.jpg', size: 'full' }],
  },
  {
    id: '03',
    slug: 'object-permanence',
    title: 'OBJECT PERMANENCE',
    category: '3D / STILL',
    year: '2025',
    archiveColor: '#B03A2E',
    thumbnail: '/images/archive-03-thumb.jpg',
    heroImage: '/images/archive-03-hero.jpg',
    ratio: '3/4',
    description: 'A still-life series treating familiar objects as sculptural forms.',
    content: [{ type: 'image', src: '/images/archive-03-01.jpg', size: 'full' }],
  },
  {
    id: '04',
    slug: 'low-orbit',
    title: 'LOW ORBIT',
    category: 'MOTION',
    year: '2024',
    archiveColor: '#7C9C78',
    thumbnail: '/images/archive-04-thumb.jpg',
    heroImage: '/images/archive-04-hero.jpg',
    ratio: '3/4',
    description: 'A personal motion study built around orbital paths and atmospheric depth.',
    content: [{ type: 'image', src: '/images/archive-04-01.jpg', size: 'full' }],
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
