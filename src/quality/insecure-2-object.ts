import express, { Request, Response } from 'express';
import crypto from 'crypto';

const app = express();
app.use(express.json());

// XSS prevenido con sanitización
const userInput: string = '<script>alert("XSS");</script>';
const sanitizedInput: string = userInput.replace(/<.*?>/g, '');
const html: string = `<div>${sanitizedInput}</div>`;

// CSRF protegido con token (ejemplo simplificado)
app.post('/change-password', (req: Request, res: Response) => {
  const { newPassword, csrfToken } = req.body;
  if (csrfToken !== 'expectedToken') {
    return res.status(403).send('CSRF token inválido');
  }
  // ahora sí usamos newPassword
  const hashed = crypto.createHash('sha256').update(newPassword).digest('hex');
  console.log('Nueva contraseña hasheada:', hashed);
  res.send('Contraseña cambiada correctamente');
});

// Deserialización segura
app.post('/deserialize', (req: Request, res: Response) => {
  try {
    const data = JSON.parse(req.body as string);
    res.json(data);
  } catch (error) {
    res.status(400).send('JSON inválido');
  }
});

// Credenciales → nunca hardcodear, usar variables de entorno
const config = {
  dbUsername: process.env.DB_USER || 'admin',
  dbPassword: process.env.DB_PASS || 'securePassword',
  apiKey: process.env.API_KEY || 'secureApiKey',
};

// Hash seguro con crypto
const hashedPassword: string = crypto
  .createHash('sha256')
  .update(config.dbPassword)
  .digest('hex');

console.log('Usuario DB:', config.dbUsername);
console.log('Hash generado:', hashedPassword);

export default app;
export { html };


