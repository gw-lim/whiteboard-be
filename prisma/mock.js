export const PROFESSORS = [
  {
    id: 'b8f11e76-0a9e-4b3f-bccf-8d9b4fbf331e',
    username: 'professor',
    password: '$2b$10$44/nnASWSbf57EBbEYz7AOEMZ3lUkiSB.WEbq6E449VOv5D9pJm4C',
    name: '홍길동',
    role: 'PROFESSOR',
    createdAt: '2024-08-30T17:30:00.220Z',
    updatedAt: '2024-08-30T17:30:00.220Z',
  },
  {
    id: '4056f0c0-1594-4812-94c9-79b1eb0d730a',
    username: 'professor2',
    password: '$2b$10$TZenPg5Z.1/gt.Fmy9tVnes4DjPrDwY.l7PEfEKfCfXvyR7HdYG5K',
    name: '최재원',
    role: 'PROFESSOR',
    createdAt: '2024-08-31T17:31:05.220Z',
    updatedAt: '2024-08-31T17:31:05.220Z',
  },
  {
    id: 'e613a91a-b72a-4af1-9224-b8f773388c65',
    username: 'professor3',
    password: '$2b$10$Q8lfP5sYR2lzQs.DnoxGpO4qrl4pMNhW182Re/jVEHLaOWRIHIQSi',
    name: '이현준',
    role: 'PROFESSOR',
    createdAt: '2024-08-31T17:32:21.857Z',
    updatedAt: '2024-08-31T17:32:21.857Z',
  },
];

export const STUDENTS = [
  {
    id: '6c3a18b0-11c5-4d97-9019-9ebe3c4d1317',
    username: 'student',
    password: '$2b$10$vXrg9lc1Z.D0rsycZGZ1nuJzWHUENadkWcKdbb5Fsw3klL0MfwVka',
    name: '임건우',
    role: 'STUDENT',
    studentId: '2021320000',
    createdAt: '2024-08-30T17:32:21.857Z',
    updatedAt: '2024-08-30T17:32:21.857Z',
    registeredCourses: {
      connect: [
        { id: 'fd3ae0a5-8dd5-40b6-b8fd-48870f731db1' },
        { id: '57b98cac-e0ef-4004-ab1f-8f145a737f92' },
        { id: 'fe69e819-7484-4d8c-8bc2-d667de95f27b' },
      ],
    },
  },
  {
    id: 'b8da88bb-5ae8-4634-9aff-c9fe951d8591',
    username: 'student2',
    password: '$2b$10$tzAMNZwK36obh2WgGRL8dOMZzEvHiKKKLYKaF30WCkoqBvMR0qtTy',
    name: '홍재우',
    role: 'STUDENT',
    studentId: '2021320002',
    createdAt: '2024-08-31T17:35:47.796Z',
    updatedAt: '2024-08-31T17:35:47.796Z',
    registeredCourses: {
      connect: [
        { id: 'fd3ae0a5-8dd5-40b6-b8fd-48870f731db1' },
        { id: 'fe69e819-7484-4d8c-8bc2-d667de95f27b' },
        { id: 'f11aae17-9d42-4605-887e-f75fd1928d8b' },
        { id: 'e2784b27-0ef8-4e00-9ce3-8f8af33e11e8' },
      ],
    },
  },
  {
    id: 'a99fe7a7-7604-4203-9b55-88298d6acc52',
    username: 'student3',
    password: '$2b$10$OUCV2TVkARD7rdIlyooYQ.tU.6EjMOYCHAZE8dBO41RNyNgXE8DNu',
    name: '정의준',
    role: 'STUDENT',
    studentId: '2022320003',
    createdAt: '2024-08-31T17:35:47.796Z',
    updatedAt: '2024-08-31T17:35:47.796Z',
    registeredCourses: {
      connect: [
        { id: 'fd3ae0a5-8dd5-40b6-b8fd-48870f731db1' },
        { id: 'bb367bd9-76a3-47a6-8a25-126665187bf2' },
        { id: 'f11aae17-9d42-4605-887e-f75fd1928d8b' },
        { id: 'e2784b27-0ef8-4e00-9ce3-8f8af33e11e8' },
      ],
    },
  },
  {
    id: 'c45acd5b-1ceb-4bc7-8f57-8e2700596366',
    username: 'student4',
    password: '$2b$10$qDV7XZ3YwxzUT6u8/C/LMuJ9USWPZYR.ObA6j0Q2VBqgrIpof28.K',
    name: '이하린',
    role: 'STUDENT',
    studentId: '2022320004',
    createdAt: '2024-08-31T17:35:47.796Z',
    updatedAt: '2024-08-31T17:35:47.796Z',
    registeredCourses: {
      connect: [
        { id: 'fd3ae0a5-8dd5-40b6-b8fd-48870f731db1' },
        { id: '57b98cac-e0ef-4004-ab1f-8f145a737f92' },
        { id: 'bb367bd9-76a3-47a6-8a25-126665187bf2' },
        { id: 'fe69e819-7484-4d8c-8bc2-d667de95f27b' },
        { id: 'f11aae17-9d42-4605-887e-f75fd1928d8b' },
        { id: 'e2784b27-0ef8-4e00-9ce3-8f8af33e11e8' },
      ],
    },
  },
  {
    id: '0c6313cd-a10c-48df-bff5-d66143f98e24',
    username: 'student5',
    password: '$2b$10$SmrqjT/S4CYihECpzFGBVu6iEqq5GiO.kwvts8torDmQh54VSVXg.',
    name: '김민재',
    role: 'STUDENT',
    studentId: '2022320005',
    createdAt: '2024-08-31T17:35:47.796Z',
    updatedAt: '2024-08-31T17:35:47.796Z',
    registeredCourses: {
      connect: [
        { id: 'fd3ae0a5-8dd5-40b6-b8fd-48870f731db1' },
        { id: 'bb367bd9-76a3-47a6-8a25-126665187bf2' },
        { id: 'fe69e819-7484-4d8c-8bc2-d667de95f27b' },
        { id: 'f11aae17-9d42-4605-887e-f75fd1928d8b' },
      ],
    },
  },
];

export const COURSES = [
  {
    id: 'fd3ae0a5-8dd5-40b6-b8fd-48870f731db1',
    name: '컴퓨터 네트워크',
    createdAt: '2024-08-31T17:32:21.857Z',
    updatedAt: '2024-08-31T17:32:21.857Z',
    professorId: 'b8f11e76-0a9e-4b3f-bccf-8d9b4fbf331e',
  },
  {
    id: '57b98cac-e0ef-4004-ab1f-8f145a737f92',
    name: '운영체제',
    createdAt: '2024-08-31T17:32:21.857Z',
    updatedAt: '2024-08-31T17:32:21.857Z',
    professorId: 'b8f11e76-0a9e-4b3f-bccf-8d9b4fbf331e',
  },
  {
    id: 'bb367bd9-76a3-47a6-8a25-126665187bf2',
    name: '인공지능',
    createdAt: '2024-08-31T17:32:21.857Z',
    updatedAt: '2024-08-31T17:32:21.857Z',
    professorId: 'b8f11e76-0a9e-4b3f-bccf-8d9b4fbf331e',
  },
  {
    id: 'fe69e819-7484-4d8c-8bc2-d667de95f27b',
    name: '데이터베이스',
    createdAt: '2024-08-31T17:32:21.857Z',
    updatedAt: '2024-08-31T17:32:21.857Z',
    professorId: '4056f0c0-1594-4812-94c9-79b1eb0d730a',
  },
  {
    id: 'f11aae17-9d42-4605-887e-f75fd1928d8b',
    name: '데이터 통신',
    createdAt: '2024-08-31T17:32:21.857Z',
    updatedAt: '2024-08-31T17:32:21.857Z',
    professorId: '4056f0c0-1594-4812-94c9-79b1eb0d730a',
  },
  {
    id: 'e2784b27-0ef8-4e00-9ce3-8f8af33e11e8',
    name: '딥러닝',
    createdAt: '2024-08-31T17:32:21.857Z',
    updatedAt: '2024-08-31T17:32:21.857Z',
    professorId: 'e613a91a-b72a-4af1-9224-b8f773388c65',
  },
];

export const POSTS = [
  {
    id: '70e1e61d-f2ae-4d7d-bf8f-d65eafdb6a45',
    content: '<p>첫 번째 수업은 OT로 진행하도록 하겠습니다.</p>',
    createdAt: '2024-03-01T17:55:17.295Z',
    updatedAt: '2024-03-01T17:55:17.295Z',
    courseId: 'fd3ae0a5-8dd5-40b6-b8fd-48870f731db1',
  },
  {
    id: '7a220544-b7e6-4587-abf2-6a420dbc2c31',
    content:
      '<p><strong>수업 공지사항</strong></p><p><br></p><ul><li>노트북 및 태블릿 금지</li><li>강의 계획서에 표기 된 서적 필참</li></ul>',
    createdAt: '2024-03-05T12:50:17.295Z',
    updatedAt: '2024-03-05T12:50:17.295Z',
    courseId: 'fd3ae0a5-8dd5-40b6-b8fd-48870f731db1',
  },
  {
    id: 'cd3488a8-238d-464c-8a19-857ba424b7e8',
    content: '<p>금일 강의내용 업로드하였으니 참조바랍니다.</p><p><br></p>',
    createdAt: '2024-05-05T17:58:48.123Z',
    updatedAt: '2024-08-31T17:58:48.123Z',
    courseId: 'fd3ae0a5-8dd5-40b6-b8fd-48870f731db1',
  },
  {
    id: 'b0e75783-75e9-4f30-9862-20c3aa5ad981',
    content:
      '<p><strong><u><span style="color: rgb(11, 51, 255);">기말고사 제출을 위한 양식을 공지드립니다.</span></u></strong></p><p><strong>메일 제목: 기말고사 제출 - 학과 이름 학번</strong></p><p><strong>파일 이름: 학과_이름_학번.pdf&nbsp;</strong>(pdf 를 추천하나, docx,hwp 까지 허용)</p><p>예시)</p><p>메일 제목 : 기말고사 제출 - 컴퓨터학과 </p><p>파일 이름: 컴퓨터학과_홍길동_2020000000.pdf</p><p>이미 양식을 맞추지 않고 발송주신 분들은 추가로 다시 보내주실 필요가 없습니다. 다만 공지 이후 파일 이름을 양식과 다르게 제출하신 경우 감점이 있을 수 있습니다.</p>',
    createdAt: '2024-07-05T13:32:48.123Z',
    updatedAt: '2024-07-05T13:32:48.123Z',
    courseId: 'fd3ae0a5-8dd5-40b6-b8fd-48870f731db1',
  },
  {
    id: '168f8650-d232-4095-ae2b-0b13744f2303',
    content:
      '<p>안녕하세요.</p><p>앞서 공지드린 기말고사 과제물의 제출 마감을&nbsp;<strong style="color: rgb(255, 0, 0);">7월 20일 23시 59분</strong>으로 하겠습니다. 감사합니다.</p><p>재제출 또한 허용됩니다.</p>',
    createdAt: '2024-07-07T14:46:48.123Z',
    updatedAt: '2024-07-07T14:46:48.123Z',
    courseId: 'fd3ae0a5-8dd5-40b6-b8fd-48870f731db1',
  },
  {
    id: 'c4c9d730-64ab-4d57-b501-01f81bb4780f',
    content:
      '<p>I will use this space for any update for the mid-term.&nbsp;</p><p>- The exam continues for&nbsp;<strong style="background-color: rgb(255, 153, 0);">40min</strong></p>',
    createdAt: '2024-05-07T11:42:48.123Z',
    updatedAt: '2024-05-07T11:42:48.123Z',
    courseId: '57b98cac-e0ef-4004-ab1f-8f145a737f92',
  },
  {
    id: '421629dd-ef00-4a0b-bf52-d210e5dbc075',
    content:
      '<p><span style="color: rgb(224, 62, 45);">The grading of the mid-term is completed</span>, and you should be able to check your results.</p><p><br></p><p>If you have any related questions or want to check the grading details, please contact TA.</p>',
    createdAt: '2024-06-01T14:21:48.123Z',
    updatedAt: '2024-06-01T14:21:48.123Z',
    courseId: '57b98cac-e0ef-4004-ab1f-8f145a737f92',
  },
  {
    id: '0e59f0e4-8ea0-4258-9622-52c3eb7acb25',
    content:
      '<p>Hi,&nbsp;</p><p>I am TA of this course.</p><p><br></p><p>As prof. said in today’s class, materials about the 1st assignment will be uploaded on Mar, 26th and due date for the 1st assignment will be at the end Apr.&nbsp;</p><p>(The detailed schedules about assignments and exams will be uploaded after the ongoing polls are ended.)</p><p><br></p><p><strong>Additionally, the deadline of polls is coming.&nbsp;</strong></p><p><strong>I hope you to submit all the responses for the polls before this Wednesday, the class time.&nbsp;</strong></p>',
    createdAt: '2024-03-10T16:32:48.123Z',
    updatedAt: '2024-03-10T16:32:48.123Z',
    courseId: 'fe69e819-7484-4d8c-8bc2-d667de95f27b',
  },
];
