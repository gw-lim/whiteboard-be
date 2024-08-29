import { PrismaClient } from '@prisma/client';
import { COURSES, POSTS, PROFESSORS, STUDENTS } from './mock.js';

const prisma = new PrismaClient();

async function main() {
  // 기존 데이터 삭제
  await prisma.post.deleteMany();
  await prisma.course.deleteMany();
  await prisma.user.deleteMany();

  // // 목 데이터 삽입
  await Promise.all(
    PROFESSORS.map(async (professor) => {
      await prisma.user.create({ data: professor });
    })
  );

  await prisma.course.createMany({
    data: COURSES,
    skipDuplicates: true,
  });

  await Promise.all(
    STUDENTS.map(async (student) => {
      await prisma.user.create({ data: student });
    })
  );

  await prisma.post.createMany({
    data: POSTS,
    skipDuplicates: true,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
