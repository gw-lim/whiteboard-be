export const PROFESSORS = [
  {
    id: 'b8f11e76-0a9e-4b3f-bccf-8d9b4fbf331e',
    username: 'test',
    password: 'asdf1234',
    name: '홍길동',
    role: 'PROFESSOR',
    createdAt: '2024-07-16T09:00:00Z',
    updatedAt: '2024-07-16T09:00:00Z',
  },
];

export const STUDENTS = [
  {
    id: '6c3a18b0-11c5-4d97-9019-9ebe3c4d1317',
    username: 'test2',
    password: 'asdf1234',
    name: '임건우',
    role: 'STUDENT',
    studentId: 2021320000,
    createdAt: '2024-07-16T09:00:00Z',
    updatedAt: '2024-07-16T09:00:00Z',
    registeredCourses: {
      connect: [{ id: 'fd3ae0a5-8dd5-40b6-b8fd-48870f731db1' }],
    },
  },
];

export const COURSES = [
  {
    id: 'fd3ae0a5-8dd5-40b6-b8fd-48870f731db1',
    name: '컴퓨터 네트워크',
    createdAt: '2024-07-16T09:00:00Z',
    updatedAt: '2024-07-16T09:00:00Z',
    professorId: 'b8f11e76-0a9e-4b3f-bccf-8d9b4fbf331e',
  },
];

export const POSTS = [
  {
    id: '70e1e61d-f2ae-4d7d-bf8f-d65eafdb6a45',
    content: '첫 번째 수업은 OT로 진행하도록 하겠습니다.',
    createdAt: '2024-07-16T09:00:00Z',
    updatedAt: '2024-07-16T09:00:00Z',
    courseId: 'fd3ae0a5-8dd5-40b6-b8fd-48870f731db1',
  },
];
