import React from 'react';

const Main = () => {
  return (
    <div className="min-h-screen bg-teal-500 text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold">Veteriner Takvimi</h1>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Veri gizliliği</a>
          <a href="#" className="hover:underline">Ücretsiz kaydolun</a>
          <a href="#" className="hover:underline">Giriş yap</a>
          <button className="bg-white text-teal-600 font-semibold px-4 py-2 rounded">Doktor musunuz?</button>
        </div>
      </header>

      {/* Main Search Section */}
      <main className="px-8 py-12">
        <h2 className="text-3xl font-bold mb-2">Veteriner bul ve randevu al</h2>
        <p className="mb-6">181 000 doktor ve uzman arasından tercihini yap</p>

        <div className="mb-4 flex items-center gap-4">
          <button className="bg-white text-black px-4 py-2 rounded-full font-medium">🏥 Yüz yüze randevu</button>
          <button className="bg-white text-black px-4 py-2 rounded-full font-medium">📹 Online</button>
        </div>

        <div className="flex flex-wrap gap-2 bg-white p-4 rounded shadow-md">
          <select className="flex-1 p-2 border border-gray-300 rounded text-black">
            <option>Uzmanlık, ilgi alanı ve hastalık, isim</option>
            <option>Diş hekimi</option>
            <option>Psikiyatrist</option>
          </select>
          <input
            type="text"
            placeholder="örnek: İstanbul"
            className="flex-1 p-2 border border-gray-300 rounded text-black"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded">Ara</button>
        </div>
      </main>

      {/* Categories Section */}
      <section className="bg-white text-black px-8 py-6">
        <div className="flex flex-wrap gap-4 text-sm">
          {[
            'Kadın hastalıkları ve doğum',
            'Psikoloji',
            'Kulak burun boğaz',
            'Genel cerrahi',
            'Ortopedi',
            'Diş hekimi',
            'Psikiyatri',
            'Beyin cerrahisi',
            'Göz hastalıkları',
            'Üroloji',
            'Kardiyoloji',
            'Diyetisyen',
          ].map((item, idx) => (
            <span key={idx}>{item}</span>
          ))}
          <span><a href="#" className="text-blue-600">Daha fazla</a></span>
        </div>
      </section>
    </div>
  );
};

export default Main;
