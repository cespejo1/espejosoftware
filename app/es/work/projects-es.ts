import type { Project } from '../../work/projects';

export const projectsEs: Project[] = [
  {
    slug: 'tradework', index: '01', name: 'TradeWork', category: 'Gestión de servicios · CRM · Portales',
    headline: 'El trabajo detrás del trabajo, finalmente organizado.',
    summary: 'TradeWork es una plataforma de gestión para contratistas y empresas de servicios. Reúne trabajos, clientes, equipos, comunicación y operaciones diarias en un solo sistema adaptable.',
    challenge: 'Las empresas de servicios suelen crecer usando hojas de cálculo, mensajes de texto, notas y herramientas desconectadas. Los detalles importantes son difíciles de encontrar, los clientes tienen poca visibilidad y los propietarios pasan demasiado tiempo coordinando el trabajo.',
    solution: 'TradeWork fue diseñado como un sistema operativo compartido para todo el ciclo de servicio. El espacio interno controla solicitudes, trabajos activos, equipos y clientes, mientras que portales dedicados dan a cada persona la información correcta.',
    audience: ['Propietarios de empresas de servicios', 'Equipos administrativos y de operaciones', 'Trabajadores y contratistas', 'Clientes'],
    features: [
      { title: 'Gestión de trabajos', text: 'Sigue cada trabajo desde la solicitud inicial hasta la programación, documentación, facturación y finalización.' },
      { title: 'CRM integrado', text: 'Mantén registros, historial, conversaciones y detalles importantes de cada cliente en un solo lugar.' },
      { title: 'Portal para clientes', text: 'Ofrece una vista clara y autoservicio de solicitudes, actualizaciones e información compartida.' },
      { title: 'Portal para contratistas', text: 'Coordina asignaciones y da acceso directo a los trabajos y detalles relevantes para cada colaborador.' },
      { title: 'Operaciones adaptables', text: 'Una experiencia consistente en computadoras, tabletas y teléfonos para trabajos que no permanecen en un escritorio.' },
      { title: 'Flujos según el rol', text: 'Vistas específicas ayudan a propietarios, empleados, contratistas y clientes a concentrarse en su parte del proceso.' },
    ],
    outcomes: ['Una sola fuente de información para trabajos y clientes', 'Menos tiempo persiguiendo actualizaciones', 'Comunicación más clara', 'Un sistema preparado para crecer con la empresa'],
    images: [{ src: '/tradework-portfolio.png', alt: 'Gestión de trabajos de TradeWork en computadora y móvil', className: 'landscape' }, { src: '/tradework-mobile.png', alt: 'Interfaz móvil de TradeWork', className: 'portrait-pair' }],
    liveUrl: 'https://app.tradeworkapp.com', liveLabel: 'Abrir TradeWork',
  },
  {
    slug: 'elite-driving-school', index: '02', name: 'Elite Driving School', category: 'Educación · Programación · Portal estudiantil',
    headline: 'Un mejor camino desde la inscripción hasta la licencia.',
    summary: 'Una plataforma completa para una popular escuela de conducción de Minneapolis que conecta clases, inscripciones, pagos, educación para el permiso y prácticas al volante.',
    challenge: 'La educación vial incluye clases, distintas ubicaciones, disponibilidad de instructores, prácticas de conducción, documentos, pagos y requisitos estatales. La escuela necesitaba un sistema para su personal, instructores, estudiantes y familias.',
    solution: 'La plataforma combina el sitio público, la inscripción, las herramientas administrativas, los flujos para instructores y un portal estudiantil. Las familias pueden inscribirse, elegir sesiones, programar prácticas, acceder a documentos y seguir el progreso.',
    audience: ['Propietarios y administradores', 'Instructores de conducción', 'Estudiantes jóvenes y adultos', 'Padres y tutores'],
    features: [
      { title: 'Creación de clases', text: 'Los administradores crean sesiones en línea y presenciales, y administran su capacidad.' },
      { title: 'Inscripción estudiantil', text: 'Los estudiantes se inscriben en clases y paquetes de práctica mediante un proceso guiado.' },
      { title: 'Programación flexible', text: 'Las familias eligen clases y sesiones de conducción que se adaptan a sus horarios y requisitos.' },
      { title: 'Herramientas para instructores', text: 'Los instructores acceden a sesiones asignadas, datos de estudiantes, asistencia y progreso.' },
      { title: 'Panel del estudiante', text: 'Un solo lugar para ver saldos, próximas sesiones, documentos y progreso general.' },
      { title: 'Pagos y registros', text: 'Inscripciones, saldos, documentos e historial permanecen conectados con cada estudiante.' },
    ],
    outcomes: ['Programación autoservicio para familias ocupadas', 'Una vista unificada de cada estudiante', 'Menos herramientas administrativas desconectadas', 'Soporte para clases y prácticas al volante'],
    images: [{ src: '/elite-dashboard.png', alt: 'Panel estudiantil de Elite Driving School', className: 'landscape' }, { src: '/elite-portfolio.png', alt: 'Programación y gestión estudiantil de Elite Driving School', className: 'portrait-pair' }],
    liveUrl: 'https://elitedriversmn.com', liveLabel: 'Visitar Elite Driving School',
  },
  {
    slug: 'tag-groceries', index: '03', name: 'TAG Groceries', category: 'Aplicación móvil · Listas compartidas · iOS + Android',
    headline: 'Una lista de compras que piensa como tú.',
    summary: 'TAG Groceries es una aplicación móvil para crear listas sencillas y compartidas que pueden organizarse con etiquetas para tiendas, pasillos, categorías o cualquier sistema personal.',
    challenge: 'Las listas básicas se vuelven difíciles cuando varias personas agregan productos, se compra en distintas tiendas o no existe una organización útil. Las personas necesitaban algo tan rápido como el papel, pero más fácil de compartir y personalizar.',
    solution: 'TAG Groceries se concentra primero en crear listas rápidamente y después agrega organización mediante etiquetas flexibles. Un hogar puede compartir una lista, organizarla según su forma de comprar y mantener los cambios disponibles para todos.',
    audience: ['Personas y hogares', 'Compañeros de vivienda y parejas', 'Cuidadores y familias', 'Personas que compran en varias tiendas'],
    features: [
      { title: 'Listas rápidas', text: 'Agrega y marca productos sin complicar una tarea cotidiana.' },
      { title: 'Listas compartidas', text: 'Varias personas pueden contribuir a la misma lista y mantener el hogar coordinado.' },
      { title: 'Etiquetas personalizadas', text: 'Crea etiquetas para tiendas, pasillos, categorías o rutinas personales.' },
      { title: 'Compras organizadas', text: 'Agrupa la lista en el orden de la tienda para reducir recorridos innecesarios.' },
      { title: 'iOS y Android', text: 'Diseñada y publicada para Apple iOS y Android en sus principales tiendas.' },
      { title: 'Interfaz móvil', text: 'Controles grandes y un diseño limpio mantienen la lista útil mientras recorres la tienda.' },
    ],
    outcomes: ['Menos compras duplicadas', 'Listas organizadas alrededor de rutinas reales', 'Una fuente compartida y sencilla', 'Un producto publicado en iOS y Android'],
    images: [{ src: '/tag-home.png', alt: 'Pantalla principal de TAG Groceries', className: 'phone-shot' }, { src: '/tag-list.png', alt: 'Lista compartida de TAG Groceries', className: 'phone-shot' }, { src: '/tag-portfolio.png', alt: 'Etiquetas personalizadas de TAG Groceries', className: 'phone-shot' }],
    liveUrl: 'https://taggroceries.com/#/', liveLabel: 'Visitar TAG Groceries',
  },
];

export function getProjectEs(slug: string) { return projectsEs.find((project) => project.slug === slug); }
