// import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './HeroSection'
import Footer from './Footer'
// import ParticleBackground from './ParticleBackground'


const Layout = () => {
	return (
		<div
			className='min-h-screen flex flex-col relative'
			style={{ position: 'relative' }}
		>
			{/* <ParticleBackground /> */}
			<Navbar />
			<main className=' flex-grow relative z-10'>
				<div className='container mx-auto px-4 py-6'>
					<Outlet />
				</div>
			</main>
			<Footer />
		</div>
	)
}

export default Layout
