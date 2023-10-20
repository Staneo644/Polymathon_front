import Link from 'next/link';

function Home() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="space-y-4">
        <Link href="/motsdujour" className="custom-button">
          <h2>Mots du jour</h2>
        </Link>
        <Link href="/plusdemots" className="custom-button">
          <h2>Plus de mots</h2>
        </Link>
        <Link href="/exercice" className="custom-button">
          <h2>Exercice</h2>
        </Link>
      </div>
    </div>
  );
}

export default Home;