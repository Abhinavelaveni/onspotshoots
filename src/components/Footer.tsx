const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-lg font-bold font-heading">
        open<span className="text-primary">shoot</span>
      </p>
      <p className="text-sm text-muted-foreground font-body">
        © {new Date().getFullYear()} openshoot. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
