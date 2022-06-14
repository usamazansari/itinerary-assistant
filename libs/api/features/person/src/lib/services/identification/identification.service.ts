import { Injectable } from '@nestjs/common';

import { Identification, Tenure, Neo4jNode } from '../../imports/models';

import { IdentificationRepository } from '../../repositories';
import { ExtractorService } from '../../helpers';

@Injectable()
export class IdentificationService {
  constructor(
    private _repository: IdentificationRepository,
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

  async associateIdentificationWithTenure(
    identificationId: string,
    tenureId: string
  ): Promise<Identification> {
    const check = await this.checkHasValidityRelationship(
      identificationId,
      tenureId
    );
    const result = check
      ? await this._repository.getIdentification(identificationId)
      : await this._repository.associateIdentificationWithTenure(
          identificationId,
          tenureId
        );
    return (
      this._extractor
        .extractIdentifications(
          (<unknown>result) as { identification: Neo4jNode<Identification> }[]
        )
        .at(0) ?? new Identification({ id: '' })
    );
  }

  async checkHasValidityRelationship(
    identificationId: string,
    tenureId: string
  ): Promise<boolean> {
    const result = await this._repository.checkHasValidityRelationship(
      identificationId,
      tenureId
    );
    return !!result.length;
  }
}
