export const projetosData = [
  {
    id: "conciliadeira",
    titulo: "Conciliadora",
    badge: "Conciliadora",
    porcentagem: "100%",
    descricao:
      "Desenvolvi a Concilia.Já, uma plataforma de alta performance para auditoria e conciliação financeira automatizada. Com foco em engenharia de dados, estruturei o processamento de grandes volumes transacionais (EDI) usando Python, Flask e Polars, otimizando consultas em memória com Parquet. A arquitetura conta com banco MySQL de dupla instância, cache reativo e fila de processamento. Já no frontend, implementei uma interface dinâmica com Alpine.js e Tailwind CSS. Uma solução robusta de BI que demonstra meu domínio em backend e engenharia de dados.",
    // 👇 É AQUI QUE VOCÊ COLOCA O CONTEÚDO DA PÁGINA ESPECÍFICA 👇
    conteudoDetalhado: `

    <h2 style="display:flex; align-items:center; gap:8px;">
       <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>

        Desafio do Projeto
      </h2>
      <p>Centralizar e processar um alto volume de dados descentralizados das adquirentes, mantendo a integridade transacional sob alta demanda. O maior obstáculo técnico não foi apenas a ingestão segura que prevenisse dados duplicados, mas sim o alto custo computacional de exibir essas grandes volumetrias. Consultas diretas ao banco para alimentar os dashboards geravam latência inaceitável, exigindo a criação de uma camada intermediária de altíssima performance estruturada em cache de arquivos Parquet para garantir carregamento instantâneo.</p>
      
      <h2 style="display:flex; align-items:center; gap:8px;">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="28" height="28">
  <!-- Círculos do Alvo -->
  <circle cx="45" cy="55" r="35" fill="none" stroke="#000000" stroke-width="6"/>
  <circle cx="45" cy="55" r="20" fill="none" stroke="#000000" stroke-width="6"/>
  <circle cx="45" cy="55" r="6" fill="#000000"/>

  <!-- Haste da Flecha -->
  <line x1="45" y1="55" x2="85" y2="15" stroke="#000000" stroke-width="6" stroke-linecap="round"/>

  <!-- Penas da Flecha -->
  <line x1="70" y1="15" x2="85" y2="15" stroke="#000000" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="85" y1="30" x2="85" y2="15" stroke="#000000" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="75" y1="25" x2="90" y2="10" stroke="#000000" stroke-width="4" stroke-linecap="round"/>
</svg>
        
        Objetivo do Projeto
      </h2>
      <p>Centralizar, padronizar e auditar todo o fluxo financeiro de vendas e pagamentos originados por múltiplos canais e adquirentes, cruzando vendas, registros operacionais e extratos bancários para identificar com precisão divergências, depósitos pendentes ou tarifas cobradas acima do contratado..</p>
      
      <h2 style="display:flex; align-items:center; gap:8px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
        Funcionalidades Principais
      </h2>
      <ul>
        <li><strong>Dashboard Executivo:</strong> Visão consolidada de KPIs da saúde financeira, projeções de fluxo de caixa futuro, aging de recebíveis e comparativo de adquirentes (Market Share).</li>
        <li><strong>Dashboard de Auditoria:</strong> Classificação inteligente do status de cada transação (Conciliado, Em Aberto, Divergente, Cancelado) e análise de cancelamentos.</li>
        <li><strong>Conciliação Bancária Automatizada:</strong> Batimento sistemático e identificação automática de depósitos divergentes baseados em contas multi-próprias.</li>
        <li><strong>Auditoria de Custos e Ajustes:</strong> Acompanhamento de Custo Efetivo Total (CET %), rastreamento de chargebacks, e auditoria do fluxo contábil através da Posição Congelada.</li>
      </ul>

      <h2 style="display:flex; align-items:center; gap:8px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 22h20"/><path d="M17 2v20"/><path d="M7 22V6l10-4"/><path d="M7 10h10"/><path d="M7 14h10"/><path d="M7 18h10"/></svg>
        Engenharia & Arquitetura de Dados
      </h2>
      <ul>
        <li><strong>Motor Ultra Rápido (Polars & Parquet):</strong> Consultas e relatórios massivos rodam de forma instantânea na memória usando processamento vetorizado, sem onerar o banco de dados.</li>
        <li><strong>Cache Auto-Healing (Sincronismo Transparente):</strong> Invalidação e reconstrução autônoma de partições no Redis/Disco sempre que novas cargas assíncronas acontecem.</li>
        <li><strong>Conexões Isoladas (Dual Instance DB):</strong> Arquitetura distribuída no MySQL 8.x resguardando segurança da autenticação contra a pesada ingestão de dados transacionais.</li>
        <li><strong>Consciência de Canal (Acquirer-Aware UI):</strong> Consciência de Canal (Acquirer-Aware UI): Interface dinâmica desenhada com Alpine.js e Tailwind CSS que se auto-ajusta ao contexto operacional (Fiserv, Adiq, Sicoob, etc.)</li>
      </ul>
    `,
    tags: [
      "Python (Flask, Polars)",
      "MySQL 8.x",
      "Parquet",
      "Alpine.js",
      "Tailwind CSS",
      "Infraestrutura (AWS EC2, Linux)",
    ],
    imagens: [
      "/assets/projetos/ConciliaCapa.png",
      "/assets/projetos/PainelVendas.png",
      "/assets/projetos/resumoTransacoes.png",
    ],
  },
  {
    id: "projeto-dois",
    titulo: "Pipeline de Dados Otimizado",
    badge: "Engenharia",
    porcentagem: "100%",
    descricao:
      "Implementação de um pipeline de dados em tempo real utilizando tecnologias modernas para ingestão, tratamento e integração. Focado em escalabilidade e baixa latência para atender demandas analíticas avançadas.",
    tags: ["AWS", "PySpark", "Airflow"],
    imagens: [
      "https://picsum.photos/450/336?random=3",
      "https://picsum.photos/450/336?random=4",
    ],
  },
  {
    id: "projeto-tres",
    titulo: "Dashboard Analítico Financeiro",
    badge: "BI",
    porcentagem: "100%",
    descricao:
      "Criação de dashboards interativos e performáticos no Power BI interligado a uma base de dados SQL. Permitindo análises rápidas sobre despesas operacionais e insights vitais para o negócio.",
    tags: ["Power BI", "SQL Server", "DAX"],
    imagens: [
      "https://picsum.photos/450/336?random=5",
      "https://picsum.photos/450/336?random=6",
      "https://picsum.photos/450/336?random=7",
    ],
  },
];
