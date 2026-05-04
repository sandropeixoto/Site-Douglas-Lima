import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { GlassCard } from "../components/ui/GlassCard";

const values = [
  "Credibilidade", "Comprometimento", "Qualidade",
  "Tecnologia", "Integridade", "Diálogo"
];

export function About() {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Quem é Douglas Lima
            </h2>
            <div className="space-y-6 text-lg text-slate-600 mb-8">
              <p>
                Proprietário da empresa <strong className="text-brand-600">Tyr Tecnology</strong>, sou especialista em tecnologia e inovação digital, com ampla experiência na criação de soluções estratégicas para empresas e instituições públicas.
              </p>
              <p>
                Meu trabalho se destaca pela capacidade de transformar desafios em oportunidades reais de crescimento, sempre com foco na satisfação do cliente e na excelência dos serviços prestados.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Meus Valores</h3>
              <div className="grid grid-cols-2 gap-3">
                {values.map((value, i) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent-teal-500" />
                    <span className="font-medium text-slate-700">{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <a href="#portfolio" className="inline-block px-6 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors">
              Ver Projetos de Destaque
            </a>
          </motion.div>

          {/* Stats & Mission */}
          <div className="relative">
             <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
             >
                <GlassCard className="p-8 md:p-10 relative overflow-hidden">
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-400/20 blur-3xl rounded-full"></div>
                  <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent-teal-400/20 blur-3xl rounded-full"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-slate-900 mb-8">Nossa Missão</h3>
                    
                    <div className="space-y-8">
                      <div className="flex gap-4">
                        <div className="text-5xl font-bold text-brand-200">1</div>
                        <div>
                          <h4 className="text-xl font-bold text-slate-800 mb-2">Excelência</h4>
                          <p className="text-slate-600 leading-relaxed">Prestar as melhores soluções em tecnologia, com qualidade, rapidez e ética profissional.</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="text-5xl font-bold text-brand-200">2</div>
                        <div>
                          <h4 className="text-xl font-bold text-slate-800 mb-2">Aperfeiçoamento</h4>
                          <p className="text-slate-600 leading-relaxed">Buscar especialização, e atualização constante de recursos e serviços.</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="text-5xl font-bold text-brand-200">3</div>
                        <div>
                          <h4 className="text-xl font-bold text-slate-800 mb-2">Satisfação</h4>
                          <p className="text-slate-600 leading-relaxed">Superar a satisfação dos clientes, garantindo solidez, e credibilidade.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>
             </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
