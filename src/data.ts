import { Plan, Lesson, Testimonial, StructureItem, SEOMetric } from "./types";

export const ACADEMY_INFO = {
  name: "Iron Pulse Fitness",
  slogan: "Treine forte. Evolua sempre.",
  address: "Rua das Palmeiras, 245",
  neighborhood: "Centro",
  city: "Guareí",
  state: "SP",
  zipCode: "18250-000",
  whatsapp: "(15) 9XXXX-XXXX",
  whatsappUrl: "https://wa.me/5515999999999?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Iron%2520Pulse%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20matr%C3%ADculas.",
  instagram: "@ironpulsefitness",
  instagramUrl: "https://instagram.com/ironpulsefitness",
  hours: [
    { label: "Segunda a Sexta", time: "06h às 22h" },
    { label: "Sábados", time: "08h às 14h" },
    { label: "Domingos e Feriados", time: "Fechado" }
  ]
};

export const STRUCTURE_HIGHLIGHTS: StructureItem[] = [
  {
    id: "musculacao",
    title: "Musculação Completa",
    description: "Equipamentos modernos e biomecânicos de última geração para hipertrofia, força e definição corporal.",
    iconName: "Dumbbell",
    imagePlaceholderUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "funcional",
    title: "Área Funcional",
    description: "Espaço dedicado com grama sintética, kettlebells, cordas navais e acessórios para treinos de agilidade e explosão.",
    iconName: "Activity",
    imagePlaceholderUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "coletivas",
    title: "Aulas Coletivas",
    description: "Aulas animadas e cheias de energia para queimar calorias: Zumba ritmada, ritmos, Spinning e treinos intensos de HIIT.",
    iconName: "Users",
    imagePlaceholderUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "cardio",
    title: "Espaço Cardio Premium",
    description: "Esteiras de última geração, elípticos e bikes com painéis interativos para potencializar seu condicionamento.",
    iconName: "HeartPulse",
    imagePlaceholderUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "climatizado",
    title: "Ambiente Climatizado",
    description: "Ar-condicionado regulado em todo o espaço para garantir conforto térmico mesmo nos treinos mais pesados.",
    iconName: "Wind",
    imagePlaceholderUrl: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "instrutores",
    title: "Acompanhamento de Instrutores",
    description: "Diferencial exclusivo: instrutores de sala sempre presentes para tirar dúvidas e corrigir posturas, incluso em todos os planos.",
    iconName: "UserCheck",
    imagePlaceholderUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop&q=80"
  }
];

export const PLANS_DATA: Plan[] = [
  {
    id: "basico",
    name: "Plano Básico",
    price: 79.90,
    period: "mês",
    features: [
      "Acesso completo à musculação",
      "Instrutores de sala inclusos",
      "Treinos de segunda a sexta",
      "Horário comercial (09h às 16h)",
      "Vestiários completos"
    ],
    recommended: false,
    badge: "Econômico"
  },
  {
    id: "fit",
    name: "Plano Fit",
    price: 109.90,
    period: "mês",
    features: [
      "Acesso completo à musculação",
      "Instrutores de sala inclusos",
      "Acesso completo a aulas coletivas (Zumba, HIIT)",
      "Horário estendido (livre todos os dias)",
      "Avaliação física semestral",
      "Vestiários completos + armários"
    ],
    recommended: true,
    badge: "Mais Vendido"
  },
  {
    id: "black",
    name: "Plano Black",
    price: 149.90,
    period: "mês",
    features: [
      "Acesso ilimitado de segunda a sábado",
      "Acesso completo a musculação e área funcional",
      "Aulas coletivas inclusas (Spinning, Zumba, HIIT)",
      "Prioridade reservada em turmas de aulas",
      "Avaliação física bimestral inclusa",
      "Direito a levar 1 amigo p/ treinar 3x ao mês",
      "Kit de boas-vindas da Iron Pulse (squeeze + camiseta)"
    ],
    recommended: false,
    badge: "Experiência Completa"
  }
];

export const SCHEDULE_DAYS = [
  {
    className: "Musculação",
    details: [
      { days: "Segunda a Sexta", hours: "06h às 22h" },
      { days: "Sábado", hours: "08h às 14h" }
    ],
    highlight: "Todos os dias operando!"
  },
  {
    className: "HIIT (Treino de Alta Intensidade)",
    details: [
      { days: "Seg, Qua e Sex", hours: "19:00h às 19:45h" }
    ],
    highlight: "Queima calórica acelerada"
  },
  {
    className: "Zumba Coletiva",
    details: [
      { days: "Terça e Quinta", hours: "18:00h às 19:00h" }
    ],
    highlight: "Diversão e cardio dinâmico"
  },
  {
    className: "Spinning Indoor Premium",
    details: [
      { days: "Sábado", hours: "09:00h às 10:00h" }
    ],
    highlight: "Altíssima energia e música"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "João Silva",
    role: "Aluno há 6 meses - Foco: Hipertrofia",
    comment: "Mudei totalmente meu corpo em 3 meses! Os instrutores são muito atenciosos e montaram uma ficha focada nos meus pontos fracos. Sem dúvidas a melhor escolha de Guareí.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "t2",
    name: "Maria Souza",
    role: "Aluna há 1 ano - Foco: Emagrecimento & Zumba",
    comment: "Ambiente top e motivador! As aulas de Zumba e HIIT são sensacionais, as músicas dão uma energia incrível. Consegui emagrecer com saúde de forma divertida.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "t3",
    name: "Carlos Lima",
    role: "Aluno há 8 meses - Foco: Condicionamento",
    comment: "Estrutura melhor da cidade! Climatização perfeita, aparelhos novos que evitam lesão e espaço de pesos livres gigante. O preço compensa demais pelo excelente suporte de todos.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80"
  }
];

export const TARGET_AUDIENCES = [
  {
    title: "Emagrecimento",
    description: "Métodos modernos de queima de gordura rápida através de treinos intervalados HIIT, aulas dinâmicas de spinning e ritmos.",
    tagline: "Secagem e Definição"
  },
  {
    title: "Hipertrofia",
    description: "Treino resistido focado no ganho de massa muscular magra, otimizado por aparelhos biomecânicos precisos e halteres pesados.",
    tagline: "Ganho de Massa"
  },
  {
    title: "Iniciantes",
    description: "Montagem de treinos adaptativos passo a passo, ensinando a postura correta e criando o hábito saudável com acolhimento.",
    tagline: "Foco no Começo"
  }
];

export const SEO_METRICS: SEOMetric[] = [
  {
    keyword: "academia em Guareí",
    volume: "Alto (Local)",
    difficulty: "Baixa / Média",
    purpose: "Atrair novos alunos buscando matrícula imediata na cidade de Guareí."
  },
  {
    keyword: "musculação em Guareí",
    volume: "Médio",
    difficulty: "Baixa",
    purpose: "Capturar público específico interessado em musculação profissional com instrutor."
  },
  {
    keyword: "academia perto de mim",
    volume: "Muito Alto",
    difficulty: "Regida por Geo-SEO",
    purpose: "Posicionar a Iron Pulse no Google Maps quando usuários locais digitarem no celular."
  }
];
