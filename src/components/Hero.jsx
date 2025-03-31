const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white text-center py-20 px-6">
      <h1 className="text-5xl font-extrabold mb-4">Welcome to FAA.ZONE</h1>
      <p className="text-xl max-w-2xl mx-auto">
        Your sovereign gateway to dropcrates, identity pulses, and the THRONE-VΛULT system.
      </p>
      <a href="/vault" className="inline-block mt-6 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition">
        Enter Vault
      </a>
    </section>
  );
};

export default Hero;
