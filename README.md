# Meetup Gatsby no Campinas Front-end

https://www.meetup.com/campinas-frontend/events/262413777/

Para rodar o projeto use esses os comandos:

```
npm install
npm start
```

O site já está iniciado, boa parte de React e todo o CSS já está implementado.

Siga as instruções para terminar o site usando o Gatsby. Documentação do Gatsby:

https://www.gatsbyjs.org/docs/

# Instruções

## 1 - Introdução ao Gatsby

Gatsby roda em React, nele já vem implementado o controle de rotas usando [reach-router](https://github.com/reach/router).

É muito parecido com o [react-router](https://github.com/ReactTraining/react-router).

1. Crie uma página de FAQ adicionando um arquivo em `src/pages/faq.js`
2. Coloque o básico para rodar o componente

```jsx
import React from 'react';

const FAQ = () => (
  <>
    <h1>FAQ</h1>
    <h2>O que é o Campinas Front-end?</h2>
    <p>Grupo destinado a reunir desenvolvedores(as) front-end de Campinas e região.</p>
  </>
);

export default FAQ;
```

Os componentes em `src/pages` (e sua estrutura de diretório) criam as páginas no site.

3. Coloque um layout igual das outras páginas, use o mesmo componente da Inicial (`src/pages/index.js`)
4. Veja o resultado em http://localhost:8000/faq
5. Adicione um link para a página no header, usando o componente `Link`
6. Rode um build do projeto `npm run build`
7. Rode um servidor local agora com a versão de build (gerado em `src/public/`), use `npm run serve`
8. Acesse `http://localhost:9000/faq` e verifique no source da página (no Chrome: botão direito -> View source), veja se o que colocou no render do componente está lá

Gatsby é um gerador de site **estático**, o conteúdo dentro da página do FAQ deve estar dentro do HTML. O que não aconteceria em uma aplicação que só usa React.

## 2 - Performance

Web performance é o *core* do Gatsby.

Muito parecido com `create-react-app`, o Gatsby já vem com [Babel](https://babeljs.io/) e [webpack](https://webpack.js.org/) configurado.

O webpack no Gatsby é configurado para gerar um site de **alta performance**. Vamos conferir:

1. Veja que foi gerado um arquivo HTML de cada página: `public/index.html` e `public/faq/index.html`
2. Repare que navegando entre elas, a troca é instantânea, não ocorre loading de página HTML

Além de rodar o React em Node para gerar as páginas, um site em Gatsby também roda React no browser. Depois de carregado no browser, o site se transforma numa aplicação SPA.

3. Apague um dos arquivos, `public/index.html` ou `public/faq/index.html`
4. Veja que isso não impede de navegar na página que você apagou, o arquivo HTML só é útil para o **primeiro load** do site, o resto é a aplicação SPA renderizando
5. Atualize a página enquanto está na que deletou, deve dar um 404, porque não achou o HTML

Reparou na quantidade de arquivo JavaScript que gerou no `public/`?

Gatsby já trata [code split](https://reactjs.org/docs/code-splitting.html) para evitar um bundle pesado gerado pelo webpack.

6. Com as páginas normal de volta, rodando em build, coloque em janela anônima, deixe o Developer Tools aberto na aba Network e desabilite o cache
7. Atualize a página, e passe o mouse nos links, veja que um JavaScript é carregado, são os componentes necessários para renderizar a página. Ao clickar, ao clickar no link a página carrega na hora se já terminou a request

É uma técnica sútil, mas faz muita diferença, e já vem pronta no Gatsby.

Mais sobre web performance com Gatsby, veja esse artigo:

https://www.freecodecamp.org/news/how-gatsby-is-so-blazing-fast-c99a6f2d405e/


## 3 - Imagens

Vamos ver performance nas imagens, esse já não é tão automático, mas precisa implementar pouca coisa.

Gatsby usa [GraphQL](https://graphql.org/) e [Sharp](https://github.com/lovell/sharp) para tratar imagens.

Veja esse exemplo de como fica: https://using-gatsby-image.gatsbyjs.org/

![](https://cdn-images-1.medium.com/max/800/1*NtTh_CL3BXESFTWvMfzR9w.gif)

1. Na página inicial (`src/pages/index.js`), importe os componentes

```jsx
import Image from 'gatsby-image';
import { graphql } from 'gatsby';
```

2. Rodando `npm start`, acesse http://localhost:8000/___graphql

Esse é um playground para queries que o site pode fazer, use o explorador na esquerda, ele facilita (muito) para montar queries sem errar sintaxe.

3. No explorador, coloque `file` -> `relativePath:`, os campos em roxo são variáveis, coloque o nome da imagem logo.png em `eq:`
4. Coloque na query `childImageSharp` -> `maxWidth:` com 1024 (tamanho máximo no container de CSS)
5. Complete a query colocando `src` e execute a query, deve trazer um resultado assim:

```json
{
  "data": {
    "file": {
      "childImageSharp": {
        "fluid": {
          "src": "/static/12e16ad6333d9104af3362d0c3e4f585/4950c/logo.png"
        }
      }
    }
  }
}
```

6. No código da página coloque a query

```jsx
export const queryLogo = graphql`
  query {
    <sua query aqui>
  }
`;
```

Quando exporta uma query em um componente de página, Gatsby já entende e faz a request. O resultado vai numa prop `data`.

Dentro do componente, você já consegue pegar a imagem com `data.file.childImageSharp.fluid.src`.

Para finalizar, Gatsby tem um componente para tratar a imagem

7. Coloque no final da query um `...GatsbyImageSharpFluid`, ela deve ficar assim:

```graphql
  fluid(maxWidth: 1024) {
    ...GatsbyImageSharpFluid
  }
```

8. Troque o `<img />` pelo componente `<Image />`. Lembrando que `data` vem de prop.

Teste atualizando a página, o resultado é muito parecido com imagens no medium.

O site carrega uma imagem base64 já inline no HTML, aplica blur com CSS, baixa a imagem final e quando termina, anima com fade out para a imagem final. Muitas outras coisas acontecem, veja da documentação:

https://www.gatsbyjs.org/packages/gatsby-image/#problem

Usamos a imagem do tipo fluid, também é possível usar para tamanho definido, que é o fixed:

https://www.gatsbyjs.org/packages/gatsby-image/#two-types-of-responsive-images

Um setup de instalação já veio neste projeto, que foi instalar as dependências e adicionar plugins do Gatsby. Vamos ver como adicionar um plugin, agora sem setup pronto.

## 4 - Plugins

Há muitos plugins que a comunidade cria (https://www.gatsbyjs.org/plugins/).

Vamos finalizar a página de FAQ usando um plugin de MDX.

MDX é uma extensão de arquivo markdown (.md) usando React, no Gatsby tem um plugin para usar isso: [gatsby-plugin-mdx](https://www.gatsbyjs.org/packages/gatsby-plugin-mdx/#installation).

1. Veja na documentação dele como usar, as dependências no npm já estão instaladas
2. Crie a página `pages/faq.mdx`
3. Adicione o Layout, veja que tem dois jeitos de fazer:

https://www.gatsbyjs.org/packages/gatsby-plugin-mdx/#default-layouts

4. Coloque o componente de `<SEO title="FAQ" />`
5. No projeto tem um arquivo `/campinas-front-end-faq.md` com um conteúdo para colocar na página

## 5. Deploy

Vamos usar o Netlify.

Ele é bem simples e intuitivo, é frequente ver desenvolvedores usando ele para projetos pessoais.

Você vai precisar subir no GitHub, GitLab ou Bitbucket o seu projeto antes.

https://app.netlify.com/start

Agora com o site em produção, teste como ele PWA, essa é outra configuração que já vem (quase) pronta.

Na verdade, ela já vem no [template default do Gatsby](https://github.com/gatsbyjs/gatsby-starter-default), é só adicionar essas linhas no gatsby-condig.js

```js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Campinas Front-end',
        short_name: 'Campinas Front-end',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
};
```

O dojo do meetup acaba aqui, parabéns por chegar até o final! 🎉🎉🎉

---

## 6. CMS (TODO)

https://github.com/luanorlandi/meetup-tutorial/commit/df12024c6eeda4684192fe81c80b3fdd79b75e19
