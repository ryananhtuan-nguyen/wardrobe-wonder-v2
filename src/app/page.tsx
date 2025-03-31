'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      <div className="flex flex-row h-screen">
        <div
          className="bg-orange-400 w-1/2 h-screen
       flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/home2.png"
              alt="home logo"
              className="w-[500px] h-[500px]"
              width={500}
              height={500}
            />
          </motion.div>
        </div>

        <div className=" w-1/2 flex flex-col items-center justify-evenly">
          <div className="lg:text-[55px] text-orange-400 text-[40px] top-2] ">
            <h5 className="mb-0 space-y-0">WARDROBE WONDERS</h5>
          </div>
          <div className="mt-0">
            <Button>Login</Button>
          </div>
        </div>
      </div>
    </>
  )
}
