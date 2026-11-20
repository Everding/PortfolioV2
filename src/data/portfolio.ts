import type {
  AboutContent,
  ContactLink,
  NavItem,
  Profile,
  Project,
  SectionMeta,
  SkillGroup,
} from '../types'

export const profile: Profile = {
  fullName: 'Miguel David Rivadeneira',
  displayName: 'David Rivadeneira',
  role: 'Desarrollador Fullstack',
  rolePrefix: 'Desarrollador',
  roleAccent: 'Fullstack',
  tagline: 'Cambio problemas por soluciones.',
  summary: 'Construyo aplicaciones web completas, del backend a la interfaz.',
  location: 'Tucumán, Argentina',
  availability: 'Disponible para trabajar',
  experience: '1 año con React, JavaScript y Next.js.',
  email: 'migueldavidrivadeneira@gmail.com',
  phone: '+54 3814570068',
  cvFileName: 'david-rivadeneira-cv.pdf',
  cvHref: './david-rivadeneira-cv.pdf',
  meta: ['TUCUMÁN, AR', '+1 AÑO DE EXPERIENCIA', 'FULLSTACK'],
  portrait: {
    src: './profile.png',
    alt: 'Retrato de David Rivadeneira sobre un fondo oscuro',
  },
}

export const navItems: readonly NavItem[] = [
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contacto', href: '#contacto' },
]

export const sections = {
  about: {
    index: '01',
    eyebrow: 'SOBRE MÍ',
    title: 'Construyo producto, no solo código.',
    lead: 'Formación técnica, mirada de producto y ganas de sumar en un equipo.',
  },
  projects: {
    index: '02',
    eyebrow: 'PROYECTOS',
    title: 'Un proyecto, de punta a punta.',
    lead: 'Diseño, desarrollo y despliegue de una aplicación real para un negocio gastronómico.',
  },
  stack: {
    index: '03',
    eyebrow: 'STACK',
    title: 'Herramientas que uso.',
    lead: 'Tecnologías con las que trabajo día a día, del frontend a la base de datos.',
  },
  contact: {
    index: '04',
    eyebrow: 'CONTACTO',
    title: 'Hablemos de tu próximo proyecto.',
    lead: 'Estoy disponible para posiciones fullstack, freelance o colaboraciones.',
  },
} satisfies Record<string, SectionMeta>

export const about: AboutContent = {
  paragraphs: [
    'Soy Miguel David Rivadeneira, desarrollador web Full Stack graduado de la UTN – Facultad Regional Tucumán en la carrera de Técnicatura Universitaria en Programación.',
    'Apasionado por la tecnología y por construir soluciones digitales completas, desde el backend hasta interfaces modernas y fluidas. Tengo una sólida base técnica en React, TypeScript, C#, .NET, Node.js y bases de datos, y me caracterizo por mi capacidad de aprendizaje autónomo y excelentes habilidades de comunicación.',
    'Creativo, proactivo y siempre en búsqueda de nuevos desafíos, estoy listo para mi primera gran oportunidad profesional en el ámbito corporativo, donde pueda aportar valor real y seguir creciendo dentro del ecosistema IT.',
  ],
  facts: [
    {
      title: 'Formación',
      body: 'Técnico Universitario en Programación, UTN Facultad Regional Tucumán.',
    },
    {
      title: 'Enfoque',
      body: 'Frontend con React y Next.js; backend con Node.js y .NET.',
    },
    {
      title: 'Búsqueda',
      body: 'Primera oportunidad profesional en el ámbito corporativo.',
    },
  ],
}

export const projects: readonly Project[] = [
  {
    id: 'cafeteria-management',
    title: 'Gestión integral para cafetería',
    role: 'Fullstack Developer · Freelance',
    period: 'Ago. 2025 — Dic. 2025',
    description:
      'Desarrollé una aplicación web para la gestión integral de una cafetería, enfocada en mejorar la organización de pedidos, productos y usuarios. Implementé un sistema con autenticación, roles y control de acceso, junto con una interfaz dinámica e intuitiva. El frontend fue construido con React/Next.js y el backend con Node.js, integrando comunicación mediante APIs para asegurar eficiencia y escalabilidad.',
    outcomes: [
      'Gestión de pedidos y productos en un solo lugar.',
      'Autenticación con roles y control de acceso.',
      'Comunicación por APIs entre cliente y servidor.',
    ],
    tech: ['React', 'Next.js', 'Node.js', 'APIs REST', 'Auth & roles'],
    videoId: 'QeYriV1PlSY',
    videoTitle: 'Demostración de la aplicación de gestión para cafetería',
  },
]

export const skillGroups: readonly SkillGroup[] = [
  {
    label: 'Frontend',
    skills: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TailwindCSS', icon: 'tailwind' },
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'node' },
      { name: 'C#', icon: 'csharp' },
      { name: '.NET', icon: 'dotnet' },
      { name: 'Python', icon: 'python' },
    ],
  },
  {
    label: 'Datos',
    skills: [{ name: 'MySQL', icon: 'mysql' }],
  },
  {
    label: 'Herramientas',
    skills: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
    ],
  },
]

export const emailContact: ContactLink = {
  id: 'email',
  label: 'Email',
  value: profile.email,
  href: `mailto:${profile.email}`,
  icon: 'mail',
  external: false,
}

export const contacts: readonly ContactLink[] = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: '+54 9 381 457-0068',
    href: 'https://wa.me/5493814570068',
    icon: 'whatsapp',
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: '/in/david-rivadeneira',
    href: 'https://www.linkedin.com/in/david-rivadeneira-172151168/',
    icon: 'linkedin',
    external: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: '@Everding',
    href: 'https://github.com/Everding',
    icon: 'github',
    external: true,
  },
  {
    id: 'phone',
    label: 'Teléfono',
    value: profile.phone,
    href: 'tel:+543814570068',
    icon: 'phone',
    external: false,
  },
]
