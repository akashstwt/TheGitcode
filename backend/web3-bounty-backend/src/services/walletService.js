const { Starwallet } = require('starwallet-sdk');

const wallet = new Starwallet({
  apiKey: process.env.WALLET_API_KEY,
});

// Payment Service
exports.sendBounty = async (recipientAddress, amount) => {
  try {
    const tx = await wallet.sendTransaction({
      to: recipientAddress,
      amount,
    });
    return tx;
  } catch (error) {
    throw new Error("Payment failed");
  }
};
