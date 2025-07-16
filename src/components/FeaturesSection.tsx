import { useEffect, useRef } from 'react';
import { 
  Users, 
  TrendingUp, 
  Brain, 
  Shield, 
  Zap, 
  Target,
  BarChart3,
  Workflow,
  MessageSquare
} from 'lucide-react';

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.feature-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-slide-up');
              }, index * 150);
            });
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

  const features = [
    {
      icon: Users,
      title: "Student Magnet System",
      description: "AI-powered lead scoring identifies hot prospects before your competitors even know they exist. Stop chasing cold leads.",
      gradient: "from-primary to-primary-glow",
      urgency: "97% conversion rate",
      pattern: "diagonal"
    },
    {
      icon: Brain,
      title: "AI Revenue Predictor",
      description: "Know exactly which students will pay, when they'll pay, and how much. Never guess your cash flow again.",
      gradient: "from-accent to-green-400",
      urgency: "340% revenue boost",
      pattern: "circle"
    },
    {
      icon: TrendingUp,
      title: "Competition Crusher",
      description: "Real-time market intelligence shows you exactly what competitors are doing wrong. Steal their students legally.",
      gradient: "from-secondary to-pink-400",
      urgency: "Beat 98% of rivals",
      pattern: "square"
    },
    {
      icon: Shield,
      title: "Fortress Security",
      description: "Military-grade encryption protects student data. One breach costs $4M+ in fines. We prevent that nightmare.",
      gradient: "from-orange-500 to-red-500",
      urgency: "Zero breaches ever",
      pattern: "triangle"
    },
    {
      icon: Zap,
      title: "Lightning Automation",
      description: "Eliminate 90% of manual work. Your staff becomes 10x more productive while working half the hours.",
      gradient: "from-yellow-400 to-orange-500",
      urgency: "Save 40hrs/week",
      pattern: "star"
    },
    {
      icon: Target,
      title: "Laser-Focused Marketing",
      description: "AI finds your ideal students on social media and converts them while they sleep. Marketing that actually works.",
      gradient: "from-purple-500 to-indigo-500",
      urgency: "5x enrollment rate",
      pattern: "hexagon"
    },
    {
      icon: BarChart3,
      title: "Crystal Ball Analytics",
      description: "See 6 months into the future. Predict enrollment drops, revenue spikes, and market changes before they happen.",
      gradient: "from-cyan-400 to-blue-500",
      urgency: "99% accuracy rate",
      pattern: "diamond"
    },
    {
      icon: Workflow,
      title: "Workflow Weapon",
      description: "Turn chaos into clockwork. Every process optimized, every task automated, every outcome predictable.",
      gradient: "from-green-400 to-emerald-500",
      urgency: "10x efficiency",
      pattern: "spiral"
    },
    {
      icon: MessageSquare,
      title: "Communication Command",
      description: "Never lose a student to poor communication. AI ensures every message hits at the perfect moment.",
      gradient: "from-rose-400 to-pink-500",
      urgency: "Zero missed leads",
      pattern: "wave"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-primary">Why Schools Choose Us Over Competitors</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Turn Your School Into a
            </span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Student Magnet
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            While competitors struggle with outdated systems, our AI-powered platform 
            <span className="text-accent font-semibold"> automatically attracts, converts, and retains students</span> 
            at 10x the rate.
          </p>
        </div>

        {/* Features Grid */}
        <div ref={sectionRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card opacity-0 group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-card hover:scale-105 cursor-pointer overflow-hidden`}
            >
              {/* Pattern Interrupt Background */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} rounded-full transform translate-x-16 -translate-y-16`}></div>
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-6">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title & Urgency */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <div className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full">
                    ⚡ {feature.urgency}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* CTA */}
                <div className="pt-4">
                  <button className="text-primary font-semibold text-sm hover:text-primary-glow transition-colors duration-300 group-hover:translate-x-2 transform">
                    Learn More →
                  </button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-2xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-6">
          <p className="text-lg text-muted-foreground">
            Ready to leave your competitors in the dust?
          </p>
          <div className="inline-flex items-center space-x-4">
            <button className="bg-gradient-primary hover:shadow-intense hover:scale-105 transition-all duration-300 text-white font-semibold px-8 py-4 rounded-lg">
              Start Winning Today
            </button>
            <span className="text-sm text-accent">
              Setup takes 24 hours • Results guaranteed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;