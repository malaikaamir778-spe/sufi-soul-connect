import { Youtube, Bell, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const YouTubeCTA = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-primary via-primary to-sufi-brown relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-destructive mb-6">
            <Youtube className="h-10 w-10 text-white" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Join Our Growing Community
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our YouTube channel and never miss a new Qawwali. 
            Be part of a community that celebrates divine music.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              "New Qawwalis Every Week",
              "Exclusive Behind-the-Scenes",
              "Live Session Notifications",
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-primary-foreground/90"
              >
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="gap-3 bg-destructive hover:bg-destructive/90 text-white px-10 py-6 text-lg rounded-full"
              asChild
            >
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-6 w-6" />
                Subscribe Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-3 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg rounded-full"
              asChild
            >
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Bell className="h-5 w-5" />
                Turn On Notifications
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeCTA;
