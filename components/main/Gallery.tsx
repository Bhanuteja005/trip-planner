"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock, Heart, Map, Maximize2, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    title: "Family Stargazing on the Beach",
    description: "A magical night with family, watching the stars and listening to the waves on a quiet beach.",
    location: "Malibu Beach, California",
    year: "2024",
    duration: "1 night",
    tags: ["Beach", "Stars", "Family"]
  },
  {
    src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    title: "Night Campfire by the Sea",
    description: "Gathered around a glowing campfire, sharing stories under a sky full of stars.",
    location: "Cannon Beach, Oregon",
    year: "2024",
    duration: "2 nights",
    tags: ["Campfire", "Night", "Sea"]
  },
  {
    src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    title: "Moonlit Family Walk",
    description: "A peaceful walk along the shoreline, the moon reflecting on the water and laughter in the air.",
    location: "Outer Banks, North Carolina",
    year: "2024",
    duration: "1 night",
    tags: ["Moonlight", "Walk", "Family"]
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "Night Road Trip",
    description: "Traveling together down a quiet highway, headlights illuminating the path beneath a starry sky.",
    location: "Pacific Coast Highway",
    year: "2024",
    duration: "3 nights",
    tags: ["Roadtrip", "Night", "Travel"]
  },
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    title: "Beach Bonfire Memories",
    description: "Toasting marshmallows and making memories with friends and family by the ocean at night.",
    location: "Santa Monica Beach",
    year: "2024",
    duration: "1 night",
    tags: ["Bonfire", "Beach", "Memories"]
  },
  {
    src: "https://images.unsplash.com/photo-1610288733460-14f838fc590b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Starry Night Picnic",
    description: "A cozy picnic under the stars, surrounded by the gentle sounds of the sea.",
    location: "Cape Cod, Massachusetts",
    year: "2024",
    duration: "1 night",
    tags: ["Picnic", "Stars", "Traveller"]
  },
];

// Animation variants
const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", damping: 15 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } }
};

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  hover: { 
    y: -8, 
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
    transition: { type: "spring", stiffness: 300 }
  }
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Gallery = () => {
  const [selected, setSelected] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [favorites, setFavorites] = useState([]);

  // Get unique tags for filter
  const allTags = ["All", ...new Set(galleryImages.flatMap(img => img.tags))];

  // Filter images based on selected tag
  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.tags.includes(filter));

  // Modal navigation
  const handleSelect = (idx) => {
    setSelected(galleryImages[idx]);
    setCurrentIndex(idx);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelected(galleryImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelected(galleryImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const toggleFullscreen = (e) => {
    e.stopPropagation();
    setIsFullscreen(!isFullscreen);
  };

  // Handle favorite toggling
  const toggleFavorite = (idx) => {
    if (favorites.includes(idx)) {
      setFavorites(favorites.filter(id => id !== idx));
    } else {
      setFavorites([...favorites, idx]);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selected) return;
      
      switch (e.key) {
        case "ArrowLeft":
          handlePrev(e);
          break;
        case "ArrowRight":
          handleNext(e);
          break;
        case "Escape":
          setSelected(null);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected, currentIndex]);

  return (
    <div id="gallery" className="w-full min-h-screen py-20 px-4 md:px-8 bg-transparent relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-0">
        {/* Removed colored blurred backgrounds for full transparency */}
      </div>
      
      {/* Content */}
      <div className="z-10 relative w-full max-w-7xl mx-auto bg-transparent">
        <motion.div 
          className="text-center mb-14 bg-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"
          >
            Nature's Tranquil Moments
          </motion.h2>
          
          <motion.p 
            className="text-teal-200 mb-8 max-w-3xl mx-auto text-lg bg-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore breathtaking landscapes and peaceful retreats from around the world.
            Immerse yourself in the serenity of nature's most captivating scenes.
          </motion.p>
          
          {/* Filter Tabs */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-10 bg-transparent"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {allTags.map((tag, idx) => (
              <motion.button
                key={idx}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === tag 
                    ? "bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-lg shadow-teal-700/40" 
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
                onClick={() => setFilter(tag)}
                variants={fadeInUp}
              >
                {tag}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 bg-transparent"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {filteredImages.map((img, idx) => {
            const originalIdx = galleryImages.findIndex(item => item.title === img.title);
            const isFavorite = favorites.includes(originalIdx);
            
            return (
              <motion.div
                key={idx}
                className="relative overflow-hidden rounded-xl bg-transparent shadow-xl"
                variants={cardVariants}
                whileHover="hover"
              >
                <div 
                  className="cursor-pointer group bg-transparent" 
                  onClick={() => handleSelect(originalIdx)}
                >
                  <div className="relative h-64 w-full overflow-hidden bg-transparent">
                    <Image
                      src={img.src}
                      alt={img.title}
                      width={500}
                      height={380}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 bg-transparent"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-transparent">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-teal-300 transition-colors duration-300 bg-transparent">
                      {img.title}
                    </h3>
                    <div className="flex items-center text-gray-300 text-sm mb-2 bg-transparent">
                      <Map size={14} className="mr-1 text-teal-400" />
                      <span>{img.location}</span>
                    </div>
                    <p className="text-gray-300 text-sm line-clamp-2 bg-transparent">
                      {img.description}
                    </p>
                  </div>
                </div>
                
                {/* Favorite Button */}
                <button 
                  className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isFavorite 
                      ? "bg-pink-500 text-white" 
                      : "bg-black/40 text-white/70 hover:bg-black/60 hover:text-white"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(originalIdx);
                  }}
                >
                  <Heart size={16} fill={isFavorite ? "white" : "none"} />
                </button>
                
                {/* Tags */}
                <div className="absolute top-3 left-3 flex gap-1 flex-wrap max-w-[70%]">
                  {img.tags.slice(0, 2).map((tag, tagIdx) => (
                    <span 
                      key={tagIdx} 
                      className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-teal-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Empty state */}
        {filteredImages.length === 0 && (
          <motion.div 
            className="flex flex-col items-center justify-center py-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-gray-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-200 mb-2">No images found</h3>
            <p className="text-gray-400 max-w-md">There are no images matching your selected filter. Try selecting a different category.</p>
            <button 
              className="mt-4 px-6 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors"
              onClick={() => setFilter("All")}
            >
              Show all images
            </button>
          </motion.div>
        )}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className={`relative bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl flex flex-col ${
                isFullscreen ? "fixed inset-0" : "w-full max-w-5xl mx-4 rounded-2xl overflow-hidden"
              }`}
              onClick={(e) => e.stopPropagation()}
              layoutId="modal-container"
            >
              {/* Navigation and controls */}
              <div className="absolute top-4 right-4 flex space-x-3 z-30">
                <button
                  onClick={toggleFullscreen}
                  className="w-10 h-10 flex items-center justify-center bg-gray-700/70 hover:bg-gray-600/70 rounded-full text-white backdrop-blur-md transition-colors"
                  aria-label="Toggle fullscreen"
                >
                  <Maximize2 size={18} />
                </button>
                <button
                  onClick={() => setSelected(null)}
                  className="w-10 h-10 flex items-center justify-center bg-gray-700/70 hover:bg-red-600/70 rounded-full text-white backdrop-blur-md transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex flex-col lg:flex-row h-full overflow-hidden">
                {/* Image section */}
                <div className={`relative ${isFullscreen ? "h-screen" : "h-96 lg:h-auto"} w-full lg:w-2/3`}>
                  <Image
                    src={selected.src}
                    alt={selected.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  
                  <div className="absolute inset-x-0 top-1/2 flex justify-between px-4 transform -translate-y-1/2 z-20">
                    <button
                      onClick={handlePrev}
                      className="w-12 h-12 flex items-center justify-center bg-black/40 hover:bg-black/60 rounded-full text-white backdrop-blur-md transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={handleNext}
                      className="w-12 h-12 flex items-center justify-center bg-black/40 hover:bg-black/60 rounded-full text-white backdrop-blur-md transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent py-8 px-6 z-20">
                    <h3 className="text-3xl font-bold text-white mb-2">{selected.title}</h3>
                    <div className="flex items-center text-teal-300">
                      <Map size={16} className="mr-2" />
                      <span>{selected.location}</span>
                      <span className="mx-2">•</span>
                      <Clock size={16} className="mr-2" />
                      <span>{selected.year}</span>
                    </div>
                  </div>
                </div>

                {/* Info section */}
                <div className={`p-6 lg:p-8 ${isFullscreen ? "overflow-y-auto" : ""} lg:w-1/3 bg-gray-900`}>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-teal-400 mb-2">Story</h4>
                    <p className="text-gray-300">{selected.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-teal-400 mb-2">Journey Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Duration</span>
                        <span className="text-white font-medium">{selected.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Location</span>
                        <span className="text-white font-medium">{selected.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Year</span>
                        <span className="text-white font-medium">{selected.year}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-teal-400 mb-2">Categories</h4>
                    <div className="flex flex-wrap gap-2">
                      {selected.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="bg-gray-800 text-teal-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="py-3 px-4 bg-gray-800 hover:bg-gray-700 rounded-xl text-white font-medium transition-all flex items-center justify-center"
                      onClick={() => {
                        toggleFavorite(currentIndex);
                      }}
                    >
                      <Heart 
                        size={18} 
                        className="mr-2" 
                        fill={favorites.includes(currentIndex) ? "#ec4899" : "none"}
                        color={favorites.includes(currentIndex) ? "#ec4899" : "white"}
                      />
                      {favorites.includes(currentIndex) ? "Favorited" : "Add to Favorites"}
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="py-3 px-4 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-xl text-white font-medium hover:from-teal-600 hover:to-emerald-700 transition-all shadow-lg shadow-teal-700/20"
                    >
                      View Experience
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;