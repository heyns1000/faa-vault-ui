import VaultGrid from '../components/VaultGrid';
import Nav from '../components/Nav';

const Vault = () => {
  return (
    <>
      <Nav />
      <main className="bg-gray-900 text-white min-h-screen">
        <h1 className="text-4xl p-8 font-bold">FAA Vault</h1>
        <VaultGrid />
      </main>
    </>
  );
};

export default Vault;
