import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { TipoUsuario } from '../../common/enums/tipo-usuario.enum.js';

export class CreateUsuarioDto {
  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  @IsString({ message: 'O nome deve ser uma string.' })
  nome: string;

  @IsNotEmpty({ message: 'O e-mail é obrigatório.' })
  @IsEmail({}, { message: 'Informe um e-mail válido.' })
  email: string;

  @IsNotEmpty({ message: 'A senha é obrigatória.' })
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres.' })
  senha: string;

  @IsNotEmpty({ message: 'O tipo de usuário é obrigatório.' })
  @IsEnum(TipoUsuario, { message: 'Tipo de usuário inválido.' })
  tipo_usuario: TipoUsuario;

  @IsOptional()
  @IsString()
  telefone?: string;
}