import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Zap, Target, TrendingUp } from 'lucide-react';
import heroImage from '@/assets/hero-dashboard.jpg';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 pt-20 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div ref={heroRef} className="space-y-8 opacity-0">
            {/* Hook Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-primary">Join 10,000+ Schools Already Winning</span>
            </div>

            {/* Power Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Stop Losing
              </span>
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Students
              </span>
              <br />
              <span className="text-foreground">
                Start Scaling
              </span>
            </h1>

            {/* Urgency Copy */}
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Your competitors are already using AI to <span className="text-accent font-semibold">steal your students</span>. 
              Don't let them. Our platform turns chaos into <span className="text-primary font-semibold">cash flow</span> in 24 hours.
            </p>

            {/* Social Proof Stats */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-accent" />
                <span className="text-muted-foreground">97% Student Retention</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">340% Revenue Growth</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-intense hover:scale-105 transition-all duration-300 text-lg px-8 py-6 animate-glow-pulse"
              >
                Get Instant Access
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-primary/30 hover:bg-primary/10 transition-all duration-300 text-lg px-8 py-6"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch 2-Min Demo
              </Button>
            </div>

            {/* Urgency Trigger */}
            <div className="bg-card border border-accent/30 rounded-lg p-4 inline-block">
              <p className="text-sm text-accent font-medium">
                ⚡ Limited Time: 30-day free trial + AI setup included
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Only 23 spots left this month
              </p>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-primary rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-glow-pulse"></div>
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-card">
                <img 
                  src={heroImage} 
                  alt="SchoolFlow Dashboard" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Floating Achievement Cards */}
            <div className="absolute -top-6 -right-6 bg-card border border-accent/30 rounded-xl p-4 animate-float shadow-card">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <div>
                  <p className="text-xs text-muted-foreground">Live Enrollment</p>
                  <p className="text-lg font-bold text-accent">+47 Today</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-card border border-primary/30 rounded-xl p-4 animate-float shadow-card" style={{animationDelay: '2s'}}>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <div>
                  <p className="text-xs text-muted-foreground">Revenue Impact</p>
                  <p className="text-lg font-bold text-primary">$127k/mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;