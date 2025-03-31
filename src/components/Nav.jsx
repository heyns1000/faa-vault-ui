const Nav = () => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">FAA.ZONE</h1>
      <ul className="flex gap-4">
        <li><a href="/" className="hover:text-blue-400">Home</a></li>
        <li><a href="/index" className="hover:text-blue-400">Index</a></li>
        <li><a href="/meta" className="hover:text-blue-400">Meta</a></li>
        <li><a href="/vault" className="hover:text-blue-400">Vault</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
