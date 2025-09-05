# 🔧 Configuración GitHub para DentalFlow

## Opción 1: Usar Token Personal (Recomendado)

1. Ve a GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Genera un nuevo token con permisos `repo`
3. Copia el token
4. Ejecuta:
```bash
git remote set-url origin https://TU_USUARIO:TU_TOKEN@github.com/curetcore/dentalflow.git
git push -u origin main
```

## Opción 2: Usar SSH

1. Genera clave SSH si no tienes:
```bash
ssh-keygen -t ed25519 -C "ronaldpaulino47@gmail.com"
```

2. Añade la clave pública a GitHub (Settings → SSH Keys)

3. Cambia el remote a SSH:
```bash
git remote set-url origin git@github.com:curetcore/dentalflow.git
git push -u origin main
```

## Opción 3: GitHub Desktop

1. Descarga GitHub Desktop
2. Clona el repositorio
3. Copia los archivos del proyecto
4. Commit y push desde la app

## Verificar acceso

Asegúrate de que tienes permisos de escritura en el repositorio curetcore/dentalflow