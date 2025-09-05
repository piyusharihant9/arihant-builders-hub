import { Building2, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-construction-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Building2 className="h-8 w-8 text-construction-orange mr-3" />
              <span className="font-display font-bold text-xl">Arihant Enterprise</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Leading supplier of premium construction materials, serving major developers 
              across India with quality assurance and reliable delivery.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-construction-orange mr-3" />
                <span className="text-white/80">piyush.arihant9@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-construction-orange mr-3" />
                <span className="text-white/80">+91 98697 82132</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-construction-orange mr-3" />
                <span className="text-white/80">16 Vallabhs society, Ghatkopar East, Mumbai 400075</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Products</h3>
            <ul className="space-y-2 text-white/80">
              <li>TMT Steel</li>
              <li>Cement</li>
              <li>AAC Blocks</li>
              <li>Gypsum Powder</li>
              <li>Profile Sheets</li>
              <li>MS Plates</li>
              <li>Structural Steel</li>
              <li>MS & GI Pipes</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-white/80">
              <li>Bulk Supply</li>
              <li>On-time Delivery</li>
              <li>Quality Assurance</li>
              <li>Technical Support</li>
              <li>Custom Orders</li>
              <li>Pan-India Delivery</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © {new Date().getFullYear()} Arihant Enterprise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;