import Navbar from '@/components/Navbar';
import MainPage from '@/pages/MainPage';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="bg-dimWhite">
        <MainPage />
      </main>
    </div>
  );
}
