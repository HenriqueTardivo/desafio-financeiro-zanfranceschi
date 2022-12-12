import { Injectable } from '@nestjs/common';
import { FilterLancamentosDto } from './dto/filter-lancamentos.dto';

@Injectable()
export class ClienteService {
  async saldo() {}

  async lancamentos(lancamentosFilter: FilterLancamentosDto) {}

  async createLancamentoAnterior() {}

  async listLancamentosAnteriores() {}

  async downloadLancamentoAnterior() {}
}
