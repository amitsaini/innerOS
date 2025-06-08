import React, { useState } from 'react';
import { createCheckin } from './services/api';

function App() {
  const [mood, setMood] = useState('😊');
  const [energy, setEnergy] = useState(5);
  const [alignment, setAlignment] = useState(5);
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const checkinData = { mood, energy, alignment, notes };
      await createCheckin(checkinData);
      setSuccess(true);
      setError('');
      // Reset form after successful submission
      setMood('😊');
      setEnergy(5);
      setAlignment(5);
      setNotes('');
    } catch (err) {
      setError(err.message);
      setSuccess(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Daily Check-In</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Mood Selector */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How are you feeling?
            </label>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setMood('😊')}
                className={`p-3 rounded-full ${mood === '😊' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                😊
              </button>
              <button
                onClick={() => setMood('😐')}
                className={`p-3 rounded-full ${mood === '😐' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                😐
              </button>
              <button
                onClick={() => setMood('😔')}
                className={`p-3 rounded-full ${mood === '😔' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                😔
              </button>
            </div>
          </div>

          {/* Energy Slider */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Energy Level (1-10)
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={energy}
              onChange={(e) => setEnergy(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>Low</span>
              <span>High</span>
            </div>
          </div>

          {/* Alignment Slider */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Alignment Level (1-10)
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={alignment}
              onChange={(e) => setAlignment(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>Low</span>
              <span>High</span>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Notes
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows="4"
              placeholder="Write any thoughts or reflections..."
            />
          </div>

          {/* Error/Success Messages */}
          {error && (
            <div className="text-red-500 text-center mb-4">
              {error}
            </div>
          )}
          {success && (
            <div className="text-green-500 text-center mb-4">
              Check-in submitted successfully!
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
            disabled={success}
          >
            {success ? 'Submitted' : 'Submit Check-In'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
