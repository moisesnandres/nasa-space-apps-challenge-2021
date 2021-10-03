import Image from 'next/image'
import Link from 'next/link'
import ActiveLink from './ActiveLink'

export default function Header() {
  return (
    <header>
      <div className="wrapper">
        <Link href="/">
          <a>
            <Image src="/images/logo.png" alt="Track the plastic Logo" width={142} height={67} />
          </a>
        </Link>
        <nav>
          <ul>
            <li>
              <ActiveLink href="/" activeClassName="current-page-link">
                <a>Tracking</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/statistics" activeClassName="current-page-link">
                <a>Statistics</a>
              </ActiveLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
