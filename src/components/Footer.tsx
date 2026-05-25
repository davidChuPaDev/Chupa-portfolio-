export default function Footer() {
  return (
    <footer className="py-8 bg-background">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} ChuPa. Creative High-performance User-centric Programming Applications. All rights reserved.
        </p>
      </div>
    </footer>
  );
}