import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: process.env.NEXT_PUBLIC_PERSON_FIRST_NAME || "",
  lastName: process.env.NEXT_PUBLIC_PERSON_LAST_NAME || "",
  name: `${process.env.NEXT_PUBLIC_PERSON_FIRST_NAME || ""} ${process.env.NEXT_PUBLIC_PERSON_LAST_NAME || ""}`,
  role: process.env.NEXT_PUBLIC_PERSON_ROLE || "",
  avatar: `https://github.com/${(process.env.NEXT_PUBLIC_GITHUB_URL || "").replace("https://github.com/", "")}.png?v=${Date.now()}`,
  email: process.env.NEXT_PUBLIC_PERSON_EMAIL || "",
  location: (process.env.NEXT_PUBLIC_PERSON_LOCATION || "America/Los_Angeles") as Person["location"],
  languages: ["English", "Chinese"] as Person["languages"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: process.env.NEXT_PUBLIC_GITHUB_URL || "",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building production ML systems at scale</>,
  featured: {
    display: false,
    title: <>Featured work</>,
    href: "/work",
  },
  subline: (
    <>
      Machine Learning Engineer specializing in feature engineering, real-time
      serving infrastructure, and MLOps pipelines. Experienced in multi-agent AI
      systems and LLM platform design.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        End-to-end Machine Learning Engineer with 3+ years building production
        ML systems at scale — spanning feature engineering, feature store and
        model warehouse design, real-time serving infrastructure, MLOps pipeline
        orchestration, and ML platform development. Hands-on with the full stack
        from API design and data modeling to workflow orchestration and cloud
        infrastructure. Experienced in multi-agent AI system architecture and
        LLM platform design.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Cognitiv",
        timeframe: "Jan 2023 — Present",
        role: "Machine Learning Engineer II",
        achievements: [
          <>
            Rebuilt the feature engineering team infrastructure from the ground
            up, establishing a robust Python codebase integrated with internal
            services via REST APIs, containerized with Docker for reproducible
            deployments, and standardized CI/CD workflows for the team's feature
            pipelines
          </>,
          <>
            Engineered <strong>dozens of production feature sets</strong> (user
            behavioral, contextual, geographic) serving{" "}
            <strong>millions of requests/sec</strong> in the real-time bidding
            pipeline, using Python, Scala (Spark SQL), and Java with
            multi-processing concurrency
          </>,
          <>
            Built large-scale user feature pipelines processing{" "}
            <strong>multiple ID types at terabyte scale daily</strong>, optimized
            on customized EMR clusters with broadcast joins to eliminate hot-key
            skew, partitioned workloads across spot/on-demand instances for cost
            efficiency
          </>,
          <>
            Managed a streaming feature EMR cluster producing features at
            near-real-time batch latency, ingesting traffic from Kinesis and
            processing with Scala Spark-ML; implemented a Redis caching layer
            to deduplicate records across batch windows and respect external
            API rate limits
          </>,
          <>
            Managed <strong>the majority of production features</strong>{" "}
            consumed by downstream deep learning models; designed real-time
            monitoring dashboards (Grafana, Datadog) with custom alerting to
            track data freshness, pipeline latency, and feature generation
            health
          </>,
          <>
            Major contributor to rebuilding the <strong>feature store</strong> —
            designed and implemented feature push/installation pipelines to
            Redpanda (Kafka) streams, co-designed the data model for feature
            registration and versioning, and built integration with ScyllaDB and
            Redis for low-latency real-time feature serving at scale
          </>,
          <>
            Designed the <strong>model warehouse</strong> (model version
            control) system from scratch — owned the data model, defined the API
            contract for model registration and lifecycle management, and led
            cross-team interaction design across campaign management, feature
            store, and RTB systems
          </>,
          <>
            Provisioned and managed EMR cluster resources for streaming data
            pipelines across multiple latency tiers (near real-time, daily,
            weekly, monthly), tuning cluster configurations per workload to
            balance throughput, cost, and SLA requirements
          </>,
          <>
            Researched and benchmarked <strong>vector search solutions</strong>{" "}
            (ClickHouse, FAISS, custom NumPy) with ANN methods (HNSW, IVF-PQ)
            for threshold-based cosine similarity matching, evaluating trade-offs
            across recall, latency, index size, and infrastructure cost
          </>,
          <>
            Integrated external LLM APIs to generate{" "}
            <strong>text embeddings as production features</strong>,
            encapsulating model API calls inside Docker images with isolated
            dependencies, and serving via concurrent batch requests to maximize
            throughput
          </>,
          <>
            Migrated feature and model pipelines from Airflow to internal ML
            Pipeline Management platform, consolidating DAG definitions and
            improving pipeline observability and scheduling reliability
          </>,
          <>
            Building next-generation ML infrastructure migrating all pipelines
            to <strong>Argo Workflows on EKS</strong>, enabling
            Kubernetes-native scheduling, container-level resource isolation, and
            improved horizontal scalability
          </>,
          <>
            Diagnosed root causes of performance degradation across the
            real-time bidding system, internal data platform, and feature store;
            coordinated cross-team remediation to restore latency and throughput
            targets
          </>,
          <>
            Mentored engineers on feature engineering best practices and pipeline
            design patterns; guided data analysts on Spark SQL and Python for
            self-serve data exploration
          </>,
        ],
        images: [],
      },
      {
        company: "Amobee (now Nexxen)",
        timeframe: "Jun 2022 — Sep 2022",
        role: "Data Scientist Intern",
        achievements: [
          <>
            Developed a data integration pipeline for{" "}
            <strong>billion-scale TV viewership data</strong> using PySpark and
            Spark SQL on AWS, building a mapping system between TV programs and
            networks using Jaro-Winkler similarity and Levenshtein distance
          </>,
          <>
            Identified differences in user demographics and platform usage
            patterns through clustering methods (DBSCAN, K-Means, GMM),
            informing multi-source customer advertising campaign strategy
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "University of California, Los Angeles (UCLA)",
        description: (
          <>M.Eng. Data Science | GPA: 3.8/4.0 | Sep 2021 — Dec 2022</>
        ),
      },
      {
        name: "Indiana University, Bloomington",
        description: (
          <>
            B.S. Computer Science, Highest Distinction | Data Science | GPA:
            3.9/4.0 | Aug 2017 — Dec 2020
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Languages & Frameworks",
        description: (
          <>
            Python, Scala, Java, SQL, C#; PyTorch, PySpark, Spark SQL, FastAPI
          </>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "Java" },
          { name: "Scala" },
          { name: "SQL" },
          { name: "FastAPI" },
          { name: "PyTorch" },
        ],
        images: [],
      },
      {
        title: "ML & AI",
        description: (
          <>
            Deep Learning, NLP, LLM Orchestration, Multi-Agent Systems, RAG,
            Embeddings (FAISS), Vector Search (HNSW, IVF-PQ), Prompt
            Engineering, Feature Engineering, A/B Testing
          </>
        ),
        tags: [
          { name: "Deep Learning" },
          { name: "NLP" },
          { name: "LLM" },
          { name: "RAG" },
          { name: "Multi-Agent" },
          { name: "Vector Search" },
        ],
        images: [],
      },
      {
        title: "Infrastructure & Data",
        description: (
          <>
            Docker, AWS (S3, EC2, EMR, EKS), Argo Workflows, Airflow, GitHub
            Actions, Terraform, Vercel, W&B, Grafana, Datadog, Spark (Hadoop),
            PostgreSQL, Redis, ScyllaDB, ClickHouse, Redpanda (Kafka), Feature
            Stores, MCP Protocol
          </>
        ),
        tags: [
          { name: "Docker" },
          { name: "AWS" },
          { name: "Kubernetes" },
          { name: "Vercel" },
          { name: "Airflow" },
          { name: "Terraform" },
          { name: "PostgreSQL" },
          { name: "Redis" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about ML and engineering...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Replace with your own images
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
