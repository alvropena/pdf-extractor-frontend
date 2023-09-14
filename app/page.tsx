import React from 'react'
import { Button } from '@/components/ui/button'

const Page = () => {
  return (
    <div className='flex flex-col h-screen justify-center items-center gap-3'>
      <h1 className='text-2xl font-semibold'>Upload your PDF</h1>
      <input type="file" accept=".pdf" />
      <Button>
        Extract Data
      </Button>
    </div>
  )
}

export default Page