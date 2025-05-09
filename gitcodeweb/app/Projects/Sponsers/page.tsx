"use client";
import { useState, useEffect } from 'react';
import { HeartIcon, StarIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

// Array of projects with required properties (including image paths)
const projects = [
  {
    id: 1,
    name: 'base-org',
    image: '/base.png', 
    description: 'Base is bringing the world onchain to create a global economy that increases innovation, creativity, and freedom. Built on the Superchain.',
    stars: '79.3k',
    githubLink: 'https://github.com/base-org',
  },
  {
    id: 2,
    name: 'Aptos Labs - Aptos Core',
    image: '/aptos.png', 
    description: 'Aptos is a high-performance Layer 1 blockchain that aims to provide scalability, security, and reliability to decentralized applications',
    stars: '20.4k',
    githubLink: 'https://github.com/aptos-labs/aptos-core',
  },
  {
    id: 3,
    name: '0xPolygon/polygon-edge',
    image: '/polygon.png', // Corrected image path
    description: 'A Framework for Building Ethereum-compatible Blockchain Networks.',
    stars: '9.7k',
    githubLink: 'https://github.com/0xPolygon/polygon-edge',
  },
  {
    id: 4,
    name: 'starknet-edu/starknetbook',
    image: '/starknet.png', 
    description: 'Mastering Starknet. By the Starknet community.',
    stars: '29.2k',
    githubLink: 'https://github.com/starknet-edu/starknetbook',
  },
];

const Sponsor = () => {
  const [loadingState, setLoadingState] = useState('loading');

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setLoadingState('loaded');
    }, 1000); // Delay of 1 second
  }, []);

  return (
    <div className="flex h-full bg-gray-900">
      <div className="flex flex-row flex-1 overflow-hidden">
        {/* Header Section */}
        {/* <header className="w-full">
          <div className="relative z-10 flex h-16 flex-shrink-0 border-b border-gray-200 dark:border-[#333] bg-gray-200 dark:bg-[#111] shadow-sm">
            <div className="flex justify-between flex-1 px-4 sm:px-6">
              <div className="flex flex-1">
                <div className="relative w-full focus-within:text-gray-600">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon className="flex-shrink-0 w-5 h-5 ml-2" aria-hidden="true" />
                  </div>
                  <input
                    name="mobile-search-field"
                    id="mobile-search-field"
                    className="w-full h-full py-2 pl-8 pr-3 text-base text-gray-900 border-0 rounded-lg focus:outline-none focus:ring-0 focus:placeholder:text-gray-400 sm:hidden"
                    placeholder="Search"
                    type="search"
                  />
                  <input
                    name="desktop-search-field"
                    id="desktop-search-field"
                    className="hidden h-full w-full border-0 py-2 pl-8 pr-3 text-sm bg-gray-200 dark:bg-[#111] focus:outline-none focus:ring-0 focus:placeholder:text-gray-400 sm:block"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </div>
            </div>
          </div>
        </header> */}

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="px-4 pt-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex">
              <h1 className="flex-1 text-2xl font-bold text-lime-400">Sponsor Projects</h1>
            </div>

            {/* Projects List */}
            <section className="pb-16 mt-8">
              <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                {loadingState === 'loaded' ? (
                  projects.map((project) => (
                    <li
                      key={project.id}
                      className="relative rounded-lg shadow-md overflow-hidden bg-gray-800 dark:bg-[#222] cursor-pointer hover:shadow-lg transition-all duration-300 border-lime-500 border-2"
                    >
                      {/* Project Image */}
                      <div className="relative h-40">
                        <Image
                          src={project.image}
                          alt={project.name}
                          className="object-contain w-full h-full p-8 bg-[#ffff] dark:bg-black m-1"
                          width={400}
                          height={200}
                        />
                      </div>

                      {/* Project Details */}
                      <div className="flex flex-col justify-between p-4">
                        <div>
                          <p className="font-medium text-lime-400">{project.name}</p>
                          <p className="text-sm text-gray-400">{project.description}</p>
                          <div className="flex items-center mt-2">
                            <StarIcon className="w-6 h-6 text-gray-500" aria-hidden="true" />
                            <p className="ml-3 text-sm font-medium text-gray-400">{project.stars} stars</p>
                          </div>
                        </div>

                        {/* Github Link and Sponsor Button */}
                        <div className="flex items-center justify-between mt-4">
                          <a
                            href={project.githubLink}
                            className="flex items-center space-x-2 text-sm text-lime-400 hover:underline"
                          >
                            <span>Github</span>
                          </a>
                          <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-lime-500 border border-transparent rounded-md shadow-sm hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <HeartIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                            <span>Sponsor</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <div>Loading...</div> 
                )}
              </ul>
            </section>
          </div>
        </main>

        {/* Sidebar with How It Works */}
        <aside className="hidden w-96 overflow-y-auto border-l border-gray-200 dark:border-[#333] bg-gray-800 dark:bg-black p-8 lg:block  ">
          <h1 className="mb-6 text-lg font-semibold text-lime-400">How It Works</h1>
          <ul className="space-y-4">
            <li className="text-sm text-gray-500">Sponsor Projects: Add projects to your sponsor list.</li>
            <li className="text-sm text-gray-500">Connect Your Wallet: Link your wallet for seamless transactions.</li>
            <li className="text-sm text-gray-500">Send Sponsor Amount: Easily send your desired sponsorship.</li>
            <li className="text-sm text-gray-500">Commit Evaluation & Weight Distribution: Contributions evaluated and weighted.</li>
            <li className="text-sm text-gray-500">Fair Payouts: Funds distributed among contributors equitably.</li>
            <li className="text-sm text-gray-500">Payout Process: Monthly payouts over three months.</li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Sponsor;
