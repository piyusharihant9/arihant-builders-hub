import { Star } from "lucide-react";
import rahejaLogo from "@/assets/clients/raheja-universal.png";
import tataLogo from "@/assets/clients/tata-projects.png";
import apcoLogo from "@/assets/clients/apco-infra.png";
import bhoomiLogo from "@/assets/clients/bhoomi-realty.png";
import capaciteLogo from "@/assets/clients/capacite.png";
import indiabullsLogo from "@/assets/clients/indiabulls.png";

const ClientsSection = () => {
  const clients = [
    { name: "Raheja Universal", logo: rahejaLogo },
    { name: "Tata Projects", logo: tataLogo },
    { name: "APCO Infra", logo: apcoLogo, location: "Uttar Pradesh" },
    { name: "Bhoomi Realty", logo: bhoomiLogo },
    { name: "Capacit'e Infraprojects", logo: capaciteLogo },
    { name: "Indiabulls Housing", logo: indiabullsLogo },
  ];

  const testimonials = [
    {
      text: "Arihant Enterprise has consistently delivered quality construction materials for our projects. Their reliability and timely delivery have made them an invaluable partner.",
      client: "Project Manager, Raheja Universal",
      rating: 5
    },
    {
      text: "Excellent quality TMT steel and cement supply. Their understanding of large-scale project requirements and competitive pricing makes them our preferred supplier.",
      client: "Senior Engineer, Tata Projects",
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
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