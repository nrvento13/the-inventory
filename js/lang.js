const translations = {
    en: {
        title      : "The Inventory",
        home       : "Home",
        about      : "About",
        skills     : "Skills",
        experience : "Experience",
        education  : "Education",
        language   : "Language",
        english    : "English",
        spanish    : "Español",
        italian    : "Italiano",
        japanese   : "日本語",
        greeting   : "Welcome to the Inventory!",
        typewrite  : JSON.stringify([
            "My name is Noah.",
            "I am a Geologist turned Data Scientist.",
            "I have a newfound passion for data and coding.",
            "Learn more about my work below."
        ]),
        name_header: "Noah Vento",
        job_role  : "Analytics Engineer",
        about_paragraph1: "I am a former Geologist who has transitioned into the world of Data Science and Analytics. \
            My first exposure to coding was in graduate school, where I used Python to analyze and visualize field data. \
            This experience opened my eyes to the power of programming, and I've tried to incorporate it into my work ever since. \
            I started my post-graduate career at a major oil and gas company as a Geoscientist, but quickly found myself on a team \
            developing Deep Learning models for seismic interpretation. In this role, I learned how to use AI to solve complex problems \
            and make data-driven decisions for business units around the world. I am now an Analytics Engineer at WaterBridge, a \
            midstream oil and gas start-up, where I use Python, SQL, Docker, and Spotfire to automate workflows and reduce operational \
            costs.",
        about_paragraph2: "Looking back on my experiences thus far, I am grateful for the opportunities I've had to learn and grow \
            in this field, and more importantly, I am thankful for the mentors and peers who have guided me along the way. I am excited \
            to continue my professional journey. If you would like to connect, please feel free to reach out to me at the associated links.",
        skills_title: "Skills",
        python_description: "Proficient in Python, with experience in developing code for automation, data analysis, and artificial intelligence.",
        sql_description: "Daily use of SQL for database management, querying, and data manipulation.",
        docker_description: "Deploying applications in Docker containers for portability and scalability.",
        git_description: "Comfortable using Git for version control and collaboration on projects. Using GitHub daily for code management.",
        ai_description: "Developing machine learning & deep learning models for predictive analytics and data-driven decision making, primarily using Scikit-Learn and PyTorch.",
        spotfire_description: "Deploying visualizations and dashboards in Spotfire for data exploration and analysis.",
        js_description: "Learning JavaScript to build interactive and dynamic web applications.",
        html_description: "Building web pages with HTML to display content and structure.",
        css_description: "Styling web pages with CSS to create visually appealing designs.",
        react_description: "Diving into React to build modern and responsive user interfaces for web pages.",
        experience_title: "Experience",
        analytics_engineer_title: "Analytics Engineer",
        waterbridge: "WaterBridge",
        experience_dates_1: "Feb. 2024 - Present",
        waterbridge_description: "Midstream Oil & Gas start-up providing water management solutions to Exploration & Production companies.",
        assignments_title: "Assignments",
        bullet_dca: "Coded a probabilistic decline curve analysis feature to apply risk to forecasts, enabling planning engineers to generate thousands of scenarios in minutes.",
        bullet_sql: "Managed the planning database using SQL to maintain well schedules, historical data, and forecasts, supporting accurate planning and cross-team collaboration.",
        bullet_batrat: "Developed a battery volatility metric to evaluate operator pump ratability, supporting a successful challenge that led an upstream operator to drop a proposed $1M charge.",
        bullet_pipe_costs: "Created a pipeline cost forecasting model using probabilistic risk analysis, now required for Authorization for Expenditures (AFEs) to support improved decision making.",
        bullet_samsara: "Pulled vehicle route data from the Samsara API and analyzed efficiency metrics, validating operational changes implemented by VPs.",
        bullet_auto_qc: "Built an automated workflow to flag anomalous volumetric readings, cutting QA/QC cycle time by over 75%.",
        bullet_general: "Regular utilization of Python, SQL, Git, Docker, Azure, APIs, and Spotfire.",
        geoscientist_title: "Geoscientist / Data Scientist",
        exxonmobil: "ExxonMobil",
        experience_dates_2: "Oct. 2020 - Feb. 2024",
        exxonmobil_description: "A global oil and gas leader, engaged in exploration, production, refining, and chemicals, with a strong focus on energy innovation and advanced technology development.",
        bullet_ol385e: "Re-mapped a ~7 TCF gas reservoir in offshore Mozambique, passing peer review with senior technical leads.",
        bullet_auto_chi: "Built a Python repository for trend-fitting and anomaly detection in seismic data, resulting in a conference abstract.",
        bullet_mai: "Designed AI-driven subsurface tools in PyTorch for business units, reducing interpretation time by over 90%.",
        bullet_story_maps: "Led ArcGIS StoryMaps adoption for Upstream knowledge sharing, creating apps with over 1,000 internal views.",
        education_title: "Education",
        colorado_state_university: "Colorado State University",
        colorado_dates: "2018 - 2020",
        msc_geoscience: "M.Sc. in Geoscience",
        research_title: "Research",
        chile_slope_systems: "Chile Slope Systems (CSS): Hypothesis-based Machine Learning for Deep-water Channel Systems",
        texas_am_university: "Texas A&M University",
        texas_dates: "2014 - 2018",
        bsc_geology: "B.Sc. in Geology",
        maples_research: "Multiscale Applied Physics Lab for Earth Science (MAPLES): High-Resolution Magnetic-Geochemical Mapping of Metasomatic Processes",
        geochronology_research: "Geochronology Group: Field Mapping and Age Dating of Dike Complexes in Southwestern Montana",
        navigation: "Navigation",
        links: "Links"
    },
    es: {
        title      : "El Inventario",
        home       : "Inicio",
        about      : "Sobre Me",
        skills     : "Habilidades",
        experience : "Experiencia",
        education  : "Educación",
        language   : "Idioma",
        english    : "English",
        spanish    : "Español",
        italian    : "Italiano",
        japanese   : "日本語",
        greeting   : "¡Bienvenido al Inventario!",
        typewrite  : JSON.stringify([
            "Me llamo Noah.",
            "Soy un geólogo convertido en científico de datos.",
            "Tengo una nueva pasión por los datos y la codificación.",
            "Conozca más sobre mi trabajo a continuación."
        ]),
        name_header: "Noah Vento",
        job_role  : "Ingeniero de Analítica",
        about_paragraph1: "Soy un ex geólogo que se ha convertido en científico de datos y análisis. \
            Mi primer contacto con la programación fue en la escuela de posgrado, donde utilicé Python \
            para analizar y visualizar datos de campo. Esta experiencia me abrió los ojos al poder de la \
            programación y he intentado incorporarla en mi trabajo desde entonces. Comencé mi carrera posterior \
            a la graduación en una importante empresa de petróleo y gas como geocientífico, pero pronto me encontré \
            en un equipo desarrollando modelos de aprendizaje profundo para la interpretación sísmica. En este papel, \
            aprendí a usar la IA para resolver problemas complejos y tomar decisiones basadas en datos para unidades de negocio \
            en todo el mundo. Ahora soy Ingeniero de Analítica en WaterBridge, una empresa emergente de petróleo y gas, donde \
            utilizo Python, SQL, Docker y Spotfire para automatizar flujos de trabajo y reducir costos operativos.",
        about_paragraph2: "Mirando hacia atrás en mis experiencias hasta ahora, estoy agradecido por las oportunidades que \
            he tenido para aprender y crecer en este campo, y más importante aún, estoy agradecido por los mentores y compañeros \
            que me han guiado en el camino. Estoy emocionado de continuar mi trayectoria profesional. Si desea conectarse, \
            no dude en comunicarse conmigo a través de los enlaces asociados.",
        skills_title: "Habilidades",
        python_description: "Competente en Python, con experiencia en el desarrollo de código para automatización, análisis de datos e inteligencia artificial.",
        sql_description: "Uso diario de SQL para la gestión de bases de datos, consultas y manipulación de datos.",
        docker_description: "Despliegue de aplicaciones en contenedores Docker para portabilidad y escalabilidad.",
        git_description: "Cómodo usando Git para el control de versiones y colaboración en proyectos. Uso diario de GitHub para la gestión del código.",
        ai_description: "Desarrollo de modelos de aprendizaje automático y profundo para análisis predictivo y toma de decisiones basada en datos, principalmente usando Scikit-Learn y PyTorch.",
        spotfire_description: "Despliegue de visualizaciones y paneles en Spotfire para la exploración y análisis de datos.",
        js_description: "Aprendiendo JavaScript para construir aplicaciones web interactivas y dinámicas.",
        html_description: "Construcción de páginas web con HTML para mostrar contenido y estructura.",
        css_description: "Estilización de páginas web con CSS para crear diseños visualmente atractivos.",
        react_description: "Sumergirse en React para construir interfaces de usuario modernas y receptivas para páginas web.",        
        experience_title: "Experiencia",
        analytics_engineer_title: "Ingeniero de Análisis",
        waterbridge: "WaterBridge",
        experience_dates_1: "Feb. 2024 - Presente",
        waterbridge_description: "Start-up de Oil & Gas en midstream que proporciona soluciones de gestión del agua a las empresas de Exploración y Producción.",
        assignments_title: "Tareas",
        bullet_dca: "Programé una función de análisis probabilístico de curvas de declinación para aplicar riesgo a los pronósticos, permitiendo a los ingenieros de planificación generar miles de escenarios en minutos.",
        bullet_sql: "Gestioné la base de datos de planificación usando SQL para mantener los cronogramas de pozos, datos históricos y pronósticos, apoyando una planificación precisa y colaboración entre equipos.",
        bullet_batrat: "Desarrollé una métrica de volatilidad de baterías para evaluar la capacidad de bombeo de operadores, respaldando un desafío exitoso que llevó a un operador upstream a rechazar un cargo propuesto de $1M.",
        bullet_pipe_costs: "Creé un modelo de pronóstico de costos de tuberías utilizando análisis probabilístico de riesgo, ahora requerido para las Autorizaciones de Gastos (AFE) para apoyar una mejor toma de decisiones.",
        bullet_samsara: "Extraje datos de rutas de vehículos desde la API de Samsara y analicé métricas de eficiencia, validando los cambios operativos implementados por los vicepresidentes.",        
        bullet_auto_qc: "Construí un flujo de trabajo automatizado para detectar lecturas volumétricas anómalas, reduciendo el tiempo de control de calidad en más del 75%.",
        bullet_general: "Uso regular de Python, SQL, Git, Docker, Azure, APIs y Spotfire.",
        geoscientist_title: "Geocientífico / Científico de Datos",
        exxonmobil: "ExxonMobil",
        experience_dates_2: "Oct. 2020 - Feb. 2024",
        exxonmobil_description: "Un líder global en petróleo y gas, involucrado en exploración, producción, refinación y productos químicos, con un fuerte enfoque en la innovación energética y el desarrollo de tecnología avanzada.",
        bullet_ol385e: "Reinterpreté un yacimiento de gas de aproximadamente 7 TCF en alta mar en Mozambique, superando la revisión técnica con líderes técnicos senior.",
        bullet_auto_chi: "Construí un repositorio en Python para ajuste de tendencias y detección de anomalías en datos sísmicos, resultando en un resumen para conferencia.",
        bullet_mai: "Diseñé herramientas de subsuelo impulsadas por IA en PyTorch para unidades de negocio, reduciendo el tiempo de interpretación en más del 90%.",        
        bullet_story_maps: "Lideré la adopción de ArcGIS StoryMaps para compartir conocimiento en el área de Upstream, creando aplicaciones con más de 1,000 visualizaciones internas.",
        education_title: "Educación",
        colorado_state_university: "Universidad Estatal de Colorado",
        colorado_dates: "2018 - 2020",
        msc_geoscience: "M.Sc. en Ciencias de la Tierra",
        research_title: "Investigación",
        chile_slope_systems: "Sistemas de Pendientes de Chile (CSS): Aprendizaje Automático Basado en Hipótesis para Sistemas de Canales Profundos",
        texas_am_university: "Universidad Texas A&M",
        texas_dates: "2014 - 2018",
        bsc_geology: "B.Sc. en Geología",
        maples_research: "Laboratorio de Física Aplicada Multiescala para Ciencias de la Tierra (MAPLES): Mapeo Magnético-Gequímico de Alta Resolución de Procesos Metasomáticos",
        geochronology_research: "Grupo de Geocronología: Mapeo de Campo y Datación por Edad de Complejos de Dique en el Suroeste de Montana",
        navigation: "Navegación",
        links: "Enlaces"
    },
    it: {
        title      : "Il Inventario",
        home       : "Inizio",
        about      : "Chi Sono",
        skills     : "Competenze",
        experience : "Esperienza",
        education  : "Istruzione",
        language   : "Lingua",
        english    : "English",
        spanish    : "Español",
        italian    : "Italiano",
        japanese   : "日本語",
        greeting   : "Benvenuto nell'Inventario!",
        typewrite  : JSON.stringify([
            "Mi chiamo Noah.",
            "Sono un geologo diventato Data Scientist.",
            "Ho una nuova passione per i dati e la programmazione.",
            "Scopri di più sul mio lavoro qui sotto."
        ]),
        name_header: "Noah Vento",
        job_role  : "Ingegnere di Analisi>",
        about_paragraph1: "Sono un ex geologo che è passato al mondo della Data Science e Analytics. Il mio primo contatto \
            con la programmazione è stato durante il dottorato, dove ho usato Python per analizzare e visualizzare i dati di campo. \
            Questa esperienza mi ha aperto gli occhi al potere della programmazione e ho cercato di incorporarlo nel mio lavoro da \
            allora. Ho iniziato la mia carriera post-laurea in una grande azienda di petrolio e gas come geologo, ma mi sono presto \
            trovato in un team che sviluppa modelli di Deep Learning per l'interpretazione sismica. In questo ruolo, ho imparato a \
            usare l'IA per risolvere problemi complessi e prendere decisioni basate sui dati per le unità aziendali in tutto il mondo.\
            Ora sono un Ingegnere di Analisi presso WaterBridge, una start-up del settore petrolifero e del gas, dove utilizzo Python, \
            SQL, Docker e Spotfire per automatizzare i flussi di lavoro e ridurre i costi operativi.",
        about_paragraph2: "Guardando indietro alle mie esperienze finora, sono grato per le opportunità che ho avuto di apprendere \
            e crescere in questo campo e, soprattutto, sono grato ai mentori e ai colleghi che mi hanno guidato lungo il cammino. \
            Sono entusiasta di continuare il mio percorso professionale. Se desideri connetterti, non esitare a contattarmi tramite \
            i link associati.",
        skills_title: "Competenze",
        python_description: "Competente in Python, con esperienza nello sviluppo di codice per automazione, analisi dei dati e intelligenza artificiale.",
        sql_description: "Uso quotidiano di SQL per la gestione dei database, le query e la manipolazione dei dati.",
        docker_description: "Distribuzione delle applicazioni in contenitori Docker per portabilità e scalabilità.",
        git_description: "A proprio agio con l'uso di Git per il controllo delle versioni e la collaborazione su progetti. Uso quotidiano di GitHub per la gestione del codice.",
        ai_description: "Sviluppo di modelli di apprendimento automatico e profondo per analisi predittive e decisioni basate sui dati, principalmente utilizzando Scikit-Learn e PyTorch.",
        spotfire_description: "Distribuzione di visualizzazioni e cruscotti in Spotfire per l'esplorazione e l'analisi dei dati.",
        js_description: "Apprendimento di JavaScript per costruire applicazioni web interattive e dinamiche.",
        html_description: "Costruzione di pagine web con HTML per visualizzare contenuti e struttura.",
        css_description: "Stilizzazione delle pagine web con CSS per creare design visivamente accattivanti.",
        react_description: "Approfondimento di React per costruire interfacce utente moderne e reattive per pagine web.",
        experience_title: "Esperienza",
        analytics_engineer_title: "Ingegnere Analitico",
        waterbridge: "WaterBridge",
        experience_dates_1: "Feb. 2024 - Presente",
        waterbridge_description: "Start-up Oil & Gas midstream che fornisce soluzioni di gestione dell'acqua alle aziende di Esplorazione e Produzione.",
        assignments_title: "Assegnazioni",
        bullet_dca: "Ho programmato una funzione di analisi probabilistica della curva di declino per applicare il rischio alle previsioni, consentendo agli ingegneri di pianificazione di generare migliaia di scenari in pochi minuti.",
        bullet_sql: "Gestito il database di pianificazione utilizzando SQL per mantenere i programmi dei pozzi, i dati storici e le previsioni, supportando una pianificazione accurata e la collaborazione tra i team.",
        bullet_batrat: "Sviluppato una metrica di volatilità delle batterie per valutare la capacità di pompaggio degli operatori, supportando una sfida riuscita che ha portato un operatore upstream a rinunciare a una proposta di addebito di 1 milione di dollari.",
        bullet_pipe_costs: "Creato un modello di previsione dei costi delle condotte utilizzando un'analisi probabilistica del rischio, ora richiesto per le Autorizzazioni di Spesa (AFE) a supporto di decisioni migliorate.",
        bullet_samsara: "Estratto dati delle rotte dei veicoli dall'API di Samsara e analizzato metriche di efficienza, convalidando le modifiche operative implementate dai vicepresidenti.",        
        bullet_auto_qc: "Ho costruito un flusso di lavoro automatizzato per identificare letture volumetriche anomale, riducendo il tempo del controllo qualità di oltre il 75%.",
        bullet_general: "Uso regolare di Python, SQL, Git, Docker, Azure, API e Spotfire.",
        geoscientist_title: "Geoscienziato / Data Scientist",
        exxonmobil: "ExxonMobil",
        experience_dates_2: "Ott. 2020 - Feb. 2024",
        exxonmobil_description: "Un leader globale nel settore petrolifero e del gas, impegnato in esplorazione, produzione, raffinazione e prodotti chimici, con un forte focus sull'innovazione energetica e sullo sviluppo di tecnologie avanzate.",
        bullet_ol385e: "Ho reinterpretato un giacimento di gas da circa 7 TCF al largo del Mozambico, superando la revisione tecnica con i principali esperti senior.",
        bullet_auto_chi: "Creato un repository Python per l'adattamento di trend e il rilevamento di anomalie nei dati sismici, con un abstract per una conferenza.",
        bullet_mai: "Progettato strumenti subsuperficiali guidati dall'IA in PyTorch per unità di business, riducendo i tempi di interpretazione di oltre il 90%.",        
        bullet_story_maps: "Ho guidato l’adozione di ArcGIS StoryMaps per la condivisione della conoscenza nel settore Upstream, creando applicazioni con oltre 1.000 visualizzazioni interne.",
        education_title: "Istruzione",
        colorado_state_university: "Università Statale del Colorado",
        colorado_dates: "2018 - 2020",
        msc_geoscience: "M.Sc. in Geoscience",
        research_title: "Ricerca",
        chile_slope_systems: "Sistemi di Pendii in Cile (CSS): Apprendimento Automatico Basato su Ipotesi per Sistemi di Canali Profondi",
        texas_am_university: "Università Texas A&M",
        texas_dates: "2014 - 2018",
        bsc_geology: "B.Sc. in Geologia",
        maples_research: "Laboratorio di Fisica Applicata su Multiscala per le Scienze della Terra (MAPLES): Mappatura Magnetica e Geochimica ad Alta Risoluzione dei Processi Metasomatici",
        geochronology_research: "Gruppo di Geocronologia: Mappatura sul Campo e Datazione di Complessi di Dique nel Sud-Ovest del Montana",
        navigation: "Navigazione",
        links: "Collegamenti"
    },
    ja: {
        title      : "インベントリ",
        home       : "ホーム",
        about      : "私について",
        skills     : "スキル",
        experience : "経験",
        education  : "教育",
        language   : "言語",
        english    : "English",
        spanish    : "Español",
        italian    : "Italiano",
        japanese   : "日本語",
        greeting   : "インベントリへようこそ！",
        typewrite  : JSON.stringify([
            "私の名前はノアです。",
            "地質学者からデータサイエンティストになりました。",
            "データとコーディングに対する新たな情熱を持っています。",
            "私の仕事についてもっと知りましょう。"
        ]),
        name_header: "ノア・ベント",
        job_role  : "アナリティクスエンジニア",
        about_paragraph1: "私は地質学者からデータサイエンティストの世界に転身しました。プログラミングの最初の経験は大学院で、\
            Pythonを使用してフィールドデータを分析・視覚化しました。この経験はプログラミングの力を目の当たりにし、それを仕事に取り入れるようになりました。\
            大学院卒業後、主要な石油・ガス会社で地質学者としてキャリアをスタートしましたが、すぐに地震の解釈のためのディープラーニングモデルを開発するチームに入りました。\
            この役割では、AIを使って複雑な問題を解決し、世界中のビジネスユニットのためにデータ駆動の意思決定を行う方法を学びました。現在は、\
            WaterBridgeというミッドストリームの石油・ガススタートアップでアナリティクスエンジニアとして働いており、Python、SQL、Docker、Spotfireを使用してワークフローを自動化し、\
            運用コストを削減しています",
        about_paragraph2: "これまでの経験を振り返ると、この分野で学び、成長する機会を持てたことに感謝しており、また、\
            道を示してくれたメンターや仲間たちにも感謝しています。今後のプロフェッショナルな旅を続けるのが楽しみです。つながりたい方は、\
            お気軽に関連リンクからご連絡ください。",
        skills_title: "スキル",
        python_description: "Pythonに熟練しており、自動化、データ分析、人工知能のためのコード開発経験があります。",
        sql_description: "データベース管理、クエリ、およびデータ操作のためにSQLを日常的に使用しています。",
        docker_description: "ポータビリティとスケーラビリティのためにDockerコンテナでアプリケーションを展開しています。",
        git_description: "プロジェクトでのバージョン管理とコラボレーションのためにGitを使いこなしています。コード管理のためにGitHubを日常的に使用しています。",
        ai_description: "予測分析とデータ駆動の意思決定のために、主にScikit-LearnとPyTorchを使用して機械学習と深層学習モデルを開発しています。",
        spotfire_description: "データの探索と分析のためにSpotfireで視覚化とダッシュボードを展開しています。",
        js_description: "インタラクティブで動的なウェブアプリケーションを作成するためにJavaScriptを学んでいます。",
        html_description: "コンテンツと構造を表示するためにHTMLでウェブページを構築しています。",
        css_description: "視覚的に魅力的なデザインを作成するためにCSSでウェブページをスタイリングしています。",
        react_description: "ウェブページのために現代的でレスポンシブなユーザーインターフェースを構築するためにReactに取り組んでいます。",
        experience_title: "経験",
        analytics_engineer_title: "アナリティクスエンジニア",
        waterbridge: "WaterBridge",
        experience_dates_1: "2024年2月 - 現在",
        waterbridge_description: "探鉱・生産会社に水管理ソリューションを提供するミッドストリームの石油・ガススタートアップ。",
        assignments_title: "業務内容",
        bullet_dca: "確率的な減衰曲線分析機能を開発し、リスクを予測に適用することで、計画エンジニアが数千のシナリオを数分で生成できるようにしました。",
        bullet_sql: "SQLを使って計画データベースを管理し、井戸スケジュール、過去データ、予測を維持し、正確な計画とチーム間の連携を支援しました。",
        bullet_batrat: "バッテリーの変動性指標を開発し、操業者のポンプ運転可能性を評価。これにより、上流の操業者が提案された100万ドルの請求を撤回する成功した異議申し立てを支援しました。",
        bullet_pipe_costs: "確率的リスク分析を用いたパイプラインコスト予測モデルを作成し、支出承認（AFE）に必須となり、意思決定の改善に貢献しました。",
        bullet_samsara: "Samsara APIから車両ルートデータを取得し、効率指標を分析。副社長によって実施された運用変更の検証を行いました。",        
        bullet_auto_qc: "異常な体積測定値を自動で検出するワークフローを構築し、QA/QCサイクル時間を75%以上短縮しました。",
        bullet_general: "Python、SQL、Git、Docker、Azure、API、Spotfire を日常的に使用しています。",
        geoscientist_title: "地質学者 / データサイエンティスト",
        exxonmobil: "ExxonMobil",
        experience_dates_2: "2020年10月 - 2024年2月",
        exxonmobil_description: "探鉱、生産、精製、化学を行うグローバルな石油・ガスリーダーで、エネルギーの革新と先進技術の開発に強く焦点を当てています。",
        bullet_ol385e: "モザンビーク沖の約7TCFのガス貯留層を再マッピングし、シニア技術リーダーとのピアレビューを通過しました。",
        bullet_auto_chi: "地震データのトレンドフィッティングと異常検知のためのPythonリポジトリを構築し、学会要旨を作成しました。",
        bullet_mai: "PyTorchを用いたAI駆動の地下構造解析ツールを事業部向けに設計し、解釈時間を90%以上短縮しました。",        
        bullet_story_maps: "Upstream部門での知識共有のためにArcGIS StoryMapsの導入を主導し、社内で1,000回以上閲覧されたアプリを作成しました。",
        education_title: "教育",
        colorado_state_university: "コロラド州立大学",
        colorado_dates: "2018 - 2020",
        msc_geoscience: "地球科学の修士号",
        research_title: "研究",
        chile_slope_systems: "チリスロープシステム (CSS): 深海チャネルシステムの仮説に基づく機械学習",
        texas_am_university: "テキサスA&M大学",
        texas_dates: "2014 - 2018",
        bsc_geology: "地質学の学士号",
        maples_research: "地球科学のためのマルチスケール応用物理学研究所 (MAPLES): 高解像度の磁気-化学的マッピングによる変成プロセス",
        geochronology_research: "地質年代学グループ: モンタナ南西部のダイク複合体の野外調査と年代測定",
        navigation: "ナビゲーション",
        links: "リンク"
    }
};

function loadLanguage(language) {
    applyTranslations(translations[language]);
    // Reinitialize typewrite effect with new language
    initTypewrite(language);
}

function applyTranslations(translations) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });
}

// Load default language (English) on page load
document.addEventListener('DOMContentLoaded', () => {
    loadLanguage('en');
});

