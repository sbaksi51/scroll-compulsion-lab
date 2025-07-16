import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Zap, Target } from 'lucide-react';

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
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

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Intense Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/5"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={sectionRef} className="max-w-4xl mx-auto text-center space-y-8 opacity-0">
          {/* Urgency Badge */}
          <div className="inline-flex items-center space-x-2 bg-destructive/20 border border-destructive/30 rounded-full px-6 py-3 text-sm animate-pulse">
            <Clock className="w-4 h-4 text-destructive" />
            <span className="text-destructive font-semibold">URGENT: Limited Spots Available</span>
          </div>

          {/* Power Headline */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-foreground">Your Competitors Are</span>
            <br />
            <span className="bg-gradient-to-r from-destructive to-secondary bg-clip-text text-transparent">
              Stealing Students
            </span>
            <br />
            <span className="text-foreground">Right Now</span>
          </h2>

          {/* Fear-Based Copy */}
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              While you're reading this, <span className="text-destructive font-semibold">3 students just enrolled elsewhere</span>.
              Every day you wait costs you <span className="text-accent font-semibold">$12,000+ in lost revenue</span>.
            </p>
            <p className="text-lg text-muted-foreground">
              Don't let another student slip away. Take control of your enrollment destiny.
            </p>
          </div>

          {/* Scarcity Indicators */}
          <div className="bg-card border border-destructive/30 rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-destructive rounded-full animate-pulse"></div>
                <span className="text-muted-foreground">Only 23 spots left this month</span>
              </div>
              <div className="w-px h-4 bg-border"></div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span className="text-muted-foreground">47 schools joined today</span>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-gradient-to-r from-destructive to-accent h-2 rounded-full w-[77%] animate-pulse"></div>
            </div>
            <p className="text-xs text-muted-foreground">77% of monthly slots taken</p>
          </div>

          {/* Benefits Reminder */}
          <div className="grid md:grid-cols-3 gap-6 py-8">
            <div className="flex flex-col items-center space-y-2 p-4 bg-card/50 rounded-lg border border-border/50">
              <Zap className="w-8 h-8 text-primary" />
              <span className="font-semibold text-primary">24-Hour Setup</span>
              <span className="text-sm text-muted-foreground text-center">Winning starts tomorrow</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 bg-card/50 rounded-lg border border-border/50">
              <Target className="w-8 h-8 text-accent" />
              <span className="font-semibold text-accent">340% Growth</span>
              <span className="text-sm text-muted-foreground text-center">Average revenue increase</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 bg-card/50 rounded-lg border border-border/50">
              <ArrowRight className="w-8 h-8 text-secondary" />
              <span className="font-semibold text-secondary">Zero Risk</span>
              <span className="text-sm text-muted-foreground text-center">30-day money back guarantee</span>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="space-y-6">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-intense hover:scale-110 transition-all duration-300 text-xl px-12 py-8 animate-glow-pulse font-bold"
            >
              STOP THE BLEEDING - GET SCHOOLFLOW NOW
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            
            {/* Risk Reversal */}
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                ✅ 30-day free trial • ✅ No setup fees • ✅ Cancel anytime
              </p>
              <p className="text-xs text-accent font-medium">
                We're so confident, we'll pay YOU $1,000 if it doesn't work
              </p>
            </div>
          </div>

          {/* Social Proof Reminder */}
          <div className="pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground">
              Join 10,000+ schools already using SchoolFlow to dominate their markets
            </p>
            <div className="flex justify-center items-center space-x-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
              <span className="text-sm text-muted-foreground ml-2">4.9/5 from 2,847 reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;