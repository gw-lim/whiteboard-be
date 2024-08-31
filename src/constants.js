export const ROLE = ['PROFESSOR', 'STUDENT'];

export const PROFESSOR_RES = {
  select: {
    id: true,
    name: true,
  },
};

export const STUDENT_RES = {
  select: {
    id: true,
    name: true,
    studentId: true,
  },
};

export const COURSE_RES = {
  select: {
    id: true,
    createdAt: true,
    updatedAt: true,
    name: true,
    professor: PROFESSOR_RES,
  },
};

export const POST_RES = {
  select: {
    id: true,
    content: true,
    createdAt: true,
    updatedAt: true,
    course: COURSE_RES,
  },
};
