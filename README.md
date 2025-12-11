# IT Academy - Tutorial Interactivo de Soporte TI y Administración de Sistemas

Un tutorial completo, interactivo y dinámico para principiantes en soporte técnico IT y administración de sistemas, con videos referenciales, contenido estructurado y quizzes evaluativos.

## 🎯 Características Principales

- **📚 10+ Tutoriales Estructurados**: Contenido organizado en 8 categorías
- **🎥 Videos Referenciales**: Cada tema incluye videos de YouTube integrados
- **🎯 Quizzes Interactivos**: Evaluaciones dinámicas con retroalimentación inmediata
- **📱 Diseño Responsivo**: Interfaz moderna con Tailwind CSS
- **🔄 Sincronización GitHub**: Integración completa con GitHub para versionado
- **⚡ Rendimiento Óptimo**: Construido con Next.js 14+ para máxima velocidad

## 📋 Categorías de Tutoriales

1. **Fundamentos de IT** - Conceptos básicos de tecnología
2. **Hardware & Periféricos** - Componentes físicos
3. **Redes & Conectividad** - Networking y TCP/IP
4. **Sistemas Operativos** - Windows Server, Linux
5. **Seguridad & Protección** - Ciberseguridad básica
6. **Administración de Usuarios** - Gestión de accesos
7. **Backup & Recuperación** - Protección de datos
8. **Troubleshooting** - Resolución de problemas

## 🚀 Primeros Pasos

### Requisitos
- Node.js 18.17 o superior
- npm o yarn

### Instalación

\`\`\`bash
# Clonar repositorio
git clone https://github.com/tu-usuario/it-academy-tutorial.git
cd it-academy-tutorial

# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev
\`\`\`

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📦 Estructura del Proyecto

\`\`\`
src/
├── app/                          # Rutas y páginas Next.js
│   ├── page.tsx                 # Página principal (dashboard)
│   ├── tutorials/[slug]/        # Páginas dinámicas de tutoriales
│   ├── layout.tsx               # Layout raíz
│   └── globals.css              # Estilos globales
├── components/
│   ├── Header.tsx               # Componente de navegación
│   ├── tutorial/
│   │   ├── TutorialCard.tsx     # Tarjeta de tutorial
│   │   └── TutorialViewer.tsx   # Visor de tutorial con video
│   └── quiz/
│       └── QuizPlayer.tsx        # Reproductor interactivo de quiz
├── lib/
│   ├── tutorials/
│   │   └── tutorials-data.ts    # Base de datos de tutoriales
│   └── quizzes/
│       └── quizzes-data.ts      # Base de datos de quizzes
└── public/                       # Archivos estáticos
    └── videos/                   # Videos referenciales
\`\`\`

## 🎓 Contenido del Tutorial

### Tutoriales Disponibles

1. **Introducción a Soporte Técnico IT**
   - Conceptos básicos del soporte técnico
   - Roles en IT Support
   - Ciclo de vida de un ticket

2. **Herramientas Esenciales del Técnico IT**
   - Software de diagnóstico
   - Herramientas de red
   - Control remoto
   - Utilidades del sistema

3. **Componentes de Hardware Básicos**
   - Procesador (CPU)
   - Memoria RAM
   - Almacenamiento (HDD/SSD)
   - Tarjeta gráfica y fuente de poder

4. **Conceptos Básicos de Redes**
   - Direcciones IP (IPv4/IPv6)
   - Máscara de subred y gateway
   - DNS y protocolos comunes
   - Tipos de redes (LAN, WAN, VLAN)

5. **Windows Server Fundamentos**
   - Ediciones de Windows Server
   - Active Directory
   - Group Policy
   - Roles de servidor

6. **Fundamentos de Ciberseguridad**
   - Amenazas comunes
   - Mejores prácticas de seguridad
   - Contraseñas fuertes
   - Autenticación multifactor

7. **Gestión de Usuarios y Permisos**
   - Cuentas de usuario
   - Grupos de usuarios
   - Permisos de archivos
   - Control de acceso

8. **Estrategias de Backup y Recuperación**
   - Tipos de backup
   - Medios de almacenamiento
   - Herramientas de backup
   - Pruebas de recuperación

9. **Metodología de Troubleshooting**
   - Pasos del troubleshooting
   - Técnicas comunes
   - Preguntas clave

10. **Problemas Comunes y Soluciones**
    - Conexión a internet
    - Rendimiento lento
    - Pantalla azul (BSOD)
    - Problemas de impresora

### Quizzes Interactivos

Cada tema incluye un quiz con:
- ✅ Preguntas de opción múltiple
- 📊 Puntuación automática
- 💡 Explicaciones detalladas
- 🎯 Puntuación mínima requerida (70%)
- ⏱️ Límite de tiempo

## 🔄 Sincronización con GitHub

El proyecto está completamente integrado con GitHub para:

- **Control de versiones**: Historial completo de cambios
- **Colaboración**: Permite trabajo en equipo
- **Deployment automático**: Integración con GitHub Pages/Actions
- **Issues y PRs**: Seguimiento de mejoras

### Configurar Repositorio GitHub

\`\`\`bash
# Inicializar git (si aún no está)
git init

# Agregar repositorio remoto
git remote add origin https://github.com/tu-usuario/it-academy-tutorial.git

# Primer commit
git add .
git commit -m "feat: Inicialización del tutorial interactivo IT Academy"

# Push a GitHub
git branch -M main
git push -u origin main
\`\`\`

## 🛠️ Tecnologías Utilizadas

- **Next.js 14+**: Framework de React con SSR y SSG
- **TypeScript**: Tipado estático para mayor seguridad
- **Tailwind CSS**: Utilidades CSS para diseño responsive
- **React 18+**: Librería de componentes UI
- **ESLint**: Linting y validación de código

## 🚀 Deployment

### Desplegar en Vercel (Recomendado)

\`\`\`bash
npm install -g vercel
vercel login
vercel
\`\`\`

### Desplegar en GitHub Pages

\`\`\`bash
npm run build
npm run export
# Configura GitHub Pages en Settings > Pages
\`\`\`

## 📝 Contribuir

¿Quieres mejorar el tutorial?

1. Fork el repositorio
2. Crea una rama: \`git checkout -b feature/nueva-caracteristica\`
3. Commit cambios: \`git commit -am 'Add nueva característica'\`
4. Push a la rama: \`git push origin feature/nueva-caracteristica\`
5. Abre un Pull Request

## 📚 Recursos Adicionales

- [Documentación Next.js](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev)

## 📄 Licencia

Este proyecto está bajo licencia MIT. Ver archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

Creado para facilitar el aprendizaje de IT Support y System Administration.

---

## �� Próximas Mejoras

- [ ] Sistema de progreso del usuario con localStorage
- [ ] Certificados de finalización
- [ ] Más tutoriales avanzados
- [ ] Modo oscuro
- [ ] Soporte multiidioma
- [ ] Integración con analytics
- [ ] Tests unitarios e integración
- [ ] Comentarios en tutoriales

## 🤝 Soporte

¿Encontraste un problema? [Abre un issue](https://github.com/tu-usuario/it-academy-tutorial/issues)

---

**¡Gracias por aprender con IT Academy!** ��✨
