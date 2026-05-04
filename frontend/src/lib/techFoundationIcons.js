import {
  SiOpenai,
  SiGoogle,
  SiGooglecloud,
  SiMeta,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiDocker,
  SiKubernetes,
  SiPrometheus,
  SiGrafana,
  SiApacheairflow,
  SiGithubactions,
  SiTerraform,
  SiRedis,
  SiPostgresql,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiGraphql,
  SiApachekafka,
  SiElasticsearch,
  SiPinecone,
  SiHuggingface,
  SiMistralai,
} from "react-icons/si";
import { FaAws, FaMicrosoft } from "react-icons/fa";
import { Bot, Cpu, Cloud, GitBranch, BarChart3, Code2, Layers, Server, Database, Workflow } from "lucide-react";

/**
 * Returns a React icon component for Technology Foundation marquees.
 * Falls back to `Cpu` when no brand match is found.
 */
export function getTechFoundationIcon(name) {
  const n = String(name).toLowerCase().trim();

  if (/gpt|openai/.test(n)) return SiOpenai;
  if (/claude|anthropic/.test(n)) return Bot;
  if (/gemini|google\s*palm|palm/.test(n)) return SiGoogle;
  if (/llama|meta/.test(n)) return SiMeta;
  if (/mistral/.test(n)) return SiMistralai;
  if (/cohere/.test(n)) return Layers;
  if (n === "python" || n.startsWith("python")) return SiPython;
  if (/tensorflow/.test(n)) return SiTensorflow;
  if (/pytorch|torch/.test(n)) return SiPytorch;
  if (/scikit|sklearn/.test(n)) return SiScikitlearn;
  if (/xgboost|jax/.test(n)) return BarChart3;
  if (/mlflow/.test(n)) return Workflow;
  if (/kubeflow|kubernetes|k8s/.test(n)) return SiKubernetes;
  if (/prometheus/.test(n)) return SiPrometheus;
  if (/grafana/.test(n)) return SiGrafana;
  if (/ci\/cd|pipeline|github actions/.test(n)) return SiGithubactions;
  if (/model versioning|versioning/.test(n)) return GitBranch;
  if (/docker/.test(n)) return SiDocker;
  if (/terraform/.test(n)) return SiTerraform;
  if (/aws|sagemaker|bedrock/.test(n)) return FaAws;
  if (/azure|microsoft/.test(n)) return FaMicrosoft;
  if (/google cloud|gcp|vertex|bigquery/.test(n)) return SiGooglecloud;
  if (/serverless|lambda|functions/.test(n)) return Server;
  if (/airflow/.test(n)) return SiApacheairflow;
  if (/kafka/.test(n)) return SiApachekafka;
  if (/redis/.test(n)) return SiRedis;
  if (/postgres/.test(n)) return SiPostgresql;
  if (/mongo/.test(n)) return SiMongodb;
  if (/next\.?js/.test(n)) return SiNextdotjs;
  if (/react/.test(n)) return SiReact;
  if (/typescript|type.?script/.test(n)) return SiTypescript;
  if (/node(\.js)?/.test(n)) return SiNodedotjs;
  if (/graphql/.test(n)) return SiGraphql;
  if (/flutter/.test(n)) return SiFlutter;
  if (/swift/.test(n)) return SiSwift;
  if (/kotlin/.test(n)) return SiKotlin;
  if (/langchain|llamaindex|haystack|semantic kernel|dspy/.test(n)) return SiHuggingface;
  if (/pinecone|weaviate|milvus|qdrant|chroma|vector db|vector/.test(n)) return Database;
  if (/\brest\b/.test(n)) return Server;
  if (/spring|fastapi|django/.test(n)) return Code2;
  if (/elastic|opensearch/.test(n)) return SiElasticsearch;
  if (/snowflake/.test(n)) return Database;
  if (/spark/.test(n)) return Cpu;
  if (/langgraph|autogen|crewai|temporal|prefect/.test(n)) return Workflow;
  if (/vllm|triton|ollama|inference|serving/.test(n)) return Cloud;
  if (/weights|wandb|w&b/.test(n)) return BarChart3;
  if (/hugging|hf /.test(n)) return SiHuggingface;

  return Cpu;
}
