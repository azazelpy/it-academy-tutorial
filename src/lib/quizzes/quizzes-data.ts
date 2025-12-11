export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Quiz {
  id: string;
  tutorialId: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
  passingScore: number; // percentage
  timeLimit: number; // minutes
}

export const quizzes: Quiz[] = [
  {
    id: 'quiz-1',
    tutorialId: '1',
    title: 'Quiz: Introducción a Soporte Técnico IT',
    description:
      'Verifica tu comprensión de los conceptos básicos del soporte técnico IT.',
    passingScore: 70,
    timeLimit: 10,
    questions: [
      {
        id: 'q1-1',
        question: '¿Cuál es la primera responsabilidad de un técnico Help Desk?',
        options: [
          {
            id: 'opt-1',
            text: 'Reparar hardware',
            isCorrect: false,
          },
          {
            id: 'opt-2',
            text: 'Atender y registrar los problemas de los usuarios',
            isCorrect: true,
          },
          {
            id: 'opt-3',
            text: 'Administrar la red',
            isCorrect: false,
          },
          {
            id: 'opt-4',
            text: 'Diseñar infraestructura IT',
            isCorrect: false,
          },
        ],
        explanation:
          'El Help Desk es el primer nivel de soporte que recibe, registra y resuelve problemas de usuarios.',
        difficulty: 'easy',
      },
      {
        id: 'q1-2',
        question:
          '¿En qué fase del ciclo de vida de un ticket se verifica que el problema está resuelto?',
        options: [
          {
            id: 'opt-1',
            text: 'Diagnóstico',
            isCorrect: false,
          },
          {
            id: 'opt-2',
            text: 'Implementación',
            isCorrect: false,
          },
          {
            id: 'opt-3',
            text: 'Verificación y cierre',
            isCorrect: true,
          },
          {
            id: 'opt-4',
            text: 'Registro del ticket',
            isCorrect: false,
          },
        ],
        explanation:
          'En la fase de verificación se confirma que la solución resolvió el problema antes de cerrar el ticket.',
        difficulty: 'easy',
      },
      {
        id: 'q1-3',
        question:
          '¿Cuál de estas NO es una habilidad esencial para un técnico IT?',
        options: [
          {
            id: 'opt-1',
            text: 'Comunicación efectiva',
            isCorrect: false,
          },
          {
            id: 'opt-2',
            text: 'Pensamiento lógico',
            isCorrect: false,
          },
          {
            id: 'opt-3',
            text: 'Manejo de emociones al usuario molesto',
            isCorrect: false,
          },
          {
            id: 'opt-4',
            text: 'Capacidad de escribir poesía',
            isCorrect: true,
          },
        ],
        explanation:
          'Aunque todas son buenas habilidades, la poesía no es esencial para el soporte técnico.',
        difficulty: 'easy',
      },
    ],
  },
  {
    id: 'quiz-2',
    tutorialId: '3',
    title: 'Quiz: Componentes de Hardware Básicos',
    description:
      'Prueba tu conocimiento sobre los componentes esenciales de una computadora.',
    passingScore: 70,
    timeLimit: 15,
    questions: [
      {
        id: 'q2-1',
        question: '¿Cuál es la principal diferencia entre HDD y SSD?',
        options: [
          {
            id: 'opt-1',
            text: 'El HDD es más rápido',
            isCorrect: false,
          },
          {
            id: 'opt-2',
            text: 'El SSD no necesita energía',
            isCorrect: false,
          },
          {
            id: 'opt-3',
            text: 'El SSD es más rápido y no tiene partes móviles',
            isCorrect: true,
          },
          {
            id: 'opt-4',
            text: 'El HDD tiene mayor capacidad',
            isCorrect: false,
          },
        ],
        explanation:
          'Los SSD son más rápidos porque no tienen partes mecánicas, mientras que los HDD tienen discos giratorios.',
        difficulty: 'easy',
      },
      {
        id: 'q2-2',
        question: '¿Qué función tiene la memoria RAM?',
        options: [
          {
            id: 'opt-1',
            text: 'Almacenar datos permanentemente',
            isCorrect: false,
          },
          {
            id: 'opt-2',
            text: 'Almacenamiento temporal rápido durante la ejecución',
            isCorrect: true,
          },
          {
            id: 'opt-3',
            text: 'Ejecutar el antivirus',
            isCorrect: false,
          },
          {
            id: 'opt-4',
            text: 'Mostrar la imagen en pantalla',
            isCorrect: false,
          },
        ],
        explanation:
          'La RAM proporciona almacenamiento rápido y temporal que se borra cuando se apaga la computadora.',
        difficulty: 'easy',
      },
      {
        id: 'q2-3',
        question:
          'Si un usuario se queja de que la computadora se calienta mucho, ¿cuál podría ser una causa?',
        options: [
          {
            id: 'opt-1',
            text: 'CPU defectuosa ejecutando cálculos intensivos',
            isCorrect: true,
          },
          {
            id: 'opt-2',
            text: 'Monitor defectuoso',
            isCorrect: false,
          },
          {
            id: 'opt-3',
            text: 'Falta de RAM instalada',
            isCorrect: false,
          },
          {
            id: 'opt-4',
            text: 'Problema con el ratón',
            isCorrect: false,
          },
        ],
        explanation:
          'El sobrecalentamiento puede deberse a CPU ejecutando procesos intensivos, ventiladores bloqueados o pasta térmica degradada.',
        difficulty: 'medium',
      },
    ],
  },
  {
    id: 'quiz-3',
    tutorialId: '4',
    title: 'Quiz: Conceptos Básicos de Redes',
    description: 'Verifica tu comprensión de los conceptos fundamentales de redes.',
    passingScore: 70,
    timeLimit: 15,
    questions: [
      {
        id: 'q3-1',
        question: '¿Cuál es el rango de direcciones IP privadas en la clase C?',
        options: [
          {
            id: 'opt-1',
            text: '10.0.0.0 a 10.255.255.255',
            isCorrect: false,
          },
          {
            id: 'opt-2',
            text: '172.16.0.0 a 172.31.255.255',
            isCorrect: false,
          },
          {
            id: 'opt-3',
            text: '192.168.0.0 a 192.168.255.255',
            isCorrect: true,
          },
          {
            id: 'opt-4',
            text: '200.0.0.0 a 200.255.255.255',
            isCorrect: false,
          },
        ],
        explanation:
          'El rango 192.168.0.0 a 192.168.255.255 es el rango privado de clase C más usado en redes corporativas.',
        difficulty: 'medium',
      },
      {
        id: 'q3-2',
        question: '¿Qué servicio usa el puerto 53?',
        options: [
          {
            id: 'opt-1',
            text: 'HTTP',
            isCorrect: false,
          },
          {
            id: 'opt-2',
            text: 'DNS',
            isCorrect: true,
          },
          {
            id: 'opt-3',
            text: 'HTTPS',
            isCorrect: false,
          },
          {
            id: 'opt-4',
            text: 'FTP',
            isCorrect: false,
          },
        ],
        explanation:
          'El puerto 53 es usado por DNS para traducir nombres de dominio a direcciones IP.',
        difficulty: 'easy',
      },
      {
        id: 'q3-3',
        question: '¿Cuál es la máscara de subred /24 en formato decimal?',
        options: [
          {
            id: 'opt-1',
            text: '255.255.255.0',
            isCorrect: true,
          },
          {
            id: 'opt-2',
            text: '255.255.0.0',
            isCorrect: false,
          },
          {
            id: 'opt-3',
            text: '255.0.0.0',
            isCorrect: false,
          },
          {
            id: 'opt-4',
            text: '255.255.255.255',
            isCorrect: false,
          },
        ],
        explanation:
          'La notación CIDR /24 equivale a una máscara de 255.255.255.0, permitiendo 254 hosts por subred.',
        difficulty: 'medium',
      },
    ],
  },
  {
    id: 'quiz-4',
    tutorialId: '6',
    title: 'Quiz: Fundamentos de Ciberseguridad',
    description:
      'Prueba tus conocimientos sobre seguridad IT y buenas prácticas.',
    passingScore: 70,
    timeLimit: 15,
    questions: [
      {
        id: 'q4-1',
        question: '¿Cuál es el tipo de malware que se replica a través de archivos?',
        options: [
          {
            id: 'opt-1',
            text: 'Gusano (Worm)',
            isCorrect: false,
          },
          {
            id: 'opt-2',
            text: 'Virus',
            isCorrect: true,
          },
          {
            id: 'opt-3',
            text: 'Troyano',
            isCorrect: false,
          },
          {
            id: 'opt-4',
            text: 'Ransomware',
            isCorrect: false,
          },
        ],
        explanation:
          'Los virus se replican a través de archivos infectados, mientras que los gusanos se propagan por la red.',
        difficulty: 'easy',
      },
      {
        id: 'q4-2',
        question:
          '¿Qué es la Autenticación Multifactor (MFA)? ¿Cuáles son los tres factores?',
        options: [
          {
            id: 'opt-1',
            text: 'Múltiples intentos de contraseña',
            isCorrect: false,
          },
          {
            id: 'opt-2',
            text: 'Algo que sabes, algo que tienes, algo que eres',
            isCorrect: true,
          },
          {
            id: 'opt-3',
            text: 'Solo usar contraseñas fuertes',
            isCorrect: false,
          },
          {
            id: 'opt-4',
            text: 'Dos contraseñas diferentes',
            isCorrect: false,
          },
        ],
        explanation:
          'MFA combina: 1) Algo que sabes (contraseña), 2) Algo que tienes (teléfono), 3) Algo que eres (biometría).',
        difficulty: 'medium',
      },
      {
        id: 'q4-3',
        question: '¿Cuál es la longitud mínima recomendada para contraseñas fuertes?',
        options: [
          {
            id: 'opt-1',
            text: '6 caracteres',
            isCorrect: false,
          },
          {
            id: 'opt-2',
            text: '8 caracteres',
            isCorrect: false,
          },
          {
            id: 'opt-3',
            text: '12 caracteres',
            isCorrect: true,
          },
          {
            id: 'opt-4',
            text: '5 caracteres',
            isCorrect: false,
          },
        ],
        explanation:
          'Se recomiendan mínimo 12 caracteres con mayúsculas, minúsculas, números y símbolos para mayor seguridad.',
        difficulty: 'easy',
      },
    ],
  },
];
