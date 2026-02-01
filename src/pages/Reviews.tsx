import Layout from "@/components/layout/Layout";
import { Star, Quote, Youtube, ThumbsUp, MessageCircle, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Reviews = () => {
  const reviews = [
    {
      id: "1",
      name: "Ahmed Malik",
      location: "United Kingdom",
      rating: 5,
      date: "2 weeks ago",
      text: "This channel has become my daily companion for spiritual nourishment. The quality of qawwalis uploaded here is unmatched. May Allah bless the team!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      verified: true,
    },
    {
      id: "2",
      name: "Fatima Hassan",
      location: "Canada",
      rating: 5,
      date: "1 month ago",
      text: "I discovered Sufi music through this channel and it has transformed my life. The curated collection brings peace to my soul every day.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      verified: true,
    },
    {
      id: "3",
      name: "Yusuf Rahman",
      location: "Australia",
      rating: 5,
      date: "3 weeks ago",
      text: "The best Qawwali collection on the internet! High-quality audio, beautiful visuals, and a wonderful selection of both classic and contemporary performances.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      verified: true,
    },
    {
      id: "4",
      name: "Sarah Khan",
      location: "United States",
      rating: 5,
      date: "1 week ago",
      text: "As someone who grew up listening to Nusrat Fateh Ali Khan, finding this channel was like coming home. The collection is beautifully curated.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      verified: true,
    },
    {
      id: "5",
      name: "Mohammad Ali",
      location: "Pakistan",
      rating: 5,
      date: "2 months ago",
      text: "This channel is doing amazing work in preserving and promoting our spiritual heritage. The team's dedication is evident in every upload.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      verified: true,
    },
    {
      id: "6",
      name: "Amina Begum",
      location: "India",
      rating: 5,
      date: "3 months ago",
      text: "The diversity of qawwalis here is incredible - from traditional to contemporary, from Pakistani to Indian masters. Simply the best!",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
      verified: true,
    },
  ];

  const youtubeComments = [
    {
      username: "@SufiSoulSeeker",
      comment: "This qawwali brought tears to my eyes. The spiritual energy is overwhelming. ❤️🙏",
      likes: "2.3K",
      time: "1 day ago",
    },
    {
      username: "@MysticMelodies",
      comment: "Best channel for authentic Sufi music. Been following for 3 years now!",
      likes: "1.8K",
      time: "3 days ago",
    },
    {
      username: "@DevotionalMusic",
      comment: "The audio quality is exceptional. Thank you for preserving these treasures!",
      likes: "956",
      time: "1 week ago",
    },
    {
      username: "@SpiritualJourney",
      comment: "Listening to this at midnight with headphones is a transcendent experience 🌙",
      likes: "1.2K",
      time: "2 weeks ago",
    },
  ];

  const stats = [
    { label: "Average Rating", value: "4.9/5" },
    { label: "Total Reviews", value: "15,000+" },
    { label: "Countries", value: "100+" },
    { label: "Satisfied Listeners", value: "99%" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <MessageCircle className="h-8 w-8 text-foreground" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Community Reviews
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Hear what our community of spiritual seekers and music lovers have to say
            </p>

            {/* Rating Overview */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/20 text-foreground">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-5 w-5 text-accent fill-accent"
                  />
                ))}
              </div>
              <span className="font-semibold">4.9 out of 5</span>
              <span className="text-muted-foreground">• 15,000+ reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
            What Our Listeners Say
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Card key={review.id} className="border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-foreground">{review.name}</h3>
                        {review.verified && (
                          <Badge variant="secondary" className="text-xs">
                            Verified
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{review.location}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= review.rating
                              ? "text-accent fill-accent"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>

                  {/* Review Text */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    "{review.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Comments Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-10">
            <Youtube className="h-8 w-8 text-foreground" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              YouTube Comments
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {youtubeComments.map((comment, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-foreground text-sm">
                          {comment.username}
                        </span>
                        <span className="text-xs text-muted-foreground">{comment.time}</span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">{comment.comment}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <ThumbsUp className="h-3.5 w-3.5" />
                        <span>{comment.likes}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="gap-2" asChild>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-4 w-4" />
                View More on YouTube
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="h-12 w-12 mx-auto mb-6 opacity-50" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Join Our Community
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Be part of a growing family of spiritual seekers and Sufi music lovers. 
              Subscribe to our channel and share your experience with us.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="gap-2 bg-destructive hover:bg-destructive/90 text-white"
                asChild
              >
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-5 w-5" />
                  Subscribe Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="/contact">
                  <MessageCircle className="h-5 w-5" />
                  Share Your Story
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;
