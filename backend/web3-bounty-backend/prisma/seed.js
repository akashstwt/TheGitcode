// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Create a Company
  const company = await prisma.company.create({
    data: {
      name: 'OpenSourceHub',
      description: 'A company managing open source projects.',
    },
  });

  // Create Repos
  const repo1 = await prisma.repo.create({
    data: {
      title: 'Blockchain Explorer',
      description: 'A project to explore blockchain transactions.',
      bounty: 1000,
      companyId: company.id,
    },
  });

  const repo2 = await prisma.repo.create({
    data: {
      title: 'Web3 Authentication',
      description: 'A project to build a Web3-based auth service.',
      bounty: 1500,
      companyId: company.id,
    },
  });

  // Create Developer
  const developer = await prisma.developer.create({
    data: {
      name: 'Alice Dev',
      walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
      githubUsername: 'alice-dev',
    },
  });

  // Developer Application for a Repo
  await prisma.application.create({
    data: {
      developerId: developer.id,
      repoId: repo1.id,
      proposalDetails: 'I have experience building blockchain explorers.',
    },
  });

  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
