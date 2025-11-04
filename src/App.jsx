import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Heart, PawPrint } from 'lucide-react';
import AdopterPreferencesForm from './components/AdopterPreferencesForm';
import AnimalProfileForm from './components/AnimalProfileForm';
import './App.css';

function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-12">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-12 h-12 text-pink-500" />
            <PawPrint className="w-12 h-12 text-blue-500" />
          </div>
          <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            PawMatch
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Dating App for Animal Adoption
          </p>
          <p className="text-gray-500">
            Find your perfect companion through our swipe-style matching platform
          </p>
        </div>

        {/* Demo Badge */}
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 mb-8">
          <p className="text-sm text-yellow-800 text-center font-medium">
            🎭 Demo Mode - Data stored locally in your browser
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="space-y-4">
          <Link 
            to="/preferences"
            className="group block w-full"
          >
            <div className="p-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform duration-200">
              <div className="flex items-center gap-4">
                <Heart className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <div className="flex-1 text-left">
                  <h3 className="font-bold text-xl mb-1">Find Your Match</h3>
                  <p className="text-purple-100 text-sm">Set preferences to discover your perfect pet</p>
                </div>
                <span className="text-2xl">→</span>
              </div>
            </div>
          </Link>
          
          <Link 
            to="/shelter/animals/new"
            className="group block w-full"
          >
            <div className="p-6 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl hover:from-green-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform duration-200">
              <div className="flex items-center gap-4">
                <PawPrint className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <div className="flex-1 text-left">
                  <h3 className="font-bold text-xl mb-1">Add Animal Profile</h3>
                  <p className="text-green-100 text-sm">Shelter admins: Create new adoption listings</p>
                </div>
                <span className="text-2xl">→</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Coming Soon Section */}
        <div className="mt-10 pt-8 border-t-2 border-gray-100">
          <p className="text-center text-gray-500 mb-4 font-semibold">Coming Soon</p>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-2xl mb-1">🔐</p>
              <p className="text-xs text-gray-600">Sign Up & Login</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-2xl mb-1">👆</p>
              <p className="text-xs text-gray-600">Swipe to Match</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-2xl mb-1">💬</p>
              <p className="text-xs text-gray-600">Chat with Shelters</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-8">
          CS Capstone Project • Animal Adoption Innovation
        </p>
      </div>
    </main>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/preferences" element={<AdopterPreferencesForm />} />
        <Route path="/shelter/animals/new" element={<AnimalProfileForm />} />
      </Routes>
    </Router>
  );
}

export default App;
