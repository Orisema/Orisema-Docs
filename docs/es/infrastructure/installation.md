# Instalación y verificación

> **Experimental: no utilizar en producción.** Adaptado de [INSTALLATION.md](https://github.com/Orisema/Orisema-Infrastructure/blob/main/docs/INSTALLATION.md), Alpha 5.

La versión experimental documentada es **v0.1.0-alpha.5** (31 de octubre de 2026). Se distribuyen artefactos para Linux AMD64 y ARM64, pero la ejecución nativa en ARM64 aún requiere validación. Podman en Linux es el único runtime compatible.

## Descargar y verificar

```sh
version=v0.1.0-alpha.5
arch=amd64
curl -fLO "https://github.com/Orisema/Orisema-Infrastructure/releases/download/${version}/orisema_linux_${arch}.tar.gz"
curl -fLO "https://github.com/Orisema/Orisema-Infrastructure/releases/download/${version}/checksums.txt"
grep " orisema_linux_${arch}.tar.gz$" checksums.txt | sha256sum --check
```

**Detén el proceso si falla la verificación.** SHA-256 detecta diferencias, pero la canalización Alpha todavía no firma artefactos ni proporciona certificaciones de procedencia.

```sh
tar -xzf "orisema_linux_${arch}.tar.gz"
./orisema version
sudo install -m 0755 orisema /usr/local/bin/orisema
orisema version
```

Instala Podman por separado. Utiliza siempre el mismo usuario: Podman rootless y rootful tienen almacenes de contenedores independientes.

## Desinstalación

```sh
sudo rm /usr/local/bin/orisema
```

Eliminar el binario **no** elimina los contenedores. Consulta la [guía completa](https://github.com/Orisema/Orisema-Infrastructure/blob/main/docs/INSTALLATION.md) antes de operar.