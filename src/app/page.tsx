import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Home page</h1>
      <ul>
        <li>
          <Link href="/sign-in">Sign-in</Link>
        </li>
        <li>
          <Link href="/sign-up">Sign-up</Link>
        </li>
      </ul>
    </main>
  )
}
