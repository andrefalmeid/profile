"use client";

import { motion } from "framer-motion";
import {
  Github, Linkedin, Mail, FileText, Code2,
  Briefcase, GraduationCap, MapPin, Phone,
  Terminal, Award, Layers, CheckCircle2
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

  about: "Desenvolvedor Front-End com forte evolução técnica nos últimos 2 anos. Iniciei minha trajetória no projeto 'Vallora' (comércio exterior) como auxiliar, absorvendo arquitetura e padrões. Em 2025, assumi integralmente a responsabilidade pelo front-end, focando em refatoração de código legado, melhoria de performance e implementação de novas features para clientes críticos como Johnson & Johnson LATAM.",

  skills: [
    "Next.js", "React.js", "TypeScript", "Tailwind CSS",
    "Refatoração / Clean Code",
    "ApexCharts / Highcharts",
    "Git / GitHub", "Scrum / TDD",
    "Material-UI", "Consumo de APIs REST"
  ],

  experience: [
    {
      company: "Omega Solutions",
      role: "Desenvolvedor Front-End Pleno (Responsável Técnico)",
      period: "Set 2025 - Jan 2026",
      description: "Assumi a liderança técnica do front-end, atuando de forma autônoma na evolução do produto. Meu foco principal foi a refatoração de módulos legados para garantir escalabilidade e a implementação de novas funcionalidades solicitadas. Mantive a estabilidade do sistema e a qualidade do código até a reestruturação da equipe por mudanças de demanda.",
    },
    {
      company: "Cube App's (Alocado no Projeto Vallora)",
      role: "Desenvolvedor Front-End Júnior",
      period: "Nov 2023 - Set 2025",
      description: "Atuação em par com Desenvolvedor Sênior na construção da base do sistema Vallora. Participei da implementação da arquitetura definida em Next.js e TypeScript, desenvolvendo interfaces e dashboards. Foi um período de intenso aprendizado técnico e entrega de features seguindo padrões rigorosos estabelecidos pela liderança.",
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
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 selection:bg-indigo-500/30 font-sans">

      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 opacity-15 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 md:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-4 space-y-6 h-fit lg:sticky lg:top-8"
          >
            {/* Card Perfil */}
            <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              {/* Efeito de Status "Open to Work" */}
              <div className="absolute top-0 right-0 p-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </div>

              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-indigo-600/20 to-transparent" />

              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-6 flex items-center justify-center text-4xl font-bold text-white shadow-lg shadow-indigo-500/20">
                  {profile.name.charAt(0)}
                </div>

                <h1 className="text-3xl font-bold text-white mb-2 leading-tight">{profile.name}</h1>
                <p className="text-indigo-400 font-medium text-lg mb-4">{profile.role}</p>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  {profile.status}
                </div>

                <div className="space-y-4 text-sm text-slate-400 mb-8">
                  <ContactItem icon={<Mail size={18} />} text={profile.contact.email} href={`mailto:${profile.contact.email}`} />
                  <ContactItem icon={<Phone size={18} />} text={profile.contact.phone} />
                  <ContactItem icon={<MapPin size={18} />} text={profile.location} />
                </div>

                <div className="flex gap-3">
                  <SocialBtn icon={<Linkedin size={20} />} href={profile.contact.linkedin} />
                  <SocialBtn icon={<Github size={20} />} href={profile.contact.github} />
                  <a href="/curriculo.pdf" target="_blank" className="flex-1 bg-white text-slate-900 p-3 rounded-xl font-bold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                    <FileText size={20} /> CV Completo
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Code2 size={20} className="text-indigo-400" /> Core Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.slice(0, 8).map(skill => (
                  <span key={skill} className="text-xs font-medium px-2 py-1 bg-white/5 rounded text-slate-300 border border-white/5 hover:border-indigo-500/50 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.aside>

          <main className="lg:col-span-8 space-y-8">

            <Section delay={0.1} title="Sobre Mim">
              <p className="text-slate-300 leading-relaxed text-lg">
                {profile.about}
              </p>
            </Section>

            <Section delay={0.2} title="Trajetória Profissional" icon={<Briefcase className="text-purple-400" size={24} />}>
              <div className="relative space-y-12 pl-4">
                <div className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500 to-transparent opacity-30" />

                {profile.experience.map((job, index) => (
                  <div key={index} className="relative pl-8 group">
                    <div className="absolute left-0 top-2 w-12 h-12 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-slate-900 group-hover:ring-indigo-500/30 transition-all" />
                    </div>

                    <div className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:border-indigo-500/30 transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                            {job.role}
                          </h3>
                          <p className="text-indigo-300 font-medium">{job.company}</p>
                        </div>
                        <span className="mt-2 md:mt-0 text-sm font-mono text-slate-400 bg-slate-900/80 px-3 py-1 rounded-lg border border-white/5">
                          {job.period}
                        </span>
                      </div>

                      <p className="text-slate-300 leading-relaxed text-base">
                        {job.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section delay={0.3} title="Certificações" icon={<Award className="text-yellow-500" size={24} />}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {profile.certifications.map((cert, index) => (
                  <div key={index} className="bg-slate-800/40 border border-white/5 p-4 rounded-xl flex items-center gap-4 hover:bg-slate-800/60 transition-colors group">
                    <div className="p-3 bg-slate-800 rounded-lg text-indigo-400 group-hover:text-white group-hover:bg-indigo-500 transition-colors">
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm leading-tight mb-1">{cert.name}</h4>
                      <p className="text-slate-500 text-xs">{cert.issuer} • {cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section delay={0.4} title="Formação" icon={<GraduationCap className="text-indigo-400" size={24} />}>
              {profile.education.map((edu, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="mt-1">
                    <CheckCircle2 className="text-green-500" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{edu.institution}</h3>
                    <p className="text-indigo-300">{edu.degree}</p>
                    <p className="text-slate-500 text-sm mt-1">{edu.period}</p>
                    <p className="text-slate-400 text-sm mt-2 italic">
                      "{edu.details}"
                    </p>
                  </div>
                </div>
              ))}
            </Section>

          </main>
        </div>
      </div>
    </div>
  );
}

function Section({ children, delay, title, icon }: any) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay }}
      className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl"
    >
      <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/5">
        {icon && <span className="p-2 bg-white/5 rounded-lg">{icon}</span>}
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}

function ContactItem({ icon, text, href }: any) {
  const content = (
    <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer group">
      <span className="text-indigo-400 group-hover:text-indigo-300">{icon}</span>
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
      className="p-3 bg-white/5 hover:bg-indigo-600 text-slate-300 hover:text-white rounded-xl border border-white/10 transition-all hover:scale-105"
    >
      {icon}
    </a>
  );
}