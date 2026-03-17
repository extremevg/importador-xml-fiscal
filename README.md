# Importador de XML Fiscal

## Descrição
Projeto em Node.js para leitura, processamento e extração de dados principais de arquivos XML fiscais.

## Funcionalidades
- Leitura de arquivos XML em lote
- Conversão de XML para objeto JavaScript
- Extração de campos principais da nota fiscal
- Geração de arquivos JSON individuais
- Geração de arquivo CSV consolidado com resumo dos XMLs processados

## Tecnologias utilizadas
- Node.js
- JavaScript
- xml2js

## Estrutura do projeto
- `data/`: arquivos XML de entrada
- `output/`: arquivos JSON e CSV gerados
- `src/services/`: leitura, parsing, exportação de JSON e CSV
- `src/utils/`: utilitários auxiliares

## Como executar
```bash
npm install
npm start