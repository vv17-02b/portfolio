import MyLogo from "../assets/MyLogo.png";
import { SOCIAL_MEDIA_LINKS } from "../constants";

const Footer = () => {
  return (
    <div className='mb-8 mt-20'>
      <div className='flex items-center justify-center'>
        <figure>
          <img className='mb-2' src={MyLogo} alt="logo" width={200} />
          <div className="mb-10 h-3 w-12 bg-yellow-400"></div>
        </figure>
      </div>
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
            {link.icon}
          </a>
        ))}
      </div>
      <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
        &copy;compileTab. All rights reserved 2025 yeur
      </p>
    </div>
  )
}

export default Footer