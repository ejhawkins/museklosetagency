export function Header() {
  return (
    <header className="bg-[#c5e5d8] px-6 py-8">
      <div className="flex justify-start mb-6">
        <div className="border-2 border-black rounded-full px-4 py-2">
          <span>MusesKlosetAgency</span>
        </div>
      </div>
      
      <div className="flex justify-center mb-8">
        <div className="w-16 h-16 rounded-full border-2 border-black bg-[#c5e5d8] flex items-center justify-center">
          <span className="text-2xl">K</span>
        </div>
      </div>
      
      <div className="text-center">
        <h1 className="text-4xl mb-2">MusesKlosetAgency</h1>
        <p className="tracking-[0.3em] text-sm">BRANDING AGENCY</p>
      </div>
    </header>
  );
}
