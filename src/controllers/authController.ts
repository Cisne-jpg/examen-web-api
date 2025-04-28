import { estudiantes, Student } from '../db/students';

export interface AuthSuccess {
  nombre: string;
  libro: string;
}

export function authenticate(usuario: string, contraseña: string): AuthSuccess | null {
  const user = estudiantes.find(u => u.usuario === usuario && u.contraseña === contraseña);
  if (!user) return null;
  return { nombre: user.nombre, libro: user.libro };
}
