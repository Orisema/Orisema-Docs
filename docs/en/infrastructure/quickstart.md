# Quick start on a disposable Linux host

> **Disposable Linux host only.** Adapted from [QUICKSTART.md](https://github.com/Orisema/Orisema-Infrastructure/blob/main/docs/QUICKSTART.md). Ensure port 8080 is free.

Requirements: Linux AMD64 or ARM64, verified binary, Podman, repository checkout and access to `docker.io/library/nginx:1.27`. Run all commands as the **same user**.

## 1. Validate

```sh
orisema version
podman version
orisema validate examples/nginx.yaml
```

The example declares `orisema-hello-orisema-web` and binds `127.0.0.1:8080` to port 80.

## 2. Preview without changes

```sh
orisema plan examples/nginx.yaml
```

On a clean host, expect `CREATE`. Stop on `DRIFT` or `REVIEW`; Orisema does not automatically adopt or reconcile containers.

## 3. Deploy with explicit approval

```sh
orisema deploy examples/nginx.yaml
# Review the plan and type exactly: DEPLOY
```

There is no multi-service transaction or automatic rollback.

## 4. Observe

```sh
orisema status examples/nginx.yaml
orisema plan examples/nginx.yaml
curl -I http://127.0.0.1:8080/
orisema logs examples/nginx.yaml web
```

`NOOP` only means supported declared fields match; it does not prove health, running state, security or image digest.

## 5. Clean up manually

```sh
podman inspect --format '{{json .Config.Labels}}' orisema-hello-orisema-web
podman stop orisema-hello-orisema-web
podman rm orisema-hello-orisema-web
```

**Before removal**, verify `dev.orisema.managed=true`, `dev.orisema.app=hello-orisema` and `dev.orisema.service=web`. Do not remove on mismatch.

This lab does not validate production, volumes, secrets, backup, remote operation or Docker. See the [compatibility matrix](https://github.com/Orisema/Orisema-Infrastructure/blob/main/docs/COMPATIBILITY.md).