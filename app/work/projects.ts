export type Project = {
  slug: string;
  index: string;
  name: string;
  category: string;
  headline: string;
  summary: string;
  challenge: string;
  solution: string;
  audience: string[];
  features: { title: string; text: string }[];
  outcomes: string[];
  images: { src: string; alt: string; className?: string }[];
  liveUrl: string;
  liveLabel: string;
};

export const projects: Project[] = [
  {
    slug: 'tradework', index: '01', name: 'TradeWork', category: 'Field service management · CRM · Portals',
    headline: 'The work behind the work, finally organized.',
    summary: 'TradeWork is a field service management platform for contractors and service businesses. It brings jobs, customers, workers, communication, and day-to-day operations into one responsive system.',
    challenge: 'Service businesses often grow on a patchwork of spreadsheets, text messages, paper notes, and disconnected tools. Important job details are hard to find, customers lack visibility, and owners spend too much time coordinating work instead of moving it forward.',
    solution: 'TradeWork was designed as a shared operating system for the entire service lifecycle. An internal workspace gives the business control of requests, active jobs, teams, and customer relationships, while dedicated customer and contractor portals give everyone the right information without exposing the back office.',
    audience: ['Service business owners', 'Office and operations teams', 'Field workers and contractors', 'Customers'],
    features: [
      { title: 'Job management', text: 'Track work from the first request through scheduling, progress, documentation, invoicing, and completion.' },
      { title: 'Built-in CRM', text: 'Keep customer records, job history, conversations, and important details connected in one place.' },
      { title: 'Customer portal', text: 'Give customers a clear, self-service view of their requests, project updates, and shared information.' },
      { title: 'Contractor portal', text: 'Coordinate assignments and give field partners direct access to the work and details relevant to them.' },
      { title: 'Responsive operations', text: 'A consistent experience across office desktops, tablets, and phones for work that rarely stays at a desk.' },
      { title: 'Role-based workflows', text: 'Purpose-built views help owners, employees, contractors, and customers focus on their part of the process.' },
    ],
    outcomes: ['One source of truth for jobs and customers', 'Less time spent chasing updates', 'Clearer customer and contractor communication', 'A system designed to grow with the business'],
    images: [
      { src: '/tradework-portfolio.png', alt: 'TradeWork job management displayed on desktop and mobile', className: 'landscape' },
      { src: '/tradework-mobile.png', alt: 'TradeWork mobile field service interface', className: 'portrait-pair' },
    ],
    liveUrl: 'https://app.tradeworkapp.com', liveLabel: 'Open TradeWork',
  },
  {
    slug: 'elite-driving-school', index: '02', name: 'Elite Driving School', category: 'Education operations · Scheduling · Student portal',
    headline: 'A better road from registration to license.',
    summary: 'A complete business and student platform for a popular Minneapolis driving school, connecting class creation, enrollment, payments, permit education, and behind-the-wheel scheduling.',
    challenge: 'Driver education has several moving parts: classroom requirements, multiple locations, instructor availability, behind-the-wheel lessons, documents, payments, and progress toward state requirements. The school needed one system that could serve its staff, teachers, students, and families.',
    solution: 'The platform combines the public website, registration flow, staff tools, teacher workflows, and a student portal. Owners and teachers can create and manage classes while students and parents can register, choose flexible sessions, schedule driving lessons, access documents, and monitor progress.',
    audience: ['School owner and administrators', 'Driving instructors', 'Teen and adult students', 'Parents and caregivers'],
    features: [
      { title: 'Class creation', text: 'Administrators create classroom sessions across online and in-person locations and manage capacity.' },
      { title: 'Student enrollment', text: 'Students register for classroom and behind-the-wheel packages through a guided online flow.' },
      { title: 'Flexible scheduling', text: 'Families choose permit classes and driving sessions that fit their schedule and program requirements.' },
      { title: 'Instructor workflows', text: 'Teachers access assigned sessions, student information, attendance, and progress-related tasks.' },
      { title: 'Student dashboard', text: 'A single place to view balances, upcoming sessions, documents, students, and overall progress.' },
      { title: 'Payments and records', text: 'Registration, package balances, documentation, and program history remain connected to the student.' },
    ],
    outcomes: ['Self-service scheduling for busy families', 'A unified view of every student', 'Fewer disconnected administrative tools', 'Support for classroom and behind-the-wheel programs'],
    images: [
      { src: '/elite-dashboard.png', alt: 'Elite Driving School student dashboard on desktop and phone', className: 'landscape' },
      { src: '/elite-portfolio.png', alt: 'Elite Driving School scheduling and student management interface', className: 'portrait-pair' },
    ],
    liveUrl: 'https://elitedriversmn.com', liveLabel: 'Visit Elite Driving School',
  },
  {
    slug: 'tag-groceries', index: '03', name: 'TAG Groceries', category: 'Consumer mobile app · Shared lists · iOS + Android',
    headline: 'A grocery list that thinks like a shopper.',
    summary: 'TAG Groceries is a mobile app for creating simple, shareable grocery lists that can be customized with tags for stores, aisles, categories, or any system that makes shopping easier.',
    challenge: 'Basic grocery lists become difficult to use when several people contribute, items belong to different stores, or a long list has no useful organization. Shoppers needed something as quick as a paper list but much easier to share and customize.',
    solution: 'TAG Groceries centers the experience on fast list-making, then adds lightweight organization through flexible tags. A household can share a list, organize items around the way they shop, and keep changes available to everyone using the list.',
    audience: ['Individuals and households', 'Roommates and partners', 'Caregivers and families', 'Anyone shopping across multiple stores'],
    features: [
      { title: 'Fast list creation', text: 'Add and check off grocery items without slowing down the everyday task.' },
      { title: 'Shared lists', text: 'Multiple people can contribute to the same list so the household stays coordinated.' },
      { title: 'Custom tags', text: 'Create labels for stores, aisles, categories, or personal routines instead of accepting a fixed structure.' },
      { title: 'Organized shopping', text: 'Use tags to group the list in an order that matches the store and reduces backtracking.' },
      { title: 'Cross-platform release', text: 'Designed and released for both Apple iOS and Android through the major app stores.' },
      { title: 'Mobile-first interface', text: 'Large, clear controls and an uncluttered layout keep the list useful while moving through a store.' },
    ],
    outcomes: ['Less duplicated household shopping', 'Lists organized around real routines', 'A simple shared source of truth', 'A product released on iOS and Android'],
    images: [
      { src: '/tag-home.png', alt: 'TAG Groceries home screen with grocery lists', className: 'phone-shot' },
      { src: '/tag-list.png', alt: 'TAG Groceries shared item list', className: 'phone-shot' },
      { src: '/tag-portfolio.png', alt: 'TAG Groceries custom tags screen', className: 'phone-shot' },
    ],
    liveUrl: 'https://taggroceries.com/#/', liveLabel: 'Visit TAG Groceries',
  },
];

export function getProject(slug: string) { return projects.find((project) => project.slug === slug); }
