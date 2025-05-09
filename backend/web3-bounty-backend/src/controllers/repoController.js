const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create Repository
exports.createRepo = async (req, res) => {
  const { companyId, title, description, bountyAmount } = req.body;

  try {
    const repo = await prisma.repo.create({
      data: {
        title,
        description,
        bounty: bountyAmount,
        company: { connect: { id: companyId } },
      },
    });
    res.status(201).json(repo);
  } catch (error) {
    res.status(500).json({ error: "Failed to create repo" });
  }
};

// Release Winner
exports.releaseWinner = async (req, res) => {
  const { repoId } = req.params;
  const { winnerId } = req.body;

  try {
    const repo = await prisma.repo.update({
      where: { id: parseInt(repoId) },
      data: { winnerId },
    });
    res.status(200).json(repo);
  } catch (error) {
    res.status(500).json({ error: "Failed to release winner" });
  }
};
