# Primeiros passos em laboratório

> **Somente host Linux descartável.** Este guia adapta [QUICKSTART.md](https://github.com/Orisema/Orisema-Infrastructure/blob/main/docs/QUICKSTART.md). Confirme que a porta 8080 está livre.

Requisitos: Linux AMD64 ou ARM64, binário verificado, Podman, checkout do repositório e acesso à imagem `docker.io/library/nginx:1.27`. Execute todos os comandos com o **mesmo usuário**.

## 1. Validar

```sh
orisema version
podman version
orisema validate examples/nginx.yaml
```

O manifesto de exemplo declara `orisema-hello-orisema-web` e publica `127.0.0.1:8080` para a porta 80.

## 2. Planejar sem alterar o host

```sh
orisema plan examples/nginx.yaml
```

Em host limpo, espere `CREATE`. Interrompa em `DRIFT` ou `REVIEW`: o Orisema não adota nem reconcilia contêineres automaticamente.

## 3. Implantar com confirmação explícita

```sh
orisema deploy examples/nginx.yaml
# Revise o plano e digite exatamente: DEPLOY
```

Não há transação ou rollback automático de múltiplos serviços.

## 4. Observar

```sh
orisema status examples/nginx.yaml
orisema plan examples/nginx.yaml
curl -I http://127.0.0.1:8080/
orisema logs examples/nginx.yaml web
```

`NOOP` significa apenas equivalência dos campos declarativos suportados; não comprova saúde, execução, segurança ou digest da imagem.

## 5. Limpar manualmente

```sh
podman inspect --format '{{json .Config.Labels}}' orisema-hello-orisema-web
podman stop orisema-hello-orisema-web
podman rm orisema-hello-orisema-web
```

**Antes de remover**, confirme os labels `dev.orisema.managed=true`, `dev.orisema.app=hello-orisema` e `dev.orisema.service=web`. Não remova se não corresponderem.

Este laboratório não valida produção, volumes, segredos, backup, operação remota ou Docker. Consulte a [matriz de compatibilidade](https://github.com/Orisema/Orisema-Infrastructure/blob/main/docs/COMPATIBILITY.md).