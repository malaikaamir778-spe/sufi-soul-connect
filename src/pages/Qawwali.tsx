import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Play, ExternalLink, Eye, ThumbsUp, Search, Filter, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Qawwali {
  id: string;
  title: string;
  artist: string;
  thumbnail: string;
  youtubeId: string;
  views: string;
  likes: string;
  duration: string;
  category: string;
}

const Qawwali = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArtist, setSelectedArtist] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

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
      category: "Traditional",
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
      category: "Contemporary",
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
      category: "Devotional",
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
      category: "Contemporary",
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
      category: "Romantic",
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
      category: "Romantic",
    },
    {
      id: "7",
      title: "Tumhe Dillagi",
      artist: "Nusrat Fateh Ali Khan",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      youtubeId: "dQw4w9WgXcQ",
      views: "120M",
      likes: "1.5M",
      duration: "11:23",
      category: "Romantic",
    },
    {
      id: "8",
      title: "Man Kunto Maula",
      artist: "Nusrat Fateh Ali Khan",
      thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop",
      youtubeId: "dQw4w9WgXcQ",
      views: "35M",
      likes: "650K",
      duration: "18:45",
      category: "Traditional",
    },
    {
      id: "9",
      title: "Dama Dam Mast Qalandar",
      artist: "Rahat Fateh Ali Khan",
      thumbnail: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop",
      youtubeId: "dQw4w9WgXcQ",
      views: "55M",
      likes: "920K",
      duration: "13:56",
      category: "Traditional",
    },
  ];

  const artists = [...new Set(qawalis.map((q) => q.artist))];
  const categories = [...new Set(qawalis.map((q) => q.category))];

  const filteredQawalis = qawalis.filter((qawwali) => {
    const matchesSearch =
      qawwali.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      qawwali.artist.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesArtist = selectedArtist === "all" || qawwali.artist === selectedArtist;
    const matchesCategory = selectedCategory === "all" || qawwali.category === selectedCategory;
    return matchesSearch && matchesArtist && matchesCategory;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Music className="h-8 w-8 text-foreground" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Qawwali Collection
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our curated collection of divine Qawwali performances
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search qawwalis..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-3 w-full md:w-auto">
              <Select value={selectedArtist} onValueChange={setSelectedArtist}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="All Artists" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Artists</SelectItem>
                  {artists.map((artist) => (
                    <SelectItem key={artist} value={artist}>
                      {artist}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredQawalis.length} of {qawalis.length} qawwalis
          </div>
        </div>
      </section>

      {/* Qawwali Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredQawalis.map((qawwali) => (
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

                  {/* Category Badge */}
                  <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                    {qawwali.category}
                  </Badge>
                </div>

                <CardContent className="p-4">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1 line-clamp-1 group-hover:text-foreground transition-colors">
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

          {filteredQawalis.length === 0 && (
            <div className="text-center py-12">
              <Music className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                No Qawwalis Found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filters
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Qawwali;
