"use client"

import * as React from 'react';
import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';
import Header from '@/components/header'

const Page = () => {
  return (
    <div>
      <Header />

      {/* Body (Hero) Section */}
      <main className='flex flex-col items-center h-screen'>
        <div>
          <h1 className='text-5xl md:text-5xl font-semibold'>Automate your invoices.</h1>
          <p className='text-xl md:text-2xl xl:text-3xl text-center max-w-[25ch] mt-8'>Don&apos;t waste any more time with invoices, we handle that for you.</p>
          <Button size={"lg"} className='text-lg'>
            Start now &rarr;
          </Button>
        </div>
        {/* Social validation */}
        <div>
          <h2 className='text-3xl lg:text-4xl my-16 font-heading'>From Fortune 500 to startups. We empower them.</h2>
          {/* Carrousel with the companies logos */}
        </div>
        <h2 className='text-3xl lg:text-4xl my-6 font-heading'>We integrate the diverse areas inside a company.</h2>
        <p className='text-base font-normal max-w-sm mx-auto mt-4 text-neutral-400 dark:text-neutral-400 font-mono tracking-tight'>No matter if you work for IT, Logistics, Customer Success, we can automate your tasks.</p>

        <h2 className='text-3xl lg:text-4xl my-16 font-heading'>Integrate all the platforms your company works with</h2>
        <p>No more time spent asking IT for help. Two clicks and you are done.</p>

        <h2 className='text-3xl lg:text-4xl my-16 font-heading'>Don&apos;t trust us. Let&apos;s hear Here what people say.</h2>

        <p>Join the thousands of people that use Dudda daily.</p>
      </main>

      {/* Footer Section */}
      <footer className="flex flex-col items-center justify-center bg-black gap-4 py-16">
        <h3 className='text-white text-4xl max-w-lg font-semibold'>Get Dudda updates delivered directly to your inbox.</h3>
        <p className='text-white my-4 '>One email per week. Learn to automate your work. No spam.</p>
        
        {/* Beehiiv form */}
        <iframe src="https://embeds.beehiiv.com/4d194502-763b-4c4f-b126-eab1cf80a815?slim=true" data-test-id="beehiiv-embed" height="52"></iframe>

        {/* Logo */}
        {/* <ul className='flex flex-row gap-1 xl:gap-4 items-center flex-wrap justify-center mt-8'>
          <li className='text-white text-base py-2 px-3 rounded-md transition h-fit font-medium hover:text-gray-300'>Write</li>
          <li className='text-white text-base py-2 px-3 rounded-md transition h-fit font-medium hover:text-gray-300'>Grow</li>
          <li className='text-white text-base py-2 px-3 rounded-md transition h-fit font-medium hover:text-gray-300'>Monetize</li>
          <li className='text-white text-base py-2 px-3 rounded-md transition h-fit font-medium hover:text-gray-300'>Pricing</li>
          <li className='text-white text-base py-2 px-3 rounded-md transition h-fit font-medium hover:text-gray-300'>Careers</li>
          <li className='text-white text-base py-2 px-3 rounded-md transition h-fit font-medium hover:text-gray-300'>Blog</li>
        </ul> */}

        <div className='mt-8 flex justify-center space-x-6'>
          <span>
            <a className='text-blue-400'>Faceboook
            </a>
          </span>
          <span>
            <a className='text-blue-400'>Instagram</a>
          </span>
          <span>
            <a className='text-blue-400'>Twitter</a>
          </span>
          <span>
            <a className='text-blue-400'>GitHub</a>
          </span>
          <span>
            <a className='text-blue-400'>Discord</a>
          </span>
          <span>
            <a className='text-blue-400'>TikTok</a>
          </span>
          <span>
            <a className='text-blue-400'>LinkedIn</a>
          </span>
        </div>

        <div className='flex gap-2 xl:gap-6 items-center mt-8'>
          <a className='text-white text-sm' href='/terms'>Terms</a>
          <a className='text-white text-sm' href='https://support.dudda.app' target='_blank' rel='noreferrer'>Support</a>
        </div>
        <p className='text-gray-400 text-sm mt-4'>Made with ❤️ in San Francisco.</p>
        <p className='text-gray-400 text-sm '>&copy; 2023 Dudda, Inc. All rights reserved.</p>

      </footer>

    </div>
  );
}

export default Page;

