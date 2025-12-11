# Guía de Deployment de IT Academy

Este documento describe cómo desplegar el tutorial IT Academy en diferentes plataformas.

## 🚀 Despliegue en Vercel (Recomendado)

La forma más rápida y sencilla.

### Opción 1: Desde GitHub

1. Sube tu repositorio a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Haz clic en "New Project"
4. Selecciona tu repositorio de GitHub
5. Vercel detectará automáticamente que es un proyecto Next.js
6. Haz clic en "Deploy"

**Listo en minutos!** 🎉

### Opción 2: Desde la línea de comandos

```bash
npm install -g vercel
vercel login
cd /home/Roberto/tutorial
vercel
```

## 🚀 Despliegue en Netlify

1. Conecta tu repositorio de GitHub a Netlify
2. Configura:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Agrega variable de entorno: `NODE_VERSION` = `18`

## 🐳 Despliegue con Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📦 Despliegue Manual en un servidor

### Requisitos
- Node.js 18+
- npm o yarn
- PM2 (para mantener el proceso activo)

### Pasos

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/it-academy-tutorial.git
cd it-academy-tutorial

# Instalar dependencias
npm install

# Crear build de producción
npm run build

# Instalar PM2 globalmente (opcional pero recomendado)
npm install -g pm2

# Iniciar con PM2
pm2 start npm --name "it-academy" -- start

# Configurar para que inicie al reiniciar
pm2 startup
pm2 save
```

## 🔐 Variables de Ambiente Recomendadas

Crear archivo `.env.production`:

```
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

## 📊 Monitoreo

Con PM2:

```bash
pm2 monit              # Ver estado en tiempo real
pm2 logs it-academy    # Ver logs
pm2 restart it-academy # Reiniciar
```

## 🚀 CI/CD con GitHub Actions

Crear archivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - name: Deploy to Vercel
        run: vercel --prod --token ${{ secrets.VERCEL_TOKEN }}
```

## ✅ Checklist Pre-Deployment

- [ ] Todas las dependencias instaladas
- [ ] Build compila sin errores
- [ ] Tests pasan (si existen)
- [ ] README.md actualizado
- [ ] Variables de ambiente configuradas
- [ ] Dominio preparado
- [ ] SSL/HTTPS habilitado
- [ ] Backups configurados

## 🎯 Próximas mejoras de deployment

- [ ] Implementar staging environment
- [ ] Configurar health checks
- [ ] Agregar monitoring
- [ ] Implementar rollback automático
- [ ] Configurar CDN para assets estáticos

---

¡Listo para desplegar! 🚀
