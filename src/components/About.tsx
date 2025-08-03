
import { ABOUT } from "../constants";
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="container mx-auto" id="about">
            <motion.h2 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            className="mt-20 text-center text-4xl font-semibold">
                About
            </motion.h2>
            <h3 className="p-4 text-6xl uppercase lg:text-[8rem]">
                {ABOUT.text1}
            </h3>
            <motion.p 
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            className="mr-24 pl-4 text-lg leading-loose">
                {ABOUT.text2}
            </motion.p>
        </motion.div>
    )
}

export default About