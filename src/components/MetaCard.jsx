const MetaCard = () => {
  return (
    <div className="max-w-xl mx-auto mt-12 bg-white text-black p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold">FAA Meta Identity</h2>
      <p className="mt-4 text-sm">
        Sovereign protocol metadata loaded from HSOMNI9000 channel.
      </p>
      <ul className="mt-4 space-y-2">
        <li><strong>Zone:</strong> FAA.ZONE</li>
        <li><strong>Node ID:</strong> ROOT-001</li>
        <li><strong>Vault Access:</strong> THRONE-VΛULT</li>
      </ul>
    </div>
  );
};

export default MetaCard;
