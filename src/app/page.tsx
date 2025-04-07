'use client'
import { MotionLogo } from '@/components/homepage/MotionLogo'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      <div className="flex flex-row h-screen">
        <MotionLogo />

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
