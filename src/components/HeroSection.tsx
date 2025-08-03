
import { NEWNAME } from "../constants";
import MyPhoto from '../assets/мои-фото.jpg'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <div className='relative flex min-h-screen items-end justify-center' id='hero'>
      <motion.img className='absolute inset-0 z-10 h-full w-full object-cover' src={MyPhoto} alt={NEWNAME.name}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}

      />
      <motion.div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black lg:from-30%"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
      <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay:1 }}

        className="z-10 mx-4 max-w-3xl pb-20">
        <h1 className='text-5xl font-semibold uppercase tracking-wide md:text-7xl'>
          {NEWNAME.name}
        </h1>
        <p className='pt-2 font-semibold'>
          {NEWNAME.text0}
        </p>
      </motion.div>
    </div>
  )
}

export default HeroSection