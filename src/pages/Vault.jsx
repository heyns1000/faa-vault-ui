import MetaCard from '../components/MetaCard';

const dropData = [
  {
    title: "Treaty Drop Alpha",
    description: "FAA Core: Initiate indigenous signal maps across domain pulse."
  },
  {
    title: "Treaty Drop Beta",
    description: "Genesis Treaty Linkage: Align capsule logic with Vault capsule API."
  },
  {
    title: "Treaty Drop Gamma",
    description: "Sovereign Glyph Fusion: Expand drop chain into deep interface memory."
  }
];

const Vault = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {dropData.map((drop, index) => (
        <MetaCard key={index} title={drop.title} description={drop.description} />
      ))}
    </div>
  );
};

export default Vault;
