import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center overflow-hidden border-b border-border/40">
      {/* Background Dot Grid */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-background pointer-events-none" />

      <div className="container mx-auto px-4 z-10 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-7xl md:text-9xl font-black text-primary tracking-tighter"
            >
              ChuPa
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-2xl text-foreground font-semibold leading-relaxed"
            >
              Creative High-performance User-centric Programming Applications
            </motion.p>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Offline-first apps built in Eldoret, Kenya. Fast. Free. For you.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm text-muted-foreground font-mono flex items-center justify-center gap-3 flex-wrap"
          >
            <span>13 tools in progress</span>
            <span className="text-primary/50">•</span>
            <span>2 years experience</span>
            <span className="text-primary/50">•</span>
            <span>Built for Kenya</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <Button asChild size="lg" className="w-full sm:w-auto bg-primary text-black hover:bg-primary/90 font-bold px-8 h-12 text-base" data-testid="button-view-projects">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 font-bold px-8 h-12 text-base" data-testid="button-hire-whatsapp">
              <a href="https://wa.me/254797968578" target="_blank" rel="noopener noreferrer">
                Hire Me on WhatsApp
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}