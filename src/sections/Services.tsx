import { motion } from "motion/react";
import { Layout, LineChart, Globe, MapPin } from "lucide-react";
import { GlassCard } from "../components/ui/GlassCard";

const services = [
  {
    icon: Layout,
    title: "Portal da Transparência",
    description: "Implementação e otimização de Portais da Transparência para câmaras e prefeituras, conquistando premiações máximas a nível estadual e nacional.",
    color: "text-brand-600",
    bg: "bg-brand-100",
  },
  {
    icon: LineChart,
    title: "Marketing Digital",
    description: "Criação de estratégias digitais personalizadas para alavancar marcas, fortalecer a presença online e atrair mais clientes.",
    color: "text-accent-teal-500",
    bg: "bg-accent-teal-100",
  },
  {
    icon: Globe,
    title: "Sites e Aplicativos",
    description: "Desenvolvimento de sites responsivos e aplicativos personalizados, proporcionando soluções eficientes para o ambiente digital.",
    color: "text-indigo-500",
    bg: "bg-indigo-100",
  },
  {
    icon: MapPin,
    title: "Google Empresas",
    description: "Posicionamento de negócios nas buscas do Google, garantindo mais visibilidade, credibilidade e conversões.",
    color: "text-rose-500",
    bg: "bg-rose-100",
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6"
          >
            Áreas de Atuação
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Oferecemos um portfólio completo de serviços em tecnologia para impulsionar e destacar o seu negócio.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <GlassCard hoverEffect className="h-full p-8 flex flex-col items-start gap-4">
                <div className={`w-12 h-12 rounded-2xl ${service.bg} flex items-center justify-center mb-2`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-800">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
