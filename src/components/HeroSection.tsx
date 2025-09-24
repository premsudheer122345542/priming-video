import { Play, Plus, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Featured Content"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-lg space-y-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span className="bg-prime-blue text-foreground px-2 py-1 rounded text-xs font-semibold">
                PRIME
              </span>
              <span>Original Series</span>
            </div>
            <h1 className="text-5xl font-bold text-foreground leading-tight">
              The Terminal List
            </h1>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            A Navy SEAL has nothing left to live for and everything to kill for after he discovers that the American government is behind the deaths of his team.
          </p>

          <div className="flex items-center space-x-4">
            <Button size="lg" className="bg-prime-blue hover:bg-prime-blue-dark text-foreground font-semibold">
              <Play className="mr-2 h-5 w-5" />
              Watch Now
            </Button>
            
            <Button variant="secondary" size="lg">
              <Plus className="mr-2 h-5 w-5" />
              Watchlist
            </Button>
            
            <Button variant="ghost" size="lg" className="text-foreground hover:text-foreground/80">
              <Info className="mr-2 h-5 w-5" />
              More Info
            </Button>
          </div>

          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>2022</span>
            <span>•</span>
            <span>18+</span>
            <span>•</span>
            <span>1 Season</span>
            <span>•</span>
            <span>Action, Thriller</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;