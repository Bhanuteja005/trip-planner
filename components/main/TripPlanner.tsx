"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Calendar,
  Edit2,
  MapPin,
  Plus,
  Save,
  StickyNote,
  Trash2,
  X
} from "lucide-react";
import { useEffect, useState } from "react";

const TripPlanner = () => {
  // Trip configuration
  const [tripSettings, setTripSettings] = useState({
    destination: "Beach Getaway",
    startDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2), // 2 days from now
    days: 5
  });

  // Default notes data
  const defaultNotes = [
    "Arrive at the beach, set up tents, and enjoy a family dinner under the stars.",
    "Morning swim, sandcastle contest, and night campfire with marshmallows.",
    "Explore the coastline, collect seashells, and share stories by lantern light.",
    "Take a night walk, spot constellations, and capture family photos.",
    "Pack up, enjoy a sunrise breakfast, and plan the next adventure.",
  ];

  // State management
  const [notes, setNotes] = useState([...defaultNotes]);
  const [editDay, setEditDay] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [countdown, setCountdown] = useState("");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = tripSettings.startDate.getTime() - now.getTime();
      
      if (diff <= 0) {
        setCountdown("Trip started!");
        clearInterval(interval);
      } else {
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const m = Math.floor((diff / (1000 * 60)) % 60);
        const s = Math.floor((diff / 1000) % 60);
        setCountdown(`${d}d ${h}h ${m}m ${s}s`);
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [tripSettings.startDate]);

  // Generate dates for trip
  const getTripDates = () => {
    return Array.from({ length: tripSettings.days }).map((_, i) => {
      const date = new Date(tripSettings.startDate);
      date.setDate(date.getDate() + i);
      return date;
    });
  };

  // Format date for display
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  // Note management handlers
  const handleEdit = (idx) => {
    setEditDay(idx);
    setEditValue(notes[idx] || "");
  };

  const handleSave = (idx) => {
    const updated = [...notes];
    updated[idx] = editValue.trim();
    setNotes(updated);
    setEditDay(null);
    setEditValue("");
  };

  const handleCancel = () => {
    setEditDay(null);
    setEditValue("");
  };

  const handleAddNote = (idx) => {
    if (notes[idx]) {
      handleEdit(idx);
    } else {
      setEditDay(idx);
      setEditValue("");
    }
  };

  const handleDeleteNote = (idx) => {
    const updated = [...notes];
    updated[idx] = "";
    setNotes(updated);
  };

  // Trip settings handlers
  const handleDestinationChange = (e) => {
    setTripSettings({
      ...tripSettings,
      destination: e.target.value
    });
  };

  const handleDateChange = (e) => {
    const newDate = new Date(e.target.value);
    setTripSettings({
      ...tripSettings,
      startDate: newDate
    });
  };

  const handleDaysChange = (e) => {
    const days = parseInt(e.target.value);
    if (days > 0 && days <= 14) {
      setTripSettings({
        ...tripSettings,
        days: days
      });
      
      // Ensure notes array has correct length
      const newNotes = [...notes];
      if (days > notes.length) {
        for (let i = notes.length; i < days; i++) {
          newNotes.push("");
        }
      }
      setNotes(newNotes.slice(0, days));
    }
  };

  // Get current date string for date input
  const getCurrentDateString = () => {
    const date = tripSettings.startDate;
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen py-10 px-4 bg-transparent relative z-10" id="tripplanner">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
            {tripSettings.destination}
          </h1>
          <div className="flex items-center justify-center gap-2 text-purple-300">
            <MapPin size={16} />
            <span>Your adventure begins in</span>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Countdown Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-[#181824]/90 to-[#23234a]/70 rounded-2xl shadow-xl p-6 border border-cyan-400/20 h-full">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="text-cyan-400" />
                <span className="text-2xl font-bold text-white">Trip Countdown</span>
              </div>
              
              <div className="flex flex-col items-center justify-center h-52 mb-6">
                <div className="text-5xl font-mono font-bold text-cyan-200 mb-4">
                  {countdown}
                </div>
                <div className="text-purple-200 text-lg text-center">
                  Your adventure awaits!
                </div>
              </div>
              
              <button
                onClick={() => setIsSettingsOpen(true)}
                className="w-full py-3 px-4 bg-cyan-600/30 hover:bg-cyan-600/50 transition-colors rounded-lg text-cyan-200 font-medium flex items-center justify-center gap-2"
              >
                <Edit2 size={16} />
                Edit Trip Settings
              </button>
            </div>
          </motion.div>

          {/* Daily Planner */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div
              className="bg-gradient-to-br from-[#181824]/90 to-[#23234a]/70 rounded-2xl shadow-xl p-6 border border-cyan-400/20"
              style={{ pointerEvents: "auto" }} // Ensure pointer events are enabled on the planner
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <StickyNote className="text-cyan-400" />
                  <span className="text-2xl font-bold text-white">Daily Planner</span>
                </div>
                
                <div className="bg-[#13131d] rounded-lg overflow-hidden flex">
                  <button
                    onClick={() => setActiveTab(0)}
                    className={`px-4 py-2 text-sm ${activeTab === 0 ? 'bg-cyan-600/30 text-cyan-200' : 'text-gray-400 hover:text-gray-200'}`}
                  >
                    All Days
                  </button>
                  <button
                    onClick={() => setActiveTab(1)}
                    className={`px-4 py-2 text-sm ${activeTab === 1 ? 'bg-cyan-600/30 text-cyan-200' : 'text-gray-400 hover:text-gray-200'}`}
                  >
                    Timeline
                  </button>
                </div>
              </div>

              {activeTab === 0 ? (
                <div className="space-y-4">
                  <AnimatePresence>
                    {getTripDates().map((date, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="bg-[#23234a]/60 rounded-lg p-4 border border-cyan-400/10"
                        style={{ pointerEvents: "auto" }} // Ensure pointer events are enabled on each day card
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <span className="text-cyan-300 font-bold mr-2">Day {i + 1}</span>
                            <span className="text-purple-300 text-sm">{formatDate(date)}</span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            {editDay === i ? (
                              <>
                                <button
                                  className="text-green-400 hover:text-green-300 p-1 rounded-full hover:bg-green-900/20"
                                  onClick={e => { e.stopPropagation(); handleSave(i); }}
                                  aria-label="Save note"
                                  type="button"
                                  tabIndex={0}
                                >
                                  <Save size={18} />
                                </button>
                                <button
                                  className="text-red-400 hover:text-red-300 p-1 rounded-full hover:bg-red-900/20"
                                  onClick={e => { e.stopPropagation(); handleCancel(); }}
                                  aria-label="Cancel edit"
                                  type="button"
                                  tabIndex={0}
                                >
                                  <X size={18} />
                                </button>
                              </>
                            ) : (
                              <>
                                {notes[i] ? (
                                  <>
                                    <button
                                      className="text-cyan-400 hover:text-cyan-300 p-1 rounded-full hover:bg-cyan-900/20"
                                      onClick={e => { e.stopPropagation(); handleEdit(i); }}
                                      aria-label="Edit note"
                                      type="button"
                                      tabIndex={0}
                                    >
                                      <Edit2 size={18} />
                                    </button>
                                    <button
                                      className="text-red-400 hover:text-red-300 p-1 rounded-full hover:bg-red-900/20"
                                      onClick={e => { e.stopPropagation(); handleDeleteNote(i); }}
                                      aria-label="Delete note"
                                      type="button"
                                      tabIndex={0}
                                    >
                                      <Trash2 size={18} />
                                    </button>
                                  </>
                                ) : (
                                  <button
                                    className="text-cyan-400 hover:text-cyan-300 p-1 rounded-full hover:bg-cyan-900/20"
                                    onClick={e => { e.stopPropagation(); handleAddNote(i); }}
                                    aria-label="Add note"
                                    type="button"
                                    tabIndex={0}
                                  >
                                    <Plus size={18} />
                                  </button>
                                )}
                              </>
                            )}
                          </div>
                        </div>
                        
                        {editDay === i ? (
                          <textarea
                            className="w-full bg-[#181824] text-cyan-100 rounded p-3 border border-cyan-400/30 focus:outline-none focus:border-cyan-400/60"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            placeholder="What's the plan for this day?"
                            rows={3}
                            autoFocus
                          />
                        ) : (
                          <div className="text-gray-200 py-1 min-h-12">
                            {notes[i] ? notes[i] : (
                              <span className="text-gray-500 italic">No plans yet. Click the + to add a note.</span>
                            )}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="relative pl-8 border-l-2 border-cyan-600/30 ml-4 space-y-8">
                  {getTripDates().map((date, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="relative flex items-start"
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-[-32px] top-4 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-cyan-500 border-2 border-white shadow" />
                      </div>
                      <div className="flex-1 mb-2 ml-2">
                        <div className="flex items-center gap-2">
                          <div className="text-cyan-300 font-bold">Day {i + 1}</div>
                          <div className="text-purple-300 text-sm">{formatDate(date)}</div>
                        </div>
                        <div className="bg-[#23234a]/30 rounded-lg p-4 text-gray-200 mt-2">
                          {notes[i] || <span className="text-gray-500 italic">No plans yet</span>}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Trip Settings Modal */}
        {isSettingsOpen && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-gradient-to-br from-[#181824] to-[#23234a] rounded-2xl shadow-xl p-6 border border-cyan-400/20 max-w-md w-full"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Trip Settings</h2>
                <button
                  onClick={() => setIsSettingsOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Destination</label>
                  <input
                    type="text"
                    value={tripSettings.destination}
                    onChange={handleDestinationChange}
                    className="w-full bg-[#13131d] text-cyan-100 rounded p-3 border border-cyan-400/30 focus:outline-none focus:border-cyan-400/60"
                    placeholder="Where are you going?"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Start Date</label>
                  <input
                    type="date"
                    value={getCurrentDateString()}
                    onChange={handleDateChange}
                    className="w-full bg-[#13131d] text-cyan-100 rounded p-3 border border-cyan-400/30 focus:outline-none focus:border-cyan-400/60"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Number of Days</label>
                  <input
                    type="number"
                    min="1"
                    max="14"
                    value={tripSettings.days}
                    onChange={handleDaysChange}
                    className="w-full bg-[#13131d] text-cyan-100 rounded p-3 border border-cyan-400/30 focus:outline-none focus:border-cyan-400/60"
                  />
                </div>
                
                <div className="pt-4 flex justify-end gap-4">
                  <button
                    onClick={() => setIsSettingsOpen(false)}
                    className="px-4 py-2 rounded-lg text-gray-300 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setIsSettingsOpen(false)}
                    className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 transition-colors rounded-lg text-white"
                  >
                    Save Settings
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TripPlanner;