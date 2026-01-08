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
              With more than 40 years of experience, Arihant Enterprise was started by Late Mr. Piyush Ratilal Sheth, 
              the founder of the organisation, in 1982. With extensive experience in retail as well as project supplies, 
              he built a strong foundation for the business. Later, the baton was handed to Raj Piyush 
              Sheth for expansion and bringing new age techniques to the business. Today, we serve 
              major developers and contractors with a comprehensive range of high-quality construction materials.
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