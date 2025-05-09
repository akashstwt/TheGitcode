"use client"; // Add this directive at the top

import React, { useState } from "react";

export default function CreateBounty() {
  const [formInput, setFormInput] = useState({
    description: "",
    issueId: "",
    bountyAmount: "",
    repo: "",
    username: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Bounty Created: ${JSON.stringify(formInput, null, 2)}`);
    setFormInput({
      description: "",
      issueId: "",
      bountyAmount: "",
      repo: "",
      username: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8 md:p-16">
      <div className="grid md:grid-cols-2 gap-8 md:justify-between items-center h-full w-full">
        {/* Left Section: Create Bounty Header */}
        <div className="h-full p-8 md:p-16">
          <div className="bg-black text-lime-400 border border-lime-400 h-full w-full md:w-[475px] rounded-2xl relative">
            <h1 className="text-4xl md:text-5xl font-bold mt-6 md:mt-10 ml-6 md:ml-10 leading-snug">
              CREATE YOUR BOUNTY
            </h1>
            <p className="text-xl md:text-base mt-4 md:mt-6 px-6 md:px-10 leading-relaxed">
              Fair Distribution through Dynamic Payouts. GitCode-v3 ensures
              equitable fund distribution by dynamically allocating the daily
              project balance among contributors. Using our commit evaluation
              engine, contributions are evaluated for impact and quality,
              determining each contributor's weight. This innovative approach
              guarantees fair distribution of funds based on their valuable
              contributions.
            </p>

            <div className="absolute top-0 right-0 -mt-6 md:-mt-8 -mr-6 md:-mr-8 bg-gray-900 rounded-full w-20 md:w-24 h-20 md:h-24">
              <div className="absolute inset-0 m-auto bg-gray-900 border-4 border-lime-400 rounded-full w-14 md:w-16 h-14 md:h-16"></div>
            </div>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="text-lime-400 p-8 md:p-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">
            Create a New Bounty
          </h2>
          <p className="mb-4 md:mb-6 text-sm">
            Please provide the required details to create a bounty for a
            specific GitHub issue!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-lg font-semibold text-lime-400 mb-4">
              Fill in the required details below:
            </h3>

            <div>
              <label className="block text-sm font-semibold text-lime-400 mb-1">
                Github Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="@username"
                value={formInput.username}
                onChange={(e) =>
                  setFormInput({ ...formInput, username: e.target.value })
                }
                className="w-full bg-gray-700 text-lime-400 placeholder-lime-400 placeholder-opacity-40 bg-opacity-40 border-b border-lime-400 rounded-md px-4 py-2 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-lime-400 mb-1">
                Repository Name
              </label>
              <input
                id="repo"
                type="text"
                placeholder="Repo Name"
                value={formInput.repo}
                onChange={(e) =>
                  setFormInput({ ...formInput, repo: e.target.value })
                }
                className="w-full bg-gray-700 text-lime-400 placeholder-lime-400 placeholder-opacity-40 bg-opacity-40 border-b border-lime-400 rounded-md px-4 py-2 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-lime-400 mb-1">
                Issue ID
              </label>
              <input
                id="issueId"
                type="text"
                placeholder="#123456"
                value={formInput.issueId}
                onChange={(e) =>
                  setFormInput({ ...formInput, issueId: e.target.value })
                }
                className="w-full bg-gray-700 text-lime-400 placeholder-lime-400 placeholder-opacity-40 bg-opacity-40 border-b border-lime-400 rounded-md px-4 py-2 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-lime-400 mb-1">
                Description
              </label>
              <textarea
                id="description"
                placeholder="Describe the bounty"
                value={formInput.description}
                onChange={(e) =>
                  setFormInput({ ...formInput, description: e.target.value })
                }
                className="w-full bg-gray-700 text-lime-400 placeholder-lime-400 placeholder-opacity-40 bg-opacity-40 border-b border-lime-400 rounded-md px-4 py-2 focus:outline-none"
                rows={4}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-lime-400 mb-1">
                Bounty Amount
              </label>
              <input
                id="bountyAmount"
                type="text"
                placeholder="Bounty Amount"
                value={formInput.bountyAmount}
                onChange={(e) =>
                  setFormInput({ ...formInput, bountyAmount: e.target.value })
                }
                className="w-full bg-gray-700 text-lime-400 placeholder-lime-400 placeholder-opacity-40 bg-opacity-40 border-b border-lime-400 rounded-md px-4 py-2 focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-lime-400 text-black font-trap font-semibold py-2 rounded-md hover:bg-lime-300 transition"
            >
              Create Bounty
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
