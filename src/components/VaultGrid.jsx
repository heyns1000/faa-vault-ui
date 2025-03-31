const VaultGrid = () => {
  const drops = [
    { title: 'Drop Crate Alpha', desc: 'Genesis Vault Drop', path: '/alpha' },
    { title: 'Drop Crate Beta', desc: 'Encoded Signal Files', path: '/beta' },
    { title: 'Drop Crate Gamma', desc: 'Archive Pulse Bundle', path: '/gamma' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
      {drops.map((drop, index) => (
        <div key={index} className="bg-white text-black p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">{drop.title}</h2>
          <p className="mt-2 text-sm">{drop.desc}</p>
          <a href={drop.path} className="text-blue-500 hover:underline mt-4 inline-block">Access</a>
        </div>
      ))}
    </div>
  );
};

export default VaultGrid;
