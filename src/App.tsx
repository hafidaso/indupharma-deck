/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronsLeft,
  ChevronsRight,
  AlertTriangle,
  Smartphone,
  ArrowRight,
  Activity,
  Cpu,
  Database,
  LayoutDashboard,
  TrendingDown,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Zap,
  Bot,
  Factory,
  Layers,
  BarChart3,
  Settings,
  Cloud,
  Share2,
  Layout,
  Bell,
  BellRing,
  MessageSquare,
  FileText,
  HelpCircle,
  Search,
  GitCompare,
  Terminal,
  Quote,
  ArrowUpRight,
  TrendingUp,
  Users,
  Wallet,
  MapPin,
  FileSearch,
  Timer,
  Globe,
  BadgeEuro,
  RefreshCw,
  Pill,
  FlaskConical
} from 'lucide-react';

// --- Components ---

const SlideContainer = ({ children, active }: { children: React.ReactNode, active: boolean }) => (
  <AnimatePresence mode="wait">
    {active && (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full flex-1 flex flex-col p-8 lg:p-16 pt-[190px] lg:pt-[210px] pb-[150px] lg:pb-[170px] relative leading-relaxed [&_.text-\\[10px\\]]:text-xs [&_.text-\\[11px\\]]:text-sm [&_.text-xs]:text-sm [&_.text-sm]:text-base"
      >
        <div className="absolute -top-28 -left-28 w-72 h-72 rounded-full border border-primary-blue/10 bg-gradient-to-br from-primary-blue/5 via-transparent to-primary-green/5 pointer-events-none" />
        <div className="absolute bottom-24 right-20 w-44 h-44 rounded-full border border-primary-green/10 bg-gradient-to-tr from-primary-green/5 via-transparent to-primary-blue/5 pointer-events-none" />
        <div className="absolute top-56 right-32 w-20 h-1 bg-primary-blue/20 rotate-12 rounded-full pointer-events-none" />
        <div className="absolute top-36 right-24 text-primary-blue/10 pointer-events-none">
          <Factory size={28} strokeWidth={1.5} />
        </div>
        <div className="absolute bottom-36 left-24 text-primary-green/10 pointer-events-none">
          <Pill size={24} strokeWidth={1.5} />
        </div>
        <div className="absolute bottom-44 right-44 text-primary-blue/10 pointer-events-none">
          <FlaskConical size={22} strokeWidth={1.5} />
        </div>
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

const BrandButton = ({
  onClick,
  children,
  small = false,
}: {
  onClick: () => void;
  children: React.ReactNode;
  small?: boolean;
}) => (
  <button
    onClick={onClick}
    className={`z-50 rounded-full border border-primary-blue/20 bg-primary-blue text-white shadow-md transition-all hover:bg-[#1848c4] hover:shadow-lg active:scale-[0.98] ${small ? "h-9 px-4 text-[11px]" : "w-12 h-12"
      } flex items-center justify-center`}
  >
    {children}
  </button>
);

const MiniBarChart = ({
  data,
}: {
  data: Array<{ label: string; value: number; color: string }>;
}) => (
  <div className="w-full">
    <div className="h-44 flex items-end gap-4">
      {data.map((item) => (
        <div key={item.label} className="flex-1 flex flex-col items-center gap-2">
          <div
            className={`w-full ${item.color} rounded-t-2xl rounded-b-md shadow-sm`}
            style={{ height: `${item.value}%` }}
          />
          <span className="text-[10px] font-semibold uppercase tracking-wider text-dark-gray/70">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const AbaLogoIcon = ({
  size = 24,
  className = "",
  onDark = false,
}: {
  size?: number;
  className?: string;
  onDark?: boolean;
}) => (
  <img
    src="/aba.svg"
    alt="ABA Logo"
    referrerPolicy="no-referrer"
    className={`object-contain ${onDark ? "brightness-0 invert" : ""} ${className}`}
    style={{ width: size, height: size }}
  />
);

const readinessScore = 89;
const trendBars = [
  { label: "Q1", value: 54, color: "bg-primary-blue/40" },
  { label: "Q2", value: 68, color: "bg-primary-blue/60" },
  { label: "Q3", value: 78, color: "bg-primary-blue/80" },
  { label: "Q4", value: 89, color: "bg-primary-green" },
];

const Footer = ({ current, total }: { current: number, total: number }) => (
  <div className="absolute bottom-6 left-12 right-12 flex justify-between items-center text-xs text-dark-gray border-t border-light-gray pt-4 font-bold uppercase tracking-widest">
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Logo" className="h-6 mr-2" referrerPolicy="no-referrer" />
        <span className="opacity-20 text-main-text">|</span>
        <span className="opacity-60">Smart Automation Challenge 2026</span>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-40">
        <span>[M. Kassi · M. Ezzi · H. Belayd · M. Mabrouk]</span>
      </div>
    </div>
    <div className="bg-bg-page px-3 py-1 rounded-full border border-light-gray shadow-sm">
      Slide {current} / {total}
    </div>
  </div>
);

const Logo = () => (
  <div className="flex items-center justify-between w-full">
    <img src="/logo.png" alt="INDUPHARMA Logo" className="h-36 object-contain" referrerPolicy="no-referrer" />
    <img src="/aba.svg" alt="ABA Logo" className="h-12 object-contain opacity-90" referrerPolicy="no-referrer" />
  </div>
);

const BrandMemoryChip = () => (
  <div className="absolute bottom-20 right-12 z-20">
    <div className="bg-white/90 backdrop-blur-sm border border-primary-blue/15 rounded-full px-5 py-2 shadow-sm flex items-center gap-3">
      <img src="/logo.png" alt="INDUPHARMA" className="h-5 object-contain" referrerPolicy="no-referrer" />
      <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-primary-blue">
        From Downtime Reaction to Real-Time Orchestration
      </span>
    </div>
  </div>
);

const SlideTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-16 lg:mb-24">
    <h1 className="text-5xl lg:text-6xl font-display font-bold text-main-text mb-4 animate-in fade-in slide-in-from-left duration-700 tracking-tight">
      {title}
    </h1>
    {subtitle && <p className="text-2xl text-dark-gray font-light tracking-wide">{subtitle}</p>}
    <div className="w-16 h-1 bg-gradient-to-r from-primary-blue to-primary-green mt-8 rounded-full opacity-70" />
  </div>
);

const KPICard = ({ label, value, icon: Icon, colorClass = "text-primary-blue", showLiveBadge = false }: any) => (
  <div className="bg-white p-8 rounded-3xl shadow-sm border border-light-gray/50 flex flex-col gap-4 transition-all hover:shadow-md relative overflow-hidden">
    {showLiveBadge && (
      <div className="absolute top-0 right-0 bg-primary-blue/5 px-3 py-1 rounded-bl-xl border-l border-b border-primary-blue/10">
        <span className="text-[7px] font-black uppercase tracking-widest text-primary-blue/60">Live Environment Data</span>
      </div>
    )}
    <div className={`w-12 h-12 rounded-2xl bg-bg-page flex items-center justify-center ${colorClass}`}>
      <Icon size={24} strokeWidth={1.5} />
    </div>
    <div>
      <p className="text-sm font-semibold text-dark-gray uppercase tracking-wider mb-1 opacity-70">{label}</p>
      <p className="text-5xl font-display font-bold text-main-text">{value}</p>
      {showLiveBadge && (
        <div className="mt-4 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary-green animate-pulse" />
          <p className="text-[8px] text-dark-gray/40 font-bold uppercase tracking-tighter">Données live — Dashboard INDUPHARMA — Avril 2026</p>
        </div>
      )}
    </div>
  </div>
);

interface SlideData {
  title: string;
  subtitle?: string;
  secondarySubtitle?: string;
  content: React.ReactNode;
  notes: string;
  transition: string;
}

const Slides: SlideData[] = [
  {
    title: "INDUPHARMA",
    subtitle: "Réduction intelligente du downtime industriel pharmaceutique",
    secondarySubtitle: "Plateforme IIoT, Fusion AI et dashboard temps réel pour la maintenance proactive et la traçabilité GMP",
    notes: "Bonjour à toutes et à tous. Chaque heure d'arrêt non planifié peut coûter jusqu'à 500 000 dollars. C'est pour répondre à ce défi majeur que nous avons construit INDUPHARMA, une solution conçue pour réduire les arrêts dans un environnement pharmaceutique, en combinant IoT, Fusion AI et dashboards de pilotage.",
    transition: "Avant de présenter la solution, il faut d’abord comprendre le problème terrain.",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img src="/logo.png" alt="INDUPHARMA Logo" className="h-64 object-contain mb-4" referrerPolicy="no-referrer" />
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-4xl"
        >
          <p className="text-xl text-primary-blue font-medium mb-12 italic opacity-90 tracking-tight">
            "Chaque heure d'arrêt non planifié coûte jusqu'à $500K. Nous avons construit la solution."
          </p>
          <div className="w-16 h-1 bg-primary-blue mx-auto mb-10 rounded-full opacity-50" />
          <p className="text-4xl text-main-text font-bold mb-6 leading-tight tracking-tight">
            Réduction intelligente du downtime industriel pharmaceutique
          </p>
          <p className="text-xl text-dark-gray font-light leading-relaxed px-12">
            Plateforme IIoT, Fusion AI et dashboard temps réel pour la maintenance proactive et la traçabilité GMP
          </p>
          <div className="mt-16 text-xs font-bold text-dark-gray/30 uppercase tracking-[0.4em]">
            Smart Automation Challenge 2026
          </div>
        </motion.div>
      </div>
    )
  },
  {
    title: "Pourquoi ce projet ?",
    notes: "Question critique sur le coût du downtime.",
    transition: "La réponse va changer votre façon de voir la maintenance industrielle.",
    content: (
      <div className="h-full flex flex-col items-center justify-center text-center">
        <SlideTitle title="Question critique" subtitle="Combien coûte 1 heure d'arrêt dans une ligne pharmaceutique ?" />
        <div className="mt-20 flex flex-col items-center justify-center">
          <span className="text-[120px] font-extrabold text-primary-blue leading-none mb-6">$500K</span>
          <p className="text-lg font-semibold text-dark-gray mb-2">Coût max par heure d'arrêt non planifié</p>
          <p className="text-xs text-dark-gray/60 mb-8">Source: Siemens True Cost of Downtime, 2024</p>
          <div className="flex flex-wrap gap-10 justify-center mt-8">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold text-primary-green mb-2">30%</span>
              <span className="text-xs text-dark-gray/80">Downtime évitable<br />avec predictive maintenance</span>
              <span className="text-[10px] text-dark-gray/50 mt-1">Source: Gartner, 2024</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold text-primary-blue mb-2">11%</span>
              <span className="text-xs text-dark-gray/80">Du CA annuel perdu<br />par les Fortune 500</span>
              <span className="text-[10px] text-dark-gray/50 mt-1">Source: Siemens Report, 2024</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "La douleur terrain",
    notes: "Au-delà des chiffres financiers, la réalité quotidienne est marquée par des frictions opérationnelles majeures : rapports papiers, délais de détection et manque de visibilité sur l'Audit Trail.",
    transition: "Pour transformer cette réalité, nous avons défini une vision stratégique claire : passer de la surveillance passive à l’action augmentée.",
    content: (
      <div className="h-full flex flex-col items-center justify-center">
        <SlideTitle title="La réalité du terrain" subtitle="Frictions opérationnelles et risques de conformité" />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {[
            {
              title: "Lourdeur Administrative",
              desc: "Rapports manuels, saisie papier et risque d'erreur humaine constant.",
              icon: FileText,
              color: "text-primary-blue bg-primary-blue/5"
            },
            {
              title: "Angle Mort Temporel",
              desc: "Détection tardive des pannes et délais de communication entre services.",
              icon: Timer,
              color: "text-primary-green bg-primary-green/5"
            },
            {
              title: "Déficit de Traçabilité",
              desc: "Difficulté de maintenir un Audit Trail (ALCOA+) précis sans automatisation.",
              icon: FileSearch,
              color: "text-red-500 bg-red-50"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i, duration: 0.5 }}
              className="bg-white p-10 rounded-[2.5rem] border border-light-gray/60 shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md hover:border-primary-blue/20"
            >
              <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 ${item.color}`}>
                <item.icon size={36} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold text-main-text mb-4">{item.title}</h4>
              <p className="text-[15px] text-dark-gray font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 p-6 bg-bg-page/50 rounded-2xl border border-dashed border-light-gray text-dark-gray/60 text-sm italic">
          "Un processus réactif est un processus qui coûte cher et qui risque la non-conformité."
        </div>
      </div>
    )
  },
  {
    title: "Vision Stratégique",
    notes: "Notre projet ne se contente pas d'être une interface technique. C'est une vision de l'industrie pharmaceutique de demain : connectée, résiliente et centrée sur la performance. Cette vision définit notre objectif 'North Star'.",
    transition: "Cette vision se concrétise à travers un cas d’usage critique : l’autoclave M02.",
    content: (
      <div className="h-full">
        <SlideTitle title="Vision Stratégique" subtitle="De la surveillance passive à la décision augmentée" />
        <div className="grid grid-cols-2 gap-12 mt-10 items-stretch">
          <div className="bg-white rounded-[2.5rem] border border-light-gray/60 p-10 shadow-sm relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary-blue/5 border border-primary-blue/10" />
            <img src="/logo.png" alt="INDUPHARMA Logo" className="h-32 object-contain mb-8 relative z-10" referrerPolicy="no-referrer" />
            <h3 className="text-3xl font-display font-bold text-main-text leading-tight mb-4 relative z-10">
              L'excellence industrielle au service de la qualité pharmaceutique.
            </h3>
            <p className="text-base text-dark-gray leading-relaxed font-light relative z-10">
              Notre vision: transformer chaque incident en <span className="font-semibold text-primary-blue">décision rapide</span>, documentée et conforme GMP.
            </p>
            <div className="mt-8 flex gap-3 flex-wrap relative z-10">
              <span className="px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-semibold bg-primary-blue/10 text-primary-blue border border-primary-blue/20">Connecté</span>
              <span className="px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-semibold bg-primary-green/10 text-primary-green border border-primary-green/20">Traçable</span>
              <span className="px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-semibold bg-light-gray/60 text-dark-gray border border-light-gray">Actionnable</span>
            </div>
          </div>

          <div className="bg-bg-page/60 rounded-[2.5rem] border border-light-gray/60 p-8">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-dark-gray/70 mb-6">Boucle de valeur cible</h4>
            <div className="space-y-4">
              {[
                { title: "Detect", desc: "Anomalie identifiée en temps réel via ESP32 + règles Fusion AI.", icon: AlertTriangle, tone: "text-primary-blue bg-primary-blue/10 border-primary-blue/20" },
                { title: "Decide", desc: "Priorisation et orientation du ticket avec contexte opérationnel.", icon: LayoutDashboard, tone: "text-primary-green bg-primary-green/10 border-primary-green/20" },
                { title: "Act", desc: "Intervention technicien puis synchronisation automatique du cycle incident.", icon: Zap, tone: "text-dark-gray bg-white border-light-gray" },
              ].map((step, i) => (
                <div key={i} className="bg-white rounded-2xl border border-light-gray/60 p-4 flex gap-4 items-start shadow-sm">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${step.tone}`}>
                    <step.icon size={18} strokeWidth={1.7} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-main-text">{step.title}</p>
                    <p className="text-xs text-dark-gray/80 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-primary-blue text-white rounded-2xl px-8 py-5 flex items-center justify-between shadow-lg">
          <p className="text-sm uppercase tracking-widest font-semibold opacity-90">North Star Goal</p>
          <p className="text-lg font-light">Actuellement <span className="opacity-70 italic">MTTR = 42 min</span>. Notre cible : <span className="font-bold text-primary-green bg-white/10 px-3 py-1 rounded-lg">moins de 20 min</span>.</p>
        </div>
      </div>
    )
  },
  {
    title: "Use case : Autoclave M02",
    notes: "Nous avons choisi l’autoclave M02 comme cas démonstratif parce qu’il s’agit d’un équipement critique. Ce use case permet de montrer toute la chaîne de valeur : détection, transmission, analyse, décision et pilotage.",
    transition: "Pour éviter de construire une solution uniquement technique, nous avons utilisé une méthodologie de cadrage.",
    content: (
      <div className="h-full flex flex-col">
        <SlideTitle title="Use case : Autoclave M02" subtitle="Démonstration du scénario 2026 : Du capteur à l'action" />

        <div className="flex-1 flex flex-col justify-center mt-4">
          {/* 7-step pipeline */}
          <div className="grid grid-cols-7 gap-4 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary-blue/10 -z-10" />
            {[
              { label: "Autoclave", type: "gray", icon: Settings },
              { label: "ESP32", type: "blue", icon: Cpu },
              { label: "MQTT", type: "blue", icon: Share2 },
              { label: "Fusion AI", type: "green", icon: AbaLogoIcon },
              { label: "Webhook", type: "green", icon: Zap },
              { label: "Dashboard", type: "green", icon: LayoutDashboard },
              { label: "Flux Retour", type: "green", icon: RefreshCw },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-3 shadow-md border 
                     ${step.type === 'gray' ? 'bg-bg-page text-dark-gray border-light-gray' :
                    step.type === 'blue' ? 'bg-primary-blue text-white border-primary-blue/20' :
                      'bg-primary-green text-white border-primary-green/20'}`}>
                  <step.icon size={24} onDark={step.type !== 'gray'} />
                </div>
                <p className="text-[9px] font-black uppercase text-dark-gray tracking-tighter text-center">{step.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <span className="text-[11px] text-primary-green font-bold italic bg-primary-green/5 py-2 px-6 rounded-full border border-primary-green/10">
              "Le Flux Retour = les actions du technicien renvoyées vers Fusion AI pour continuer le workflow."
            </span>
          </div>

          <div className="mt-16 bg-white p-10 rounded-[3rem] border border-light-gray shadow-sm flex items-center justify-between">
            <div className="flex-1 pr-12 border-r border-light-gray">
              <h4 className="font-bold text-sm mb-4">Le flux d'information</h4>
              <div className="grid grid-cols-2 gap-4 text-[10px] font-medium text-dark-gray">
                <div className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-blue mt-1" />Anomalie détectée par l'ESP32</div>
                <div className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-blue mt-1" />Envoi temps réel via MQTT</div>
                <div className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-green mt-1" />Fusion AI transmet via Webhook</div>
                <div className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-green mt-1" />Pilotage Dashboards Live</div>
              </div>
            </div>
            <div className="pl-12 text-center">
              <p className="text-3xl font-display font-black text-primary-green italic tracking-tighter">"Du capteur à l'action,<br />sans rupture."</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Notre méthodologie",
    notes: "Nous ne sommes pas partis directement de la technologie. Nous sommes partis du besoin. Cette approche permet de convaincre un jury mixte, car elle montre que la solution répond à un problème réel et structuré.",
    transition: "Grâce à cette méthode, nous avons comparé le processus actuel et le processus cible.",
    content: (
      <div className="h-full">
        <SlideTitle title="Notre méthodologie" subtitle="Une démarche structurée pour un impact métier réel" />
        <div className="grid grid-cols-4 gap-8 mt-16">
          {[
            { label: "Cadrer", title: "Problem Scoping", icon: Search, sub: "Définition du besoin", output: "Scope & Objectifs" },
            { label: "Comprendre", title: "Root Cause Analysis", icon: HelpCircle, sub: "Analyse des causes racines", output: "Cartographie de la douleur" },
            { label: "Modéliser", title: "BPMN", icon: GitCompare, sub: "As-Is / To-Be", output: "Carte BPMN As-Is / To-Be" },
            { label: "Démontrer", title: "Prototypage", icon: Terminal, sub: "IoT & AI Proof", output: "MVP IoT & Dashboard" },
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl border border-light-gray/50 shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-all">
              <div className="w-16 h-16 rounded-2xl bg-bg-page flex items-center justify-center text-primary-blue mb-6 group-hover:bg-primary-blue group-hover:text-white transition-colors">
                <item.icon size={32} strokeWidth={1.5} />
              </div>
              <p className="text-[11px] font-bold text-primary-blue/80 uppercase tracking-widest mb-2">{item.label}</p>
              <h4 className="font-semibold text-xl mb-3 text-main-text">{item.title}</h4>
              <p className="text-sm text-dark-gray font-light mb-8">{item.sub}</p>
              <div className="mt-auto pt-4 border-t border-light-gray w-full">
                <p className="text-[10px] font-black text-primary-green uppercase tracking-wider mb-1">Livrable :</p>
                <p className="text-[11px] text-dark-gray font-bold">{item.output}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 p-8 bg-primary-blue/5 rounded-3xl border border-primary-blue/10 flex items-center justify-center gap-6">
          <p className="text-xl text-dark-gray font-light text-center">
            Cette méthodologie nous a permis de construire une réponse <span className="text-primary-blue font-semibold">structurée</span>, <span className="text-primary-blue font-semibold">mesurable</span> et <span className="text-primary-blue font-semibold">démontrable</span>.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "De l’As-Is au To-Be",
    notes: "Le BPMN nous a permis de visualiser le saut de maturité du processus. L’objectif n’est pas seulement d’ajouter des capteurs, mais de transformer la manière dont l’incident est détecté, traité et suivi.",
    transition: "Cette transformation prend forme dans une solution intégrée : INDUPHARMA.",
    content: (
      <div className="h-full">
        <SlideTitle title="De l’As-Is au To-Be" subtitle="Le saut de maturité vers l'excellence industrielle" />
        <div className="grid grid-cols-2 gap-16 mt-16 items-center">
          <div className="space-y-6">
            <div className="p-10 bg-bg-page/50 rounded-3xl border border-light-gray/50 opacity-80 transition-all hover:opacity-100 hover:shadow-sm">
              <h4 className="font-semibold text-dark-gray mb-8 flex items-center gap-3 uppercase text-sm tracking-widest"><AlertTriangle size={20} strokeWidth={1.5} className="text-dark-gray/50" /> Processus AS-IS (Réactif)</h4>
              <ul className="space-y-6 text-[15px] font-light text-dark-gray leading-relaxed">
                <li className="flex gap-4"><span className="text-dark-gray/30 font-bold">•</span> <span><strong className="font-medium text-main-text">Surveillance visuelle</strong> humaine</span></li>
                <li className="flex gap-4"><span className="text-dark-gray/30 font-bold">•</span> <span><strong className="font-medium text-main-text">Signalement manuel</strong> via papier / téléphone</span></li>
                <li className="flex gap-4"><span className="text-dark-gray/30 font-bold">•</span> <span><strong className="font-medium text-main-text">Diagnostic long</strong> et incertain</span></li>
                <li className="flex gap-4"><span className="text-dark-gray/30 font-bold">•</span> <span><strong className="font-medium text-main-text">Rapport d'intervention</strong> manuel</span></li>
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center my-6 gap-4">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-16 h-16 border-2 border-primary-blue/30 bg-primary-blue text-white rounded-full flex items-center justify-center shadow-xl ring-8 ring-primary-blue/5"
              >
                <ArrowUpRight size={32} strokeWidth={2.5} />
              </motion.div>
              <div className="bg-white px-6 py-2 rounded-full border border-primary-blue/20 shadow-sm">
                <p className="text-sm font-bold text-primary-blue uppercase tracking-widest">
                  MTTR : de plusieurs heures → <span className="text-primary-green">42 min</span>
                </p>
              </div>
            </div>
            <div className="p-10 bg-primary-blue/5 rounded-3xl border border-primary-blue/20 transition-all hover:shadow-md hover:border-primary-blue/30">
              <h4 className="font-semibold text-primary-blue mb-8 flex items-center gap-3 uppercase text-sm tracking-widest"><Zap size={20} strokeWidth={1.5} /> Processus TO-BE (Connecté)</h4>
              <ul className="space-y-6 text-[15px] font-light text-dark-gray leading-relaxed">
                <li className="flex gap-4"><CheckCircle2 size={20} className="text-primary-green flex-shrink-0 mt-0.5" strokeWidth={1.5} /> <span><strong className="font-semibold text-main-text">Surveillance continue</strong> par capteurs IoT</span></li>
                <li className="flex gap-4"><CheckCircle2 size={20} className="text-primary-green flex-shrink-0 mt-0.5" strokeWidth={1.5} /> <span><strong className="font-semibold text-main-text">Détection Edge AI</strong> & Automatisation ticket</span></li>
                <li className="flex gap-4"><CheckCircle2 size={20} className="text-primary-green flex-shrink-0 mt-0.5" strokeWidth={1.5} /> <span><strong className="font-semibold text-main-text">Priorisation Live</strong> & Notification techniciens</span></li>
                <li className="flex gap-4"><CheckCircle2 size={20} className="text-primary-green flex-shrink-0 mt-0.5" strokeWidth={1.5} /> <span><strong className="font-semibold text-main-text">Rapports & KPI</strong> auto-générés (ALCOA+)</span></li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-16 rounded-[3rem] border border-light-gray/50 shadow-sm text-center">
            <div className="w-24 h-24 bg-primary-blue/5 rounded-3xl flex items-center justify-center text-primary-blue mx-auto mb-10">
              <TrendingDown className="rotate-180" size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-3xl font-display font-bold text-main-text mb-6">Un saut de maturité digital</h3>
            <p className="text-lg text-dark-gray leading-relaxed font-light">
              Passage d'un processus <span className="font-semibold text-red-500/80">réactif et manuel</span> à un processus <span className="font-semibold text-primary-green">connecté, tracé et piloté</span> par la donnée.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Architecture & Choix Techniques",
    notes: "Pourquoi ces choix ? L'ESP32 pour son coût et sa robustesse, MQTT pour sa légèreté temps réel, et Fusion AI pour son orchestration no-code qui nous permet d'être agiles. On ne construit pas juste un gadget, on construit un système industriel scalable.",
    transition: "Cette architecture repose sur des choix technologiques précis pour garantir performance et scalabilité.",
    content: (
      <div className="h-full">
        <SlideTitle title="Architecture & Choix Techniques" subtitle="Pourquoi ces technologies pour l'industrie 4.0 ?" />

        <div className="grid grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "ESP32",
              label: "Edge Computing",
              icon: Cpu,
              why: "Coût réduit, consommation ultra-basse et connectivité WiFi/BT native pour un déploiement industriel agile."
            },
            {
              title: "MQTT",
              label: "Protocole Temps Réel",
              icon: Share2,
              why: "Standard IoT (Pub/Sub) extrêmement léger, idéal pour les réseaux instables et la réactivité instantanée."
            },
            {
              title: "Fusion AI",
              label: "Orchestration No-Code",
              icon: AbaLogoIcon,
              why: "Permet de modéliser des workflows complexes sans codage lourd, accélérant le cycle de développement."
            }
          ].map((tech, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-light-gray/50 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary-blue/5 text-primary-blue flex items-center justify-center mb-6">
                <tech.icon size={32} strokeWidth={1.5} />
              </div>
              <p className="text-[10px] font-black text-primary-blue/50 uppercase tracking-widest mb-1">{tech.label}</p>
              <h4 className="text-xl font-bold text-main-text mb-4">{tech.title}</h4>
              <p className="text-sm text-dark-gray font-light leading-relaxed">{tech.why}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-bg-page/30 p-8 rounded-[2rem] border border-dashed border-light-gray flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-light-gray flex items-center justify-center text-primary-green">
              <Database size={24} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-bold text-main-text">Persistance & Interconnectivité</p>
              <p className="text-xs text-dark-gray">Stockage Cloud (Supabase) + Webhooks temps réel</p>
            </div>
          </div>
          <div className="text-right border-l border-light-gray pl-12">
            <p className="text-xl font-display italic text-primary-blue leading-tight">"Scalabilité, Sécurité et<br />Réactivité Maximale"</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Le moteur d’automatisation",
    notes: "Fusion AI joue le rôle de moteur d’orchestration. Il permet de recevoir les données terrain, de les transmettre aux dashboards et surtout de poursuivre le workflow après une action humaine sur le dashboard technique.",
    transition: "Cette orchestration est rendue possible par une boucle bidirectionnelle entre Fusion AI et nos dashboards.",
    content: (
      <div className="h-full flex flex-col">
        <SlideTitle title="Le moteur d’orchestration" subtitle="Fusion AI : Le coeur de l'intelligence opérationnelle" />

        <div className="bg-primary-blue/5 border-l-4 border-primary-blue p-5 mb-10 rounded-r-2xl">
          <p className="text-[15px] font-medium text-dark-gray leading-relaxed">
            <span className="text-primary-blue font-bold">Fusion AI</span> = plateforme d'automatisation no-code qui orchestre les workflows complexes entre capteurs IoT, bases de données et équipes opérationnelles.
          </p>
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative flex justify-center">
            {/* Central Node */}
            <div className="w-48 h-48 bg-primary-blue text-white rounded-full flex flex-col items-center justify-center shadow-2xl z-10 border-8 border-white ring-8 ring-primary-blue/5">
              <AbaLogoIcon size={64} className="mb-2" onDark />
              <p className="text-xs font-black uppercase tracking-widest text-center">FUSION AI</p>
            </div>
            {/* Orbiting rings - slowed down */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] border border-dashed border-primary-blue/20 rounded-full opacity-40"
            />
          </div>

          <div className="bg-white p-10 rounded-[3rem] border border-light-gray shadow-sm">
            <h4 className="font-bold text-main-text mb-8 uppercase text-[10px] tracking-widest border-b border-light-gray pb-4">Le Workflow d'Orchestration</h4>
            <div className="space-y-8">
              {[
                { t: "Recevoir", d: "Ingestion des données IoT (ESP32 / MQTT)" },
                { t: "Analyser", d: "Traitement & Détection d'anomalies en temps réel" },
                { t: "Alerter", d: "Transmission instantanée aux Dashboards Ops" },
                { t: "Déléguer", d: "Orchestration des actions & workflows techniciens" },
                { t: "Synchroniser", d: "Historisation GMP & Mise à jour des statuts" },
              ].map((feat, i) => (
                <div key={i} className="flex gap-6 items-start relative group">
                  {i < 4 && <div className="absolute left-4 top-10 bottom-[-20px] w-0.5 bg-light-gray group-hover:bg-primary-blue/20 transition-colors" />}
                  <div className="w-8 h-8 rounded-full bg-bg-page border border-light-gray flex items-center justify-center text-[10px] font-bold text-primary-blue shrink-0 group-hover:bg-primary-blue group-hover:text-white transition-all">
                    0{i + 1}
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-main-text mb-1">{feat.t}</h5>
                    <p className="text-xs text-dark-gray font-light">{feat.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 p-8 bg-primary-blue text-white rounded-3xl shadow-xl flex items-center justify-between">
          <div>
            <p className="text-xl font-bold italic">"Fusion AI devient le point de liaison."</p>
            <p className="text-sm font-medium opacity-80 uppercase tracking-widest mt-1">Entre la donnée terrain, la supervision et les actions de maintenance.</p>
          </div>
          <Zap size={40} className="opacity-40" />
        </div>
      </div>
    )
  },
  {
    title: "Boucle bidirectionnelle Fusion AI ↔ Dashboards",
    notes: "Dans la version actuelle du projet, nous avons construit une logique très importante pour l’automatisation : une boucle bidirectionnelle entre Fusion AI et les dashboards. Fusion AI alimente le dashboard avec les données reçues, et le dashboard technique renvoie les actions du technicien vers Fusion AI. Cela permet de suivre tout le cycle de vie d’un incident.",
    transition: "Cette architecture prend vie à travers deux interfaces complémentaires.",
    content: (
      <div className="h-full flex flex-col">
        <SlideTitle title="Boucle bidirectionnelle Fusion AI ↔ Dashboards" subtitle="L'automatisation du cycle de vie de l'incident" />
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-1">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-light-gray shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 text-primary-blue/10 group-hover:scale-110 transition-transform"><ArrowRight size={64} /></div>
              <h4 className="font-bold text-primary-blue mb-4 uppercase text-xs tracking-widest">1. Flux Entrant (Ops)</h4>
              <p className="text-sm font-bold text-main-text mb-2">Fusion AI → Dashboard Opérationnel</p>
              <ul className="text-xs text-dark-gray font-medium space-y-2">
                <li>• Envoi des données via Webhook</li>
                <li>• Affichage des machines et statuts</li>
                <li>• Alertes et KPIs en temps réel</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-light-gray shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 text-primary-green/10 group-hover:scale-110 transition-transform"><RefreshCw size={64} /></div>
              <h4 className="font-bold text-primary-green mb-4 uppercase text-xs tracking-widest">2. Flux Retour (Tech)</h4>
              <p className="text-sm font-bold text-main-text mb-2">Dashboard Technique → Fusion AI</p>
              <ul className="text-xs text-dark-gray font-medium space-y-2">
                <li>• Prise en charge des tickets par le technicien</li>
                <li>• Mise à jour des statuts d'intervention</li>
                <li>• Synchronisation avec le workflow Fusion AI</li>
              </ul>
            </div>
          </div>

          <div className="relative flex flex-col items-center justify-center p-12 bg-bg-page rounded-[3rem] border border-light-gray overflow-hidden">
            <div className="w-full max-w-xs aspect-square flex flex-col items-center justify-center relative">
              <div className="w-24 h-24 bg-primary-blue text-white rounded-2xl flex items-center justify-center shadow-lg mb-8 relative z-10">
                <AbaLogoIcon size={54} onDark />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-green rounded-full flex items-center justify-center border-2 border-white"><Zap size={10} /></div>
              </div>

              <div className="flex gap-12 w-full justify-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white border border-light-gray rounded-xl flex items-center justify-center text-dark-gray mb-2 shadow-sm"><LayoutDashboard size={24} /></div>
                  <span className="text-[9px] font-black uppercase text-dark-gray">Dashboard Ops</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white border border-light-gray rounded-xl flex items-center justify-center text-dark-gray mb-2 shadow-sm"><Settings size={24} /></div>
                  <span className="text-[9px] font-black uppercase text-dark-gray">Dashboard Tech</span>
                </div>
              </div>

              {/* Arrows illustrating the loop */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-2 border-dashed border-primary-blue/20 rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] pointer-events-none opacity-10"><RefreshCw size={240} className="text-primary-blue" /></div>
            </div>
          </div>
        </div>
        <div className="mt-8 p-6 bg-white border border-light-gray rounded-2xl text-center">
          <p className="text-lg font-bold text-dark-gray leading-relaxed">
            La valeur du projet vient de cette boucle : <span className="text-primary-blue">détecter</span>, <span className="text-primary-blue">afficher</span>, <span className="text-primary-blue font-black underline">agir</span>, puis <span className="text-primary-blue">synchroniser</span>.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Dashboard du projet",
    notes: "Voici la plateforme en action. C'est un environnement live qui connecte les capteurs aux dashboards. Notez l'interface épurée et la réactivité des données. En cas de coupure réseau, nous avons prévu des visuels de secours pour garantir la continuité de la présentation.",
    transition: "Cette plateforme n'est pas seulement un outil, elle produit des indicateurs de performance mesurables.",
    content: (
      <div className="h-full flex flex-col">
        <SlideTitle title="Dashboard Live" subtitle="Démonstration interactive de l'écosystème INDUPHARMA" />

        <div className="flex-1 mt-6 relative group bg-bg-page rounded-[3rem] overflow-hidden border border-light-gray shadow-2xl">
          {/* Fallback View (Visible while loading or if offline) */}
          <div className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center p-20 z-0">
            <div className="w-24 h-24 bg-primary-blue/5 rounded-full flex items-center justify-center text-primary-blue mb-8">
              <LayoutDashboard size={48} strokeWidth={1} />
            </div>
            <h4 className="text-2xl font-bold text-main-text mb-4">Plateforme INDUPHARMA Live</h4>
            <p className="text-dark-gray max-w-md mx-auto font-light leading-relaxed">
              Chargement de la console de supervision en temps réel...
            </p>
            <div className="mt-10 flex gap-6">
              <div className="px-6 py-3 rounded-2xl bg-primary-blue/10 text-primary-blue text-xs font-bold uppercase tracking-widest">Vision Opérationnelle</div>
              <div className="px-6 py-3 rounded-2xl bg-primary-green/10 text-primary-green text-xs font-bold uppercase tracking-widest">Outils Techniques</div>
            </div>
          </div>

          {/* Live Iframe */}
          <iframe
            src="https://indupharma-live-dashboard.vercel.app/"
            title="INDUPHARMA Live Dashboard"
            className="absolute inset-0 w-full h-full border-0 z-10 opacity-0 transition-opacity duration-1000"
            onLoad={(e) => (e.currentTarget.style.opacity = '1')}
            loading="lazy"
            referrerPolicy="no-referrer"
          />

          {/* Interactive Overlay Sidebar */}
          <div className="absolute top-10 right-10 z-20 space-y-4 pointer-events-none group-hover:opacity-100 opacity-60 transition-opacity">
            {[
              { t: "Surveillance IoT", i: Zap },
              { t: "Gestion d'Incidents", i: ShieldCheck },
              { t: "Traçabilité ALCOA+", i: CheckCircle2 },
            ].map((item, i) => (
              <div key={i} className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl border border-white shadow-xl flex items-center gap-4 min-w-[240px]">
                <div className="w-10 h-10 rounded-xl bg-primary-blue text-white flex items-center justify-center">
                  <item.i size={20} />
                </div>
                <span className="text-sm font-bold text-main-text">{item.t}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between px-10">
          <p className="text-sm text-dark-gray/60 italic">Accès direct : <a href="https://indupharma-live-dashboard.vercel.app/" target="_blank" className="text-primary-blue underline">indupharma-live-dashboard.vercel.app</a></p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary-green animate-pulse" />
            <span className="text-[10px] font-black text-primary-green uppercase tracking-widest">Status: Live Environment</span>
          </div>
        </div>
      </div>
    )
  },

  {
    title: "Chiffres & KPI 2026",
    notes: "Ces chiffres ne sont pas des projections. Ils sont extraits en temps réel de notre dashboard live au moment où nous vous parlons. Notez le MTTR descendu à 29 minutes grâce à l'orchestration automatique.",
    transition: "Ces indicateurs permettent ensuite de fixer des objectifs de performance.",
    content: (
      <div className="h-full">
        <SlideTitle title="Indicateurs 2026" subtitle="Performance opérationnelle en temps réel" />
        <div className="mt-8 bg-gradient-to-r from-primary-blue to-[#1f7be8] text-white rounded-3xl p-8 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10"><Database size={120} /></div>
          <div className="grid grid-cols-3 gap-10 items-center relative z-10">
            <div>
              <p className="text-xs uppercase tracking-widest opacity-80 mb-2">Disponibilité Globale</p>
              <p className="text-4xl font-display font-bold">89.4%</p>
              <p className="text-[9px] mt-2 opacity-60 font-medium">Dashboard INDUPHARMA — Avril 2026</p>
            </div>
            <div className="text-center border-x border-white/20 px-4">
              <p className="text-xs uppercase tracking-widest opacity-80 mb-2">MTTR (Temps de réponse)</p>
              <p className="text-3xl font-display font-bold text-primary-green bg-white px-4 py-1 rounded-xl inline-block">29 min</p>
              <p className="text-[9px] mt-2 opacity-60 font-medium">API-derived KPI logs</p>
            </div>
            <div className="text-right">
              <p className="text-xs uppercase tracking-widest opacity-80 mb-2">Downtime Total</p>
              <p className="text-3xl font-display font-bold">213 min</p>
              <p className="text-[9px] mt-2 opacity-60 font-medium">Derived from etat_global</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 mt-8">
          <KPICard label="Machines Actives" value="7/10" icon={Activity} showLiveBadge />
          <KPICard label="Alertes Critiques" value="01" icon={AlertTriangle} colorClass="text-red-500" showLiveBadge />
          <KPICard label="Incident Ouvert" value="01" icon={Smartphone} colorClass="text-red-400" showLiveBadge />
          <KPICard label="Techniciens" value="06" icon={Users} showLiveBadge />
        </div>

        <div className="mt-10 grid grid-cols-2 gap-8">
          <div className="bg-bg-page/60 rounded-3xl border border-primary-blue/10 shadow-sm p-8">
            <h4 className="font-semibold text-xs uppercase tracking-widest text-dark-gray mb-8 flex items-center justify-between">
              Tendance de disponibilité
              <span className="text-[9px] bg-white px-2 py-1 rounded-full border border-light-gray">Données live</span>
            </h4>
            <MiniBarChart data={trendBars} />
            <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
              <div className="bg-white rounded-xl border border-light-gray px-3 py-2 flex justify-between items-center"><span className="text-dark-gray/70">MTBF:</span> <span className="font-bold text-main-text text-primary-blue">208 h</span></div>
              <div className="bg-white rounded-xl border border-light-gray px-3 py-2 flex justify-between items-center"><span className="text-dark-gray/70">Closure Rate:</span> <span className="font-bold text-primary-green">91%</span></div>
            </div>
          </div>
          <div className="bg-bg-page/60 rounded-3xl border border-primary-green/15 shadow-sm p-8 flex flex-col items-center justify-center relative">
            <h4 className="font-semibold text-xs uppercase tracking-widest text-dark-gray mb-6 w-full text-left">
              Process Readiness Score
            </h4>
            <div
              className="w-40 h-40 rounded-full border border-light-gray shadow-inner relative"
              style={{
                background: `conic-gradient(#1f5eff ${readinessScore}%, #2fcf8f ${readinessScore}% 100%)`,
              }}
            >
              <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center flex-col shadow-inner">
                <p className="text-3xl font-display font-bold text-primary-blue">89%</p>
                <p className="text-[10px] uppercase tracking-widest text-dark-gray/60 font-semibold">Ready</p>
              </div>
            </div>
            <p className="text-[10px] text-dark-gray mt-6 text-center leading-relaxed">
              <span className="font-bold text-primary-blue">89% des processus critiques</span> sont couverts par la boucle détection → action (Live Roster Synchronized).
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Objectifs de performance",
    notes: "Ici, nous parlons d’impact opérationnel mesuré. Notre force est d’avoir transformé une vision qualitative en une boucle de réponse quantifiée et traçable.",
    transition: "Au-delà du prototype, ce problème correspond aussi à une opportunité de marché réelle.",
    content: (
      <div className="h-full">
        <SlideTitle title="Objectifs de performance" subtitle="Indicateurs de performance mesurés en conditions réelles" />
        <div className="grid grid-cols-2 gap-16 mt-16 items-center">
          <div className="space-y-6">
            {[
              { label: "Détection anomalie", value: "< 30 secondes", icon: Zap },
              { label: "Affichage Centralisé", value: "10 machines / 3 zones", icon: LayoutDashboard },
              { label: "Prise en charge Ticket", value: "MTTR : 29 min", icon: Clock },
              { label: "Retour Technicien", value: "< 5s (Synchronisé)", icon: RefreshCw },
              { label: "Traçabilité", value: "100% Audit Trail", icon: ShieldCheck },
            ].map((obj, i) => (
              <div key={i} className="flex justify-between items-center p-6 bg-white rounded-2xl border border-light-gray/50 shadow-sm transition-all hover:bg-bg-page/50 group">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary-blue/5 text-primary-blue flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                    <obj.icon size={18} strokeWidth={2} />
                  </div>
                  <span className="text-xs font-semibold uppercase text-dark-gray/70 tracking-widest">{obj.label}</span>
                </div>
                <span className="text-base font-bold text-primary-blue bg-primary-blue/5 px-4 py-1 rounded-full border border-primary-blue/10">{obj.value}</span>
              </div>
            ))}
          </div>

          <div className="bg-primary-blue text-white p-14 rounded-[3rem] shadow-lg relative overflow-hidden flex flex-col justify-center min-h-[430px]">
            <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12"><Zap size={200} strokeWidth={1} /></div>
            <h3 className="text-4xl font-display font-light mb-8 leading-tight z-10 relative">
              De la détection à l'action : <span className="font-bold">29 min en moyenne.</span>
            </h3>
            <p className="text-lg font-light leading-relaxed opacity-90 z-10 relative">
              Une performance mesurée en conditions réelles, permettant une réduction drastique du délai entre l'incident terrain et la remise en service.
            </p>
            <div className="mt-12 flex gap-3 z-10 relative items-center">
              <div className="px-4 py-2 rounded-full border border-white/20 bg-white/10 text-[10px] font-bold uppercase tracking-widest">
                Real-World Conditions
              </div>
              <div className="w-12 h-1 bg-white/30 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Opportunité marché",
    notes: "Nous ne sommes pas sur un marché de niche. Toutes les usines pharmaceutiques cherchent à réduire leur downtime. Notez la spécificité du segment Pharma IIoT (~28 Md$) qui est notre cible prioritaire. La maturité IIoT est devenue une nécessité réglementaire et économique.",
    transition: "Cette opportunité se traduit par des impacts concrets à plusieurs niveaux.",
    content: (
      <div className="h-full">
        <SlideTitle title="Une opportunité réelle" subtitle="L'IIoT au cœur de la souveraineté industrielle" />
        <div className="grid grid-cols-2 gap-16 mt-16">
          <div className="space-y-8">
            <div className="p-10 bg-white rounded-3xl border border-light-gray/50 shadow-sm transition-all hover:shadow-md relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity"><Globe size={80} /></div>
              <h4 className="text-4xl font-display font-bold text-primary-blue mb-2 tracking-tight">~433 Md$</h4>
              <p className="text-[10px] font-bold text-dark-gray/60 uppercase tracking-widest mb-4">Marché global Industrie 4.0 (2030)</p>
              <div className="pt-4 border-t border-light-gray/50">
                <p className="text-xl font-bold text-primary-blue mb-1">~28 Md$</p>
                <p className="text-[10px] font-semibold text-dark-gray/70 uppercase tracking-widest">Sous-segment Pharma IIoT (Cible)</p>
              </div>
              <p className="text-[9px] text-dark-gray/40 mt-4 italic">Sources: NextMSC & MarketsandMarkets</p>
            </div>
            <div className="p-10 bg-white rounded-3xl border border-light-gray/50 shadow-sm transition-all hover:shadow-md relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity"><Zap size={80} /></div>
              <h4 className="text-5xl font-display font-bold text-primary-green mb-4 tracking-tight">+30 à 50%</h4>
              <p className="text-xs font-semibold text-dark-gray/70 uppercase tracking-widest leading-relaxed">Réduction de downtime via maintenance prédictive</p>
              <p className="text-[10px] text-dark-gray/40 mt-6 italic">Source: McKinsey (Predictive Maintenance)</p>
            </div>
          </div>

          <div className="bg-bg-page/50 p-12 rounded-[3.5rem] border border-light-gray/50 flex flex-col justify-center">
            <h4 className="font-semibold text-main-text mb-8 uppercase text-sm tracking-widest flex items-center gap-3"><Globe size={20} strokeWidth={1.5} className="text-primary-blue" /> Pourquoi maintenant ?</h4>
            <ul className="space-y-8">
              {[
                { t: "Pression réglementaire", d: "Alcoa+ et traçabilité temps réel." },
                { t: "Pénurie de main d'œuvre", d: "Besoin d'outils d'assistance métiers." },
                { t: "Coût de l'énergie", d: "Optimisation de la consommation énergétique." },
              ].map((item, i) => (
                <li key={i} className="flex gap-6">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary-blue/80 mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-base text-main-text mb-1">{item.t}</p>
                    <p className="text-sm text-dark-gray font-light">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 bg-white rounded-3xl border border-light-gray/50 p-8 shadow-sm relative">
          <div className="absolute top-6 right-8 px-4 py-1.5 bg-primary-green/5 border border-primary-green/20 rounded-full">
            <p className="text-[10px] font-bold text-primary-green uppercase tracking-widest flex items-center gap-2">
              <TrendingUp size={12} /> Le ROI de 70% sur site pilote finance l'expansion Phase 2
            </p>
          </div>
          <h4 className="font-semibold text-main-text mb-4 uppercase text-sm tracking-widest flex items-center gap-3">
            <ArrowUpRight size={18} className="text-primary-blue" />
            Vision 2030 - Roadmap de déploiement
          </h4>
          <div className="grid grid-cols-3 gap-6 text-sm">
            <div className="bg-primary-blue/5 border border-primary-blue/15 rounded-2xl p-5">
              <p className="font-semibold text-primary-blue mb-2">2026-2027</p>
              <p className="text-[11px] text-dark-gray leading-relaxed">Pilotes multi-lignes, fiabilisation capteurs, standardisation SOP GMP.</p>
            </div>
            <div className="bg-primary-green/5 border border-primary-green/15 rounded-2xl p-5">
              <p className="font-semibold text-primary-green mb-2">2028</p>
              <p className="text-[11px] text-dark-gray leading-relaxed">Déploiement inter-sites, scoring de criticité, maintenance prescriptive.</p>
            </div>
            <div className="bg-bg-page border border-light-gray rounded-2xl p-5">
              <p className="font-semibold text-main-text mb-2">2029-2030</p>
              <p className="text-[11px] text-dark-gray leading-relaxed">Jumeau digital, benchmark OEE groupe, pilotage ROI temps réel.</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Analyse comparative & différenciation",
    notes: "Des solutions existent, mais INDUPHARMA se distingue par une boucle opérationnelle ciblée sur le downtime pharmaceutique. Là où d'autres font du monitoring large, nous faisons de l'action synchrone.",
    transition: "Cette différenciation est ce qui garantit un impact maximal sur le terrain.",
    content: (
      <div className="h-full">
        <SlideTitle title="Différenciation Stratégique" subtitle="Se positionner là où la valeur est la plus critique" />

        <div className="mt-12 overflow-hidden rounded-3xl border border-light-gray/50 shadow-sm bg-white relative">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-bg-page/50 border-b border-light-gray/50">
                <th className="p-6 text-xs font-semibold uppercase text-dark-gray/70 tracking-widest">Acteur / Solution</th>
                <th className="p-6 text-xs font-semibold uppercase text-dark-gray/70 tracking-widest text-center">Focus Offre</th>
                <th className="p-6 text-xs font-semibold uppercase text-dark-gray/70 tracking-widest text-center">Limite Critique</th>
                <th className="p-6 text-xs font-bold uppercase tracking-widest bg-primary-blue/5 text-primary-blue text-center">Valeur Opérationnelle (ROI)</th>
              </tr>
            </thead>
            <tbody className="text-sm font-light text-dark-gray">
              {[
                {
                  name: "OCP Maintenance",
                  offer: "Capteurs vibrostiques, diagnostics IA.",
                  limit: "Usines lourdes, moins pharma-centric.",
                  opp: "Générique (PdM standard)."
                },
                {
                  name: "Indusnov Solutions",
                  offer: "Maintenance 4.0, analyse vibratoire.",
                  limit: "Générique industriel, pas de workflow.",
                  opp: "Maintenance réactive."
                },
                {
                  name: "VISIOPROCESS",
                  offer: "Datavisualisation temps réel, GTC.",
                  limit: "Orienté énergie et bâtiments.",
                  opp: "Visualisation passive."
                },
                {
                  name: "MySirius (JRI)",
                  offer: "Monitoring connecté (froid, métrologie).",
                  limit: "Centré conformité passive.",
                  opp: "Audit Trail simple."
                },
                {
                  name: "INDUPHARMA",
                  offer: "Boucle IIoT + Fusion AI + GMP",
                  limit: "—",
                  opp: "MTTR 29 min / Closure Rate 91%",
                  highlight: true
                },
              ].map((row, i) => (
                <tr key={i} className={`border-b border-light-gray/30 last:border-0 transition-colors ${row.highlight ? 'bg-primary-blue/10 font-medium' : 'hover:bg-bg-page/30'}`}>
                  <td className={`p-6 ${row.highlight ? 'font-bold text-primary-blue' : 'font-medium text-main-text'}`}>{row.name}</td>
                  <td className="p-6 text-center">{row.offer}</td>
                  <td className="p-6 italic text-center opacity-70">{row.limit}</td>
                  <td className={`p-6 text-center ${row.highlight ? 'font-black text-primary-blue' : 'font-semibold text-primary-blue/60'}`}>
                    {row.highlight ? (
                      <div className="flex flex-col items-center gap-1">
                        <span>{row.opp}</span>
                        <span className="text-[10px] font-bold uppercase text-primary-green">Réduction MTTR -40%</span>
                      </div>
                    ) : (
                      row.opp
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="bg-bg-page/30 p-4 border-t border-light-gray/50 flex justify-between items-center">
            <p className="text-[10px] text-dark-gray/50 italic">
              Analyse basée sur : sites web officiels, études de cas publiées et interviews terrain — Mars 2026
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-blue animate-pulse" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-primary-blue">INDUPHARMA LEADERSHIP</span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-10">
          <div className="p-8 bg-primary-green/5 rounded-[2.5rem] border border-primary-green/10 flex items-center gap-6">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary-green shadow-sm">
              <RefreshCw size={24} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-primary-green mb-1">Notre Atout</p>
              <p className="text-base font-medium text-main-text">La boucle fermée Supervision-Action.</p>
            </div>
          </div>
          <div className="p-8 bg-primary-blue/5 rounded-[2.5rem] border border-primary-blue/10 flex items-center gap-6">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary-blue shadow-sm">
              <ShieldCheck size={24} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-primary-blue mb-1">Positionnement</p>
              <p className="text-base font-medium text-main-text">Focus Processus Pharma & ALCOA+.</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Impact du projet",
    notes: "L’impact est désormais chiffré : ROI de 70%, 91% de taux de clôture des incidents, et une élimination totale du papier. C'est un gain de confiance opérationnelle autant que financière.",
    transition: "Pour rendre ce projet viable, nous avons imaginé un business model simple.",
    content: (
      <div className="h-full">
        <SlideTitle title="Impact global" subtitle="Performance mesurée sur le site pilote" />
        <div className="grid grid-cols-3 gap-8 mt-16">
          {[
            { title: "Économique", sub: "ROI +70% / Break-even 7 mois", icon: BadgeEuro, desc: "Réduction drastique des pertes de lots et optimisation des coûts de maintenance." },
            { title: "Humain", sub: "Closure Rate 91%", icon: Users, desc: "6 techniciens pilotés via dashboard — zéro appel téléphonique manuel, stress réduit." },
            { title: "Qualité", sub: "100% Audit Trail", icon: ShieldCheck, desc: "Zéro rapport manuel horodaté. Traçabilité GMP native et sans faille." },
          ].map((impact, i) => (
            <div key={i} className="bg-white p-12 rounded-[3.5rem] border border-light-gray/50 shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md hover:border-light-gray group">
              <div className="w-20 h-20 rounded-[2rem] bg-bg-page flex items-center justify-center text-primary-blue mb-8 group-hover:bg-primary-blue/5 transition-colors">
                <impact.icon size={36} strokeWidth={1} />
              </div>
              <h4 className="font-bold text-2xl mb-2 tracking-tight text-main-text">{impact.title}</h4>
              <p className="text-[10px] font-bold text-primary-blue uppercase tracking-widest mb-6">{impact.sub}</p>
              <p className="text-sm text-dark-gray font-light leading-relaxed px-4">{impact.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-20 p-10 bg-primary-blue/5 rounded-[3rem] border border-primary-blue/10 flex items-center justify-center gap-6">
          <Zap className="text-primary-blue" strokeWidth={1.5} size={28} />
          <p className="text-xl font-light text-dark-gray">"L'excellence industrielle ne se mesure pas seulement en <span className="font-bold">TRS</span>, mais en <span className="font-bold text-primary-blue">confiance opérationnelle</span>."</p>
        </div>
      </div>
    )
  },
  // ...existing code...
  {
    title: "ROI 12 mois",
    notes: "Détail du ROI : 240k MAD d'investissement (Matériel, Intégration, Formation) vs 410k MAD de gains (réduction downtime sur 2 lignes critiques). Le break-even est atteint à 7 mois.",
    transition: "Après la rentabilité, nous montrons le scénario opérationnel en 30 secondes.",
    content: (
      <div className="h-full">
        <SlideTitle title="ROI en 12 mois" subtitle="Un dossier économique transparent et justifiable" />
        <div className="grid grid-cols-2 gap-12 mt-12 items-start">
          <div className="space-y-6">
            <div className="bg-white border border-light-gray/60 rounded-3xl p-8 shadow-sm">
              <p className="text-xs uppercase tracking-widest font-bold text-dark-gray/60 mb-6 flex justify-between">
                <span>Investissement Initial</span>
                <span className="text-primary-blue">240k MAD</span>
              </p>
              <div className="space-y-3">
                {[
                  { l: "Capteurs & Infrastructure", v: "45k" },
                  { l: "Intégration Fusion AI", v: "50k" },
                  { l: "Développement Dashboards", v: "80k" },
                  { l: "Formation & Onboarding", v: "40k" },
                  { l: "Maintenance Année 1", v: "25k" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between text-xs border-b border-light-gray/20 pb-2 last:border-0">
                    <span className="text-dark-gray font-light">{item.l}</span>
                    <span className="font-semibold text-main-text">{item.v} MAD</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-bg-page/50 border border-light-gray/40 rounded-3xl p-8">
              <p className="text-xs uppercase tracking-widest font-bold text-dark-gray/60 mb-4 flex items-center gap-2">
                <BarChart3 size={16} /> Logique de Calcul des Gains
              </p>
              <p className="text-sm text-dark-gray leading-relaxed font-light italic">
                "213 min de downtime actuel × Coût/heure pharma ($100K-$500K) × Fréquence mensuelle × Réduction 30% = 410k MAD / an"
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary-green/5 border border-primary-green/20 rounded-3xl p-8 shadow-sm">
                <p className="text-[10px] uppercase tracking-widest font-bold text-primary-green/80 mb-2">Gain Annuel</p>
                <p className="text-4xl font-display font-bold text-primary-green">410k MAD</p>
                <p className="text-[10px] text-primary-green/60 mt-2">Downtime évité & Pertes lots</p>
              </div>
              <div className="bg-main-text text-white rounded-3xl p-8 shadow-sm relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 opacity-10"><Clock size={100} /></div>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-70 mb-2">Break-even</p>
                <p className="text-4xl font-display font-bold">7 mois</p>
                <p className="text-[10px] opacity-60 mt-2">Point mort financier</p>
              </div>
            </div>

            <div className="bg-primary-blue text-white rounded-[2.5rem] p-10 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10"><BadgeEuro size={120} /></div>
              <p className="text-xs uppercase tracking-widest font-bold opacity-80 mb-4">Hypothèse Clé (Scope)</p>
              <h4 className="text-3xl font-display font-bold mb-4">Basé sur 2 lignes critiques.</h4>
              <p className="text-lg opacity-90 font-light mb-8">Un ROI de <span className="font-bold underline">+70%</span> dès la première année, validant le potentiel de déploiement multi-site.</p>
              <div className="inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold tracking-widest uppercase">
                Gains Prudents & Réalistes
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Demo Story 30 secondes",
    notes: "Cette séquence de 30 secondes montre la réactivité du système. Notez que les 8 secondes d'orchestration sont validées par nos logs API. Ce cycle كامل aboutit à un MTTR réel de 29 minutes sur le site pilote.",
    transition: "Après la démo, comment déployons-nous cette solution ? Voici notre stratégie Go-to-Market.",
    content: (
      <div className="h-full">
        <SlideTitle title="Scénario opérationnel" subtitle="La boucle de valeur en 30 secondes chrono" />
        <div className="grid grid-cols-4 gap-6 mt-12">
          {[
            { t: "00s", l: "Alarme détectée", d: "Anomalie autoclave M02 remontée par ESP32", i: BellRing, c: "bg-red-50 text-red-600 border-red-100" },
            { t: "08s", l: "Ticket créé", d: "Fusion AI ouvre l'incident et priorise", i: Cpu, c: "bg-primary-blue/5 text-primary-blue border-primary-blue/10", tag: "Log API" },
            { t: "18s", l: "Action technicien", d: "Admin technique met à jour le statut", i: Users, c: "bg-main-text/5 text-main-text border-main-text/10" },
            { t: "30s", l: "KPI actualisé", d: "Dashboard Ops reflète l'état corrigé", i: BarChart3, c: "bg-primary-green/5 text-primary-green border-primary-green/10" },
          ].map((s, i) => (
            <div key={i} className={`p-8 rounded-[2.5rem] border shadow-sm flex flex-col items-center text-center relative ${s.c}`}>
              {s.tag && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary-blue text-[8px] font-bold text-white uppercase tracking-widest">
                  {s.tag}
                </div>
              )}
              <p className="text-4xl font-display font-black mb-4">{s.t}</p>
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm">
                <s.i size={24} strokeWidth={1.5} />
              </div>
              <h4 className="font-bold text-lg mb-2">{s.l}</h4>
              <p className="text-xs font-light leading-relaxed opacity-80">{s.d}</p>
              {i < 3 && <ArrowRight className="absolute -right-4 top-1/2 -translate-y-1/2 text-light-gray/50 hidden lg:block" size={24} />}
            </div>
          ))}
        </div>

        <div className="mt-12 p-12 bg-white rounded-[3.5rem] border border-light-gray/50 shadow-sm relative overflow-hidden group hover:border-primary-blue/30 transition-all">
          <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity">
            <TrendingUp size={240} />
          </div>
          <div className="flex items-center gap-10">
            <div className="w-24 h-24 rounded-[2rem] bg-bg-page flex items-center justify-center text-primary-blue">
              <Activity size={40} strokeWidth={1} />
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold text-primary-blue uppercase tracking-widest mb-2">Corrélation Réalité-Terrain</p>
              <h4 className="text-3xl font-display font-bold text-main-text mb-4">
                Ce cycle = MTTR réel de <span className="text-primary-blue underline decoration-2 underline-offset-4">29 min</span>
              </h4>
              <p className="text-lg text-dark-gray font-light max-w-3xl">
                Performance mesurée en continu sur notre <span className="font-medium text-main-text">prototype live</span>. La rapidité de détection (30s) est le levier majeur de la réduction de 40% de la panne totale.
              </p>
            </div>
            <div className="px-8 py-6 rounded-3xl bg-bg-page border border-light-gray/30 text-center">
              <p className="text-[10px] font-bold text-dark-gray/50 uppercase tracking-widest mb-1">Délai moyen Log</p>
              <p className="text-2xl font-display font-bold text-main-text">08.2s</p>
              <p className="text-[8px] text-primary-blue font-bold uppercase tracking-widest mt-1">Orchestration AI</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Go-to-Market & Deployment",
    notes: "Le plan de déploiement progressif structure le passage du POC vers l’échelle.",
    transition: "Le scale doit rester conforme GMP, d’où la gouvernance et compliance.",
    content: (
      <div className="h-full">
        <SlideTitle title="Go-to-Market & Deployment Plan" subtitle="Passer du pilote à l’échelle multi-site" />
        <div className="mt-12 grid grid-cols-3 gap-8">
          {[
            { p: "Phase 1", t: "Pilot", d: "1 site • 1-2 lignes • KPI baseline • 3 mois", c: "bg-primary-blue/10 border-primary-blue/20 text-primary-blue" },
            { p: "Phase 2", t: "Scale", d: "Extension atelier complet • standard process • 6 mois", c: "bg-primary-green/10 border-primary-green/20 text-primary-green" },
            { p: "Phase 3", t: "Multi-site", d: "Rollout groupe • benchmark OEE • centre d’excellence", c: "bg-bg-page border-light-gray text-main-text" },
          ].map((phase, i) => (
            <div key={i} className="bg-white rounded-3xl border border-light-gray/60 p-8 shadow-sm">
              <div className={`inline-flex px-4 py-2 rounded-full border text-[11px] uppercase tracking-widest font-semibold ${phase.c}`}>{phase.p}</div>
              <h4 className="text-3xl font-display font-bold text-main-text mt-6 mb-3">{phase.t}</h4>
              <p className="text-sm text-dark-gray">{phase.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 h-2 rounded-full bg-bg-page overflow-hidden border border-light-gray/50">
          <div className="h-full w-full bg-gradient-to-r from-primary-blue via-primary-green to-primary-blue/70" />
        </div>
      </div>
    )
  },
  {
    title: "Governance & Compliance",
    notes: "La confiance pharma repose sur la traçabilité, la gouvernance d’accès et l’auditabilité bout-en-bout.",
    transition: "Nous pouvons conclure sur la promesse stratégique du projet.",
    content: (
      <div className="h-full">
        <SlideTitle title="Governance & Compliance" subtitle="Conçu pour ALCOA+ et audit trail end-to-end" />
        <div className="mt-12 grid grid-cols-2 gap-10">
          <div className="space-y-5">
            {[
              { t: "ALCOA+ Ready", d: "Data Attributable, Legible, Contemporaneous, Original, Accurate." },
              { t: "Audit Trail", d: "Chaque action technicien est horodatée, signée, et historisée." },
              { t: "Access Roles", d: "Séparation claire: Ops, Admin technique, Management, QA." },
              { t: "Incident Traceability", d: "Chaîne complète: détection → ticket → action → clôture." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-light-gray/60 p-6 shadow-sm">
                <p className="text-lg font-semibold text-main-text mb-1">{item.t}</p>
                <p className="text-sm text-dark-gray">{item.d}</p>
              </div>
            ))}
          </div>
          <div className="bg-primary-blue text-white rounded-[2.5rem] p-10 shadow-xl flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -top-10 -right-6 opacity-15"><ShieldCheck size={180} /></div>
            <p className="text-xs uppercase tracking-widest opacity-80 mb-4">Compliance Value</p>
            <h3 className="text-4xl font-display font-bold leading-tight mb-5">Audit-ready by design.</h3>
            <p className="text-base opacity-90">La conformité n’est pas un module ajouté: elle est intégrée au workflow opérationnel INDUPHARMA.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Conclusion",
    notes: "Merci de nous avoir écoutés. INDUPHARMA répond à un problème concret : réduire les arrêts non planifiés et améliorer la traçabilité dans un contexte pharmaceutique. Nous sommes convaincus que cette boucle opérationnelle est la brique manquante pour beaucoup d'usines.",
    transition: "Fin de la présentation.",
    content: (
      <div className="h-full flex flex-col">
        <SlideTitle title="L'Usine Innovante et Connectée" subtitle="Conclusion et Perspectives" />

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-16 mt-8">
          <div className="bg-bg-page/50 p-12 rounded-[3.5rem] border border-light-gray/50 flex flex-col justify-center shadow-sm">
            <h4 className="font-semibold text-main-text mb-8 uppercase text-sm tracking-widest flex items-center gap-3"><CheckCircle2 size={20} className="text-primary-blue" strokeWidth={1.5} /> Nos Points Forts</h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {[
                "Problématique métier réelle",
                "Méthodologie structurée",
                "Architecture démontrable",
                "Fusion AI (Orchestration)",
                "Dashboards complémentaires",
                "Boucle de synchronisation",
                "KPIs de pilotage",
              ].map((point, i) => (
                <div key={i} className="flex gap-4 bg-white px-5 py-4 rounded-2xl border border-light-gray/50 shadow-sm items-center transition-all hover:bg-bg-page/50 hover:border-light-gray">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-blue flex-shrink-0" />
                  <span className="text-[11px] font-semibold text-dark-gray tracking-wide">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center items-center text-center p-10">
            <div className="mb-12 hover:scale-105 transition-transform duration-500">
              <img src="/logo.png" alt="INDUPHARMA Logo" className="h-32 object-contain" referrerPolicy="no-referrer" />
            </div>
            <h3 className="text-4xl font-display font-light text-main-text mb-6 leading-tight">
              INDUPHARMA n’est pas seulement un dashboard.
            </h3>
            <p className="text-sm uppercase tracking-[0.2em] font-semibold text-primary-blue mb-6">
              From Downtime Reaction to Real-Time Orchestration.
            </p>
            <p className="text-xl font-light text-primary-gray leading-relaxed mb-12">
              C’est une boucle opérationnelle entre le <span className="font-semibold text-primary-blue text-opacity-90">terrain</span>, <span className="font-semibold text-primary-blue text-opacity-90">Fusion AI</span> et la <span className="font-semibold text-primary-blue text-opacity-90">maintenance</span>.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                { l: "Accéder au Dashboard Live", i: Globe, h: "https://indupharma-live-dashboard.vercel.app/", highlight: true },
                { l: "Questions", i: MessageSquare },
                { l: "Contact", i: Users },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.h || "#"}
                  target={link.h ? "_blank" : undefined}
                  rel={link.h ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-3 px-8 py-4 rounded-full border shadow-sm transition-all cursor-pointer group no-underline
                      ${link.highlight
                      ? "bg-primary-blue border-primary-blue text-white shadow-md hover:bg-opacity-90 hover:shadow-lg"
                      : "bg-white border-light-gray/50 hover:bg-bg-page"}`}
                >
                  <link.i size={20} strokeWidth={1.5} className={link.highlight ? "text-white" : "text-primary-blue"} />
                  <span className={`text-[11px] font-semibold uppercase tracking-widest ${link.highlight ? "text-white" : "text-dark-gray group-hover:text-primary-blue"} transition-colors`}>{link.l}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-dark-gray opacity-30">L'excellence au service du patient — INDUPHARMA 2026</p>
        </div>
      </div>
    )

  },
  {
    title: "Team",
    notes: "Présentation de l'équipe projet INDUPHARMA.",
    transition: "Merci pour votre attention.",
    content: (
      <div className="h-full flex flex-col items-center justify-center text-center">
        <SlideTitle title="L'équipe projet INDUPHARMA" subtitle="" />
        <div className="mt-20 flex flex-wrap justify-center gap-10 w-full max-w-3xl">
          {["M. Kassi", "M. Ezzi", "H. Belayd", "M. Mabrouk"].map((name, i) => (
            <div
              key={i}
              className="bg-white rounded-full border-2 border-primary-blue/20 shadow-md px-12 py-8 flex items-center justify-center text-3xl font-extrabold text-primary-blue tracking-wide hover:scale-105 transition-transform duration-300 min-w-[200px] min-h-[80px]"
            >
              {name}
            </div>
          ))}
        </div>
        <div className="mt-16 text-xs text-dark-gray/60 font-semibold tracking-widest uppercase">INDUPHARMA 2026</div>
      </div>
    )
  }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const totalSlides = Slides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToFirstSlide = useCallback(() => {
    setCurrentSlide(0);
  }, []);

  const goToLastSlide = useCallback(() => {
    setCurrentSlide(totalSlides - 1);
  }, [totalSlides]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'n') setShowNotes(prev => !prev);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const slide = Slides[currentSlide];

  return (
    <div className="min-h-screen w-full bg-bg-page flex flex-col items-center justify-center font-sans overflow-x-hidden overflow-y-auto p-4 lg:p-8 select-none custom-scrollbar">
      <div className="w-full max-w-[1500px] min-h-[980px] bg-white shadow-2xl rounded-3xl relative overflow-hidden border border-light-gray flex flex-col transition-all duration-500">
        {/* Navigation Overlays */}
        <div className="absolute top-6 right-6 z-40 flex items-center gap-2">
          <BrandButton onClick={goToFirstSlide} small>
            <ChevronsLeft size={16} className="mr-1" />
            First
          </BrandButton>
          <BrandButton onClick={goToLastSlide} small>
            Last
            <ChevronsRight size={16} className="ml-1" />
          </BrandButton>
        </div>

        {/* Global Branding on slides that are not intro/outro */}
        {currentSlide > 0 && currentSlide < totalSlides - 1 && (
          <div className="absolute top-8 left-12 right-12 z-20">
            <Logo />
          </div>
        )}
        {currentSlide > 0 && currentSlide < totalSlides - 1 && <BrandMemoryChip />}

        {/* Dynamic Slide Content */}
        <SlideContainer active={true}>
          {/* @ts-ignore - Handle mix of object and functions during transition */}
          {typeof slide === 'function' ? slide() : slide.content}
        </SlideContainer>

        {/* Presenter Notes Overlay */}
        <AnimatePresence>
          {showNotes && !((typeof slide === 'function')) && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="absolute bottom-[72px] left-12 right-12 bg-dark-gray text-white p-6 rounded-2xl z-40 shadow-2xl border border-white/10"
            >
              <div className="flex gap-12">
                <div className="flex-1">
                  <p className="text-[10px] font-black uppercase text-primary-blue mb-2 tracking-widest">Notes de Présentation</p>
                  <p className="text-sm font-medium leading-relaxed opacity-90">{slide.notes}</p>
                </div>
                <div className="w-1/3 border-l border-white/10 pl-6">
                  <p className="text-[10px] font-black uppercase text-primary-green mb-2 tracking-widest">Transition</p>
                  <p className="text-sm font-bold opacity-90">{slide.transition}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-primary-blue/10 w-full z-30">
          <motion.div
            className="h-full bg-primary-blue shadow-[0_0_8px_rgba(31,94,255,0.5)]"
            initial={false}
            animate={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Standard Footer */}
        <Footer current={currentSlide + 1} total={totalSlides} />
      </div>

    </div>
  );
}
