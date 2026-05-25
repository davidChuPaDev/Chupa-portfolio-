export default function About() {
  return (
    <section id="about" className="py-24 border-b border-border/40">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">About David</h2>
        
        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm David Onyango, a Kenyan software engineer from Zetech University with 2 years experience building tools that actually work on low data and low budgets. I started ChuPa to solve problems I faced daily in Kenya — slow internet, high data costs, and apps that don't work offline. Every app I build is designed for speed, privacy, and zero data waste. If you need a developer who understands the Kenyan market, let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-card border border-border/50 rounded-xl p-6 text-center">
            <div className="text-3xl font-black text-primary mb-2">2+</div>
            <div className="text-sm font-medium text-foreground/80 uppercase tracking-wider">Years Exp</div>
          </div>
          <div className="bg-card border border-border/50 rounded-xl p-6 text-center">
            <div className="text-3xl font-black text-primary mb-2">13</div>
            <div className="text-sm font-medium text-foreground/80 uppercase tracking-wider">Apps</div>
          </div>
          <div className="bg-card border border-border/50 rounded-xl p-6 text-center">
            <div className="text-3xl font-black text-primary mb-2">KE</div>
            <div className="text-sm font-medium text-foreground/80 uppercase tracking-wider">Kenya-Built</div>
          </div>
        </div>
      </div>
    </section>
  );
}