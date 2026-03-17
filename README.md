# Importador de XML Fiscal

## Descrição
Projeto em Node.js para leitura, processamento e extração de dados principais de arquivos XML fiscais.

## Funcionalidades
- Leitura de arquivos XML em lote
- Conversão de XML para objeto JavaScript
- Extração de campos principais da nota fiscal
- Geração de arquivos JSON com os dados processados

## Tecnologias utilizadas
- Node.js
- JavaScript
- xml2js

## Estrutura do projeto
- `data/`: arquivos XML de entrada
- `output/`: arquivos JSON gerados
- `src/services/`: regras de leitura, parsing e saída
- `src/utils/`: utilitários auxiliares

## Como executar
```bash
npm install
npm start