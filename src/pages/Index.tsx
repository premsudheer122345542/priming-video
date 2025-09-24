import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import movie1 from "@/assets/movie-1.jpg";
import movie2 from "@/assets/movie-2.jpg";
import series1 from "@/assets/series-1.jpg";

const Index = () => {
  const continueWatching = [
    { id: "1", title: "The Terminal List", image: series1, year: "2022", rating: "18+", duration: "8 Episodes" },
    { id: "2", title: "Quantum Horizon", image: movie1, year: "2023", rating: "PG-13", duration: "2h 15m" },
    { id: "3", title: "Love & Time", image: movie2, year: "2023", rating: "PG", duration: "1h 45m" },
    { id: "4", title: "The Terminal List", image: series1, year: "2022", rating: "18+", duration: "8 Episodes" },
    { id: "5", title: "Quantum Horizon", image: movie1, year: "2023", rating: "PG-13", duration: "2h 15m" },
    { id: "6", title: "Love & Time", image: movie2, year: "2023", rating: "PG", duration: "1h 45m" },
  ];

  const trending = [
    { id: "7", title: "Dark Territory", image: series1, year: "2023", rating: "18+", duration: "New Series" },
    { id: "8", title: "Stellar Combat", image: movie1, year: "2023", rating: "PG-13", duration: "2h 30m" },
    { id: "9", title: "Hearts Aligned", image: movie2, year: "2023", rating: "PG", duration: "1h 52m" },
    { id: "10", title: "Criminal Minds", image: series1, year: "2023", rating: "16+", duration: "Season 2" },
    { id: "11", title: "Future Wars", image: movie1, year: "2023", rating: "PG-13", duration: "2h 45m" },
    { id: "12", title: "Romantic Escape", image: movie2, year: "2023", rating: "PG", duration: "1h 38m" },
  ];

  const movies = [
    { id: "13", title: "Space Odyssey 2024", image: movie1, year: "2024", rating: "PG-13", duration: "2h 20m" },
    { id: "14", title: "Forever Together", image: movie2, year: "2024", rating: "PG", duration: "1h 55m" },
    { id: "15", title: "Cyber Revolution", image: movie1, year: "2024", rating: "R", duration: "2h 10m" },
    { id: "16", title: "Second Chances", image: movie2, year: "2024", rating: "PG-13", duration: "1h 42m" },
    { id: "17", title: "Digital Frontier", image: movie1, year: "2024", rating: "PG-13", duration: "2h 35m" },
    { id: "18", title: "True Connection", image: movie2, year: "2024", rating: "PG", duration: "1h 48m" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      <main className="container mx-auto px-4 py-8 space-y-12">
        <ContentSection title="Continue Watching" items={continueWatching} />
        <ContentSection title="Trending Now" items={trending} />
        <ContentSection title="Prime Movies" items={movies} />
        <ContentSection title="Amazon Originals" items={trending} />
        <ContentSection title="Recently Added" items={movies} />
      </main>
    </div>
  );
};

export default Index;
