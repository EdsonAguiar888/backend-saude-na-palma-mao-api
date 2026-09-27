import { CreateUsuarioDto } from './create-usuario.dto.js';

export class UpdateUsuarioDto {
  nome?: string;
  email?: string;
  senha?: string;
  tipo_usuario?: any;
  telefone?: string;
}