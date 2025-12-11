# Instrucciones para sincronizar con GitHub

Este proyecto está diseñado para ser completamente sincronizable con GitHub. Sigue estos pasos para mantenerlo actualizado en tu repositorio remoto.

## 📋 Requisitos

- Cuenta de GitHub
- Git instalado localmente
- Acceso a línea de comandos

## 🚀 Pasos para sincronizar

### 1. Crear repositorio en GitHub

1. Ve a [github.com](https://github.com) y crea un nuevo repositorio
2. Nombre sugerido: `it-academy-tutorial`
3. Descripción: "Tutorial interactivo de Soporte TI y Administración de Sistemas"
4. NO inicialices con README, .gitignore, ni licencia (ya los tenemos)

### 2. Agregar repositorio remoto

```bash
cd /home/Roberto/tutorial
git remote add origin https://github.com/TU_USUARIO/it-academy-tutorial.git
git branch -M main
git push -u origin main
```

Reemplaza `TU_USUARIO` con tu nombre de usuario de GitHub.

### 3. Hacer commits regularmente

Después de cualquier cambio:

```bash
git add .
git commit -m "feat: Descripción del cambio"
git push origin main
```

### Tipos de commits recomendados

- `feat:` - Nueva característica
- `fix:` - Corrección de bug
- `docs:` - Cambios en documentación
- `style:` - Cambios de formato
- `refactor:` - Refactorización de código
- `chore:` - Cambios de construcción, dependencias, etc.

## 🔄 Flujo de trabajo colaborativo

Si trabajas con otros:

```bash
# 1. Crear una rama para tu feature
git checkout -b feature/nombre-feature

# 2. Hacer cambios y commits
git add .
git commit -m "feat: descripción"

# 3. Push a tu rama
git push origin feature/nombre-feature

# 4. Crear Pull Request en GitHub
# 5. Una vez aprobado, merge a main
```

## 📦 Automáticamente con GitHub Actions

Se pueden configurar workflows automáticos para:

- Ejecutar tests
- Construir y desplegar
- Validar código

Ver `.github/workflows/` para ejemplos.

## 🚀 Desplegar automáticamente

### Con Vercel

1. Conecta tu repositorio a [Vercel](https://vercel.com)
2. Cada push a `main` desplegará automáticamente

### Con GitHub Pages

```bash
npm run build
git add out/
git commit -m "build: Deploy a GitHub Pages"
git push
```

## 🔐 Variables de entorno

Si agregas variables de entorno:

1. Crea `.env.local` (no commits!)
2. Documenta en `.env.example`
3. Los usuarios pueden copiar y personalizar

## 📝 Buenas prácticas

- Usa commits descriptivos
- Mantén el README actualizado
- Documenta nuevas características
- Revisa los cambios antes de push
- No commits de archivos sensibles

## 🆘 Resolver conflictos

Si hay conflictos al hacer pull:

```bash
git pull origin main
# Resolver conflictos en archivos
git add .
git commit -m "fix: Resolver conflictos de merge"
git push origin main
```

## 📚 Recursos útiles

- [GitHub Docs](https://docs.github.com)
- [Git Documentation](https://git-scm.com/doc)
- [Conventional Commits](https://www.conventionalcommits.org)

---

¡Listo! Tu proyecto IT Academy está sincronizado con GitHub. 🎉
