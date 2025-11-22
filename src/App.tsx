import { useState } from 'react';
import { Search, Antenna, X, Info, Ruler, Home, Utensils, Activity, Users, Crown } from 'lucide-react';
import { antSpecies } from './data/ants';

function App() {
  const [search, setSearch] = useState('');
  const [selectedSpecies, setSelectedSpecies] = useState(null);

  const filteredSpecies = antSpecies.filter(species =>
    species.name.toLowerCase().includes(search.toLowerCase()) ||
    species.latinName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Antenna className="w-8 h-8 text-green-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Karınca Türkiyem</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Arama ve İçerik */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Karınca türü ara..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        {/* Detay Modal */}
        {selectedSpecies && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{selectedSpecies.name}</h2>
                    <p className="text-xl text-gray-600 italic mb-2">{selectedSpecies.latinName}</p>
                    <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-amber-500 rounded-full"></div>
                  </div>
                  <button 
                    onClick={() => setSelectedSpecies(null)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Görsel Alanı - Placeholder */}
                <div className="mb-6 bg-gradient-to-br from-green-100 to-amber-100 rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <Antenna className="w-16 h-16 mx-auto mb-2 text-green-500" />
                    <p className="text-sm">{selectedSpecies.name} görseli</p>
                    <p className="text-xs text-gray-500">(Sonra gerçek görseller eklenecek)</p>
                  </div>
                </div>

                {/* Açıklama */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 border-b pb-2">Tür Hakkında Detaylı Bilgi</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{selectedSpecies.description}</p>
                </div>

                {/* Detaylı Bilgiler Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  {/* Sol Kolon */}
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Home className="w-5 h-5 text-green-600 mr-2" />
                        <h4 className="font-bold text-gray-900">Yaşam Alanı & Habitat</h4>
                      </div>
                      <p className="text-gray-700">{selectedSpecies.habitat}</p>
                      <p className="text-sm text-gray-500 mt-1">Yuva tipi: {selectedSpecies.nestType || 'Toprak altı/Ağaç içi'}</p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Ruler className="w-5 h-5 text-blue-600 mr-2" />
                        <h4 className="font-bold text-gray-900">Fiziksel Özellikler</h4>
                      </div>
                      <p className="text-gray-700"><strong>Boyut:</strong> {selectedSpecies.size}</p>
                      <p className="text-gray-700"><strong>Renk:</strong> {selectedSpecies.color || 'Türe özgü renkler'}</p>
                      <p className="text-gray-700"><strong>İşçi sayısı:</strong> {selectedSpecies.workerCount || '50-5000 arası'}</p>
                    </div>
                  </div>

                  {/* Sağ Kolon */}
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Utensils className="w-5 h-5 text-amber-600 mr-2" />
                        <h4 className="font-bold text-gray-900">Beslenme Alışkanlıkları</h4>
                      </div>
                      <p className="text-gray-700">{selectedSpecies.nutrition}</p>
                      <p className="text-sm text-gray-500 mt-1">Tercih ettiği besinler: {selectedSpecies.preferredFood || 'Böcekler, tohumlar, nektar'}</p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Activity className="w-5 h-5 text-purple-600 mr-2" />
                        <h4 className="font-bold text-gray-900">Davranış & Koloni Yapısı</h4>
                      </div>
                      <p className="text-gray-700">{selectedSpecies.behavior}</p>
                      <div className="flex items-center mt-2">
                        <Crown className="w-4 h-4 text-yellow-600 mr-1" />
                        <span className="text-sm text-gray-700"><strong>Kolon
