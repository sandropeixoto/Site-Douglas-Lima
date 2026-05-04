import { motion } from "motion/react";
import { GlassCard } from "../components/ui/GlassCard";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Portais da Transparência",
    category: "Reconhecimento Estadual",
    description: "Implementação de portais que receberam reconhecimento estadual e nacional por sua eficiência e conformidade.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Sites Corporativos",
    category: "Design Responsivo",
    description: "Desenvolvimento de plataformas digitais que proporcionam experiência otimizada em todos os dispositivos.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Apps Personalizados",
    category: "Mobile First",
    description: "Criação de soluções móveis nativas e híbridas que atendem às necessidades específicas de cada cliente.",
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Estratégias de SEO",
    category: "Performance",
    description: "Posicionamento de empresas no topo das buscas, aumentando visibilidade e taxa de conversões.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800",
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Projetos de Destaque
            </h2>
            <p className="text-lg text-slate-600">
              Conheça as soluções que estão transformando as operações e resultados dos nossos clientes em todo o Brasil.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <GlassCard className="p-4 sm:p-6 flex flex-col h-full hoverEffect">
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                    <ExternalLink className="w-5 h-5 text-brand-600" />
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                  <span className="text-brand-600 font-medium text-sm mb-2">{project.category}</span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base mt-auto">
                    {project.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
