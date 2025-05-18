import About from "@/components/main/About";
import Features from "@/components/main/Features";
import Gallery from "@/components/main/Gallery";
import Hero from "@/components/main/Hero";
import TripPlanner from "@/components/main/TripPlanner";
export default function Home() {
  return (
      <main className="h-full w-full">
          <div className="flex flex-col gap-20">
              <Hero />
              <About />
              <TripPlanner />
                <Gallery />
              <Features />
          </div>
      </main>
  )
}
