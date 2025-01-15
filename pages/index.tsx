import Link from 'next/link';

    export default function Home() {
      return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-8">Team Management App</h1>
          <nav className="space-x-4">
            <Link href="/lineups">
              <a className="text-lg hover:text-gray-400">Lineups</a>
            </Link>
            <Link href="/matchups">
              <a className="text-lg hover:text-gray-400">Matchups</a>
            </Link>
            <Link href="/stats">
              <a className="text-lg hover:text-gray-400">Stats</a>
            </Link>
            <Link href="/history">
              <a className="text-lg hover:text-gray-400">Match History</a>
            </Link>
          </nav>
        </div>
      );
    }
