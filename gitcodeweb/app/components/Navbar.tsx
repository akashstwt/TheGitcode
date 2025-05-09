'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; 
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Popover } from '@headlessui/react';
import { Award, Heart } from 'lucide-react'; 
import Image from 'next/image';
import Exit from '@/public/logout.svg';

const supra = '/supra.mp3';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userAddress, setUserAddress] = useState<string | null>(null);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Create', href: '/create' },
    { name: 'Claim', href: '/claim' },
  ];

  const products = [
    {
      name: 'Contribute',
      description: 'Find bounties and contribute to projects',
      href: '/Projects/Contribute',
      icon: Award,
    },
    {
      name: 'Sponsor Projects',
      description: 'Support contributors by funding projects',
      href: '/Projects/Sponsers',
      icon: Heart,
    },
  ];

  // Check if StarKey is installed
  const isStarKeyInstalled = () => 'starkey' in window;

  // Get the provider
  const getProvider = () => {
    if (isStarKeyInstalled()) {
      return window.starkey?.supra; // StarKey provider
    }
    return null;
  };

  // Connect wallet

  const connectWallet = async () => {
    const provider = getProvider();
    if (provider) {
      try {
        const accounts = await provider.connect();
        setUserAddress(accounts[0]);
        console.log('Connected account:', accounts[0]);
    
        // Play connection sound
        const audio = new Audio('/supra.mp3'); // Correct path to the audio file in public folder
        audio.play().catch((err) => console.error('Audio playback failed:', err));
      } catch (err) {
        console.error('Error connecting to StarKey:', err);
      }
    } else {
      alert('StarKey is not installed. Please install StarKey wallet.');
    }
  };
  
  // const connectWallet = async () => {
  //   const provider = getProvider();
  //   if (provider) {
  //     try {
  //       const accounts = await provider.connect();
  //       setUserAddress(accounts[0]);
  //       console.log('Connected account:', accounts[0]);
  //     } catch (err) {
  //       console.error('Error connecting to StarKey:', err);
  //     }
  //   } else {
  //     alert('StarKey is not installed. Please install StarKey wallet.');
  //   }
  // };

  // Disconnect wallet
  const disconnectWallet = () => {
    setUserAddress(null); // Clear the connected address
    console.log('Wallet disconnected');
  };

  // Shorten wallet address
  const shortenAddress = (address: string | null) => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  useEffect(() => {
    const provider = getProvider();
    if (provider) {
      provider.account().then((accounts: string[]) => {
        if (accounts.length > 0) {
          setUserAddress(accounts[0]);
        }
      });
    }
  }, []);

  return (
    <nav className="w-full h-[13vh] relative">
      {/* Desktop View */}
      <div className="hidden md:flex w-full flex-row border-b border-[#B3EF00] justify-between px-8 h-[13vh]">
        <div className="flex flex-row items-center">
          <Link href="/">
            <div className="text-2xl font-bold text-[#B3EF00] cursor-pointer">
              <Image src="/logo.png" alt="" width={150} height={24} />
            </div>
          </Link>
        </div>
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center w-[700px] h-[47px] bg-black justify-around text-[#B3EF00] rounded-md font-thin">
            {navItems.map((item) => (
              <div key={item.name} className="relative" onMouseLeave={() => setIsDropdownOpen(false)}>
                {item.name === 'Projects' ? (
                  <>
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`flex items-center gap-x-1 ${pathname === item.href ? 'font-bold text-[#B3EF00]' : 'font-thin text-[#4B8B00]'}`}
                    >
                      {item.name}
                    </button>
                    {isDropdownOpen && (
                      <Popover className="absolute top-full z-50 mt-1 w-[390px] rounded-2xl bg-black border border-[#B3EF00] shadow-lg ring-1 ring-gray-900/5 opacity-100">
                        <div className="p-4">
                          {products.map((product) => (
                            <div key={product.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-[#B3EF00] transition duration-150">
                              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <product.icon className="h-6 w-6 text-gray-600" aria-hidden="true" />
                              </div>
                              <div className="flex-auto">
                                <Link href={product.href} className="block font-semibold hover:text-black">
                                  {product.name}
                                  <span className="absolute inset-0" />
                                </Link>
                                <p className="mt-1 text-gray-200">{product.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Popover>
                    )}
                  </>
                ) : (
                  <Link href={item.href}>
                    <div
                      className={`${pathname === item.href ? 'font-bold text-[#B3EF00]' : 'font-thin text-[#4B8B00]'} cursor-pointer transition-all duration-150`}
                    >
                      {item.name}
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {userAddress && (
            <button
              onClick={disconnectWallet}
              className=" px-4 py-2 rounded-xl text-sm transition-colors duration-150 hover:bg-white"
            >
              <Image src={Exit} alt="Disconnect" width={20} height={20}className='' />
            </button>
          )}
          <button
            onClick={connectWallet}
            className="bg-lime-500 text-black px-4 py-2 rounded-md text-sm hover:bg-lime-600 transition-colors duration-150"
          >
            {userAddress ? shortenAddress(userAddress) : 'Connect Wallet'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
