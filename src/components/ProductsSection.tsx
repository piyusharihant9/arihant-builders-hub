import { Card, CardContent } from "@/components/ui/card";
import { 
  Hammer, 
  Building, 
  HardHat, 
  Package, 
  Layers, 
  Wrench,
  Square,
  Zap
} from "lucide-react";
import tmtSteelImage from "@/assets/tmt-steel.webp";
import profileSheetsImage from "@/assets/profile-sheets.jpeg";
import gypsumPowderImage from "@/assets/gypsum-powder.jpeg";
import aacBlocksImage from "@/assets/aac-blocks.jpg";

const ProductsSection = () => {
  const products = [
    {
      icon: Hammer,
      name: "TMT Steel",
      description: "High-grade TMT steel bars in various sizes for structural applications",
      features: ["Fe-500", "Fe-550", "Earthquake resistant", "Corrosion resistant"],
      image: tmtSteelImage
    },
    {
      icon: Building,
      name: "Cement",
      description: "Premium quality cement from top manufacturers for all construction needs",
      features: ["OPC 43", "OPC 53", "PPC", "Bulk supply available"]
    },
    {
      icon: HardHat,
      name: "AAC Blocks",
      description: "Lightweight, energy-efficient autoclaved aerated concrete blocks",
      features: ["Lightweight", "Thermal insulation", "Fire resistant", "Easy to work with"],
      image: aacBlocksImage
    },
    {
      icon: Package,
      name: "Gypsum Powder",
      description: "High-purity gypsum powder for plastering and finishing applications",
      features: ["Smooth finish", "Quick setting", "Crack resistant", "Various grades"],
      image: gypsumPowderImage
    },
    {
      icon: Layers,
      name: "Profile Sheets",
      description: "Color coated galvanized profile sheets for roofing and cladding",
      features: ["Weather resistant", "Color variety", "Durable coating", "Custom lengths"],
      image: profileSheetsImage
    },
    {
      icon: Square,
      name: "MS Plates",
      description: "Mild steel plates for structural and fabrication applications",
      features: ["Various thicknesses", "ISI marked", "Cut to size", "Bulk quantities"]
    },
    {
      icon: Zap,
      name: "Structural Steel",
      description: "MS Angles, Beams, and Channels for structural construction",
      features: ["MS Angles", "MS Beams", "MS Channels", "Custom lengths"]
    },
    {
      icon: Wrench,
      name: "MS & GI Pipes",
      description: "Mild steel and galvanized iron pipes for plumbing and structural use",
      features: ["Various diameters", "ISI marked", "Seamless & welded", "Bulk quantities"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Our <span className="text-construction-blue">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive range of construction materials sourced from trusted manufacturers 
            and delivered with quality assurance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50 overflow-hidden">
              <CardContent className="p-0">
                {product.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-construction-blue/10 p-3 rounded-xl mr-4">
                      <product.icon className="h-6 w-6 text-construction-blue" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{product.name}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-construction-orange rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;