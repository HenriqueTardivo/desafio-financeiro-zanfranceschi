import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { FilterLancamentosDto } from './dto/filter-lancamentos.dto';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get(':id/saldo')
  async saldo(@Param('id') id: string) {
    const saldo = await this.clienteService.saldo();

    return saldo;
  }

  @Get(':id/lancamentos')
  async lancamentos(
    @Param('id') id: string,
    @Query(
      new ValidationPipe({
        transform: true,
        transformOptions: { enableImplicitConversion: true },
        forbidNonWhitelisted: true,
      }),
    )
    lancamentosFilter: FilterLancamentosDto,
  ) {
    const lancamentos = await this.clienteService.lancamentos(
      lancamentosFilter,
    );

    return lancamentos;
  }

  @Post(':id/lancamentos-anteriores')
  async createLancamentoAnterior(@Param('id') id: string) {
    const solicit = await this.clienteService.createLancamentoAnterior();

    return solicit;
  }

  @Get(':id/lancamentos-anteriores')
  async listLancamentosAnteriores(@Param('id') id: string) {
    const solicitations = await this.clienteService.listLancamentosAnteriores();

    return solicitations;
  }

  @Get(':id/lancamentos-anteriores/download')
  async downloadLancamentoAnterior(@Param('id') id: string) {
    const downlaod = await this.clienteService.downloadLancamentoAnterior();

    return downlaod;
  }
}
