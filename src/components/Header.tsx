'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push('/login');
  };

  if (status !== 'authenticated' || !session) {
    return null;
  }

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl font-bold">
          Zoo Dashboard
        </a>
      </div>
      
      <div className="flex items-center gap-4">
        {session?.user?.email && (
          <span className="text-sm text-base-content/60 hidden sm:block">
            {session.user.email}
          </span>
        )}
        
        <button 
          onClick={handleLogout}
          className="btn btn-sm btn-outline"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
