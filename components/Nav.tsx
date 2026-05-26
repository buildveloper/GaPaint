'use client';

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/services', 'Services'],
  ['/portfolio', 'Portfolio'],
  ['/reviews', 'Reviews'],
  ['/contact', 'Contact']
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 glass rounded-none border-x-0 border-t-0'>
      <nav className='max-w-7xl mx-auto px-6 py-4'>
        <div className='flex items-center justify-between gap-4'>
          <Link href='/' className='font-semibold text-lg'>
            Georgia Paint & Body
          </Link>

          <div className='hidden md:flex items-center gap-3'>
            {links.map(([href, text]) => (
              <Link key={href} href={href} className='text-sm hover:text-amber-500'>
                {text}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          <button
            aria-label='Toggle menu'
            aria-expanded={open}
            className='md:hidden btn-ghost !p-2'
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className='block w-5 h-0.5 bg-current mb-1' />
            <span className='block w-5 h-0.5 bg-current mb-1' />
            <span className='block w-5 h-0.5 bg-current' />
          </button>
        </div>

        {open && (
          <div className='md:hidden mt-4 glass p-4 flex flex-col gap-3'>
            {links.map(([href, text]) => (
              <Link
                key={href}
                href={href}
                className='text-sm hover:text-amber-500'
                onClick={() => setOpen(false)}
              >
                {text}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        )}
      </nav>
    </header>
  );
}
