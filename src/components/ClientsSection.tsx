import { Badge } from "@/components/ui/badge";
import { Star, MapPin } from "lucide-react";

const ClientsSection = () => {
  const clients = [
    { name: "Acme Group Mumbai", location: "Mumbai", projects: "25+" },
    { name: "Mayfair Housing Mumbai", location: "Mumbai", projects: "18+" },
    { name: "Kalptaru Infraprojects Mumbai", location: "Mumbai", projects: "32+" },
    { name: "Silver Group Mumbai", location: "Mumbai", projects: "15+" },
    { name: "APCO Infra", location: "Chennai", projects: "20+" },
    { name: "Rustomjee Group", location: "Mumbai", projects: "28+" },
    { name: "Viva Housing", location: "Mumbai", projects: "22+" },
  ];

  const testimonials = [
    {
      text: "Arihant Enterprise has been our go-to supplier for TMT steel and cement. Their quality and reliability have never let us down in our Mumbai projects.",
      client: "Project Manager, Acme Group Mumbai",
      rating: 5
    },
    {
      text: "Excellent service and competitive pricing. They understand the urgency of construction timelines and deliver accordingly across all our Mumbai sites.",
      client: "Senior Engineer, Kalptaru Infraprojects Mumbai",
      rating: 5
    }
  ];

  return (
    <section id="clients" className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Trusted by <span className="text-construction-blue">Leading Developers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We've built long-term partnerships with some of India's most prestigious 
            construction companies and developers, especially in Mumbai.
          </p>
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-card border border-border/50 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-semibold text-foreground text-lg">{client.name}</h3>
                <Badge variant="secondary" className="text-xs">
                  {client.projects} Projects
                </Badge>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">{client.location}</span>
              </div>
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