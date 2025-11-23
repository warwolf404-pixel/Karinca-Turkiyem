function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-amber-50 to-green-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-emerald-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/logo.png" alt="Karınca Türkiyem" className="h-10 w-10 mr-3" />
              <h1 className="text-xl font-bold text-emerald-800">Karınca Türkiyem</h1>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-emerald-700 font-medium border-b-2 border-emerald-500">Ana Sayfa</a>
              <a href="#turkutuphanesi" className="text-gray-600 hover:text-emerald-700 font-medium">Tür Kütüphanesi</a>
              <a href="#bakim" className="text-gray-600 hover:text-emerald-700 font-medium">Bakım Rehberi</a>
              <a href="#koloniler" className="text-gray-600 hover:text-emerald-700 font-medium">Koloniler</a>
              <a href="#forum" className="text-gray-600 hover:text-emerald-700 font-medium">Forum</a>
            </div>
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
              Giriş Yap
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-amber-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">🐜 Karınca Türkiye'ye Hoş Geldiniz!</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Türkiye'nin en kapsamlı karınca platformunda 380+ karınca türünü keşfedin, 
            bakım rehberlerini okuyun ve karınca severlerle bağlantı kurun.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              🔍 Tür Ara
            </button>
            <button className="bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors">
              📖 Bakım Rehberi
            </button>
            <button className="bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-800 transition-colors">
              🐜 Koloni Ekle
            </button>
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">382+</div>
              <div className="text-gray-600">Karınca Türü</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-amber-600 mb-2">1.234+</div>
              <div className="text-gray-600">Karınca Sever</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Bakım Rehberi</div>
            </div>
          </div>
        </div>
      </section>

      {/* Popüler Türler */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">🌟 Popüler Karınca Türleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Popüler tür kartları buraya gelecek */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🐜</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Camponotus</h3>
              <p className="text-gray-600 text-sm">Ahşap karıncaları - Orta seviye</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🐜</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Lasius</h3>
              <p className="text-gray-600 text-sm">Başlangıç seviyesi - Hızlı gelişim</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🐜</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Myrmica</h3>
              <p className="text-gray-600 text-sm">İğneli türler - İleri seviye</p>
            </div>
          </div>
        </div>
      </section>

      {/* Son Eklenen Koloniler */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">📸 Son Eklenen Koloniler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Koloni kartları buraya gelecek */}
            <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center text-gray-400">
              Koloni Fotoğrafı
            </div>
            <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center text-gray-400">
              Koloni Fotoğrafı
            </div>
            <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center text-gray-400">
              Koloni Fotoğrafı
            </div>
            <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center text-gray-400">
              Koloni Fotoğrafı
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
