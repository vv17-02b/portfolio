import { SKILLS } from "../constants"
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.5,
        },
    },

}

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        },
    },
}


const Skills = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="container mx-auto" id="skills">
            <h2 className="mb-12 mt-20 text-center text-4xl">
                Skills
            </h2>
            <motion.div 
                variants={itemVariants} 
            className="mx-2 flex flex-col rounded-xl bg-gradient-to-b
            px-4 py-10 lg:px-20 from-zinc-900 to-zinc-950">
                {SKILLS.map((skill, index) => (
                    <div className="mb-8 flex items-center justify-between" key={index}>
                        <div className="flex items-center ">
                            {skill.icon}
                            <h3 className="px-6 text-xl lg:text-3xl">  {skill.name}</h3>
                        </div>
                        <div className="text border-b-2 border-yellow-400 font-semibold lg:text-xl">
                            <span> {skill.experience}</span>
                        </div>
                    </div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Skills