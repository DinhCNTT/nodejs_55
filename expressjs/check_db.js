import { PrismaClient } from './src/common/prisma/generated/prisma/index.js';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.users.findUnique({
    where: { email: 'thanh02@gmail.com' }
  });
  console.log(user);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
