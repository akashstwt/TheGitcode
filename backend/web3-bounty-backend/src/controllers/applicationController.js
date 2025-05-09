const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Apply for Bounty
exports.applyForBounty = async (req, res) => {
  const { developerId, repoId, proposalDetails } = req.body;

  try {
    const application = await prisma.application.create({
      data: { developerId, repoId, proposalDetails },
    });
    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ error: "Failed to apply for bounty" });
  }
};
