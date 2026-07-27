export const projetosData = [
    {
        id: "conciliadeira",
        titulo: "Conciliadora",
        badge: "Conciliadora",
        porcentagem: "100%",
        descricao: "Desenvolvi a Concilia.Já, uma plataforma de alta performance para auditoria e conciliação financeira automatizada. Com foco em engenharia de dados, estruturei o processamento de grandes volumes transacionais (EDI) usando Python, Flask e Polars, otimizando consultas em memória com Parquet. A arquitetura conta com banco MySQL de dupla instância, cache reativo e fila de processamento. Já no frontend, implementei uma interface dinâmica com Alpine.js e Tailwind CSS. Uma solução robusta de BI que demonstra meu domínio em backend e engenharia de dados.",
        // 👇 É AQUI QUE VOCÊ COLOCA O CONTEÚDO DA PÁGINA ESPECÍFICA 👇
        conteudoDetalhado: `
      <h2>O Problema</h2>
      <p>A auditoria e conciliação financeira demandava muito tempo e esforço humano, gerando atrasos em relatórios cruciais.</p>
      
      <h2>A Solução e Engenharia</h2>
      <p>Desenvolvi uma pipeline robusta utilizando <strong>Polars</strong> para leitura rápida de arquivos parquet...</p>
      
      <ul>
        <li>Redução de 80% do tempo de processamento.</li>
        <li>Persistência dos dados no Mysql.</li>
        <li>Automatização das tarefas.</li>
        <li>.</li>
      </ul>
    `,
        tags: ["Flask", "Tailwind CSS", "Python", "MySQL"],
        imagens: [
            "/assets/projetos/ConciliaCapa.png",
            "https://picsum.photos/450/336?random=1",
            "https://picsum.photos/450/336?random=2"
        ]
    },
    {
        id: "projeto-dois",
        titulo: "Pipeline de Dados Otimizado",
        badge: "Engenharia",
        porcentagem: "100%",
        descricao: "Implementação de um pipeline de dados em tempo real utilizando tecnologias modernas para ingestão, tratamento e integração. Focado em escalabilidade e baixa latência para atender demandas analíticas avançadas.",
        tags: ["AWS", "PySpark", "Airflow"],
        imagens: [
            "https://picsum.photos/450/336?random=3",
            "https://picsum.photos/450/336?random=4"
        ]
    },
    {
        id: "projeto-tres",
        titulo: "Dashboard Analítico Financeiro",
        badge: "BI",
        porcentagem: "100%",
        descricao: "Criação de dashboards interativos e performáticos no Power BI interligado a uma base de dados SQL. Permitindo análises rápidas sobre despesas operacionais e insights vitais para o negócio.",
        tags: ["Power BI", "SQL Server", "DAX"],
        imagens: [
            "https://picsum.photos/450/336?random=5",
            "https://picsum.photos/450/336?random=6",
            "https://picsum.photos/450/336?random=7"
        ]
    }
];
