import Layout from "@/components/layout/Layout";
import { Heart, Users, Target, Music, Star, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Divine Love",
      description: "Spreading the message of divine love through the mystic tradition of Sufi music.",
    },
    {
      icon: Music,
      title: "Authentic Qawwali",
      description: "Preserving and promoting authentic Qawwali traditions passed down through generations.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a global community of spiritual seekers and music lovers.",
    },
    {
      icon: Target,
      title: "Accessibility",
      description: "Making sacred Sufi music accessible to everyone, everywhere.",
    },
  ];

  const team = [
    {
      name: "Ahmed Hassan",
      role: "Founder & Curator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    },
    {
      name: "Fatima Khan",
      role: "Content Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    },
    {
      name: "Yusuf Ali",
      role: "Music Producer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              About <span className="text-foreground">Sufi Qawwali</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We are dedicated to preserving and spreading the divine tradition of Sufi music, 
              connecting souls across the world through the transcendent power of Qawwali.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Sufi Qawwali was born from a deep love for the mystical music tradition that has 
                touched hearts for over 700 years. Our mission is simple yet profound: to share 
                the spiritual essence of Qawwali with the world.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Through our YouTube channel and this platform, we curate the finest Qawwali 
                performances, from legendary masters like Nusrat Fateh Ali Khan to contemporary 
                artists carrying the tradition forward.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that music is a universal language of the soul, and Qawwali, with its 
                devotional intensity and spiritual depth, has the power to transform lives and 
                bring people closer to the divine.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop"
                alt="Sufi musicians performing"
                className="rounded-2xl shadow-sufi w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold font-serif">10+</div>
                <div className="text-sm opacity-90">Years of Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-border hover:border-primary/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals behind Sufi Qawwali
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4 overflow-hidden rounded-full w-48 h-48 mx-auto">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50K+", label: "Subscribers" },
              { value: "500+", label: "Qawwalis" },
              { value: "10M+", label: "Total Views" },
              { value: "100+", label: "Countries" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold font-serif mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
