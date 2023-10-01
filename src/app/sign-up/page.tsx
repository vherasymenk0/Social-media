import Link from 'next/link'

export default function SigUp() {
  return (
    <main>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/sign-in">Sign-in</Link>
        </li>
      </ul>
    </main>
  )
}
