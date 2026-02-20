/* ============================================================
   DESIGN: Dark Industrial Command Center
   COLOR: Cyan primary, Amber accent, Green-ops for compliance
   FONT: Bebas Neue (display), DM Sans (body), JetBrains Mono (mono)
   ============================================================ */

// Image URLs
export const IMAGES = {
  logo: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029557987/phtegVdgkKLdtzOb.png",
  hero: "https://private-us-east-1.manuscdn.com/sessionFile/OOCrPC9qv4SzgCZNf26ZuO/sandbox/vrdV2wHvl7vY6HcUn3Uxbh-img-1_1771593448000_na1fn_aGVyby1pbmR1c3RyaWFs.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvT09DclBDOXF2NFN6Z0NaTmYyNlp1Ty9zYW5kYm94L3ZyZFYyd0h2bDd2WTZIY1VuM1V4YmgtaW1nLTFfMTc3MTU5MzQ0ODAwMF9uYTFmbl9hR1Z5YnkxcGJtUjFjM1J5YVdGcy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=PPgLDGFzkh~3gGtXE8X3-X9pMp-2JeqXhh49101QBc~KeOaVX46LbwajfYYBccDi2m7FPaLxNgj1KhcSaiehK7NhzyWZUazFKObnOzILn0NVUi0X79mBV-yLwSYt~KUeFXS64hxFMfZgkgtYuZifpwT0bHFm8C9pZHLlpOwN4R0oDoIua~gVyofBfbUF4adiFfOE~cZIuJ91exj6ZNN4w7sntVK-tARELybmDk4ttgicm7Ebgu7QEE30U-Y76ZjipUXxtf~X3QbiW4z4RXdhkJsgzN8BSoyaUOpND3M5l~NDPZqCQkydK0n5rvjBohpfgRhs7bF4W0VZsKez6SRJhg__",
  fire: "https://private-us-east-1.manuscdn.com/sessionFile/OOCrPC9qv4SzgCZNf26ZuO/sandbox/vrdV2wHvl7vY6HcUn3Uxbh-img-2_1771593450000_na1fn_ZmlyZS1lbmdpbmVlcmluZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvT09DclBDOXF2NFN6Z0NaTmYyNlp1Ty9zYW5kYm94L3ZyZFYyd0h2bDd2WTZIY1VuM1V4YmgtaW1nLTJfMTc3MTU5MzQ1MDAwMF9uYTFmbl9abWx5WlMxbGJtZHBibVZsY21sdVp3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=K7C-3bYY3kXPUP8B3xyzsM~bCPbfNPe134u6H0a60vahFBynP08q13r9n5Fg4lBg54g4cQH-HUHDmWiHTZ~NSHA5-wgw09soYxI7R-HtzjH9ETpnLu83ttfB1i1Fxokk5-e7XZBqNJ8w-yza0ltPYRwruhdTLu1Ic9TFtJORMdiVCCuOITe5Xw9c8zkzFaGU4W-knmuEek1nz2F1outM7NmKiHd3J4k2-oet06PsWPvN~FrQIsYbs~AG1x3bEmHXosmUxQO8eOzJM4ntSskTBI2x1MiUVrIn-peekFHKvdSX5FyUx5vYq6eQ~IrkUNF~B9sB~kJFUI-UFwgsZAOraw__",
  electrical: "https://private-us-east-1.manuscdn.com/sessionFile/OOCrPC9qv4SzgCZNf26ZuO/sandbox/vrdV2wHvl7vY6HcUn3Uxbh-img-3_1771593443000_na1fn_ZWxlY3RyaWNhbC1zeXN0ZW1z.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvT09DclBDOXF2NFN6Z0NaTmYyNlp1Ty9zYW5kYm94L3ZyZFYyd0h2bDd2WTZIY1VuM1V4YmgtaW1nLTNfMTc3MTU5MzQ0MzAwMF9uYTFmbl9aV3hsWTNSeWFXTmhiQzF6ZVhOMFpXMXouanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=aoH8K1xvUtjCrY1wO68maJ91p5-DSznAun5D2kEUbGW8~DskIu36cL15tqsrqh8CsqcgVvGywLboVM8GE2ak6Z5fFmkTP9JaXGzOOEt946yFO377Akjk2RJFflc1vG9mCLUtaSBAfIMGuaRPQacws8SENmL7UBhEu5yHaDrQSXHkH-51OYy31SfFAjWzzKdlM0DSHSshkCr~VKOf2Lg6dcXzmYGKf1b1WQs-nertqypN0Kv62e5SrcnXXvhZpJm9tywAGS01tedW5BGKObKqjjxJGSk99K7px6A0abMZZP7DuxVEyhhoWPC8Eak3vQP0wl3pDEjOvFpdGnYdzjvbXg__",
  hydraulic: "https://private-us-east-1.manuscdn.com/sessionFile/OOCrPC9qv4SzgCZNf26ZuO/sandbox/vrdV2wHvl7vY6HcUn3Uxbh-img-4_1771593453000_na1fn_aHlkcmF1bGljLWluZnJhc3RydWN0dXJl.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvT09DclBDOXF2NFN6Z0NaTmYyNlp1Ty9zYW5kYm94L3ZyZFYyd0h2bDd2WTZIY1VuM1V4YmgtaW1nLTRfMTc3MTU5MzQ1MzAwMF9uYTFmbl9hSGxrY21GMWJHbGpMV2x1Wm5KaGMzUnlkV04wZFhKbC5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=aASJGNSYYHOLn8c9QLhVfYw004YGho-M-J0zorFZ3dXwqN4i6PZ1h8NkeCQVO24ztuM8aauXZ1KWkSJbObj6ocaUc8pyJQcP3cElx3z-79aN4o5IHVhAnJ0uv~QWTPC8MmjoDOjifaan30P~bKVPAMi55PzsHLwKHrc0-pk7JS3gOON2EeQcd9yxUQwO5dtGVRtiJtuvObBCLP8iKz6Qm6h8XqFKp06wckAtlRr1kQ1akZtBb9w8WXOWkcIz4PftcMap4Bv9L7WNrS-xLG25yCefpzwT-SohTYV9LX5VVXHS7yUaBS4EJEpBqKsaNonV6dBmqIzZIZwTZKnB1-AYvQ__",
  projectShowcase: "https://private-us-east-1.manuscdn.com/sessionFile/OOCrPC9qv4SzgCZNf26ZuO/sandbox/vrdV2wHvl7vY6HcUn3Uxbh-img-5_1771593444000_na1fn_cHJvamVjdC1zaG93Y2FzZQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvT09DclBDOXF2NFN6Z0NaTmYyNlp1Ty9zYW5kYm94L3ZyZFYyd0h2bDd2WTZIY1VuM1V4YmgtaW1nLTVfMTc3MTU5MzQ0NDAwMF9uYTFmbl9jSEp2YW1WamRDMXphRzkzWTJGelpRLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=QMftZ8ON5zuag6bnC3s7kB5sQFqYGClAE3jc9ZQZTvlFgbA6FMYY7j5YBXPtloGc~aOfOITBtufxe5sjv8HRY4F4WzsjVPggdAwfAmF9r5ZM7J8Nwdrr3-THd1mOEEttp6SXDrFOMLN0ciA-LpT8K-IXGEd0aZkFzg0Rly7-sQhtJe2iICKcmD6sAfq405vAGoWyK0R~0967FsczXn3cdVkipSfTivEnv5jshVu~tzJCQkQYM3FCpy63gYP-9AHcpl7Hmg7ZGv-00tOnnZHCXqPXPyc77sLwTB0lZed6v~CfWGqZKle9Iw9iDp0Ane18iAPIfGDvjZ5BOX-Y3-~iaw__",
  unileverVinhedo: "https://private-us-east-1.manuscdn.com/sessionFile/OOCrPC9qv4SzgCZNf26ZuO/sandbox/KnqyHPfOJVsuQUnCFoc71v-img-1_1771611794000_na1fn_dW5pbGV2ZXItdmluaGVkby1maXJlLXByb3RlY3Rpb24.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvT09DclBDOXF2NFN6Z0NaTmYyNlp1Ty9zYW5kYm94L0tucXlIUGZPSlZzdVFVbkNGb2M3MXYtaW1nLTFfMTc3MTYxMTc5NDAwMF9uYTFmbl9kVzVwYkdWMlpYSXRkbWx1YUdWa2J5MW1hWEpsTFhCeWIzUmxZM1JwYjI0LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=nDjl2IdnPsw2SRJU9PNhevU8K~Qj7S8gj1JRH6pZr1i9Qq1gYAtff9U1VsvB689KLPT6Na7Nx3KB3A492Vd8QKDhKGRkVvCVzX60rVtXZ9O0eW-zFeTj3Op1uNiS8j5IcSB0TojpEHRL-wL9src8VnTQJDMfrE9oJK4ep5nXV0m0QosH1lJM2xR-6jZaKi9T2VYnPAZnhLFNxvhLoqGD7aWRb4z88Ob405TwSaJZAe6~nR91LdFGn0d-7V4Jl5~lh1rD5uKHWaxaHEXfzzgyMQxItR4ze1EzHtHJun31EQuqLQJN9KlE89GGtdej07INMR1Mh-ywimDgjQFo844~FA__",
  // Unsplash images for less prominent areas
  safety: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  compliance: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  quality: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
  technology: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
  maintenance: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&q=80",
  warehouse: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  pharmaceutical: "https://images.unsplash.com/photo-1563213126-a4273aed2016?w=800&q=80",
  food: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  logistics: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
  manufacturing: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80",
  commercial: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  datacenter: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
};

// Navigation
export const NAV_ITEMS = [
  { label: "Início", href: "/" },
  { label: "Disciplinas", href: "/disciplinas" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Processo", href: "/processo" },
  { label: "Qualidade", href: "/qualidade" },
  { label: "Compliance", href: "/compliance" },
  { label: "Indústrias", href: "/industrias" },
  { label: "Contato", href: "/contato" },
];

// Authority Stats
export const STATS = [
  { value: 15, suffix: "+", label: "Anos de Operação", description: "Experiência consolidada em engenharia industrial" },
  { value: 350, suffix: "+", label: "Projetos Executados", description: "Em diversos segmentos industriais" },
  { value: 8, suffix: "", label: "Segmentos Atendidos", description: "Indústrias de alta complexidade" },
  { value: 98, suffix: "%", label: "Taxa de Conformidade", description: "Em auditorias e inspeções" },
];

// Engineering Disciplines
export const DISCIPLINES = [
  {
    id: "fire-engineering",
    title: "Engenharia de Incêndio",
    shortDescription: "Projeto, dimensionamento e execução de sistemas de proteção contra incêndio com base em normas nacionais e internacionais.",
    image: "fire",
    icon: "Flame",
    overview: "A engenharia de proteção contra incêndio abrange o projeto, dimensionamento e execução de sistemas ativos e passivos de combate a incêndio. Nossa abordagem integra análise de risco, modelagem hidráulica e conformidade regulatória para entregar soluções que protegem vidas e patrimônio.",
    projectTypes: ["Sistemas de sprinklers", "Hidrantes e mangotinhos", "Detecção e alarme de incêndio", "Sistemas de supressão especial", "Proteção passiva contra fogo", "Sinalização de emergência"],
    deliverables: ["Memorial descritivo", "Projeto executivo hidráulico", "Dimensionamento de reservatórios", "Lista de materiais", "Cronograma de execução", "Manual de operação"],
    standards: ["ABNT NBR 10897", "ABNT NBR 13714", "NFPA 13", "NFPA 20", "IT do Corpo de Bombeiros", "FM Global Data Sheets"],
    stages: ["Diagnóstico técnico", "Análise de risco", "Projeto conceitual", "Projeto executivo", "Aprovação legal", "Execução controlada", "Comissionamento", "Documentação as-built"],
    riskMitigation: "Identificação sistemática de riscos através de análise de cenários, redundância de sistemas e planos de contingência específicos para cada tipo de ocupação.",
    complianceHandling: "Alinhamento com instruções técnicas estaduais, normas ABNT aplicáveis e, quando requerido, padrões internacionais como NFPA e FM Global.",
    faqs: [
      { q: "Qual a diferença entre proteção ativa e passiva?", a: "Proteção ativa inclui sistemas que requerem acionamento (sprinklers, alarmes), enquanto passiva envolve elementos construtivos que retardam a propagação do fogo (compartimentação, selagem)." },
      { q: "É necessário seguir normas internacionais?", a: "Depende do projeto. Para seguradoras internacionais ou operações multinacionais, normas como NFPA e FM Global podem ser exigidas além das normas brasileiras." },
      { q: "Quanto tempo leva um projeto típico?", a: "O prazo varia conforme a complexidade. Projetos de médio porte geralmente levam de 30 a 90 dias para a fase de projeto, mais o período de execução." },
    ],
  },
  {
    id: "electrical-systems",
    title: "Sistemas Elétricos",
    shortDescription: "Projetos elétricos industriais com foco em segurança, eficiência energética e conformidade normativa.",
    image: "electrical",
    icon: "Zap",
    overview: "Desenvolvemos projetos elétricos industriais completos, desde a entrada de energia até a distribuição final, com foco em segurança operacional, eficiência energética e conformidade com normas técnicas. Nossa expertise abrange sistemas de média e baixa tensão, automação e proteção.",
    projectTypes: ["Subestações industriais", "Quadros de distribuição", "Sistemas de aterramento", "Proteção contra descargas atmosféricas", "Iluminação industrial", "Automação elétrica"],
    deliverables: ["Diagrama unifilar", "Projeto de aterramento", "Memorial de cálculo", "Estudo de curto-circuito", "Estudo de seletividade", "Laudo de conformidade"],
    standards: ["ABNT NBR 5410", "ABNT NBR 14039", "ABNT NBR 5419", "NR-10", "IEC 61439", "IEEE Standards"],
    stages: ["Levantamento de cargas", "Estudo de viabilidade", "Projeto básico", "Projeto executivo", "Aprovação junto à concessionária", "Execução e montagem", "Testes e comissionamento", "Entrega documentada"],
    riskMitigation: "Análise de seletividade e coordenação de proteções, estudos de curto-circuito e arco elétrico para garantir segurança operacional.",
    complianceHandling: "Conformidade integral com NR-10, normas ABNT da série 5000 e requisitos específicos de concessionárias locais.",
    faqs: [
      { q: "Vocês trabalham com média tensão?", a: "Sim, desenvolvemos projetos de subestações e distribuição em média tensão (até 36,2 kV), incluindo estudos de proteção e coordenação." },
      { q: "O projeto inclui estudo de eficiência energética?", a: "Sim, integramos análise de eficiência energética como parte do escopo, identificando oportunidades de otimização e redução de consumo." },
    ],
  },
  {
    id: "hydraulic-infrastructure",
    title: "Infraestrutura Hidráulica",
    shortDescription: "Sistemas hidráulicos industriais com engenharia de precisão para água, esgoto e utilidades.",
    image: "hydraulic",
    icon: "Droplets",
    overview: "Projetamos e executamos sistemas hidráulicos industriais completos, incluindo redes de água fria e quente, esgoto sanitário e industrial, águas pluviais, e sistemas de utilidades. Cada projeto é dimensionado com precisão para atender demandas operacionais específicas.",
    projectTypes: ["Redes de água industrial", "Sistemas de esgoto", "Drenagem pluvial", "Estações de tratamento", "Sistemas de recirculação", "Redes de utilidades"],
    deliverables: ["Projeto hidráulico executivo", "Dimensionamento de redes", "Memorial de cálculo hidráulico", "Especificação de materiais", "Plano de execução", "Manual operacional"],
    standards: ["ABNT NBR 5626", "ABNT NBR 8160", "ABNT NBR 10844", "ABNT NBR 12209", "Normas estaduais de saneamento"],
    stages: ["Diagnóstico da infraestrutura", "Levantamento de demandas", "Projeto conceitual", "Dimensionamento executivo", "Compatibilização", "Execução", "Testes de estanqueidade", "Documentação final"],
    riskMitigation: "Redundância em sistemas críticos, válvulas de segurança, e monitoramento de pressão para prevenção de falhas operacionais.",
    complianceHandling: "Atendimento às normas ABNT de instalações hidráulicas e requisitos específicos de concessionárias de água e esgoto.",
    faqs: [
      { q: "Vocês projetam sistemas de reúso de água?", a: "Sim, desenvolvemos sistemas de reúso e recirculação como parte da estratégia de sustentabilidade e eficiência hídrica do projeto." },
    ],
  },
  {
    id: "regulatory-engineering",
    title: "Engenharia Regulatória",
    shortDescription: "Suporte técnico para aprovações legais, licenciamentos e conformidade regulatória em projetos industriais.",
    image: "compliance",
    icon: "Scale",
    overview: "Nossa engenharia regulatória oferece suporte técnico completo para navegação no ambiente normativo brasileiro. Atuamos na interface entre engenharia e regulamentação, garantindo que projetos atendam a todos os requisitos legais aplicáveis.",
    projectTypes: ["Aprovação junto ao Corpo de Bombeiros", "Licenciamento ambiental", "Laudos técnicos", "Adequação normativa", "Regularização de edificações", "Consultoria regulatória"],
    deliverables: ["Dossiê de aprovação", "Laudos técnicos", "Pareceres de conformidade", "Planos de adequação", "Relatórios de inspeção", "Certificados de conformidade"],
    standards: ["Instruções Técnicas estaduais", "Código de obras municipal", "Legislação ambiental", "Normas regulamentadoras (NRs)", "Resoluções CONAMA"],
    stages: ["Mapeamento regulatório", "Análise de gaps", "Plano de adequação", "Elaboração documental", "Protocolo e acompanhamento", "Obtenção de aprovações", "Monitoramento contínuo"],
    riskMitigation: "Mapeamento preventivo de requisitos regulatórios, acompanhamento de atualizações normativas e gestão proativa de prazos de licenças.",
    complianceHandling: "Gestão integrada de conformidade com todas as esferas regulatórias: municipal, estadual e federal.",
    faqs: [
      { q: "Vocês acompanham o processo junto aos órgãos?", a: "Sim, fazemos o acompanhamento completo desde o protocolo até a obtenção da aprovação, incluindo respostas a exigências técnicas." },
    ],
  },
];

// Projects Portfolio
export const PROJECTS = [
  {
    id: "unilever-vinhedo-sp",
    title: "Unilever Vinhedo — São Paulo",
    industry: "Indústria de Cosméticos",
    systemType: "Proteção contra Incêndio",
    location: "Vinhedo, SP",
    complexity: "Muito Alta",
    image: "unileverVinhedo",
    overview: "Projeto e execução completa do sistema de proteção contra incêndio para planta industrial de 45.709,77 m² de produção de cosméticos, incluindo sprinklers, hidrantes, detecção, reforço estrutural da cobertura e aprovação FM Global.",
    scope: "Sistema de sprinklers automáticos nas áreas fabris, depósitos de matérias-primas e armazéns de produtos acabados; rede de hidrantes internos e externos; sistema de detecção automática de fumaça; sistema de alarme endereçável; casa de bombas dedicada com bombas principal, reserva e jockey; reservatórios metálicos; reforço estrutural da cobertura da manufatura; integração com sistemas de supervisão.",
    challenges: "Classificação de ocupação industrial com presença de líquidos combustíveis e matérias-primas químicas; armazenamento vertical exigindo critérios rigorosos de densidade hidráulica; atendimento simultâneo às exigências do Corpo de Bombeiros e seguradora internacional; compatibilização estrutural com novas cargas permanentes e variáveis; intervenções com planta em operação; controle de vibração e estabilidade.",
    solution: "Dimensionamento hidráulico com modelagem computacional avançada; definição de densidades conforme classificação FM Global; especificação de sprinklers certificados FM; projeto completo de casa de bombas com bombas UL/FM; instalação de reservatórios com autonomia conforme critérios de risco; sistema de detecção e alarme totalmente endereçável; projeto estrutural complementar com análise de cargas permanentes e operacionais; instalação de perfis adicionais e chapas de reforço; readequação de contraventamentos.",
    methodology: "Planejamento em fases compatível com operação industrial ativa; isolamento de áreas críticas durante intervenções estruturais; instalação de reforços antes da montagem das redes pressurizadas; reuniões técnicas periódicas com engenharia da Unilever; acompanhamento técnico da seguradora; ensaios hidrostáticos e testes funcionais por setor; comissionamento integrado hidráulico e estrutural.",
    riskControl: "Análise de cenários de incêndio em áreas produtivas; avaliação estrutural prévia da cobertura existente; redundância de bombeamento conforme FM Global; plano de contingência durante reforço estrutural; monitoramento contínuo de deformações estruturais; garantia de estabilidade da edificação durante intervenções.",
    safetyProcedures: "Permissão de trabalho para atividades críticas; trabalhos em altura com linha de vida certificada; isolamento de áreas energizadas; controle de acesso em áreas industriais; integração com SESMT da unidade; plano de segurança específico para atividades estruturais.",
    documentation: "Projeto técnico executivo completo (hidráulico e estrutural); memorial de cálculo hidráulico; memorial de cálculo estrutural da cobertura; ART de projeto e execução; certificados UL/FM dos equipamentos; manual de operação e manutenção; relatórios de testes e comissionamento; documentação as-built completa; dossiê técnico para seguradora internacional; documentação para renovação contínua do AVCB.",
    complianceAlignment: "Padrões FM Global; normas NFPA aplicáveis; ABNT NBR 10897; normas estruturais ABNT (NBR 8800, NBR 6120); Instruções Técnicas do Corpo de Bombeiros de SP; exigências específicas da seguradora internacional; manutenção de aprovação contínua para emissão e renovação do AVCB.",
    results: "Sistema de proteção contra incêndio aprovado integralmente pela seguradora internacional; estrutura da cobertura adequadamente reforçada para suportar novas cargas técnicas; planta industrial mantida em plena conformidade com FM Global; aprovação contínua do Corpo de Bombeiros (AVCB); sistema comissionado e testado com êxito; alto nível de confiabilidade estrutural e hidráulica; mitigação robusta de riscos operacionais e patrimoniais.",
  },
  {
    id: "centro-distribuicao-sp",
    title: "Centro de Distribuição — São Paulo",
    industry: "Logística",
    systemType: "Proteção contra Incêndio",
    location: "São Paulo, SP",
    complexity: "Alta",
    image: "projectShowcase",
    overview: "Projeto e execução completa do sistema de proteção contra incêndio para centro de distribuição de 45.000 m², incluindo sprinklers ESFR, hidrantes e sistema de detecção.",
    scope: "Sistema de sprinklers ESFR para armazenamento em estruturas porta-paletes de até 12m, rede de hidrantes, sistema de detecção e alarme, e sinalização de emergência.",
    challenges: "Altura de armazenamento elevada exigindo sprinklers ESFR com pressões de operação específicas. Necessidade de reservatório dedicado com capacidade para 60 minutos de operação.",
    solution: "Dimensionamento hidráulico preciso com modelagem computacional, seleção de sprinklers ESFR K25.2, e projeto de casa de bombas com bombas jockey, principal e reserva.",
    methodology: "Execução em fases coordenadas com a operação do cliente, minimizando impacto nas atividades logísticas.",
    riskControl: "Análise de cenários de incêndio, redundância no sistema de bombeamento, e plano de contingência durante a fase de execução.",
    safetyProcedures: "Trabalho em altura com linha de vida, isolamento de áreas energizadas, e permissões de trabalho para atividades de risco.",
    documentation: "Projeto executivo, memorial de cálculo, ART, manual de operação, e documentação as-built completa.",
    complianceAlignment: "ABNT NBR 10897, IT-22 do Corpo de Bombeiros de SP, e requisitos da seguradora FM Global.",
    results: "Sistema aprovado pelo Corpo de Bombeiros e pela seguradora internacional, com comissionamento bem-sucedido em todos os testes de aceitação.",
  },
  {
    id: "industria-farmaceutica-rj",
    title: "Indústria Farmacêutica — Rio de Janeiro",
    industry: "Farmacêutica",
    systemType: "Sistemas Elétricos",
    location: "Rio de Janeiro, RJ",
    complexity: "Alta",
    image: "electrical",
    overview: "Projeto elétrico completo para planta farmacêutica com classificação de áreas, incluindo subestação, distribuição e sistemas de emergência.",
    scope: "Subestação 13.8kV/380V, quadros de distribuição, sistema de aterramento, SPDA, iluminação de emergência e grupo gerador.",
    challenges: "Áreas classificadas exigindo equipamentos à prova de explosão. Requisitos rigorosos de qualidade de energia para equipamentos sensíveis de produção.",
    solution: "Projeto com redundância N+1 em sistemas críticos, UPS para cargas sensíveis, e classificação de áreas conforme ABNT NBR IEC 60079.",
    methodology: "Execução em paradas programadas coordenadas com o cronograma de produção da planta.",
    riskControl: "Estudo de arco elétrico, coordenação de proteções e procedimentos de bloqueio e etiquetagem (LOTO).",
    safetyProcedures: "NR-10 integral, treinamento específico para áreas classificadas, e monitoramento contínuo de atmosfera.",
    documentation: "Projeto executivo, estudos de curto-circuito e seletividade, laudo de classificação de áreas, e certificados de conformidade.",
    complianceAlignment: "ABNT NBR 5410, NBR 14039, NR-10, ANVISA RDC, e boas práticas de fabricação (GMP).",
    results: "Planta elétrica comissionada com sucesso, aprovada em auditoria da ANVISA e certificação GMP.",
  },
  {
    id: "planta-alimentos-pr",
    title: "Planta de Alimentos — Paraná",
    industry: "Alimentícia",
    systemType: "Infraestrutura Hidráulica",
    location: "Curitiba, PR",
    complexity: "Média",
    image: "hydraulic",
    overview: "Projeto hidráulico completo para planta de processamento de alimentos, incluindo água industrial, esgoto e sistema de tratamento de efluentes.",
    scope: "Rede de água fria industrial, água quente para processo, esgoto sanitário e industrial, drenagem pluvial, e estação de tratamento de efluentes (ETE).",
    challenges: "Demandas variáveis de água conforme ciclos de produção. Efluentes com alta carga orgânica exigindo tratamento específico antes do descarte.",
    solution: "Sistema com reservatórios de equalização, bombeamento com inversores de frequência, e ETE com processo biológico aeróbio.",
    methodology: "Instalação progressiva com testes parciais em cada etapa para garantir funcionalidade contínua.",
    riskControl: "Monitoramento de qualidade da água, válvulas de retenção em pontos críticos, e sistema de alarme para níveis de reservatório.",
    safetyProcedures: "Procedimentos de espaço confinado para inspeção de reservatórios, e controle de qualidade da água potável.",
    documentation: "Projeto executivo hidráulico, memorial de dimensionamento, outorga de uso da água, e licença de operação da ETE.",
    complianceAlignment: "ABNT NBR 5626, NBR 8160, legislação ambiental estadual, e requisitos sanitários para indústria alimentícia.",
    results: "Sistema hidráulico operacional com efluentes tratados dentro dos parâmetros exigidos pela legislação ambiental.",
  },
];

// Engineering Process Steps
export const PROCESS_STEPS = [
  {
    id: 1,
    title: "Diagnóstico Técnico",
    description: "Levantamento detalhado das condições existentes, necessidades operacionais e requisitos técnicos do projeto.",
    icon: "Search",
    details: "Visita técnica, levantamento fotográfico, análise de documentação existente, e identificação de condicionantes do projeto.",
  },
  {
    id: 2,
    title: "Mapeamento de Riscos e Regulatório",
    description: "Identificação de riscos técnicos e mapeamento completo dos requisitos normativos e regulatórios aplicáveis.",
    icon: "Shield",
    details: "Análise de riscos, identificação de normas aplicáveis, mapeamento de requisitos de órgãos reguladores e seguradoras.",
  },
  {
    id: 3,
    title: "Projeto Executivo",
    description: "Desenvolvimento do projeto executivo com detalhamento completo para execução em campo.",
    icon: "PenTool",
    details: "Dimensionamento, memorial de cálculo, desenhos executivos, especificação de materiais e lista de quantitativos.",
  },
  {
    id: 4,
    title: "Suporte à Aprovação Legal",
    description: "Elaboração de documentação e acompanhamento junto a órgãos reguladores para obtenção de aprovações.",
    icon: "FileCheck",
    details: "Preparação de dossiê, protocolo junto a órgãos, resposta a exigências técnicas e obtenção de alvarás.",
  },
  {
    id: 5,
    title: "Execução Controlada",
    description: "Gerenciamento da execução em campo com controle de qualidade, segurança e cronograma.",
    icon: "Wrench",
    details: "Coordenação de equipes, controle de materiais, inspeções de qualidade e gestão de segurança do trabalho.",
  },
  {
    id: 6,
    title: "Inspeção e Testes",
    description: "Programa de inspeções e testes para validação do sistema instalado conforme especificações do projeto.",
    icon: "ClipboardCheck",
    details: "Testes hidrostáticos, testes de funcionalidade, inspeções visuais, e verificação de conformidade com projeto.",
  },
  {
    id: 7,
    title: "Documentação As-Built",
    description: "Elaboração da documentação final refletindo exatamente o que foi executado em campo.",
    icon: "FileText",
    details: "Desenhos as-built, relatório de comissionamento, certificados de teste, e manual de operação e manutenção.",
  },
  {
    id: 8,
    title: "Suporte ao Ciclo de Vida",
    description: "Acompanhamento pós-entrega com suporte técnico para operação, manutenção e atualizações do sistema.",
    icon: "RefreshCw",
    details: "Plano de manutenção preventiva, suporte técnico remoto, visitas periódicas e atualização normativa.",
  },
];

// Compliance Standards
export const COMPLIANCE_ITEMS = [
  {
    title: "Normas Nacionais de Incêndio",
    description: "Alinhamento com regulamentações nacionais de proteção contra incêndio, incluindo instruções técnicas estaduais e normas ABNT aplicáveis.",
    standards: ["ABNT NBR 10897", "ABNT NBR 13714", "ABNT NBR 17240", "Instruções Técnicas do Corpo de Bombeiros"],
    icon: "Flame",
  },
  {
    title: "Instruções Técnicas",
    description: "Tratamento adequado das instruções técnicas estaduais, que definem requisitos específicos para cada tipo de ocupação e risco.",
    standards: ["IT-01 a IT-44 (SP)", "Instruções Técnicas estaduais específicas", "Decretos estaduais de segurança contra incêndio"],
    icon: "BookOpen",
  },
  {
    title: "Boas Práticas de Engenharia",
    description: "Aplicação de boas práticas de engenharia reconhecidas internacionalmente para garantir a qualidade e segurança dos projetos.",
    standards: ["Práticas recomendadas de projeto", "Metodologias de análise de risco", "Protocolos de comissionamento"],
    icon: "Award",
  },
  {
    title: "Padrões Internacionais",
    description: "Quando requerido por seguradoras ou operações multinacionais, aplicação de padrões internacionais reconhecidos.",
    standards: ["NFPA (quando aplicável)", "FM Global (quando requerido)", "IEC Standards", "IEEE Standards"],
    icon: "Globe",
  },
  {
    title: "Compliance de Seguros",
    description: "Suporte técnico para atendimento de requisitos de seguradoras, incluindo análise de risco e adequação de sistemas.",
    standards: ["Requisitos de seguradoras nacionais", "FM Global Data Sheets (quando aplicável)", "Relatórios de inspeção de risco"],
    icon: "ShieldCheck",
  },
];

// Industries Served
export const INDUSTRIES = [
  { id: "food", title: "Indústria Alimentícia", description: "Plantas de processamento, armazenamento e distribuição de alimentos com requisitos sanitários específicos.", image: "food", icon: "UtensilsCrossed" },
  { id: "pharmaceutical", title: "Farmacêutica", description: "Ambientes controlados com classificação de áreas, salas limpas e requisitos GMP.", image: "pharmaceutical", icon: "Pill" },
  { id: "logistics", title: "Logística", description: "Centros de distribuição e armazéns com sistemas de armazenamento de grande porte.", image: "logistics", icon: "Truck" },
  { id: "manufacturing", title: "Manufatura", description: "Plantas industriais com processos de produção variados e requisitos específicos de segurança.", image: "manufacturing", icon: "Factory" },
  { id: "commercial", title: "Centros Comerciais", description: "Empreendimentos comerciais com alta ocupação e requisitos rigorosos de segurança contra incêndio.", image: "commercial", icon: "Building2" },
  { id: "warehouse", title: "Armazéns", description: "Estruturas de armazenamento com diferentes classes de risco e alturas de empilhamento.", image: "warehouse", icon: "Warehouse" },
  { id: "datacenter", title: "Data Centers", description: "Infraestrutura crítica com requisitos de redundância, supressão limpa e continuidade operacional.", image: "datacenter", icon: "Server" },
];

// FAQ Enterprise Level
export const FAQS = [
  {
    question: "Qual é a abordagem para projetos de grande escala?",
    answer: "Para projetos de grande escala, adotamos uma metodologia estruturada que inclui diagnóstico técnico detalhado, mapeamento de riscos, projeto executivo com modelagem computacional, e execução em fases coordenadas. Cada etapa possui pontos de controle e validação para garantir qualidade e conformidade.",
  },
  {
    question: "Como é tratada a conformidade regulatória?",
    answer: "Realizamos mapeamento completo dos requisitos regulatórios aplicáveis no início de cada projeto. Isso inclui normas ABNT, instruções técnicas estaduais, normas regulamentadoras (NRs), e quando aplicável, padrões internacionais. O acompanhamento junto a órgãos reguladores é parte integral do nosso serviço.",
  },
  {
    question: "Vocês atendem requisitos de seguradoras internacionais?",
    answer: "Sim, temos experiência com requisitos de seguradoras nacionais e internacionais. Quando requerido, aplicamos padrões como FM Global e NFPA, sempre de forma responsável e alinhada com a regulamentação brasileira.",
  },
  {
    question: "Como funciona o suporte pós-entrega?",
    answer: "Oferecemos suporte ao ciclo de vida do sistema, incluindo plano de manutenção preventiva, suporte técnico para dúvidas operacionais, acompanhamento de inspeções periódicas, e atualização de documentação quando necessário.",
  },
  {
    question: "Qual é o prazo típico para um projeto industrial?",
    answer: "O prazo varia conforme a complexidade e escopo. Projetos de médio porte geralmente levam de 2 a 4 meses para a fase de projeto, mais o período de execução que depende das condições do site e coordenação com outras disciplinas.",
  },
  {
    question: "Como é garantida a qualidade durante a execução?",
    answer: "Implementamos um programa de qualidade que inclui inspeções em pontos críticos, testes de aceitação conforme normas técnicas, documentação fotográfica de etapas construtivas, e verificação de conformidade com o projeto executivo.",
  },
  {
    question: "Vocês trabalham com projetos multidisciplinares?",
    answer: "Sim, nossa equipe integra especialistas em diferentes disciplinas de engenharia, permitindo a coordenação eficiente entre sistemas de incêndio, elétricos, hidráulicos e regulatórios em um mesmo projeto.",
  },
  {
    question: "Como é tratada a gestão de riscos?",
    answer: "Adotamos uma abordagem sistemática de gestão de riscos que inclui identificação de perigos, análise de cenários, implementação de medidas de mitigação, e planos de contingência. Cada projeto possui uma matriz de riscos específica.",
  },
];

// Technology & Tools
export const TECH_TOOLS = [
  { title: "Metodologia de Projeto", description: "Processo estruturado de engenharia com etapas definidas, pontos de controle e validação técnica em cada fase.", icon: "Compass" },
  { title: "Modelagem Técnica", description: "Utilização de ferramentas de modelagem para dimensionamento preciso e simulação de cenários operacionais.", icon: "Box" },
  { title: "Sistemas de Coordenação", description: "Coordenação multidisciplinar com compatibilização de projetos e gestão de interferências.", icon: "GitBranch" },
  { title: "Documentação Padronizada", description: "Padrões de documentação técnica que garantem rastreabilidade e consistência em todos os projetos.", icon: "FileStack" },
];

// Risk Management
export const RISK_MANAGEMENT = [
  { title: "Identificação de Perigos", description: "Análise sistemática de perigos potenciais em cada fase do projeto, desde a concepção até a operação.", icon: "AlertTriangle" },
  { title: "Lógica de Redundância", description: "Implementação de sistemas redundantes em pontos críticos para garantir continuidade operacional.", icon: "Layers" },
  { title: "Planejamento de Contingência", description: "Desenvolvimento de planos de contingência específicos para cenários de falha identificados.", icon: "LifeBuoy" },
];

// Maintenance & Continuity
export const MAINTENANCE = [
  { title: "Inspeção Periódica", description: "Programa de inspeções regulares para verificação do estado operacional dos sistemas instalados.", icon: "Eye" },
  { title: "Atualização de Sistemas", description: "Acompanhamento de atualizações normativas e tecnológicas para manter sistemas em conformidade.", icon: "RefreshCw" },
  { title: "Suporte de Longo Prazo", description: "Relacionamento contínuo com o cliente para suporte técnico, treinamento e orientação operacional.", icon: "HeartHandshake" },
];
