import MetaCard from '../components/MetaCard';
import Nav from '../components/Nav';

const Meta = () => {
  return (
    <>
      <Nav />
      <main className="bg-gray-900 text-white min-h-screen">
        <h1 className="text-4xl p-8 font-bold">FAA Meta</h1>
        <MetaCard />
      </main>
    </>
  );
};

export default Meta;
