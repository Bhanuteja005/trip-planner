import FeatureCard from "../sub/FeatureCard";

const Features = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                Travel Gallery Features
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <FeatureCard
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                    title="Cosmic Travel Gallery"
                    description="A visually immersive gallery where each destination shines like a star. Browse stunning travel photos in a cosmic-themed interface."
                    link=""
                />
                <FeatureCard
                    src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
                    title="Click-to-Expand Modals"
                    description="Click any photo to expand it in a beautiful modal. Dive deeper into each adventure with details and stories."
                    link=""
                />
                <FeatureCard
                    src="https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=800&q=80"
                    title="Interactive & Futuristic UI"
                    description="A cosmic, animated user experience that makes exploring your travel memories feel like a journey through the stars."
                    link=""
                />
                <FeatureCard
                    src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80"
                    title="Trip Countdown & Daily Planner"
                    description="Plan your next cosmic journey with a live countdown and a daily planner. Add notes for each day and stay organized for every adventure."
                    link=""
                />
            </div>
        </div>
    );
};

export default Features;