import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <section className="px-6 py-12 mt-4 w-full flex flex-col justify-center items-center gap-2 text-center">
      <h1 className='text-3xl font-bold md:text-4xl'>Find Awesome Prompts Shared<br/> by the Community</h1>
      <p className='text-muted-foreground'>Get Started by Sharing your Awesome Prompt</p>
      <Link href="/create-page">
        <Button>Create Prompt</Button>
      </Link>
    </section>
  );
}

export default Hero