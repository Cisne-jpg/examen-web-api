// src/handlers/authHandler.ts
import { RequestHandler } from 'express';
import { authenticate } from '../controllers/authController';

export const loginHandler: RequestHandler = (req, res) => {
  const { usuario, contraseña } = req.body as {
    usuario: string;
    contraseña: string;
  };

  const result = authenticate(usuario, contraseña);
  if (result) {
    res.json({
      exito: true,
      nombre: result.nombre,
      libro: result.libro,
    });
  }

  res.status(401).json({
    exito: false,
    mensaje: 'Usuario o contraseña no válidos',
  });
};
