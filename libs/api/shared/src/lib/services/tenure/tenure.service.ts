import { Injectable } from '@nestjs/common';

import { Tenure, TenureDTO, Neo4jNode } from '../../imports/models';

import { ExtractorService } from '../../helpers';
import { TenureRepository } from '../../repositories';

@Injectable()
export class TenureService {
  constructor(
    private _repository: TenureRepository,
    private _extractor: ExtractorService
  ) {}

  async getTenure(id = ''): Promise<Tenure> {
    const result = await this._repository.getTenure(id);
    return (
      this._extractor
        .extractTenures((<unknown>result) as { tenure: Neo4jNode<Tenure> }[])
        .at(0) ?? new Tenure({ id: '' })
    );
  }

  async createTenure(tenure: TenureDTO): Promise<Tenure> {
    const id = new Tenure({ ...tenure }).generateUUID();
    const result = await this._repository.createTenure(id, tenure);
    return (
      this._extractor
        .extractTenures((<unknown>result) as { tenure: Neo4jNode<Tenure> }[])
        .at(0) ?? new Tenure({ id: '' })
    );
  }

  async updateTenure(id = '', tenure: TenureDTO): Promise<Tenure> {
    const result = await this._repository.updateTenure(id, tenure);
    return (
      this._extractor
        .extractTenures((<unknown>result) as { tenure: Neo4jNode<Tenure> }[])
        .at(0) ?? new Tenure({ id: '' })
    );
  }

  async deleteTenure(id = ''): Promise<Tenure> {
    const result = await this._repository.deleteTenure(id);
    return (
      this._extractor
        .extractTenures((<unknown>result) as { tenure: Neo4jNode<Tenure> }[])
        .at(0) ?? new Tenure({ id: '' })
    );
  }
}
