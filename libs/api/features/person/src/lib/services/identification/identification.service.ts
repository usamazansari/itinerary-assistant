import { Injectable } from '@nestjs/common';

import { Identification, Tenure, Neo4jNode } from '../../imports/models';
import { Neo4jNodeMapperService } from '../../imports/services';

import { IdentificationRepository } from '../../repositories';

@Injectable()
export class IdentificationService {
  constructor(
    private _repository: IdentificationRepository,
    private _mapNode: Neo4jNodeMapperService
  ) {}

  private extractTenure(result: { tenure: Neo4jNode<Tenure> }[]): Tenure[] {
    return result.map(({ tenure }) => tenure).map(this._mapNode.toTenure);
  }

  async getTenure(Identification: Identification): Promise<Tenure> {
    const result = await this._repository.getTenure(Identification);
    return (
      this.extractTenure(
        (<unknown>result) as { tenure: Neo4jNode<Tenure> }[]
      ).at(0) ?? new Tenure({ id: '' })
    );
  }
}
