import { antSpecies } from '../data/ants';

export function AntList() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Türkiye Karınca Türleri</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {antSpecies.map(ant => (
          <div key={ant.id} className="border rounded-lg p-4 shadow-md">
            {ant.image && (
              <img 
                src={ant.image} 
                alt={ant.name}
                className="w-full h-32 object-cover rounded-lg mb-2"
              />
            )}
            <h3 className="text-lg font-semibold">{ant.name}</h3>
            <p className="text-gray-600">{ant.latinName}</p>
            <p className="text-sm mt-2">{ant.description.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}
