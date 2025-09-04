import { CheckCircle, Target, Zap } from "lucide-react";
import materialsImage from "@/assets/materials-showcase.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Quality Assured",
      description: "All materials undergo rigorous quality checks and meet industry standards"
    },
    {
      icon: Target,
      title: "Reliable Supply",
      description: "Consistent and timely delivery to keep your projects on schedule"
    },
    {
      icon: Zap,
      title: "Competitive Pricing",
      description: "Best market rates with flexible payment terms for all clients"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              About <span className="text-construction-blue">Arihant Enterprise</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over 15 years of experience in the construction industry, Arihant Enterprise 
              has established itself as one of the most trusted suppliers of construction materials 
              in India. We serve major developers and contractors with a comprehensive range of 
              high-quality materials.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-construction-orange mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={materialsImage}
              alt="Construction materials showcase"
              className="rounded-2xl shadow-card w-full"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-construction-blue/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;