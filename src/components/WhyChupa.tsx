import { WifiOff, MapPin, Lock } from "lucide-react";

export default function WhyChupa() {
  const reasons = [
    {
      title: "Offline-First",
      description: "Works without internet. Save data, save money. Perfect for Kenya.",
      icon: WifiOff
    },
    {
      title: "Built for Kenya",
      description: "Optimized for M-Pesa, Safaricom networks, and local user needs.",
      icon: MapPin
    },
    {
      title: "Privacy First",
      description: "No tracking, no ads, no data selling. Your data stays yours.",
      icon: Lock
    }
  ];

  return (
    <section id="why-chupa" className="py-24 border-b border-border/40">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">Why ChuPa?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div key={i} className="bg-card border border-border/50 rounded-2xl p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_-15px_var(--primary)] group">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}