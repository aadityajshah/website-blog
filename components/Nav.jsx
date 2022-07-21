import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faLinkedin, faTwitterSquare, faGitSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

const Nav = () => {
  return (
    <nav className="nav p-3 border-bottom">
        <Link href="/" passHref>
            <h2 className="pointer">Aaditya Shah</h2>
        </Link>
        <Link
            href="AJShah-2022.pdf"
            alt="Resume"
            title="Resume"
            >
            <a><FontAwesomeIcon icon={faFile} height="16" className="fa_icon"></FontAwesomeIcon></a>
        </Link>
        <Link
            href="/blog"
            alt="blog"
            >
            <a><FontAwesomeIcon icon={faBookOpen} width="16" className="fa_icon"></FontAwesomeIcon></a>
        </Link>
        <Link 
            href="https://www.linkedin.com/in/aadityajshah"
            target="_blank"
            rel="noreferrer"
            >
                <a><FontAwesomeIcon icon={faLinkedin} width="16" className="fa_icon"/></a>
        </Link>
        <Link
            href="https://www.twitter.com/nagerseth"
            target="_blank"
            rel="noreferrer"
            >
                <a><FontAwesomeIcon icon={faTwitterSquare} width="16" className="fa_icon"/></a>
        </Link>
        <Link
            href="https://www.github.com/aadityajshah"
            target="_blank"
            rel="noreferrer"
            >
                <a><FontAwesomeIcon icon={faGitSquare} width="16" className="fa_icon"/></a>
        </Link>
    </nav>
  )
}

export default Nav