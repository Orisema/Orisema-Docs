# Instalação e verificação

> **Experimental — não utilize em produção.** Esta página adapta [INSTALLATION.md](https://github.com/Orisema/Orisema-Infrastructure/blob/main/docs/INSTALLATION.md) da versão Alpha 5.

A versão experimental documentada é **v0.1.0-alpha.5** (31/10/2026). Há artefatos Linux AMD64 e ARM64; a execução nativa ARM64 ainda precisa de validação. Podman em Linux é o único runtime oficialmente suportado.

## Baixar e conferir integridade

```sh
version=v0.1.0-alpha.5
arch=amd64
curl -fLO "https://github.com/Orisema/Orisema-Infrastructure/releases/download/${version}/orisema_linux_${arch}.tar.gz"
curl -fLO "https://github.com/Orisema/Orisema-Infrastructure/releases/download/${version}/checksums.txt"
grep " orisema_linux_${arch}.tar.gz$" checksums.txt | sha256sum --check
```

**Interrompa se a verificação falhar.** SHA-256 detecta divergência, mas a pipeline Alpha ainda não assina artefatos nem fornece atestados de proveniência.

```sh
tar -xzf "orisema_linux_${arch}.tar.gz"
./orisema version
sudo install -m 0755 orisema /usr/local/bin/orisema
orisema version
```

Instale o Podman separadamente e use sempre o mesmo usuário: Podman rootless e rootful mantêm armazenamentos distintos.

## Desinstalação

```sh
sudo rm /usr/local/bin/orisema
```

A remoção do binário **não** remove contêineres. Consulte a [documentação completa](https://github.com/Orisema/Orisema-Infrastructure/blob/main/docs/INSTALLATION.md) antes de operar.