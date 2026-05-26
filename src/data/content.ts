export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'Client Portal', href: '/portal' }
]

export const pillars = [
  { title: 'Precision at Scale', description: 'Engineering solutions tailored for operational workflows and real-world process maps.' },
  { title: 'Reliability SLA', description: 'Designed for 99.9% uptime, deterministic backups, and clean recovery pathways.' },
  { title: 'Lasting Partnership', description: 'Ongoing support, remote consulting, and engineering handoffs that keep teams aligned.' },
  { title: 'Enterprise Security', description: 'Role-based access, audit trails, and hardened cloud architecture for regulated environments.' }
]

export const services = [
  { title: 'Custom ERP Development', description: 'Modular ERP systems built around traceability, approvals, and cost control across projects.' },
  { title: 'Cloud Infrastructure Architecture', description: 'Resilient multi-region deployments with automated scaling, observability, and secure ingress.' },
  { title: 'Advanced Database Optimization', description: 'Query indexing, archiving strategies, and high-frequency data pipelines for mission-critical operations.' }
]

export const caseStudies = [
  {
    title: 'Milk Dairy Management System',
    industry: 'Dairy',
    problem: 'Legacy billing and milk testing workflows slowed down collections and caused data drift across vendors.',
    solution: 'Built an offline-first dairy platform with automated fat/SNF calculations, reconciliation engines, and synced mobile collection points.',
    outcome: 'Improved payout cycle by 48%, reduced settlement errors to under 0.2%, and enabled 24/7 offline operations across remote collection centers.'
  },
  {
    title: 'Construction ERP for Site Logistics',
    industry: 'Construction',
    problem: 'Fragmented material records, inventory drift, and slow query response across multiple sites blocked execution velocity.',
    solution: 'Engineered a unified supply chain ERP with indexed site inventory, predictive restocking, and performance-tiered database routing.',
    outcome: 'Enabled 3x faster reporting, reduced inventory write-offs by 32%, and sustained consistent performance at 50k+ daily transactions.'
  }
]

export const blogPosts = [
  {
    id: '1',
    title: 'Why custom ERPs beat one-size-fits-all platforms for complex operations',
    category: 'ERP',
    excerpt: 'One-size-fits-all systems break down when workflows are unique, data is heavy, and uptime is not negotiable.',
    readingTime: '6 min',
    slug: 'custom-erps-vs-generic-platforms'
  },
  {
    id: '2',
    title: 'Database strategies for high-frequency manufacturing data',
    category: 'Database',
    excerpt: 'Partitioning, indexing, and smart archiving are the difference between a system that scales and one that collapses.',
    readingTime: '5 min',
    slug: 'database-strategies-manufacturing-data'
  },
  {
    id: '3',
    title: 'Designing cloud architecture for operations-heavy enterprises',
    category: 'Cloud',
    excerpt: 'A resilient cloud stack combines cost discipline, observability, and secure access patterns for complex businesses.',
    readingTime: '7 min',
    slug: 'cloud-architecture-ops-heavy-enterprises'
  }
]

export const industryOptions = [
  'Construction',
  'Dairy',
  'Manufacturing',
  'Other'
]
