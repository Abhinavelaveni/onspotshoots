import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Plans", href: "#plans" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold font-heading">
          open<span className="text-primary">shoot</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors font-body">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground font-body hover:bg-primary/90 transition-all">
            Book Now
          </a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 space-y-3">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-muted-foreground font-body">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="block rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground font-body text-center">
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
