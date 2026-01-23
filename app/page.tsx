"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github, Linkedin, Mail, FileText, Code2,
  Briefcase, GraduationCap, MapPin, Phone,
  Terminal, Award, Layers, CheckCircle2,
  Moon, Sun, Play, ExternalLink,
  Smartphone, Monitor, X, ChevronLeft, ChevronRight,
  ZoomIn, ZoomOut, RotateCcw
} from "lucide-react";

// DADOS DO PERFIL
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
  about: "Desenvolvedor Front-End especializado em Next.js, React e TypeScript. Minha trajetória é marcada pela evolução técnica dentro de um produto complexo de comércio exterior (SaaS): iniciei no projeto desde sua concepção e, através de entregas consistentes, fui contratado pelo cliente final (Omega Solutions) para assumir integralmente a responsabilidade pelo front-end.",

  projectHighlight: {
    title: "SaaS Vallora - Comércio Exterior",
    description: "Plataforma Enterprise utilizada por multinacionais (ex: Johnson & Johnson) para gestão de importação/exportação. Atuei como Tech Lead, utilizando Next.js, implementando Dashboards com ApexCharts e otimizando a performance de tabelas com milhares de registros.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "ApexCharts", "Figma"],
    links: {
      figma: "https://www.figma.com/design/q3iosN6XtWrdKL58UfOeW6/Vallora?node-id=0-1&m=dev&t=CafbDenxSt0bHCD0-1"
    },
    gallery: [
      "/projects/vallora/print-demo(1).png",
      "/projects/vallora/print-demo(2).png",
      "/projects/vallora/video-demo.mp4",
      "/projects/vallora/print-demo(3).png",
      "/projects/vallora/print-demo(4).png",
      "/projects/vallora/print-demo(5).png",
      "/projects/vallora/print-demo(6).png",
      "/projects/vallora/print-demo(7).png",
      "/projects/vallora/print-demo(8).png",
      "/projects/vallora/print-demo(9).png",
      "/projects/vallora/print-demo(10).png",
      "/projects/vallora/print-demo(11).png",
      "/projects/vallora/print-demo(12).png",
      "/projects/vallora/print-demo(13).png",
      "/projects/vallora/print-demo(14).png"
    ]
  },


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
          desc: "Como ponto focal da tecnologia no projeto Vallora, fui responsável por manter e evoluir a arquitetura do sistema."
        },
        {
          title: "Refatoração e Melhoria Contínua",
          desc: "Identifiquei gargalos e reescrevi módulos críticos do sistema para garantir maior manutenibilidade e escalabilidade."
        },
        {
          title: "Features de Alto Valor",
          desc: "Desenvolvimento autônomo de dashboards analíticos complexos e relatórios interativos utilizando ApexCharts."
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
          desc: "Atuação desde o início do projeto Vallora, construindo as interfaces fundamentais do sistema utilizando Next.js e Tailwind CSS."
        },
        {
          title: "Integração de APIs",
          desc: "Consumo de APIs REST, implementando tratamento robusto de erros e loading skeletons."
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

const isVideo = (src: string) => src.endsWith('.mp4') || src.endsWith('.webm');

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [scale, setScale] = useState(1); // Estado para controlar o Zoom

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Navegação
  const showNext = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      setScale(1); // Reseta o zoom ao trocar
      return (prev + 1) % profile.projectHighlight.gallery.length;
    });
  }, []);

  const showPrev = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      setScale(1); // Reseta o zoom ao trocar
      return (prev - 1 + profile.projectHighlight.gallery.length) % profile.projectHighlight.gallery.length;
    });
  }, []);

  // Controles de Zoom
  const zoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale(prev => Math.min(prev + 0.5, 4)); // Máximo 4x
  };

  const zoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale(prev => Math.max(prev - 0.5, 1)); // Mínimo 1x
  };

  const resetZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale(1);
  };


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, showNext, showPrev]);

  return (
    <div className="min-h-screen lg:h-screen bg-slate-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-200 transition-colors duration-300 font-sans selection:bg-indigo-500/30 flex flex-col overflow-hidden">
      {/* Botão de Tema */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 p-3 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-lg border border-slate-200 dark:border-slate-700 hover:scale-110 transition-all hover:text-indigo-600 dark:hover:text-indigo-400"
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Background Grid */}
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
            <div className="bg-white dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 relative overflow-hidden transition-all duration-300 group">
              <div className="absolute top-0 right-0 p-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 dark:bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600 dark:bg-green-500"></span>
                </span>
              </div>
              <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-indigo-100 dark:from-indigo-600/20 to-transparent transition-colors duration-300" />
              <div className="relative">
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
          </motion.aside>

          {/* COLUNA DIREITA (CONTEÚDO) */}
          <main className="lg:col-span-8 xl:col-span-8 space-y-6 lg:space-y-8 h-auto lg:h-full lg:overflow-y-auto lg:pr-2 custom-scrollbar lg:pb-20 pb-12">

            <Section delay={0.1} title="Sobre Mim">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg">
                {profile.about}
              </p>
            </Section>

            {/* SEÇÃO: CASE VALLORA */}
            <Section delay={0.15} title="Destaque: Vallora" icon={<Monitor className="text-blue-500" size={24} />}>
              <div className="space-y-6">
                <p className="text-slate-600 dark:text-slate-300">
                  {profile.projectHighlight.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {profile.projectHighlight.technologies.map(tech => (
                    <span key={tech} className="px-2 py-1 text-xs font-mono bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded border border-blue-200 dark:border-blue-800">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={profile.projectHighlight.links.figma}
                  target="_blank"
                  className="block w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-xl p-5 hover:border-indigo-500 dark:hover:border-indigo-400 group transition-all relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-10 opacity-5 dark:opacity-10 pointer-events-none">
                    <Smartphone size={120} />
                  </div>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                      <Smartphone size={32} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-lg text-slate-900 dark:text-white">Acessar Protótipo Mobile</h4>
                        <ExternalLink size={16} className="text-slate-400 group-hover:text-indigo-500 transition-colors" />
                      </div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Clique para visualizar o estudo de UX/UI completo e navegável diretamente no Figma.
                      </p>
                    </div>
                  </div>
                </a>

                {/* Galeria de Prints & Vídeo */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <Layers size={16} /> Galeria de Mídia (Clique para ampliar)
                  </h4>
                  <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar snap-x">
                    {profile.projectHighlight.gallery.map((item, i) => (
                      <div
                        key={i}
                        onClick={() => { setSelectedIndex(i); setScale(1); }}
                        className="snap-center shrink-0 w-70 md:w-87.5 aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-white/10 cursor-pointer hover:ring-2 hover:ring-indigo-500 transition-all group relative"
                      >
                        {isVideo(item) ? (
                          <div className="w-full h-full flex items-center justify-center bg-black">
                            <video src={item} className="w-full h-full object-cover opacity-80" muted />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="p-3 bg-black/50 rounded-full backdrop-blur-sm border border-white/20">
                                <Play fill="white" className="text-white" size={24} />
                              </div>
                            </div>
                            <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">Vídeo Demo</span>
                          </div>
                        ) : (
                          <img src={item} alt={`Mídia Vallora ${i}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Section>

            {/* Trajetória, etc... */}
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

            {/* Certificações e Formação */}
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

      {/* MODAL DE LIGHTBOX */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            {/* Botão de Fechar */}
            <button className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50">
              <X size={24} />
            </button>

            {/* Setas de Navegação */}
            <button
              onClick={(e) => { e.stopPropagation(); showPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50 hidden md:block"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); showNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50 hidden md:block"
            >
              <ChevronRight size={32} />
            </button>

            {/* CONTEÚDO */}
            <div className="relative w-full h-full max-w-6xl flex items-center justify-center flex-col" onClick={(e) => e.stopPropagation()}>

              <div className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    {isVideo(profile.projectHighlight.gallery[selectedIndex]) ? (
                      <video
                        src={profile.projectHighlight.gallery[selectedIndex]}
                        controls
                        autoPlay
                        className="max-w-full max-h-full rounded-lg shadow-2xl outline-none"
                      />
                    ) : (
                      <motion.img
                        src={profile.projectHighlight.gallery[selectedIndex]}
                        alt="Preview em tela cheia"
                        animate={{ scale: scale }}
                        drag={scale > 1}
                        dragConstraints={{ left: -scale * 500, right: scale * 500, top: -scale * 500, bottom: scale * 500 }}
                        className={`max-w-full max-h-full object-contain rounded-lg shadow-2xl ${scale > 1 ? 'cursor-grab active:cursor-grabbing' : ''}`}
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* BARRA DE CONTROLES (ZOOM) - SÓ APARECE SE FOR IMAGEM */}
              {!isVideo(profile.projectHighlight.gallery[selectedIndex]) && (
                <div className="mt-4 flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 z-50">
                  <button onClick={zoomOut} className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors" title="Zoom Out">
                    <ZoomOut size={20} />
                  </button>

                  <span className="text-white font-mono text-sm w-12 text-center">{Math.round(scale * 100)}%</span>

                  <button onClick={zoomIn} className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors" title="Zoom In">
                    <ZoomIn size={20} />
                  </button>

                  <div className="w-px h-4 bg-white/20 mx-2"></div>

                  <button onClick={resetZoom} className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors" title="Resetar">
                    <RotateCcw size={18} />
                  </button>
                </div>
              )}

              {/* Contador */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 text-white/50 text-sm font-mono -mt-5">
                {selectedIndex + 1} / {profile.projectHighlight.gallery.length}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: rgba(156, 163, 175, 0.3); border-radius: 20px; }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb { background-color: rgba(255, 255, 255, 0.1); }
      `}</style>
    </div>
  );
}

// COMPONENTES AUXILIARES
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
    <a href={href} target="_blank" className="p-3 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-indigo-600 text-slate-600 dark:text-slate-300 hover:text-indigo-700 dark:hover:text-white rounded-xl border border-slate-200 dark:border-white/10 transition-all hover:scale-105">
      {icon}
    </a>
  );
}