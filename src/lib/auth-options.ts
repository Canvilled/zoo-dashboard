import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export { authOptions }

export async function getSession() {
  return await getServerSession(authOptions)
}