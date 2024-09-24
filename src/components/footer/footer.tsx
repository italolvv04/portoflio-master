'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
  return (
    <footer className=" py-6 w-full shrink-0 px-4  ">
      <div className="flex justify-between gap-2">
        <p className="text-xs text-gray-200">© Italo Vieira. 2024</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="https://github.com/italolvv04"
            target="_blank"
            className="text-gray-500 hover:text-gray-50"
          >
            <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/italo-vieira"
            target="_blank"
            className="text-gray-500 hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=5562984353561"
            className="text-gray-500 hover:text-green-500"
            target="_blank"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="h-5 w-5" />
            <span className="sr-only">WhatsApp</span>
          </Link>
        </nav>
      </div>
    </footer>
  )
}
