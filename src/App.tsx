import { useState } from 'react';
import { Search, Antenna } from 'lucide-react';
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

        {/* Tür Listesi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSpecies.map((species) => (
            <div 
              key={species.id} 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedSpecies(species)}
            >
              <h3 className="text-lg font-bold text-gray-900">{species.name}</h3>
              <p className="text-gray-600 italic">{species.latinName}</p>
              <p className="text-sm text-gray-500 mt-2">{species.habitat}</p>
              <div className="mt-3 flex flex-wrap gap-1">
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Boy: {species.size}</span>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{species.nutrition}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
