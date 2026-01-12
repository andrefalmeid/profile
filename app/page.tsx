"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github, Linkedin, Mail, FileText, Code2,
  Briefcase, GraduationCap, MapPin, Phone,
  Terminal, Award, Layers, CheckCircle2,
  Moon, Sun, Sparkles
} from "lucide-react";


const profile = {
  name: "André Filipe Pereira de Almeida",
  role: "Desenvolvedor Front-End Pleno",
  location: "Minas Gerais, Brasil",
  status: "Disponível para novas oportunidades",
  contact: {
    email: "andrefelipi2@hotmail.com",
    linkedin: "https://www.linkedin.com/in/andref-almeida",
    phone: "(38) 99878-9364",
    github: "https://github.com/andrefalmeid"
  },
  about: "Desenvolvedor Front-End especializado em Next.js, React e TypeScript. Minha trajetória é marcada pela evolução técnica dentro de um produto complexo de comércio exterior (SaaS): iniciei no projeto desde sua concepção e, através de entregas consistentes, fui contratado pelo cliente final (Omega Solutions) para assumir integralmente a responsabilidade pelo front-end. Tenho experiência em todo o ciclo de vida de desenvolvimento, desde a construção das bases do sistema até a otimização de performance e refatoração estratégica para escalabilidade. Focado em entregar interfaces de alto impacto para clientes críticos (como Johnson & Johnson LATAM), combino domínio técnico com visão de negócio. Profissional motivado por excelência técnica e aberto a novas conexões e oportunidades no mercado.",

  skills: [
    "Next.js", "React.js", "TypeScript", "Tailwind CSS",
    "Refatoração / Clean Code",
    "ApexCharts / Highcharts",
    "Git / GitHub", "Scrum / TDD",
    "Material-UI", "Consumo de APIs REST"
  ],
  softSkills: [
    "Comunicação Eficaz", "Resolução de Problemas",
    "Atenção aos Detalhes", "Autogestão",
    "Trabalho em Equipe", "Proatividade",
    "Adaptabilidade"
  ],

  experience: [
    {
      company: "Omega Solutions",
      role: "Desenvolvedor Front-End Pleno (Responsável Técnico)",
      period: "Set 2025 – Jan 2026",
      achievements: [
        {
          title: "Liderança e Evolução do Front-End",
          desc: "Como ponto focal da tecnologia no projeto Vallora, fui responsável por manter e evoluir a arquitetura do sistema. Realizei melhorias significativas em códigos desenvolvidos nas fases iniciais do projeto, elevando o padrão de qualidade e performance."
        },
        {
          title: "Refatoração e Melhoria Contínua",
          desc: "Identifiquei gargalos e reescrevi módulos críticos do sistema para garantir maior manutenibilidade e escalabilidade, preparando a aplicação para o aumento de demanda dos clientes."
        },
        {
          title: "Features de Alto Valor",
          desc: "Desenvolvimento autônomo de dashboards analíticos complexos e relatórios interativos, utilizando bibliotecas como ApexCharts, atendendo diretamente às necessidades de visualização de dados de grandes multinacionais."
        },
        {
          title: "Gestão de Entregas",
          desc: "Responsável integral pelo ciclo de desenvolvimento do front-end, desde a análise da tarefa até o deploy e validação em produção, garantindo estabilidade e cumprimento de prazos sem supervisão técnica direta."
        }
      ]
    },
    {
      company: "Cube App's Consultoria",
      role: "Desenvolvedor Front-End Júnior",
      period: "Nov 2023 – Set 2025",
      achievements: [
        {
          title: "Desenvolvimento do Zero",
          desc: "Atuação desde o início do projeto Vallora, construindo as interfaces fundamentais do sistema utilizando Next.js e Tailwind CSS, transformando requisitos de negócio em telas funcionais."
        },
        {
          title: "Integração de APIs",
          desc: "Consumo de APIs REST, implementando tratamento robusto de erros, estados de carregamento (loading skeletons) e feedback visual para o usuário."
        },
        {
          title: "Evolução Acelerada",
          desc: "Iniciei dando suporte em tarefas menores e, através de aprendizado contínuo e pair programming com desenvolvedores seniores, assumi progressivamente features complexas até me tornar totalmente independente na stack."
        },
        {
          title: "Qualidade de Código",
          desc: "Aplicação de boas práticas de componentização no React e tipagem rigorosa com TypeScript para evitar bugs em produção."
        }
      ]
    }
  ],
  certifications: [
    {
      name: "EF SET English Certificate (C2 Proficient)",
      issuer: "EF Standard English Test",
      year: "2023",
      icon: <Terminal size={16} />
    },
    {
      name: "Figma: Criando interfaces do zero ao protótipo",
      issuer: "Udemy / Design",
      year: "2023",
      icon: <Layers size={16} />
    },
    {
      name: "ID Class: Curso de Identidade Visual",
      issuer: "Marcelo Kimura",
      year: "2022",
      icon: <Layers size={16} />
    },
    {
      name: "Git e GitHub: Compartilhando e colaborando",
      issuer: "Alura",
      year: "2023",
      icon: <Code2 size={16} />
    }
  ],
  education: [
    {
      institution: "UFVJM",
      degree: "Bacharelado em Sistemas de Informação",
      period: "2016 - 2021",
      details: "TCC premiado (3º lugar) no IHC 2022. Foco em Design Participativo."
    }
  ]
};

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen lg:h-screen bg-slate-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-200 transition-colors duration-300 font-sans selection:bg-indigo-500/30 flex flex-col overflow-hidden">

      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 p-3 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-lg border border-slate-200 dark:border-slate-700 hover:scale-110 transition-all hover:text-indigo-600 dark:hover:text-indigo-400"
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <div className="fixed inset-0 z-0 opacity-60 dark:opacity-15 pointer-events-none transition-opacity duration-300"
        style={{
          backgroundImage: `linear-gradient(${isDarkMode ? '#4f46e5' : '#cbd5e1'} 1px, transparent 1px), linear-gradient(90deg, ${isDarkMode ? '#4f46e5' : '#cbd5e1'} 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}>
      </div>

      <div className="flex-1 min-h-0 w-full max-w-350 mx-auto p-4 md:p-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 h-full">

          {/* COLUNA ESQUERDA (PERFIL) */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-4 xl:col-span-4 space-y-4 h-auto lg:h-full lg:overflow-y-auto lg:pr-2 no-scrollbar lg:pb-4"
          >
            {/* CARD PRINCIPAL */}
            <div className="bg-white dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 relative overflow-hidden transition-all duration-300 group">

              <div className="absolute top-0 right-0 p-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 dark:bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600 dark:bg-green-500"></span>
                </span>
              </div>

              <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-indigo-100 dark:from-indigo-600/20 to-transparent transition-colors duration-300" />

              <div className="relative">
                {/* AVATAR */}
                <div className="w-20 h-20 md:w-24 md:h-24 bg-linear-to-br from-indigo-600 to-purple-700 dark:from-indigo-500 dark:to-purple-600 rounded-2xl mb-6 flex items-center justify-center text-3xl md:text-4xl font-bold text-white shadow-lg shadow-indigo-500/20 transform -rotate-6 group-hover:rotate-0 transition-transform duration-300 origin-bottom-right">
                  {profile.name.charAt(0)}
                </div>

                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">{profile.name}</h1>
                <p className="text-indigo-700 dark:text-indigo-400 font-medium text-base md:text-lg mb-4">{profile.role}</p>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 dark:bg-green-500/10 dark:border-green-500/20 dark:text-green-400 text-xs font-semibold mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-green-500" />
                  {profile.status}
                </div>

                <div className="flex flex-col gap-2.5 text-sm text-slate-700 dark:text-slate-400 mb-8">
                  <ContactItem icon={<Mail size={18} />} text={profile.contact.email} href={`mailto:${profile.contact.email}`} />
                  <ContactItem icon={<Phone size={18} />} text={profile.contact.phone} href={'https://wa.me/5538998789364'} />
                  <ContactItem icon={<MapPin size={18} />} text={profile.location} />
                </div>

                <div className="flex gap-3">
                  <SocialBtn icon={<Linkedin size={20} />} href={profile.contact.linkedin} />
                  <SocialBtn icon={<Github size={20} />} href={profile.contact.github} />
                  <a href="/curriculo.pdf" target="_blank" className="flex-1 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-slate-900 p-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10">
                    <FileText size={20} /> CV
                  </a>
                </div>
              </div>
            </div>

            {/* CARD CORE STACK */}
            <div className="bg-white dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-none transition-all duration-300">
              <h3 className="text-slate-900 dark:text-white font-bold mb-4 flex items-center gap-2">
                <Code2 size={20} className="text-indigo-600 dark:text-indigo-400" /> Core Stack
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {profile.skills.slice(0, 8).map(skill => (
                  <span key={skill} className="text-xs font-medium px-2.5 py-1 bg-slate-100 dark:bg-white/5 rounded text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5 cursor-default hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CARD SOFT SKILLS */}
            <div className="bg-white dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-none transition-all duration-300">
              <h3 className="text-slate-900 dark:text-white font-bold mb-4 flex items-center gap-2">
                <Sparkles size={20} className="text-emerald-500 dark:text-emerald-400" /> Soft Skills
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {profile.softSkills.map(skill => (
                  <span key={skill} className="text-xs font-medium px-2.5 py-1 bg-slate-100 dark:bg-white/5 rounded text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5 cursor-default hover:border-emerald-300 dark:hover:border-emerald-500/50 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </motion.aside>

          {/* COLUNA DIREITA (CONTEÚDO) */}
          <main className="lg:col-span-8 xl:col-span-8 space-y-6 lg:space-y-8 h-auto lg:h-full lg:overflow-y-auto lg:pr-2 custom-scrollbar lg:pb-20 pb-12">

            <Section delay={0.1} title="Sobre Mim">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg">
                {profile.about}
              </p>
            </Section>

            <Section delay={0.2} title="Trajetória Profissional" icon={<Briefcase className="text-purple-600 dark:text-purple-400" size={24} />}>
              <div className="relative space-y-12 pl-4">

                <div className="absolute left-5.75 top-4 bottom-4 w-0.5 bg-slate-300 dark:bg-indigo-500/20" />

                {profile.experience.map((job, index) => (
                  <div key={index} className="relative pl-10 group">

                    <div className="absolute left-4.25 top-6.5 z-10">
                      <div className="w-3.5 h-3.5 bg-slate-50 dark:bg-slate-900 rounded-full border-2 border-slate-500 dark:border-slate-500 group-hover:border-indigo-600 dark:group-hover:border-indigo-400 transition-colors" />
                    </div>

                    <div className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-2xl p-5 md:p-6 hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-colors shadow-sm dark:shadow-none">
                      <div className="flex flex-col xl:flex-row xl:items-start justify-between mb-6 gap-2 md:gap-4">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors">
                            {job.role}
                          </h3>
                          <p className="text-indigo-700 dark:text-indigo-300 font-medium mt-1">{job.company}</p>
                        </div>

                        <span className="shrink-0 text-xs md:text-sm font-mono text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900/80 px-3 py-1 rounded-lg border border-slate-200 dark:border-white/5 h-fit whitespace-nowrap shadow-sm dark:shadow-none w-fit">
                          {job.period}
                        </span>
                      </div>

                      {/* RENDERIZAÇÃO DOS TÓPICOS (ACHIEVEMENTS) */}
                      <ul className="space-y-4">
                        {job.achievements.map((item, i) => (
                          <li key={i} className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                            <strong className="block text-slate-800 dark:text-white mb-1 font-semibold">
                              {item.title}
                            </strong>
                            {item.desc}
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section delay={0.3} title="Certificações" icon={<Award className="text-yellow-600 dark:text-yellow-500" size={24} />}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {profile.certifications.map((cert, index) => (
                  <div key={index} className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-white/5 p-4 rounded-xl flex items-center gap-4 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors group shadow-sm dark:shadow-none">
                    <div className="p-3 bg-white dark:bg-slate-800 rounded-lg text-indigo-600 dark:text-indigo-400 group-hover:text-white group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500 transition-colors shadow-sm border border-slate-100 dark:border-none">
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="text-slate-900 dark:text-white font-semibold text-sm leading-tight mb-1">{cert.name}</h4>
                      <p className="text-slate-500 text-xs">{cert.issuer} • {cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section delay={0.4} title="Formação" icon={<GraduationCap className="text-indigo-600 dark:text-indigo-400" size={24} />}>
              {profile.education.map((edu, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="mt-1">
                    <CheckCircle2 className="text-green-600 dark:text-green-500" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{edu.institution}</h3>
                    <p className="text-indigo-700 dark:text-indigo-300 font-medium">{edu.degree}</p>
                    <p className="text-slate-500 text-sm mt-1">{edu.period}</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 italic">
                      "{edu.details}"
                    </p>
                  </div>
                </div>
              ))}
            </Section>

          </main>
        </div>
      </div>

      <style jsx global>{`
        /* Oculta scrollbar visualmente */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(156, 163, 175, 0.3);
          border-radius: 20px;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
}

// COMPONENTES REUTILIZÁVEIS
function Section({ children, delay, title, icon }: any) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay }}
      className="bg-white dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-6 md:mb-8 pb-4 border-b border-slate-100 dark:border-white/5">
        {icon && <span className="p-2 bg-slate-50 dark:bg-white/5 rounded-lg border border-slate-100 dark:border-none">{icon}</span>}
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}

function ContactItem({ icon, text, href }: any) {
  const content = (
    <div className="flex items-center gap-3 hover:text-indigo-700 dark:hover:text-white transition-colors cursor-pointer group text-slate-600 dark:text-slate-400">
      <span className="shrink-0 text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-800 dark:group-hover:text-indigo-300">
        {icon}
      </span>
      <span className="truncate">{text}</span>
    </div>
  );

  return href ? <a href={href} target="_blank">{content}</a> : content;
}

function SocialBtn({ icon, href }: { icon: React.ReactNode, href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      className="p-3 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-indigo-600 text-slate-600 dark:text-slate-300 hover:text-indigo-700 dark:hover:text-white rounded-xl border border-slate-200 dark:border-white/10 transition-all hover:scale-105"
    >
      {icon}
    </a>
  );
}