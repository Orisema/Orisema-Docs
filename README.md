# Orisema Docs

Portal da comunidade Orisema construído com [Rspress](https://rspress.dev/).

## Desenvolvimento

Node.js 22+:

```bash
npm install
npm run dev
```

## Publicação

Após merge na `main`, o workflow `.github/workflows/deploy-pages.yml` compila e publica o site.

1. Em **Settings → Pages**, selecione **GitHub Actions**.
2. Crie um CNAME DNS de `docs.orisema.tec.br` para `orisema.github.io`.
3. Configure o domínio personalizado em **Settings → Pages** e ative HTTPS após a verificação.

A documentação técnica completa permanece nos repositórios de origem. A sincronização automática ainda não foi implementada.

## Idiomas

Português brasileiro (principal), inglês e espanhol (conteúdo introdutório).

## Licença

Apache-2.0.
