import { redirect } from 'next/navigation'

import LoginView from '~/views/login/Login.view'

export default function Home() {
  const isAuth = false

  if (isAuth) {
    redirect('/user')
  }
  return <LoginView />
}
