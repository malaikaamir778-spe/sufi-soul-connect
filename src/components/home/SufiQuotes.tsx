import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SufiQuote {
  id: string;
  text: string;
  author: string;
  source?: string;
}

const SufiQuotes = () => {
  const quotes: SufiQuote[] = [
    {
      id: "1",
      text: "Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.",
      author: "Rumi",
      source: "Masnavi",
    },
    {
      id: "2",
      text: "Out beyond ideas of wrongdoing and rightdoing, there is a field. I'll meet you there.",
      author: "Rumi",
    },
    {
      id: "3",
      text: "The wound is the place where the Light enters you.",
      author: "Rumi",
    },
    {
      id: "4",
      text: "When you do things from your soul, you feel a river moving in you, a joy.",
      author: "Rumi",
    },
    {
      id: "5",
      text: "I searched for God and found only myself. I searched for myself and found only God.",
      author: "Sufi Proverb",
    },
    {
      id: "6",
      text: "The minute I heard my first love story, I started looking for you, not knowing how blind that was. Lovers don't finally meet somewhere. They're in each other all along.",
      author: "Rumi",
    },
    {
      id: "7",
      text: "Be like the sun for grace and mercy. Be like the night to cover others' faults. Be like running water for generosity. Be like death for rage and anger. Be like the Earth for modesty. Appear as you are. Be as you appear.",
      author: "Rumi",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % quotes.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-advance every 8 seconds
  useEffect(() => {
    const interval = setInterval(goToNext, 8000);
    return () => clearInterval(interval);
  }, []);

  const currentQuote = quotes[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-muted/50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-pattern-geometric opacity-30" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Quote className="h-8 w-8 text-primary" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
              Sufi Wisdom
            </h2>
            <p className="text-muted-foreground">
              Timeless words from the masters of divine love
            </p>
          </div>

          {/* Quote Card */}
          <div className="bg-card rounded-2xl shadow-sufi p-8 md:p-12 relative border border-border">
            {/* Decorative Quote Marks */}
            <Quote className="absolute top-6 left-6 h-12 w-12 text-primary/10" />
            <Quote className="absolute bottom-6 right-6 h-12 w-12 text-primary/10 rotate-180" />

            {/* Quote Content */}
            <div
              className={`text-center transition-all duration-500 ${
                isAnimating ? "opacity-0 transform translate-y-4" : "opacity-100 transform translate-y-0"
              }`}
            >
              <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed mb-6 italic">
                "{currentQuote.text}"
              </blockquote>
              <div className="flex flex-col items-center">
                <cite className="font-serif text-lg font-semibold text-primary not-italic">
                  — {currentQuote.author}
                </cite>
                {currentQuote.source && (
                  <span className="text-sm text-muted-foreground mt-1">
                    {currentQuote.source}
                  </span>
                )}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                className="rounded-full"
                disabled={isAnimating}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {quotes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (!isAnimating) {
                        setIsAnimating(true);
                        setCurrentIndex(index);
                        setTimeout(() => setIsAnimating(false), 500);
                      }
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-primary w-6"
                        : "bg-primary/30 hover:bg-primary/50"
                    }`}
                    aria-label={`Go to quote ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="rounded-full"
                disabled={isAnimating}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SufiQuotes;
