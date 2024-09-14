import { redirect } from 'next/navigation'

export default function Client() {
  redirect('/download')
  return null
}
