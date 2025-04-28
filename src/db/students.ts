export interface Student {
    usuario: string;
    contraseña: string;
    nombre: string;
    libro: string;
  }
  
  export const estudiantes: Student[] = [
    { usuario: 'ana.t',   contraseña: 'libro123',  nombre: 'Ana Torres',     libro: 'Cien Años de Soledad' },
    { usuario: 'marco.r', contraseña: 'lectura456', nombre: 'Marco Ramírez',  libro: 'El Principito' },
    { usuario: 'sofia.m', contraseña: 'novela789',  nombre: 'Sofía Morales',  libro: 'Orgullo y Prejuicio' },
  ];
  