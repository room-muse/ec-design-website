export function Footer() {
  return (
    <footer className="bg-[#121212] text-[#B9B2A8]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="text-2xl text-white mb-4 tracking-tight" style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}>RoomMuse</div>
            <p className="text-sm leading-relaxed text-[#B9B2A8]">
              Transforming furniture catalogs into shoppable room experiences.
            </p>
          </div>
          
          <div>
            <h4 className="text-white mb-4 text-sm font-medium">Product</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#integration" className="hover:text-white transition-colors">Integration</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4 text-sm font-medium">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4 text-sm font-medium">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#2A2A2C] flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm">
            © 2026 RoomMuse by EC Design. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}