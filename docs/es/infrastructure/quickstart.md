# Primeros pasos en un host Linux desechable

> **Solo en un host Linux desechable.** Adaptado de [QUICKSTART.md](https://github.com/Orisema/Orisema-Infrastructure/blob/main/docs/QUICKSTART.md). Comprueba que el puerto 8080 esté libre.

Requisitos: Linux AMD64 o ARM64, binario verificado, Podman, repositorio descargado y acceso a `docker.io/library/nginx:1.27`. Ejecuta todos los comandos con el **mismo usuario**.

## 1. Validar

```sh
orisema version
podman version
orisema validate examples/nginx.yaml
```

El ejemplo declara `orisema-hello-orisema-web` y enlaza `127.0.0.1:8080` al puerto 80.

## 2. Planificar sin modificar

```sh
orisema plan examples/nginx.yaml
```

En un host limpio, espera `CREATE`. Detente si aparece `DRIFT` o `REVIEW`; Orisema no adopta ni reconcilia contenedores automáticamente.

## 3. Desplegar con confirmación explícita

```sh
orisema deploy examples/nginx.yaml
# Revisa el plan y escribe exactamente: DEPLOY
```

No existe transacción de varios servicios ni rollback automático.

## 4. Observar

```sh
orisema status examples/nginx.yaml
orisema plan examples/nginx.yaml
curl -I http://127.0.0.1:8080/
orisema logs examples/nginx.yaml web
```

`NOOP` solo significa que coinciden los campos declarativos compatibles; no demuestra salud, ejecución, seguridad ni digest de imagen.

## 5. Limpiar manualmente

```sh
podman inspect --format '{{json .Config.Labels}}' orisema-hello-orisema-web
podman stop orisema-hello-orisema-web
podman rm orisema-hello-orisema-web
```

**Antes de eliminar**, verifica `dev.orisema.managed=true`, `dev.orisema.app=hello-orisema` y `dev.orisema.service=web`. No elimines si no coinciden.

Este laboratorio no valida producción, volúmenes, secretos, copias de seguridad, operación remota ni Docker. Consulta la [matriz de compatibilidad](https://github.com/Orisema/Orisema-Infrastructure/blob/main/docs/COMPATIBILITY.md).