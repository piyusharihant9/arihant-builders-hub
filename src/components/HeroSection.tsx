import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Construction materials warehouse"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-construction-blue/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Leading Supplier of{" "}
            <span className="text-construction-orange">Premium</span>{" "}
            Construction Materials
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Trusted by major developers across India for TMT steel, cement, AAC blocks, 
            and comprehensive construction solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" className="group">
              Get Quote Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              View Products
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <Shield className="h-8 w-8 text-construction-orange" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">40+</p>
                <p className="text-white/80">Years Experience</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <Award className="h-8 w-8 text-construction-orange" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">500+</p>
                <p className="text-white/80">Projects Delivered</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <Users className="h-8 w-8 text-construction-orange" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">50+</p>
                <p className="text-white/80">Developer Partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;