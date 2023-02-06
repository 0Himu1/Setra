import Navbar from '@/components/Navbar';
import MainPage from '@/pages/MainPage';

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <main className="bg-dimWhite">
        <MainPage />
      </main>
    </div>
  );
}
