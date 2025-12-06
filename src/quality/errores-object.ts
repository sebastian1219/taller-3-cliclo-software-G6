// Consistencia
export {}; // asegura que el archivo sea tratado como módulo

const value: number = 10;
const resultadoFinal: number = value * 2;

// Adaptabilidad
const message: string = '10'; // corregido: antes era number asignado a string

// Responsabilidad
class UserService {
  getUserData(): string {
    // ejemplo de retorno simulado
    return `User data: ${resultadoFinal}`;
  }

  sendEmail(to: string, content: string): boolean {
    // simulación de envío de correo
    console.log(`Email enviado a ${to} con contenido: ${content}`);
    return true;
  }
}

// Exportar para evitar warning de "unused"
export { value, resultadoFinal, message, UserService };
