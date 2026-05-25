import { QrCode, Download, Music, Video, TrendingUp, DollarSign, Trophy, ArrowDownToLine, FileText, Briefcase, Sparkles, BarChart2, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";

const projectsStarted = [
  {
    name: "ChuPa Lightning Scanner",
    type: "Bar Code and QR Code Scanner",
    description: "Fast offline scanning with M-Pesa QR support.",
    icon: QrCode
  },
  {
    name: "ChuPa Easy YT Download",
    type: "YouTube Downloader",
    description: "Download videos offline. No ads, no tracking.",
    icon: Download
  },
  {
    name: "ChuPa MP3 Engine",
    type: "Music Search Engine",
    description: "Search, play, and download music offline.",
    icon: Music
  },
  {
    name: "ChuPa V Converter",
    type: "Video to Audio Converter",
    description: "Convert videos to audio in browser.",
    icon: Video
  },
  {
    name: "ChuPa CSBC",
    type: "Crypto and Synthetic Derivatives Calculator",
    description: "Calculate crypto and derivatives fast.",
    icon: TrendingUp
  },
  {
    name: "ChuPa PST",
    type: "Passive-income and Side-Hustle Tracker",
    description: "Track earnings from side hustles.",
    icon: DollarSign
  },
  {
    name: "ChuPa DSL",
    type: "Data-Saving Sport Live Score",
    description: "Live scores optimized for low data usage.",
    icon: Trophy
  },
  {
    name: "ChuPa All-in-One Downloader",
    type: "Social Media Downloader",
    description: "Download from multiple platforms.",
    icon: ArrowDownToLine
  },
  {
    name: "ChuPa PDF Suite",
    type: "PDF Suite with M-Pesa Push",
    description: "Merge, split, compress PDFs offline.",
    icon: FileText
  },
  {
    name: "ChuPa CV Builder",
    type: "CV & Resume Builder",
    description: "Build professional CVs for Kenya job market.",
    icon: Briefcase
  },
  {
    name: "ChuPa PACS",
    type: "AI Powered Copywriting & Script Generator",
    description: "Generate copy and scripts with AI.",
    icon: Sparkles
  }
];

const projectsPlanned = [
  {
    name: "ChuPa Arbitrage Dashboard",
    type: "Dashboard",
    description: "Real time trading signals and crypto arbitrage dashboard.",
    icon: BarChart2
  },
  {
    name: "ChuPa Micro-SaaS Tracker",
    type: "Tracker",
    description: "Niche productivity and inventory tracker for small businesses.",
    icon: LayoutGrid
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-b border-border/40 bg-card/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-foreground text-center">Projects</h2>
        
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-bold text-foreground">Started Projects</h3>
            <span className="px-3 py-1 rounded-full bg-primary text-black text-xs font-bold uppercase tracking-wider">In Progress</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsStarted.map((project, i) => {
              const Icon = project.icon;
              return (
                <div key={i} className="bg-card border border-border/50 rounded-2xl p-6 flex flex-col h-full group transition-all duration-300 hover:border-primary/50">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-background border border-border">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground line-clamp-1" title={project.name}>{project.name}</h4>
                      <p className="text-xs text-muted-foreground font-medium">{project.type}</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/80 mb-6 flex-1">{project.description}</p>
                  <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-black font-semibold mt-auto transition-colors">
                    <a href="#" target="_blank" rel="noopener noreferrer">Get on Play Store</a>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-bold text-foreground">Coming Soon</h3>
            <span className="px-3 py-1 rounded-full bg-background border border-border text-muted-foreground text-xs font-bold uppercase tracking-wider">Planned</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsPlanned.map((project, i) => {
              const Icon = project.icon;
              return (
                <div key={i} className="bg-card/50 border border-border/30 rounded-2xl p-6 flex flex-col h-full opacity-70">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-background/50 border border-border/50">
                      <Icon className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground line-clamp-1" title={project.name}>{project.name}</h4>
                      <p className="text-xs text-muted-foreground font-medium">{project.type}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6 flex-1">{project.description}</p>
                  <Button disabled variant="outline" className="w-full border-border/50 text-muted-foreground font-semibold mt-auto cursor-not-allowed">
                    Coming Soon
                  </Button>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}