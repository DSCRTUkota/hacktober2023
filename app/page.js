import Header from '@/components/Home/Header';
import RenderProfiles from '@/components/Home/RenderProfiles';

export default function Home() {
  return (
    <main className='p-4'>
      <Header />
      <RenderProfiles/>
    </main>
  );
}
