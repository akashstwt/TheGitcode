const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create Developer
exports.createDeveloper = async (req, res) => {
  const { name, walletAddress, githubUsername } = req.body;

  try {
    const developer = await prisma.developer.create({
      data: { name, walletAddress, githubUsername },
    });
    res.status(201).json(developer);
  } catch (error) {
    res.status(500).json({ error: "Failed to create developer" });
  }
};

// Get Developer Applications
exports.getDeveloperApplications = async (req, res) => {
  const { developerId } = req.params;

  try {
    const applications = await prisma.application.findMany({
      where: { developerId: parseInt(developerId) },
      include: {
        repo: { include: { company: true } },
      },
    });
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch applications" });
  }
};
