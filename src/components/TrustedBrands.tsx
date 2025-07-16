import { useEffect, useRef } from 'react';

const TrustedBrands = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Mock brand logos as text for now - in real implementation, these would be actual logos
  const brands = [
    "Stanford Academy", "Harvard Prep", "MIT School", "Oxford Institute", 
    "Cambridge College", "Princeton Academy", "Yale Foundation", "Columbia School"
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div ref={sectionRef} className="text-center space-y-8 opacity-0 transform translate-y-8 transition-all duration-1000">
          {/* Social Proof Header */}
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-wide text-muted-foreground font-medium">
              ALREADY TRUSTED BY
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              10,000+ Schools Worldwide
            </h2>
            <p className="text-accent font-semibold">
              They're growing 340% faster than competitors
            </p>
          </div>

          {/* Scrolling Brand Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-12 md:space-x-16">
              {/* First set of brands */}
              {brands.map((brand, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 flex items-center justify-center min-w-[200px] h-16 bg-card border border-border rounded-lg px-6 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-lg font-semibold text-muted-foreground whitespace-nowrap">
                    {brand}
                  </span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {brands.map((brand, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 flex items-center justify-center min-w-[200px] h-16 bg-card border border-border rounded-lg px-6 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-lg font-semibold text-muted-foreground whitespace-nowrap">
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">10k+</div>
              <div className="text-sm text-muted-foreground">Active Schools</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-accent">97%</div>
              <div className="text-sm text-muted-foreground">Retention Rate</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-secondary">340%</div>
              <div className="text-sm text-muted-foreground">Growth Average</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">24h</div>
              <div className="text-sm text-muted-foreground">Setup Time</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TrustedBrands;