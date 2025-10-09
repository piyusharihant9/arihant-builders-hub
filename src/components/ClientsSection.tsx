import { Star } from "lucide-react";
import mayfairLogo from "@/assets/clients/mayfair-housing.png";
import silverLogo from "@/assets/clients/silver-group.png";
import supremeLogo from "@/assets/clients/supreme-group.png";
import kalpataruLogo from "@/assets/clients/kalpataru.png";
import rustomjeeLogo from "@/assets/clients/rustomjee.png";
import rahejaLogo from "@/assets/clients/raheja-universal.png";
import indiabullsLogo from "@/assets/clients/indiabulls.png";
import ltLogo from "@/assets/clients/lt-ecc.png";
import capaciteLogo from "@/assets/clients/capacite.png";
import vivaLogo from "@/assets/clients/viva-group.png";
import satraLogo from "@/assets/clients/satra-corp.png";
import jpLogo from "@/assets/clients/jp-infra.png";

const ClientsSection = () => {
  const clients = [
    { name: "Mayfair Housing", logo: mayfairLogo, location: "Mumbai" },
    { name: "Silver Group", logo: silverLogo, location: "Mumbai" },
    { name: "Supreme Group", logo: supremeLogo, location: "Pune" },
    { name: "Kalpataru Infraprojects", logo: kalpataruLogo, location: "Mumbai" },
    { name: "Rustomjee Group", logo: rustomjeeLogo, location: "Mumbai" },
    { name: "Raheja Universal", logo: rahejaLogo, location: "Mumbai" },
    { name: "Indiabulls Housing", logo: indiabullsLogo },
    { name: "L&T ECC", logo: ltLogo },
    { name: "Capacit'e Infraprojects", logo: capaciteLogo },
    { name: "Viva Group", logo: vivaLogo },
    { name: "Satra Corp", logo: satraLogo },
    { name: "JP Infra", logo: jpLogo },
  ];

  const testimonials = [
    {
      text: "Arihant Enterprise has been our trusted partner for construction materials across multiple Mumbai projects. Their quality control and timely delivery are exceptional.",
      client: "Senior Manager, Rustomjee Group",
      rating: 5
    },
    {
      text: "For our large-scale infrastructure projects, Arihant Enterprise consistently delivers top-grade TMT steel and structural materials. Their reliability is unmatched.",
      client: "Project Head, L&T ECC",
      rating: 5
    }
  ];

  return (
    <section id="clients" className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Trusted by <span className="text-construction-blue">India's Leading Developers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We've built long-term partnerships with some of India's most prestigious 
            construction companies and infrastructure developers.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-card border border-border/50 hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col items-center justify-center group"
            >
              <img 
                src={client.logo} 
                alt={`${client.name} logo`}
                className="h-20 w-auto object-contain mb-4 grayscale group-hover:grayscale-0 transition-all"
              />
              <h3 className="font-semibold text-foreground text-center text-sm">
                {client.name}
              </h3>
              {client.location && (
                <p className="text-xs text-muted-foreground mt-1">{client.location}</p>
              )}
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-card border border-border/50"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-construction-orange fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <p className="font-semibold text-foreground">{testimonial.client}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;