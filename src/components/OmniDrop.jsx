const OmniDrop = () => {
  const drops = [
    {
      id: 'alpha',
      title: 'Genesis Drop',
      desc: 'Vault entry point',
      image: '/vault/alpha.png',
      href: '/vault/alpha',
    },
    {
      id: 'beta',
      title: 'Signal Files',
      desc: 'Encrypted drop bundle',
      image: '/vault/beta.png',
      href: '/vault/beta',
    },
    {
      id: 'gamma',
      title: 'Pulse Archive',
      desc: 'MetaTreaty container',
      image: '/vault/gamma.png',
      href: '/vault/gamma',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {drops.map((drop) => (
        <a
          key={drop.id}
          href={drop.href}
          className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition"
        >
          <img src={drop.image} alt={drop.title} className="w-full h-48 object-cover" />
          <div className="bg-white text-black p-4">
            <h2 className="font-bold text-lg">{drop.title}</h2>
            <p className="text-sm">{drop.desc}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default OmniDrop;
