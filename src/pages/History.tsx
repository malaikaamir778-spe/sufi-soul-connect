import Layout from "@/components/layout/Layout";
import { BookOpen, Calendar, MapPin, Users, Music, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const History = () => {
  const timeline = [
    {
      year: "13th Century",
      title: "Origins of Qawwali",
      description:
        "Qawwali originated in the 13th century in the subcontinent, founded by Amir Khusrau, a Sufi poet and musician in the court of Delhi. He combined Persian, Arabic, Turkish, and Indian musical traditions.",
      icon: Star,
    },
    {
      year: "14th-15th Century",
      title: "Spread Through Sufi Orders",
      description:
        "The Chishti Sufi order, particularly through Hazrat Nizamuddin Auliya, popularized Qawwali as a form of devotional practice. It became central to Sufi gatherings called 'mehfils'.",
      icon: Users,
    },
    {
      year: "16th-17th Century",
      title: "Mughal Patronage",
      description:
        "During the Mughal era, Qawwali received royal patronage. It flourished in courts and shrines, developing more sophisticated musical structures while maintaining its spiritual essence.",
      icon: MapPin,
    },
    {
      year: "18th-19th Century",
      title: "Regional Traditions Emerge",
      description:
        "Different gharanas (schools) of Qawwali emerged, each with unique styles. The Delhi, Lucknow, and Hyderabad traditions became particularly renowned.",
      icon: Music,
    },
    {
      year: "20th Century",
      title: "Global Recognition",
      description:
        "Legends like Nusrat Fateh Ali Khan brought Qawwali to international audiences. His collaborations with Western artists introduced this sacred music to millions worldwide.",
      icon: BookOpen,
    },
    {
      year: "21st Century",
      title: "Digital Renaissance",
      description:
        "Today, Qawwali continues to evolve while honoring tradition. Digital platforms have made this divine music accessible to seekers across the globe.",
      icon: Calendar,
    },
  ];

  const legendaryArtists = [
    {
      name: "Amir Khusrau",
      era: "1253-1325",
      contribution: "Founder of Qawwali, blended Persian and Indian music",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    },
    {
      name: "Nusrat Fateh Ali Khan",
      era: "1948-1997",
      contribution: "Brought Qawwali to global audiences, collaborated with Western artists",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
    },
    {
      name: "Sabri Brothers",
      era: "1950s-present",
      contribution: "Pioneered fusion Qawwali, famous for 'Tajdar-e-Haram'",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop",
    },
    {
      name: "Rahat Fateh Ali Khan",
      era: "1974-present",
      contribution: "Continuing the legacy, blending traditional and contemporary styles",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-geometric opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              History of <span className="text-primary">Qawwali</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              A journey through seven centuries of divine music, from its origins in medieval India 
              to its global presence today.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              What is Qawwali?
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="mb-4 leading-relaxed">
                <strong className="text-foreground">Qawwali</strong> (قوّالی) is a form of Sufi devotional music 
                popular in South Asia. It is a musical tradition that dates back to the 13th century and is 
                primarily found in the Indian subcontinent and parts of Central Asia.
              </p>
              <p className="mb-4 leading-relaxed">
                The word "Qawwali" derives from the Arabic word "Qaul," meaning "axiom" or "saying." 
                Originally, it referred to songs that began with a saying of the Prophet Muhammad, but 
                it later came to encompass a broader range of devotional songs.
              </p>
              <p className="leading-relaxed">
                Qawwali performances typically involve a lead singer (usually called a "Qawwal"), 
                accompanied by a group of backup singers and musicians playing harmonium, tabla, 
                and dholak. The music is characterized by intense devotional lyrics, powerful vocals, 
                and rhythmic handclapping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Timeline of Qawwali
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2" />

              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-0 mb-12 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"} pl-16 md:pl-0`}>
                    <Card className="border-border hover:border-primary/50 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Icon */}
                  <div className="absolute left-4 md:left-1/2 top-6 md:top-8 w-8 h-8 rounded-full bg-primary flex items-center justify-center transform md:-translate-x-1/2 z-10">
                    <item.icon className="h-4 w-4 text-primary-foreground" />
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legendary Artists */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Legendary Qawwali Artists
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {legendaryArtists.map((artist, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                    {artist.name}
                  </h3>
                  <p className="text-sm text-primary mb-2">{artist.era}</p>
                  <p className="text-sm text-muted-foreground">{artist.contribution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sufi Connection */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              The Sufi Connection
            </h2>
            <p className="text-lg opacity-90 leading-relaxed mb-8">
              Qawwali is deeply rooted in Sufism, the mystical dimension of Islam. 
              It serves as a vehicle for "sama" – the practice of listening to music 
              as a means of achieving spiritual ecstasy and union with the Divine. 
              The intense emotional experience of Qawwali is believed to open the heart 
              and bring the listener closer to God.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold font-serif mb-2">700+</div>
                <div className="opacity-80">Years of Tradition</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold font-serif mb-2">1000s</div>
                <div className="opacity-80">Devotional Songs</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold font-serif mb-2">Global</div>
                <div className="opacity-80">Spiritual Impact</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default History;
