# FicaFrioAí — Landing page

Base local em Astro com saída estática e TypeScript estrito. Esta etapa prepara a estrutura e uma página inicial de apresentação; o design final da LP e a experiência 3D ainda serão desenvolvidos.

## Executar com Docker

No terminal do Ubuntu (WSL), com o Docker Desktop aberto e a integração com o Ubuntu ativa:

```bash
cd /home/kley/arcondicionado
docker compose up --build
```

Abra [http://localhost:4321](http://localhost:4321). O contêiner compila o Astro e serve a versão estática com Nginx. Depois de editar os arquivos, execute novamente `docker compose up --build`.

Se a porta 4321 estiver ocupada, use `FICAFRIO_PORT=8080 docker compose up --build` e abra [http://localhost:8080](http://localhost:8080).

Para parar e remover o contêiner, use `docker compose down`.



## Executar com Node.js

Requer Node.js **22.22.0 ou superior** e npm. Com nvm:

```bash
nvm install
nvm use
npm install
npm run dev
```

- `npm run dev`: desenvolvimento em `http://localhost:4321`.
- `npm run build`: gera o site estático em `dist/`.
- `npm run preview`: serve o resultado do build localmente.

## Estrutura

```text
docs/
  FicaFrioAi-v1-e-roadmap.md       # Documento original de produto
public/
  models/
    ar-condicionado.glb           # Modelo 3D original, sem alterações
src/
  assets/images/product/          # Imagens WebP processadas pelo Astro
    ar-condicionado-diagonal.webp
    ar-condicionado-frente-aberto.webp
  components/
    layout/                      # Cabeçalho e rodapé
    product/                     # Apresentação visual do produto
    sections/                    # Seções da landing page
  data/product.ts                # Nome, textos e referências dos assets
  layouts/BaseLayout.astro       # Documento HTML, metadados e CSS global
  pages/index.astro              # Composição da página inicial
  styles/global.css              # Estilos e base responsiva
```

## Imagens e modelo 3D

As duas imagens foram movidas e renomeadas, preservando seus arquivos originais. Elas ficam em `src/assets` e são importadas pelo componente `Image` do Astro, com dimensões e otimização automáticas.

O arquivo recebido é **GLB** (glTF binário versão 2), de aproximadamente 7,7 MB. Está em `public/models/ar-condicionado.glb`, servido diretamente pela URL `/models/ar-condicionado.glb`. A referência centralizada `product.modelUrl` também respeita o `base` configurado no Astro.

Os arquivos de imagem e o modelo estão disponíveis no projeto para uso na apresentação.

## Conteúdo e escopo

O documento de produto permanece completo em `docs/`. A página apresenta os recursos como proposta em desenvolvimento, sem anunciar preço, teste grátis ou funcionalidades como já disponíveis. Não há formulário, backend ou publicação nesta etapa.

## Validação desta preparação

A sintaxe dos sete componentes/páginas Astro e os arquivos JSON foram verificados. O cabeçalho, o tamanho e o conteúdo JSON do GLB também foram conferidos; o modelo não referencia arquivos externos.

A instalação das dependências e o build completo não foram concluídos neste ambiente: o registro npm está sem resolução de DNS e o Node instalado é 20.20.2. Execute os comandos acima em Node 22.22.0 ou superior com acesso ao npm. Ainda não há lockfile, pois a resolução das dependências não foi concluída.

## Referências técnicas

- [Instalação do Astro](https://docs.astro.build/en/install-and-setup/)
- [Astro 7.4 e requisito de Node](https://astro.build/blog/astro-740/)
- [Assets no Astro](https://docs.astro.build/en/guides/images/)
