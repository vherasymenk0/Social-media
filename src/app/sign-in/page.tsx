import Link from 'next/link'

export default function SignIn() {
  return (
    <main>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/sign-up">Sign-up</Link>
        </li>
      </ul>
    </main>
  )
}
