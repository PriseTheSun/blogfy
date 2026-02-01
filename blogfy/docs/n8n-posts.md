# Integração com n8n (publicação de posts)

Esta automação deve gerar arquivos Markdown dentro da pasta `posts/` do projeto com o seguinte frontmatter YAML (obrigatório):

---
title: "Título do post"
date: "AAAA-MM-DD"
description: "Resumo curto do post"
category: "Categoria do post"
author: "Nome do autor"
thumbnail: "/images/nome-da-imagem.ext"
---

- `title`: título do post
- `date`: data da postagem (formato ISO YYYY-MM-DD)
- `description`: resumo usado nos cards do hero
- `category`: categoria exibida no badge do card
- `author`: nome do autor que aparecerá no card
- `thumbnail`: caminho para a imagem dentro de `public/` (opcional)

Observações:
- A automação do n8n deve apenas criar/atualizar arquivos `.md` dentro de `posts/` com o frontmatter acima. O Next.js lerá os arquivos via `lib/posts.ts`.
- Para melhores resultados, envie imagens para `public/images/` e referencie via `/images/nome.ext`.
