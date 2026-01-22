import { Play, ExternalLink, Eye, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Qawwali {
  id: string;
  title: string;
  artist: string;
  thumbnail: string;
  youtubeId: string;
  views: string;
  likes: string;
  duration: string;
  featured?: boolean;
}

const FeaturedQawalis = () => {
  // Sample data - in production this would come from database
  const qawalis: Qawwali[] = [
    {
      id: "1",
      title: "Dam Mast Qalandar",
      artist: "Nusrat Fateh Ali Khan",
      thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop",
      youtubeId: "dQw4w9WgXcQ",
      views: "25M",
      likes: "450K",
      duration: "15:32",
      featured: true,
    },
    {
      id: "2",
      title: "Tajdar-e-Haram",
      artist: "Atif Aslam",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      youtubeId: "dQw4w9WgXcQ",
      views: "180M",
      likes: "2.1M",
      duration: "10:45",
      featured: true,
    },
    {
      id: "3",
      title: "Allah Hoo",
      artist: "Rahat Fateh Ali Khan",
      thumbnail: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop",
      youtubeId: "dQw4w9WgXcQ",
      views: "45M",
      likes: "890K",
      duration: "12:18",
    },
    {
      id: "4",
      title: "Kun Faya Kun",
      artist: "A.R. Rahman",
      thumbnail: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop",
      youtubeId: "dQw4w9WgXcQ",
      views: "320M",
      likes: "3.5M",
      duration: "8:56",
      featured: true,
    },
    {
      id: "5",
      title: "Afreen Afreen",
      artist: "Rahat Fateh Ali Khan",
      thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=300&fit=crop",
      youtubeId: "dQw4w9WgXcQ",
      views: "280M",
      likes: "2.8M",
      duration: "9:12",
    },
    {
      id: "6",
      title: "Tere Bina",
      artist: "Nusrat Fateh Ali Khan",
      thumbnail: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&h=300&fit=crop",
      youtubeId: "dQw4w9WgXcQ",
      views: "15M",
      likes: "320K",
      duration: "14:05",
    },
  ];

  return (
    <section id="featured" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Most Viewed
          </Badge>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Qawwalis
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Immerse yourself in the most beloved and highly viewed Qawwalis from our collection
          </p>
        </div>

        {/* Qawwali Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {qawalis.map((qawwali) => (
            <Card
              key={qawwali.id}
              className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-sufi"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={qawwali.thumbnail}
                  alt={qawwali.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                    <Play className="h-8 w-8 text-primary-foreground fill-primary-foreground ml-1" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/70 text-white text-xs font-medium">
                  {qawwali.duration}
                </div>

                {/* Featured Badge */}
                {qawwali.featured && (
                  <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                    Featured
                  </Badge>
                )}
              </div>

              <CardContent className="p-4">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                  {qawwali.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{qawwali.artist}</p>
                
                {/* Stats */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Eye className="h-3.5 w-3.5" />
                    <span>{qawwali.views} views</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="h-3.5 w-3.5" />
                    <span>{qawwali.likes}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 gap-2" asChild>
                    <a
                      href={`https://youtube.com/watch?v=${qawwali.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Play className="h-4 w-4" />
                      Watch
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="gap-2" asChild>
                    <a
                      href={`https://youtube.com/watch?v=${qawwali.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="gap-2" asChild>
            <a href="/qawwali">
              View All Qawwalis
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedQawalis;
