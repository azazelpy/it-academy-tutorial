export interface Tutorial {
  id: string;
  title: string;
  description: string;
  slug: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // in minutes
  videoUrl: string;
  content: string;
  keywords: string[];
  order: number;
}

export interface Category {
  name: string;
  description: string;
  icon: string;
  color: string;
}

export const categories: Category[] = [
  {
    name: 'Fundamentos de IT',
    description: 'Conceptos básicos de tecnología de información',
    icon: '💻',
    color: 'blue',
  },
  {
    name: 'Hardware & Periféricos',
    description: 'Componentes físicos y dispositivos',
    icon: '🖥️',
    color: 'purple',
  },
  {
    name: 'Redes & Conectividad',
    description: 'Networking y conectividad',
    icon: '🌐',
    color: 'green',
  },
  {
    name: 'Sistemas Operativos',
    description: 'Windows, Linux y macOS',
    icon: '⚙️',
    color: 'orange',
  },
  {
    name: 'Seguridad & Protección',
    description: 'Ciberseguridad y protección de datos',
    icon: '🔒',
    color: 'red',
  },
  {
    name: 'Administración de Usuarios',
    description: 'Gestión de accesos y permisos',
    icon: '👥',
    color: 'indigo',
  },
  {
    name: 'Backup & Recuperación',
    description: 'Respaldo y recuperación de datos',
    icon: '💾',
    color: 'cyan',
  },
  {
    name: 'Troubleshooting',
    description: 'Resolución de problemas comunes',
    icon: '🔧',
    color: 'amber',
  },
];

export const tutorials: Tutorial[] = [
  // Fundamentos de IT
  {
    id: '1',
    title: 'Introducción a Soporte Técnico IT',
    slug: 'introduccion-soporte-tecnico',
    category: 'Fundamentos de IT',
    difficulty: 'beginner',
    duration: 15,
    description:
      'Aprende los conceptos básicos del soporte técnico IT y qué esperar en esta carrera.',
    videoUrl: '/videos/introduccion-soporte-tecnico.mp4',
    content: `
## ¿Qué es el Soporte Técnico IT?

El soporte técnico IT (Information Technology) es la función fundamental en cualquier organización que se dedica a:

- **Instalar y configurar** hardware y software
- **Resolver problemas** técnicos de usuarios
- **Mantener sistemas** funcionando correctamente
- **Proporcionar asistencia** a empleados y clientes

### Roles Principales en IT Support

1. **Help Desk/Service Desk**: Primer nivel de soporte
2. **Técnico de Campo**: Soporte in-situ
3. **Administrador de Sistemas**: Gestión de servidores y redes
4. **Especialista en Seguridad**: Protección de datos

### Habilidades Esenciales

- Paciencia y comunicación efectiva
- Pensamiento lógico y analítico
- Conocimiento de sistemas operativos
- Capacidad de aprender continuamente
- Resolución de problemas

### El Ciclo de Vida de un Ticket

1. Usuario reporta un problema
2. Técnico recibe y registra el ticket
3. Diagnóstico del problema
4. Implementación de solución
5. Verificación y cierre del ticket
6. Seguimiento post-solución
    `,
    keywords: ['soporte técnico', 'IT', 'help desk', 'fundamentos'],
    order: 1,
  },
  {
    id: '2',
    title: 'Herramientas Esenciales del Técnico IT',
    slug: 'herramientas-esenciales',
    category: 'Fundamentos de IT',
    difficulty: 'beginner',
    duration: 20,
    description:
      'Conoce las herramientas indispensables que todo técnico IT debe dominar.',
    videoUrl: '/videos/herramientas-esenciales.mp4',
    content: `
## Herramientas Esenciales del Técnico IT

### Software de Diagnóstico

- **CPU-Z**: Información detallada del procesador
- **GPU-Z**: Datos de la tarjeta gráfica
- **Disk Management**: Gestión de particiones
- **Device Manager**: Administrador de dispositivos
- **Resource Monitor**: Monitor de recursos

### Herramientas de Red

- **ipconfig/ifconfig**: Configuración de IP
- **ping**: Prueba de conectividad
- **tracert/traceroute**: Ruta de paquetes
- **netstat**: Estadísticas de red
- **nslookup**: Resolución DNS

### Control Remoto

- **Remote Desktop Protocol (RDP)**
- **TeamViewer**
- **AnyDesk**
- **Chrome Remote Desktop**

### Utilidades del Sistema

- **Task Manager**: Procesos y rendimiento
- **Event Viewer**: Registros del sistema
- **Performance Monitor**: Análisis de rendimiento
- **Registry Editor**: Base de datos del sistema (Windows)

### Herramientas de Seguridad

- **Antivirus/Antimalware**
- **Windows Defender**
- **Malwarebytes**
- **HijackThis**
    `,
    keywords: ['herramientas', 'diagnóstico', 'software', 'utilidades'],
    order: 2,
  },

  // Hardware & Periféricos
  {
    id: '3',
    title: 'Componentes de Hardware Básicos',
    slug: 'componentes-hardware',
    category: 'Hardware & Periféricos',
    difficulty: 'beginner',
    duration: 25,
    description:
      'Familiarízate con los componentes esenciales de una computadora.',
    videoUrl: '/videos/componentes-hardware.mp4',
    content: `
## Componentes de Hardware Básicos

### Procesador (CPU)

- **Función**: Realiza cálculos y ejecuta instrucciones
- **Características**: Velocidad (GHz), núcleos, caché
- **Marcas**: Intel, AMD
- **Generaciones**: Más nuevas = mejor rendimiento

### Memoria RAM

- **Función**: Almacenamiento temporal rápido
- **Tipos**: DDR3, DDR4, DDR5
- **Capacidad**: 4GB, 8GB, 16GB, 32GB+
- **Velocidad**: Medida en MHz

### Almacenamiento

- **HDD**: Disco duro mecánico (lento, económico)
- **SSD**: Unidad de estado sólido (rápido, moderno)
- **NVMe**: SSD más rápido
- **Capacidad**: 128GB, 256GB, 512GB, 1TB+

### Tarjeta Gráfica (GPU)

- **Integrada**: Incluida en el CPU
- **Dedicada**: Tarjeta independiente
- **Marcas**: NVIDIA, AMD
- **Uso**: Gaming, diseño gráfico, video

### Fuente de Poder

- **Vataje**: Cantidad de energía (W)
- **Eficiencia**: 80+, Gold, Platinum
- **Importancia**: Estabilidad del sistema

### Placa Base (Motherboard)

- **Función**: Conecta todos los componentes
- **Conectores**: USB, SATA, PCIe
- **BIOS/UEFI**: Firmware que controla el hardware
    `,
    keywords: ['hardware', 'componentes', 'CPU', 'RAM', 'almacenamiento'],
    order: 3,
  },

  // Redes & Conectividad
  {
    id: '4',
    title: 'Conceptos Básicos de Redes',
    slug: 'conceptos-redes',
    category: 'Redes & Conectividad',
    difficulty: 'beginner',
    duration: 30,
    description: 'Entiende los fundamentos de las redes de computadoras.',
    videoUrl: '/videos/conceptos-redes.mp4',
    content: `
## Conceptos Básicos de Redes

### Direcciones IP

**IPv4**:
- Formato: 192.168.1.1
- Rangos: 0.0.0.0 a 255.255.255.255
- Privados: 10.0.0.0, 172.16.0.0, 192.168.0.0

**IPv6**:
- Formato: 2001:0db8:85a3::8a2e:0370:7334
- Futuro de internet
- Mayor capacidad de direcciones

### Máscara de Subred

- Define la red local
- Ejemplo: 255.255.255.0
- CIDR: /24 (equivalente a lo anterior)

### Gateway por Defecto

- Puerta de entrada a otras redes
- Típicamente: 192.168.1.1 o 192.168.0.1
- Configurado en router

### DNS (Domain Name System)

- Traduce nombres a direcciones IP
- Ejemplo: google.com → 142.251.41.14
- Servidores: 8.8.8.8 (Google), 1.1.1.1 (Cloudflare)

### Tipos de Redes

**LAN** (Local Area Network):
- Red local de oficina
- Rápida y cercana
- Ejemplo: red corporativa

**WAN** (Wide Area Network):
- Redes geográficamente dispersas
- Conecta múltiples LAN
- Ejemplo: Internet

**VLAN** (Virtual LAN):
- Red lógica dentro de red física
- Segmentación de tráfico

### Protocolos Comunes

- **TCP**: Confiable, orden garantizado
- **UDP**: Rápido, sin garantías
- **DHCP**: Asignación automática de IP
- **HTTP/HTTPS**: Web
- **FTP**: Transferencia de archivos
- **SSH**: Acceso remoto seguro
    `,
    keywords: ['redes', 'IP', 'DNS', 'TCP/IP', 'DHCP'],
    order: 4,
  },

  // Sistemas Operativos
  {
    id: '5',
    title: 'Windows Server Fundamentos',
    slug: 'windows-server-fundamentos',
    category: 'Sistemas Operativos',
    difficulty: 'beginner',
    duration: 35,
    description: 'Introducción a Windows Server y sus características.',
    videoUrl: '/videos/windows-server-fundamentos.mp4',
    content: `
## Windows Server Fundamentos

### Ediciones de Windows Server

- **Standard**: Para pequeñas y medianas empresas
- **Datacenter**: Para grandes empresas y cloud
- **Essentials**: Empresas muy pequeñas

### Características Principales

- **Active Directory**: Gestión centralizada de usuarios
- **Group Policy**: Políticas de grupo
- **Failover Clustering**: Alta disponibilidad
- **Hyper-V**: Virtualización integrada
- **Remote Desktop Services**: Acceso remoto

### Roles de Servidor

- **Domain Controller**: Autenticación de red
- **File Server**: Compartir archivos
- **Print Server**: Gestión de impresoras
- **DHCP Server**: Asignación de IP
- **DNS Server**: Resolución de nombres
- **Web Server (IIS)**: Alojamiento web
- **SQL Server**: Base de datos

### Active Directory

- **Directorio centralizado** de usuarios y recursos
- **Autenticación** y autorización
- **Objetos**: Usuarios, grupos, computadoras
- **Unidades Organizativas (OU)**: Estructura jerárquica

### Group Policy

- **Control centralizado** de configuración
- **Aplicado** a usuarios y computadoras
- **GPEdit.msc**: Editor de políticas locales
- **Permite**: Configurar contraseñas, restricciones, software

### Administración Remota

- **Remote Desktop Protocol (RDP)**
- **PowerShell Remoto**
- **Server Manager**
- **Active Directory Users & Computers**
    `,
    keywords: [
      'Windows Server',
      'Active Directory',
      'Domain Controller',
      'Group Policy',
    ],
    order: 5,
  },

  // Seguridad & Protección
  {
    id: '6',
    title: 'Fundamentos de Ciberseguridad',
    slug: 'ciberseguridad-fundamentos',
    category: 'Seguridad & Protección',
    difficulty: 'beginner',
    duration: 25,
    description:
      'Conceptos básicos de seguridad que todo técnico IT debe conocer.',
    videoUrl: '/videos/ciberseguridad-fundamentos.mp4',
    content: `
## Fundamentos de Ciberseguridad

### Amenazas Comunes

**Malware**:
- Virus: Se replican a través de archivos
- Gusanos: Se propagan por la red
- Troyanos: Se disfrazan de software legítimo
- Ransomware: Encripta datos y pide rescate

**Phishing**:
- Correos falsos que engañan
- Suplantación de identidad
- Robo de credenciales

**Ataques de Fuerza Bruta**:
- Intentos repetidos de acceso
- Contra contraseñas débiles
- Lento pero efectivo

### Mejores Prácticas de Seguridad

**Contraseñas Fuertes**:
- Mínimo 12 caracteres
- Mayúsculas, minúsculas, números, símbolos
- No reutilizar contraseñas
- Cambiar regularmente

**Autenticación Multifactor (MFA)**:
- Algo que sabes (contraseña)
- Algo que tienes (teléfono)
- Algo que eres (biometría)

**Actualizaciones y Parches**:
- Críticos para seguridad
- Aplicar lo antes posible
- Afectan todos los sistemas

**Antivirus y Firewall**:
- Primera línea de defensa
- Mantener actualizado
- Escanear regularmente

**Educación del Usuario**:
- No hacer clic en enlaces sospechosos
- Desconfiar de correos raros
- Reportar incidentes
    `,
    keywords: [
      'seguridad',
      'malware',
      'ciberseguridad',
      'contraseñas',
      'firewall',
    ],
    order: 6,
  },

  // Administración de Usuarios
  {
    id: '7',
    title: 'Gestión de Usuarios y Permisos',
    slug: 'gestion-usuarios-permisos',
    category: 'Administración de Usuarios',
    difficulty: 'beginner',
    duration: 28,
    description: 'Cómo administrar usuarios, grupos y permisos en sistemas IT.',
    videoUrl: '/videos/gestion-usuarios-permisos.mp4',
    content: `
## Gestión de Usuarios y Permisos

### Cuentas de Usuario

**Tipos en Windows**:
- **Administrador**: Control total del sistema
- **Usuario Estándar**: Acceso limitado
- **Invitado**: Acceso temporal y restringido
- **Servicio**: Ejecuta procesos en background

### Grupos de Usuarios

**Beneficios**:
- Asignar permisos a múltiples usuarios a la vez
- Facilita administración
- Cambios centralizados

**Grupos Predefinidos**:
- Administrators
- Users
- Guests
- Power Users
- Remote Desktop Users

### Permisos de Archivos y Carpetas

**En Windows (NTFS)**:
- **Full Control**: Control total
- **Modify**: Modificar contenido
- **Read & Execute**: Leer y ejecutar
- **Read**: Solo lectura
- **Write**: Solo escritura

**Herencia de Permisos**:
- Archivos heredan permisos de carpeta padre
- Puede ser anulada explícitamente

### Políticas de Contraseña

- **Longitud mínima**: Recomendado 12 caracteres
- **Complejidad**: Mayúsculas, minúsculas, números, símbolos
- **Expiración**: Cambio periódico (90 días)
- **Historial**: Prevenir reutilización

### Control de Acceso

**Recursos Compartidos**:
- Carpetas compartidas en red
- Permisos compartidos + NTFS
- Usuario debe tener ambos

**Acceso Remoto**:
- RDP (Remote Desktop Protocol)
- VPN (Red Privada Virtual)
- SSH (Secure Shell)

### Auditoría

- **Event Viewer**: Registra intentos de acceso
- **Cambios de contraseña**
- **Creación/eliminación de usuarios**
- **Cambios de permisos**
    `,
    keywords: ['usuarios', 'permisos', 'grupos', 'control de acceso'],
    order: 7,
  },

  // Backup & Recuperación
  {
    id: '8',
    title: 'Estrategias de Backup y Recuperación',
    slug: 'backup-recuperacion',
    category: 'Backup & Recuperación',
    difficulty: 'beginner',
    duration: 30,
    description: 'Aprende a proteger datos mediante backups efectivos.',
    videoUrl: '/videos/backup-recuperacion.mp4',
    content: `
## Estrategias de Backup y Recuperación

### Tipos de Backup

**Full Backup (Copia Completa)**:
- Copia todos los datos
- Tiempo: Largo
- Espacio: Mucho
- Restauración: Rápida

**Incremental Backup**:
- Solo datos cambiados desde último backup
- Tiempo: Corto
- Espacio: Poco
- Restauración: Requiere múltiples copias

**Differential Backup**:
- Datos cambiados desde último full backup
- Tiempo: Medio
- Espacio: Medio
- Restauración: Requiere últimos 2 backups

### Regla 3-2-1

- **3 copias** de datos
- **2 medios** diferentes
- **1 fuera** del sitio

### Medios de Almacenamiento

- **Disco Duro Externo**: Portátil, capacidad media
- **NAS (Network Attached Storage)**: Red, fácil acceso
- **Servidores de Backup**: Dedicado, confiable
- **Cloud**: Escalable, acceso remoto
- **Cinta Magnética**: Económica, larga duración

### Herramientas de Backup

**Windows**:
- Windows Backup
- System Image
- File History

**Linux**:
- rsync
- tar
- bacula

**Comerciales**:
- Acronis
- Veeam
- Carbonite

### Recuperación ante Desastres

**RTO (Recovery Time Objective)**:
- Tiempo máximo aceptable de inactividad
- Objetivo: Minimizar

**RPO (Recovery Point Objective)**:
- Cantidad máxima de datos que se pueden perder
- Objetivo: Minimizar

### Pruebas de Backup

- **Restaurar regularmente** para verificar integridad
- **Documentar** procedimientos
- **Entrenar** al equipo
- **Simular** desastres
    `,
    keywords: ['backup', 'recuperación', 'datos', 'almacenamiento'],
    order: 8,
  },

  // Troubleshooting
  {
    id: '9',
    title: 'Metodología de Troubleshooting',
    slug: 'troubleshooting-metodologia',
    category: 'Troubleshooting',
    difficulty: 'beginner',
    duration: 25,
    description: 'Aprende el proceso sistemático para resolver problemas IT.',
    videoUrl: '/videos/troubleshooting-metodologia.mp4',
    content: `
## Metodología de Troubleshooting

### Pasos Clave del Troubleshooting

**1. Recolectar Información**:
- Preguntar al usuario qué pasó
- ¿Cuándo empezó el problema?
- ¿Qué cambios recientes hubo?
- ¿Afecta a uno o múltiples usuarios?

**2. Documentar el Problema**:
- Síntomas exactos
- Mensajes de error
- Situación del hardware/software
- Registro en el sistema de tickets

**3. Establecer una Línea Base**:
- ¿Funcionaba antes?
- ¿Qué cambió?
- Comparar con sistemas similares

**4. Formular Hipótesis**:
- Basarse en experiencia
- Listar causas posibles
- Ordenar por probabilidad

**5. Probar Soluciones**:
- Una variable a la vez
- Documentar resultados
- No cambiar múltiples cosas

**6. Implementar Solución**:
- Aplicar el fix que funciona
- Verificar que resuelve el problema
- Buscar efectos secundarios

**7. Documentar y Comunicar**:
- Escribir en el ticket
- Explicar al usuario
- Guardar para referencia futura

### Técnicas Comunes

**Reinicio**:
- Limpia memoria RAM
- Recarga drivers
- Soluciona muchos problemas

**Modo Seguro**:
- Carga solo drivers esenciales
- Identifica conflictos
- Windows + F8 (Windows 10/11)

**Restaurar Sistema**:
- Vuelve a punto anterior
- No afecta archivos personales
- Revierte cambios de software

**Desinstalación de Software**:
- Control Panel > Programas
- Busca software recientemente instalado
- Uninstall y reinicia

### Preguntas Clave

1. ¿Es un problema de hardware o software?
2. ¿Está conectado correctamente?
3. ¿Están actualizados drivers y software?
4. ¿Hay conflictos de software?
5. ¿Es un problema de permisos?
6. ¿Es un problema de configuración?

### Recursos Útiles

- Logs del sistema (Event Viewer)
- Documentación del fabricante
- Foros técnicos
- Bases de conocimiento internas
- Colegas y mentores
    `,
    keywords: [
      'troubleshooting',
      'resolución de problemas',
      'diagnóstico',
      'soporte',
    ],
    order: 9,
  },

  {
    id: '10',
    title: 'Problemas Comunes y Soluciones',
    slug: 'problemas-comunes-soluciones',
    category: 'Troubleshooting',
    difficulty: 'beginner',
    duration: 40,
    description: 'Soluciones a problemas IT más frecuentes en el Help Desk.',
    videoUrl: '/videos/problemas-comunes-soluciones.mp4',
    content: `
## Problemas Comunes y Soluciones

### Problemas de Conexión de Internet

**Síntoma**: Sin conexión a internet

**Pasos**:
1. Verificar que el router está encendido
2. Comprobar luces del router
3. Reiniciar router (30 segundos)
4. Verificar cable ethernet o WiFi
5. Ejecutar ipconfig /release /renew
6. Ping a puerta de enlace (gateway)
7. Ping a DNS externo (8.8.8.8)

### Problemas de Rendimiento Lento

**Síntoma**: Computadora muy lenta

**Causas Posibles**:
- Malware/virus
- Disco duro casi lleno
- Exceso de programas en startup
- Poco RAM disponible
- Procesos pesados ejecutándose

**Soluciones**:
1. Task Manager > Processes
2. Revisar CPU, RAM, Disk
3. Desinstalar programas innecesarios
4. Ejecutar antivirus
5. Limpiar archivos temporales (Disco Cleanup)
6. Revisar startup programs

### Pantalla Azul de la Muerte (BSOD)

**Síntoma**: Pantalla azul con código de error

**Causas Posibles**:
- Conflicto de driver
- Corrupción de sistema
- Hardware defectuoso
- Malware

**Soluciones**:
1. Anotar el código de error
2. Iniciar en Modo Seguro
3. Desinstalar drivers recientes
4. Ejecutar Repair Startup
5. System Restore a punto anterior
6. Reinstalar Windows si es necesario

### Problemas de Impresora

**Síntoma**: No imprime

**Pasos**:
1. Verificar que está encendida
2. Comprobar papel y tinta/tóner
3. Conectar a la computadora
4. Establecer como impresora por defecto
5. Limpiar fila de impresión:
   - net stop spooler
   - net start spooler
6. Reinstalar drivers de impresora

### No se Puede Conectar a Red

**Síntoma**: Red no disponible o sin acceso

**Pasos**:
1. Reiniciar adaptador de red
2. Actualizar drivers de red
3. Ejecutar Network Troubleshooter
4. Verificar cables y puerto de red
5. ipconfig /all (revisar valores)
6. Contactar a administrador de red

### Problema de Contraseña Olvidada

**Síntoma**: Usuario olvidó contraseña

**Soluciones**:
1. Usar cuenta de administrador para reset
2. Active Directory Users & Computers
3. Reset Password (requiere nueva contraseña en próximo login)
4. Usuario debe cambiar en próximo acceso
5. Documento el cambio en ticket

### Virus o Malware

**Síntoma**: Comportamiento extraño, pop-ups, lentitud

**Pasos**:
1. Iniciar en Modo Seguro con Redes
2. Ejecutar antivirus en escaneo completo
3. Usar herramientas especializadas (Malwarebytes)
4. Eliminar programas sospechosos
5. Ejecutar Windows Defender Offline si es necesario
6. Cambiar contraseñas después
    `,
    keywords: ['troubleshooting', 'problemas comunes', 'soluciones', 'soporte'],
    order: 10,
  },
];
