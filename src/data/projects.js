/* =========================================
   ✏️ EDIT HERE — PROJECTS
   프로젝트를 추가/수정하려면 이 파일만 수정하면 됩니다.
   여기서 바꾼 내용은 WORK / ARCHIVE / PROJECT DETAIL
   페이지에 자동으로 반영됩니다. (다른 파일은 건드릴 필요 없음)

   ✅ 새 프로젝트 추가하는 법
   아래 객체 하나를 통째로 복사해서 배열 맨 아래에 붙여넣고
   값만 바꿔주세요. id는 "13", "14"... 처럼 겹치지 않게 적어주세요.

   ✅ 이미지가 아직 없다면?
   경로를 빈 문자열('')로 두거나 실제로 없는 파일명을 적어도
   괜찮습니다. 사이트가 깨지지 않고 회색 placeholder가 대신
   표시됩니다. 나중에 public/images/ 에 파일을 넣고 경로만
   맞춰주면 자동으로 이미지로 바뀝니다.
   ========================================= */

export const projects = [
  {
    // 프로젝트 번호 — WORK / ARCHIVE / 상세페이지에 표시되는 번호입니다
    id: '01',

    // 상세페이지 주소에 쓰이는 영문 slug (예: /work/chromatic-drift)
    // 새 프로젝트를 추가할 때 다른 프로젝트와 겹치지 않게만 적어주세요
    slug: 'chromatic-drift',

    // 프로젝트 제목
    title: 'ABC UI LOOPING',

    // 카테고리 (예: "3D / MOTION")
    category: '3D / MOTION',

    // 제작 연도
    year: '2025',

    // 담당 역할
    role: '3D, Motion',

    // 사용 툴 목록
    tools: ['Cinema 4D', 'Redshift', 'After Effects'],

    // ARCHIVE 페이지에서 마우스를 올렸을 때 나오는 배경색
    // 이 값만 바꾸면 해당 프로젝트의 Archive hover 색이 바뀝니다
    archiveColor: '#C9C2AE',

    // WORK / ARCHIVE / HOME 카드에 쓰이는 썸네일 이미지
    thumbnail: '/images/project-01-thumb.jpg',

    // 상세페이지 맨 위 큰 이미지
    heroImage: '/images/project-01-hero.jpg',

    // 썸네일·히어로 이미지의 가로세로 비율 (레이아웃이 깨지지 않도록 유지해주세요)
    ratio: '16/9',

    // 상세페이지에 들어가는 프로젝트 설명
    description:
      'A looping UI project reimagined through motion design in collaboration with real UI designers and team members.',

    // 상세페이지에 순서대로 나오는 콘텐츠 블록
    // type: 'image' 또는 'vimeo'
    // size: 'full'(화면 전체 폭) 또는 'medium'(오른쪽으로 치우친 중간 크기)
    // 순서를 바꾸거나 블록을 추가/삭제하면 상세페이지 구성도 그대로 바뀝니다
    content: [
      { type: 'image', src: '/images/project-01-01.jpg', size: 'full' },
      { type: 'image', src: '/images/project-01-02.jpg', size: 'full' },
      { type: 'image', src: '/images/project-01-03.jpg', size: 'full' },
       ],
  },
  {
    id: '02',
    slug: 'surface-tension',
    title: 'vermond',
    category: 'MOTION / 3D',
    year: '2025',
    role: 'Motion Design',
    tools: ['Cinema 4D', 'Redshift', 'After Effects'],
    archiveColor: '#3DA9FC',
    thumbnail: '/images/project-02-thumb.jpg',
    heroImage: '/images/project-02-hero.jpg',
    ratio: '4/3',
    description:
      'A short identity piece exploring tension between rigid typography and soft, elastic material behaviour.',
    content: [ { type: 'image', src: '/images/project-02-01.jpg', size: 'full' },
      { type: 'image', src: '/images/project-02-02.jpg', size: 'full' },
      { type: 'image', src: '/images/project-02-03.jpg', size: 'full' },
      { type: 'image', src: '/images/project-02-04.jpg', size: 'full' },
        ],
  },
  {
    id: '03',
    slug: 'object-permanence',
    title: 'Nice travel',
    category: 'MOTION / 3D',
    year: '2025',
    role: '3D, Art Direction, motion',
    tools: ['Cinema 4D', 'Redshift', 'After Effects'],
    archiveColor: '#B03A2E',
    thumbnail: '/images/project-03-thumb.jpg',
    heroImage: '/images/project-03-hero.jpg',
    ratio: '3/4',
    description:
      'A still-life series treating familiar objects as sculptural forms, isolated in flat studio light.',
    content: [
      { type: 'image', src: '/images/project-03-01.jpg', size: 'full' },
      { type: 'image', src: '/images/project-03-02.jpg', size: 'full' },
      { type: 'image', src: '/images/project-03-03.jpg', size: 'full' },
      { type: 'image', src: '/images/project-03-04.jpg', size: 'full' },
      { type: 'image', src: '/images/project-03-05.jpg', size: 'full' },
      { type: 'image', src: '/images/project-03-06.jpg', size: 'full' },
      { type: 'image', src: '/images/project-03-07.jpg', size: 'full' },
    ],
  },
  {
    id: '04',
    slug: 'low-orbit',
    title: 'LOW ORBIT',
    category: 'MOTION / 3D',
    year: '2024',
    role: 'Direction, Motion, 3D',
    tools: ['Cinema 4D', 'After Effects', 'Premiere Pro'],
    archiveColor: '#7C9C78',
    thumbnail: '/images/project-04-thumb.jpg',
    heroImage: '/images/project-04-hero.jpg',
    ratio: '16/9',
    description:
      'A title sequence built around orbital motion paths and layered atmospheric depth.',
    content: [{ type: 'image', src: '/images/project-04-01.jpg', size: 'full' }],
  },
  {
    id: '05',
    slug: 'quiet-machine',
    title: 'QUIET MACHINE',
    category: '3D / MOTION',
    year: '2024',
    role: '3D, Motion Design',
    tools: ['Cinema 4D', 'Redshift', 'Higgsfield'],
    archiveColor: '#8C7BA5',
    thumbnail: '/images/project-05-thumb.jpg',
    heroImage: '/images/project-05-hero.jpg',
    ratio: '4/5',
    description:
      'Mechanical forms rendered without narrative — an exercise in restraint, material and silence.',
    content: [
      { type: 'image', src: '/images/project-05-01.jpg', size: 'full' },
      { type: 'image', src: '/images/project-05-02.jpg', size: 'medium' },
    ],
  },
  {
    id: '06',
    slug: 'field-notes',
    title: 'FIELD NOTES',
    category: 'MOTION / EXPERIMENT',
    year: '2023',
    role: 'Motion Design',
    tools: ['After Effects', 'Photoshop'],
    archiveColor: '#D9C6E0',
    thumbnail: '/images/project-06-thumb.jpg',
    heroImage: '/images/project-06-hero.jpg',
    ratio: '1/1',
    description:
      'A set of daily motion studies made without a client brief — texture, timing and type as the only subject.',
    content: [{ type: 'image', src: '/images/project-06-01.jpg', size: 'full' }],
  },
  {
    id: '07',
    slug: 'afterimage',
    title: 'AFTERIMAGE',
    category: 'MOTION / 3D',
    year: '2023',
    role: 'Motion Design, 3D',
    tools: ['Cinema 4D', 'After Effects'],
    archiveColor: '#FF5B35',
    thumbnail: '/images/project-07-thumb.jpg',
    heroImage: '/images/project-07-hero.jpg',
    ratio: '4/3',
    description: 'Layered afterimages of motion-captured gesture, rebuilt as translucent 3D geometry.',
    content: [{ type: 'image', src: '/images/project-07-01.jpg', size: 'full' }],
  },
  {
    id: '08',
    slug: 'still-frame',
    title: 'STILL FRAME',
    category: '3D / STILL',
    year: '2023',
    role: '3D, Art Direction',
    tools: ['Cinema 4D', 'Redshift'],
    archiveColor: '#2E8B67',
    thumbnail: '/images/project-08-thumb.jpg',
    heroImage: '/images/project-08-hero.jpg',
    ratio: '4/3',
    description: 'A single-frame study of light falling across matte and reflective surfaces.',
    content: [{ type: 'image', src: '/images/project-08-01.jpg', size: 'full' }],
  },
  {
    id: '09',
    slug: 'signal-noise',
    title: 'SIGNAL / NOISE',
    category: 'MOTION / EXPERIMENT',
    year: '2022',
    role: 'Motion Design',
    tools: ['After Effects', 'Premiere Pro'],
    archiveColor: '#E0C64D',
    thumbnail: '/images/project-09-thumb.jpg',
    heroImage: '/images/project-09-hero.jpg',
    ratio: '4/3',
    description: 'Broadcast-signal artifacts treated as raw material for abstract motion.',
    content: [{ type: 'image', src: '/images/project-09-01.jpg', size: 'full' }],
  },
  {
    id: '10',
    slug: 'material-study',
    title: 'MATERIAL STUDY',
    category: '3D / MOTION',
    year: '2022',
    role: '3D, Motion Design',
    tools: ['Cinema 4D', 'Redshift'],
    archiveColor: '#4D6B99',
    thumbnail: '/images/project-10-thumb.jpg',
    heroImage: '/images/project-10-hero.jpg',
    ratio: '4/3',
    description: 'Cloth, liquid and glass simulations run side by side as a material vocabulary.',
    content: [{ type: 'image', src: '/images/project-10-01.jpg', size: 'full' }],
  },
  {
    id: '11',
    slug: 'counterweight',
    title: 'COUNTERWEIGHT',
    category: 'MOTION / DIRECTION',
    year: '2023',
    role: 'Direction, Motion',
    tools: ['Cinema 4D', 'After Effects'],
    archiveColor: '#C4D93D',
    thumbnail: '/images/project-11-thumb.jpg',
    heroImage: '/images/project-11-hero.jpg',
    ratio: '4/3',
    description: 'A brand film built around balance, tension and the moment before release.',
    content: [{ type: 'image', src: '/images/project-11-01.jpg', size: 'full' }],
  },
  {
    id: '12',
    slug: 'index-01',
    title: 'INDEX 01',
    category: '3D / STILL',
    year: '2022',
    role: '3D, Art Direction',
    tools: ['Cinema 4D', 'Photoshop'],
    archiveColor: '#A65D8E',
    thumbnail: '/images/project-12-thumb.jpg',
    heroImage: '/images/project-12-hero.jpg',
    ratio: '4/3',
    description: 'The first entry in an ongoing archive of unreleased still-life renders.',
    content: [{ type: 'image', src: '/images/project-12-01.jpg', size: 'full' }],
  },
]

// slug로 프로젝트 하나를 찾습니다 (상세페이지에서 사용)
export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug)

// 정렬된 프로젝트 목록을 반환합니다 ('newest' 또는 'oldest')
export const getSortedProjects = (order = 'newest') => {
  return [...projects].sort((a, b) =>
    order === 'newest'
      ? Number(a.id) - Number(b.id)
      : Number(b.id) - Number(a.id)
  )
}
