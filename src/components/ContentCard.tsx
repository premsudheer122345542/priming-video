import { Play, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContentCardProps {
  id: string;
  title: string;
  image: string;
  year?: string;
  rating?: string;
  duration?: string;
}

const ContentCard = ({ title, image, year, rating, duration }: ContentCardProps) => {
  return (
    <div className="group relative cursor-pointer">
      <div className="relative overflow-hidden rounded-lg bg-content-card transition-all duration-300 group-hover:bg-content-card-hover group-hover:scale-105">
        <img
          src={image}
          alt={title}
          className="w-full aspect-[2/3] object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-2">
            <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
              <Play className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-foreground hover:text-foreground/80">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-2 space-y-1">
        <h3 className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-prime-blue transition-colors">
          {title}
        </h3>
        {(year || rating || duration) && (
          <div className="flex items-center text-xs text-muted-foreground space-x-1">
            {year && <span>{year}</span>}
            {year && (rating || duration) && <span>•</span>}
            {rating && <span>{rating}</span>}
            {rating && duration && <span>•</span>}
            {duration && <span>{duration}</span>}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentCard;