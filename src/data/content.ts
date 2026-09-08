export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  segment: string;
  year: string;
  featured: boolean;
  aspect: 'portrait' | 'landscape' | 'square' | 'wide';
  accentColor?: string;
  challenge: string;
  strategy: string;
  deliverables: string[];
  metricsOrHighlight: string;
  gallery: {
    title: string;
    caption: string;
    type: 'social-post' | 'campaign' | 'branding' | 'story' | 'editorial';
    color: string;
    bgPattern: string;
    tag: string;
  }[];
}

export interface ServiceItem {
  number: string;
  title: string;
  headline: string;
  description: string;
  isPartner?: boolean;
  deliverables: string[];
  idealFor: string;
}

export interface PrincipleItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

export const STUDIO_INFO = {
  name: 'CRTVSANTOS',
  tagline: 'Ajudando marcas a comunicarem propósito.',
  headline: 'Marcas têm algo a dizer. A gente ajuda a comunicar.',
  subheadline: 'Social Media, Design e comunicação pensada para marcas que querem mais do que apenas estar nas redes.',
  whatsappNumber: '5513997561882', // Default studio business number
  whatsappDisplay: '+55 13 99756-1882',
  instagram: '@crtvsantos',
  instagramUrl: 'https://instagram.com',
  behanceUrl: 'https://behance.net',
  email: 'contato@crtvsantos.com',
  location: 'Brasil — Atendimento Global',
};

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Social Media',
    headline: 'Presença com consistência, tom de voz e relacionamento real.',
    description: 'Planejamento, criação e gestão de conteúdo para marcas que querem construir presença e relacionamento nas redes.',
    isPartner: false,
    deliverables: [
      'Diagnóstico e planejamento de conteúdo',
      'Definição de linhas editoriais e tom de voz',
      'Criação de posts, carrosséis e formatos nativos',
      'Roteirização de stories e narrativas diárias',
      'Organização de calendário e direcionamento de publicações'
    ],
    idealFor: 'Marcas que buscam manter uma presença relevante e humanizada sem depender de posts genéricos.'
  },
  {
    number: '02',
    title: 'Design',
    headline: 'Identidade visual e peças pensadas para serem compreendidas.',
    description: 'Identidade visual, peças digitais, campanhas e materiais gráficos pensados para manter a comunicação da marca consistente.',
    isPartner: false,
    deliverables: [
      'Identidades visuais e redesigns contemporâneos',
      'Diretrizes visuais e guias de estilo para marcas',
      'Peças gráficas para campanhas e lançamentos',
      'Materiais institucionais, impressos e digitais',
      'Key visuals e composições de alto impacto'
    ],
    idealFor: 'Negócios e profissionais que precisam de uma estética sólida, proprietária e memorável.'
  },
  {
    number: '03',
    title: 'Landing Pages',
    headline: 'Páginas claras e focadas em conversão e narrativa de marca.',
    description: 'Páginas estratégicas para campanhas, produtos, serviços e projetos específicos.',
    isPartner: true,
    deliverables: [
      'Arquitetura de informação e redação estratégica',
      'Design de interface (UI) minimalista e responsivo',
      'Desenvolvimento rápido e otimizado para carregamento',
      'Integração direta com WhatsApp e canais de contato'
    ],
    idealFor: 'Lançamentos de serviços, produtos ou campanhas que demandam uma página direta e elegante.'
  },
  {
    number: '04',
    title: 'Tráfego Pago',
    headline: 'Distribuição inteligente para alcançar quem realmente importa.',
    description: 'Estratégias de mídia paga para ampliar o alcance e levar a comunicação até as pessoas certas.',
    isPartner: true,
    deliverables: [
      'Planejamento de investimento em Meta Ads e Google',
      'Segmentação estratégica de público e interesses',
      'Testes contínuos de criativos e mensagens',
      'Acompanhamento e otimização constante de campanhas'
    ],
    idealFor: 'Ampliar a visibilidade de campanhas e acelerar o contato com novos públicos qualificados.'
  },
  {
    number: '05',
    title: 'Edição de Vídeo',
    headline: 'Narrativas audiovisuais dinâmicas com ritmo e acabamento refinado.',
    description: 'Vídeos e conteúdos audiovisuais para redes sociais, campanhas e comunicação digital.',
    isPartner: true,
    deliverables: [
      'Edição de Reels, Shorts e formatos verticais',
      'Tratamento de áudio, ritmo e sound design sutil',
      'Lettering, tipografia em movimento e motion graphics',
      'Vídeos institucionais e coberturas de momentos especiais'
    ],
    idealFor: 'Marcas que querem transformar gravações brutas em peças audiovisuais envolventes e profissionais.'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Escuta',
    description: 'Entendemos a marca, seus objetivos, seu público e seus desafios. Não iniciamos nada sem antes ouvir a história de quem vive o negócio.',
    highlight: 'Ouvir antes de propor.'
  },
  {
    number: '02',
    title: 'Estratégia',
    description: 'Organizamos as informações e definimos o melhor caminho para comunicar. Clareza sobre o tom, as mensagens e onde focar energia.',
    highlight: 'Estruturar antes de desenhar.'
  },
  {
    number: '03',
    title: 'Criação',
    description: 'Transformamos estratégia em design, conteúdo e experiências digitais. Cada linha, cor e palavra tem um papel intencional.',
    highlight: 'Executar com precisão.'
  },
  {
    number: '04',
    title: 'Evolução',
    description: 'Analisamos o que foi feito e buscamos maneiras de melhorar continuamente. Comunicação consistente é um organismo vivo.',
    highlight: 'Refinar no dia a dia.'
  }
];

export const PRINCIPLES: PrincipleItem[] = [
  {
    id: 'clareza',
    title: 'Clareza',
    subtitle: 'Comunicação boa não precisa complicar.',
    description: 'Eliminamos ruídos e rodeios desnecessários. Se a mensagem não é compreendida com naturalidade por quem a recebe, ela não cumpriu seu papel.'
  },
  {
    id: 'proposito',
    title: 'Propósito',
    subtitle: 'Toda criação precisa ter uma razão.',
    description: 'Não fazemos posts apenas para preencher espaço em uma grade. Cada projeto nasce de um motivo real e de um objetivo bem definido.'
  },
  {
    id: 'proximidade',
    title: 'Proximidade',
    subtitle: 'Trabalhamos com pessoas, não apenas com marcas.',
    description: 'Nosso relacionamento é direto, transparente e humano. Sem burocracias de grandes agências ou intermediários que diluem a visão do cliente.'
  },
  {
    id: 'consistencia',
    title: 'Consistência',
    subtitle: 'Uma boa comunicação é construída ao longo do tempo.',
    description: 'Presença sólida não se faz da noite para o dia. A coerência visual e textual repetida com qualidade é o que constrói marcas inesquecíveis.'
  },
  {
    id: 'etica',
    title: 'Ética',
    subtitle: 'Resultado não precisa vir às custas dos princípios.',
    description: 'Acreditamos em uma comunicação honesta e responsável. Respeitamos o público, o cliente e os valores de cada negócio com verdade.'
  }
];

export const SEGMENTS = [
  { name: 'Esportes & Lazer', desc: 'Arenas, eventos, atletas e experiências esportivas' },
  { name: 'Educação', desc: 'Instituições de ensino, projetos pedagógicos e formação' },
  { name: 'Serviços Especializados', desc: 'Consultorias, escritórios, saúde e estética' },
  { name: 'Pequenos Negócios', desc: 'Empreendimentos locais, gastronomia e lojas' },
  { name: 'Profissionais Liberais', desc: 'Marcas pessoais, autoridade e posicionamento' },
  { name: 'Projetos & Organizações', desc: 'Iniciativas com impacto social, cultural e coletivo' }
];

export const PROJECTS: Project[] = [
  {
    id: 'mare-beach-club',
    title: 'Maré Beach Club',
    category: 'Social Media + Design',
    tagline: 'Comunicação digital para um espaço de Beach Tennis e estilo de vida praiano.',
    description: 'Comunicação digital para um espaço de Beach Tennis, com criação de campanhas, eventos, torneios, promoções e conteúdos para fortalecer a presença da marca.',
    segment: 'Esportes & Lazer',
    year: '2024 / 2025',
    featured: true,
    aspect: 'wide',
    accentColor: '#DF5800',
    challenge: 'Criar uma presença digital contínua que traduzisse a energia do esporte na areia, comunicasse a rotina da arena com clareza (aulas, day use, torneios) e engajasse praticantes de todos os níveis.',
    strategy: 'Construção de uma linguagem visual solar, moderna e direta. Equilíbrio entre avisos operacionais ágeis (horários, climas, torneios) e peças visuais de alto impacto para eventos sazonais.',
    deliverables: [
      'Direção de arte e linguagem visual para redes sociais',
      'Identidade visual e materiais promocionais para torneios',
      'Campanhas sazonais de verão e feriados',
      'Cartazes, artes de premiação e sinalização digital',
      'Stories dinâmicos para avisos de quadras e agenda'
    ],
    metricsOrHighlight: 'Presença sólida com reconhecimento local e alto engajamento comunitário.',
    gallery: [
      {
        title: 'Torneio de Verão Maré Open',
        caption: 'Key visual e desdobramento para inscrições e chaveamentos.',
        type: 'campaign',
        color: '#DF5800',
        bgPattern: 'mare-open',
        tag: 'Campanha'
      },
      {
        title: 'Linha Editorial & Quadras',
        caption: 'Posts dinâmicos com horários, dicas de treino e cultura do Beach Tennis.',
        type: 'social-post',
        color: '#28464B',
        bgPattern: 'mare-grid',
        tag: 'Social Media'
      },
      {
        title: 'Avisos em Stories & Day Use',
        caption: 'Comunicação rápida e visualmente alinhada para a rotina diária.',
        type: 'story',
        color: '#D47E38',
        bgPattern: 'mare-story',
        tag: 'Stories'
      },
      {
        title: 'Materiais de Premiação & Brindes',
        caption: 'Composição gráfica para pódios, troféus e kits de atletas.',
        type: 'branding',
        color: '#303030',
        bgPattern: 'mare-awards',
        tag: 'Design Gráfico'
      }
    ]
  },
  {
    id: 'colegio-educacao',
    title: 'Comunicação Educacional',
    category: 'Social Media + Estratégia',
    tagline: 'Comunicação humanizada e acolhedora para instituição de ensino.',
    description: 'Planejamento e peças editoriais para conectar a proposta pedagógica às famílias, valorizando o aprendizado, momentos do cotidiano escolar e campanhas de acolhimento.',
    segment: 'Educação',
    year: '2024',
    featured: true,
    aspect: 'portrait',
    accentColor: '#303030',
    challenge: 'Traduzir a profundidade do projeto pedagógico sem cair em jargões frios ou posts impessoais, gerando confiança para os pais.',
    strategy: 'Narrativa centrada no desenvolvimento humano, registros do dia a dia dos alunos e comunicações transparentes com a comunidade escolar.',
    deliverables: [
      'Planejamento de linhas editoriais por ciclo educacional',
      'Design de comunicados e avisos institucionais',
      'Campanhas de início de ano e acolhimento',
      'Cobertura visual de feiras de ciências e mostras culturais'
    ],
    metricsOrHighlight: 'Fortalecimento do vínculo de confiança entre instituição e responsáveis.',
    gallery: [
      {
        title: 'Campanha de Acolhimento',
        caption: 'Peças com foco no retorno às aulas e acolhimento das novas famílias.',
        type: 'campaign',
        color: '#2B4162',
        bgPattern: 'edu-welcome',
        tag: 'Institucional'
      },
      {
        title: 'Pílulas Pedagógicas',
        caption: 'Carrosséis explicando as metodologias e valores da escola.',
        type: 'social-post',
        color: '#385F71',
        bgPattern: 'edu-pills',
        tag: 'Conteúdo'
      }
    ]
  },
  {
    id: 'studio-arquitetura',
    title: 'Studio de Arquitetura & Interiores',
    category: 'Design + Presença Digital',
    tagline: 'Identidade e curadoria visual para escritório de arquitetura contemporânea.',
    description: 'Direção estética e peças de portfólio para destacar projetos autorais com sofisticação, minimalismo e valorização dos detalhes construtivos.',
    segment: 'Serviços Especializados',
    year: '2024',
    featured: false,
    aspect: 'square',
    accentColor: '#DF5800',
    challenge: 'Organizar um portfólio visual denso em uma experiência digital limpa e que valorizasse a precisão dos projetos arquitetônicos.',
    strategy: 'Grid minimalista com tipografia precisa, respiros generosos e foco absoluto na fotografia e conceito de cada ambiente.',
    deliverables: [
      'Curadoria e diagramação de posts para portfólio no Instagram',
      'Apresentação institucional em formato digital',
      'Paleta cromática e tipografia de suporte'
    ],
    metricsOrHighlight: 'Percepção de alto padrão e valorização dos projetos assinados.',
    gallery: [
      {
        title: 'Apresentação de Projetos',
        caption: 'Diagramação editorial dos conceitos e plantas humanizadas.',
        type: 'editorial',
        color: '#4A4E51',
        bgPattern: 'arch-layout',
        tag: 'Editorial'
      },
      {
        title: 'Grade Visual Curada',
        caption: 'Harmonia tonal no feed destacando texturas e iluminação natural.',
        type: 'social-post',
        color: '#605B56',
        bgPattern: 'arch-feed',
        tag: 'Social Media'
      }
    ]
  },
  {
    id: 'gastronomia-artesanal',
    title: 'Gastronomia & Pequeno Negócio',
    category: 'Design + Social Media',
    tagline: 'Linguagem visual apetitosa e identidade para marca gastronômica local.',
    description: 'Criação de peças para lançamentos de cardápio, promoções pontuais e valorização do processo artesanal e ingredientes selecionados.',
    segment: 'Pequenos Negócios',
    year: '2023 / 2024',
    featured: false,
    aspect: 'portrait',
    accentColor: '#DF5800',
    challenge: 'Destacar o diferencial artesanal em meio a uma concorrência saturada de deliveries genéricos.',
    strategy: 'Comunicação autêntica que mostra os bastidores da cozinha, fotos reais dos pratos e tipografia com personalidade.',
    deliverables: [
      'Design de cardápio digital interativo',
      'Peças promocionais para redes sociais',
      'Comunicação de novidades sazonais'
    ],
    metricsOrHighlight: 'Aumento na procura por itens sazonais e reconhecimento da identidade da marca.',
    gallery: [
      {
        title: 'Menu Sazonal',
        caption: 'Layout limpo facilitando a leitura de ingredientes e opções.',
        type: 'branding',
        color: '#703D2A',
        bgPattern: 'gastro-menu',
        tag: 'Design'
      },
      {
        title: 'Bastidores & Processo',
        caption: 'Narrativas visuais destacando a produção artesanal.',
        type: 'story',
        color: '#47332C',
        bgPattern: 'gastro-story',
        tag: 'Stories'
      }
    ]
  },
  {
    id: 'marca-pessoal-consultoria',
    title: 'Posicionamento Profissional',
    category: 'Social Media + Design',
    tagline: 'Comunicação de autoridade e conteúdo estratégico para profissional liberal.',
    description: 'Estruturação de tom de voz, carrosséis de conhecimento e design sóbrio para posicionar o profissional como referência em sua área de atuação.',
    segment: 'Profissionais Liberais',
    year: '2024',
    featured: false,
    aspect: 'landscape',
    accentColor: '#303030',
    challenge: 'Compartilhar conhecimento técnico de forma clara e visualmente atrativa, sem poluição de texto.',
    strategy: 'Carrosséis objetivos com leitura ritmada, diagramação editorial e foco em resolver dúvidas reais dos clientes.',
    deliverables: [
      'Templates autorais e exclusivos para carrosséis',
      'Definição de guia tipográfico e paleta de cores',
      'Planejamento de temas e pautas estratégicas'
    ],
    metricsOrHighlight: 'Clareza na transmissão de conhecimento e atração de clientes qualificados.',
    gallery: [
      {
        title: 'Carrossel Educativo',
        caption: 'Leitura fluida com hierarquia tipográfica apurada.',
        type: 'social-post',
        color: '#353D42',
        bgPattern: 'carrossel-edu',
        tag: 'Carrossel'
      }
    ]
  }
];
