import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.adminUser.upsert({
    where: { email: "admin@zenkoder.com" },
    update: {},
    create: {
      name: "Admin",
      email: "admin@zenkoder.com",
      role: "admin",
    },
  });

  console.log({ user });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
  });
