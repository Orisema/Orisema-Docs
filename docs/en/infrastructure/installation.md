# Installation and verification

> **Experimental — do not use in production.** Adapted from [INSTALLATION.md](https://github.com/Orisema/Orisema-Infrastructure/blob/main/docs/INSTALLATION.md), Alpha 5.

The documented experimental release is **v0.1.0-alpha.5** (October 31, 2026). Linux AMD64 and ARM64 artifacts are provided, but native ARM64 execution still needs validation. Podman on Linux is the only supported runtime.

## Download and verify

```sh
version=v0.1.0-alpha.5
arch=amd64
curl -fLO "https://github.com/Orisema/Orisema-Infrastructure/releases/download/${version}/orisema_linux_${arch}.tar.gz"
curl -fLO "https://github.com/Orisema/Orisema-Infrastructure/releases/download/${version}/checksums.txt"
grep " orisema_linux_${arch}.tar.gz$" checksums.txt | sha256sum --check
```

**Stop if verification fails.** SHA-256 detects mismatches, but this Alpha pipeline does not sign artifacts or provide provenance attestations.

```sh
tar -xzf "orisema_linux_${arch}.tar.gz"
./orisema version
sudo install -m 0755 orisema /usr/local/bin/orisema
orisema version
```

Install Podman separately. Always run Orisema as the same user: rootless and rootful Podman have separate container stores.

## Uninstall

```sh
sudo rm /usr/local/bin/orisema
```

Removing the binary **does not** remove containers. Read the [full source guide](https://github.com/Orisema/Orisema-Infrastructure/blob/main/docs/INSTALLATION.md) before operating.