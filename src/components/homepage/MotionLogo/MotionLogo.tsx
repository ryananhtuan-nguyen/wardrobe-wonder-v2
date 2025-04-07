import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

const MotionLogo = (props: Props) => {
  return (
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
          className="w-[500px] 2xl:w-full 2xl:h-full h-[500px]"
          width={500}
          height={500}
        />
      </motion.div>
    </div>
  )
}

export default MotionLogo
