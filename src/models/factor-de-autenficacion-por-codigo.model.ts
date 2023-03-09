import {Model, model, property} from '@loopback/repository';

@model()
export class FactorDeAutenficacionPorCodigo extends Model {
  @property({
    type: 'string',
    required: true,
  })
  usuarioId: string;

  @property({
    type: 'string',
    required: true,
  })
  codigo2fa: string;


  constructor(data?: Partial<FactorDeAutenficacionPorCodigo>) {
    super(data);
  }
}

export interface FactorDeAutenficacionPorCodigoRelations {
  // describe navigational properties here
}

export type FactorDeAutenficacionPorCodigoWithRelations = FactorDeAutenficacionPorCodigo & FactorDeAutenficacionPorCodigoRelations;
