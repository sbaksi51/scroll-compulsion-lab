import { useEffect, useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      question: "How fast can I see results with SchoolFlow?",
      answer: "Most schools see a 40% increase in enrollments within the first 30 days. Our AI starts optimizing your lead flow immediately, and you'll get your first qualified leads within 24 hours of setup. The full transformation typically happens within 60-90 days, but you'll feel the difference immediately."
    },
    {
      question: "What if my current system is too complex to switch?",
      answer: "That's exactly why we built SchoolFlow. Our migration team handles everything - data transfer, staff training, system integration. Most schools are fully operational within 24 hours with ZERO downtime. We've migrated over 10,000 schools from legacy systems, including the most complex ones."
    },
    {
      question: "Is my student data safe with SchoolFlow?",
      answer: "Absolutely. We use military-grade encryption, SOC 2 compliance, and FERPA-certified security protocols. Your data is safer with us than with 99% of school systems. We've had zero security breaches in our 7-year history, while data breaches cost schools an average of $4.2M."
    },
    {
      question: "How much does SchoolFlow actually cost?",
      answer: "SchoolFlow pays for itself within 30 days through increased enrollments. Our average school sees $127,000+ in additional monthly revenue. Plans start at $297/month, but most schools save 10x that amount in reduced admin costs alone. Plus, we offer a 30-day money-back guarantee."
    },
    {
      question: "What if my staff isn't tech-savvy?",
      answer: "SchoolFlow is designed for real people, not tech experts. Our interface is simpler than Facebook. Plus, we provide white-glove onboarding, unlimited training, and 24/7 support. Your staff will be more productive on day one than they were with your old system."
    },
    {
      question: "Can SchoolFlow integrate with my existing tools?",
      answer: "Yes! SchoolFlow connects with 200+ popular education tools including QuickBooks, Google Workspace, Zoom, and most student information systems. Our integration team ensures everything works together seamlessly. If we don't have an integration you need, we'll build it for you."
    },
    {
      question: "What makes SchoolFlow different from other school management systems?",
      answer: "While others focus on basic record-keeping, SchoolFlow actively grows your school. Our AI predicts which prospects will enroll, automates your marketing, and optimizes every touchpoint. We're not just software - we're your growth partner. That's why our schools grow 340% faster than competitors."
    },
    {
      question: "What if SchoolFlow doesn't work for my specific type of school?",
      answer: "SchoolFlow works for every type of educational institution - from K-12 schools to universities, trade schools to language academies. We customize the platform for your specific needs during setup. If you're not completely satisfied within 30 days, we'll refund every penny AND pay you $1,000 for your time."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div ref={sectionRef} className="max-w-4xl mx-auto space-y-12 opacity-0">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Questions That Keep You Up at Night
            </h2>
            <p className="text-xl text-muted-foreground">
              We've answered them all. Your success is <span className="text-primary font-semibold">guaranteed</span>.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 hover:border-primary/30 transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary text-lg py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Bottom CTA */}
          <div className="text-center space-y-6 pt-12 border-t border-border">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">Still Have Questions?</h3>
              <p className="text-muted-foreground">
                Our education experts are standing by to give you a personalized demo
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-primary hover:shadow-intense hover:scale-105 transition-all duration-300 text-white font-semibold px-8 py-4 rounded-lg">
                Get Personal Demo
              </button>
              <button className="border-2 border-primary/30 hover:bg-primary/10 transition-all duration-300 text-primary font-semibold px-8 py-4 rounded-lg">
                Call (555) 123-GROW
              </button>
            </div>
            <p className="text-sm text-accent">
              Available 7 days a week • Average response time: 2 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;