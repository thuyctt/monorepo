import Link from 'next/link'
// import Header from '@acme/shared/Header'
import Header from '@acme/design/Header'
// import { Header } from 'shared/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <p>This is our monorepo homepage</p>
      <div>
        <a href="/blog">Blog</a>
        <span>Go to blog page only ...</span>
      </div>
      <div>
        <Link href="/about">
          <a>About us</a>
        </Link>
      </div>
      <img width={200} src="/static/nextjs.png" />
    </div>
  )
}
