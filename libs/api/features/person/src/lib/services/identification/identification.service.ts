import { Injectable } from '@nestjs/common';

import {
  Identification,
  IdentificationDTO,
  Tenure,
  Neo4jOutput
} from '../../imports/models';

import { IdentificationRepository } from '../../repositories';
import { ExtractorService } from '../../helpers';

@Injectable()
export class IdentificationService {
  constructor(
    private _repository: IdentificationRepository,
    private _extractor: ExtractorService
  ) {}

  async getIdentification(id = ''): Promise<Identification> {
    const result = await this._repository.getIdentification(id);
    return this._extractor.extractIdentification(
      result as Neo4jOutput<Identification>
    );
  }

  async getTenure(id = ''): Promise<Tenure> {
    const result = await this._repository.getTenure(id);
    return (
      this._extractor.extractTenures(result as Neo4jOutput<Tenure>).at(0) ??
      new Tenure({ id: '' })
    );
  }

  async createIdentification(
    identification: IdentificationDTO
  ): Promise<Identification> {
    const id = new Identification({ ...identification }).generateUUID();
    const result = await this._repository.createIdentification(
      id,
      identification
    );
    return this._extractor.extractIdentification(
      result as Neo4jOutput<Identification>
    );
  }

  async updateIdentification(
    id: string,
    identification: IdentificationDTO
  ): Promise<Identification> {
    const result = await this._repository.updateIdentification(
      id,
      identification
    );
    return this._extractor.extractIdentification(
      result as Neo4jOutput<Identification>
    );
  }

  // TODO: Usama Ansari - improve this logic
  async deleteIdentification(id: string): Promise<boolean> {
    const result = await this._repository.deleteIdentification(id);
    return !!this._extractor
      .extractIdentifications(result as Neo4jOutput<Identification>)
      .at(0)?.id;
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
    return this._extractor.extractIdentification(
      result as Neo4jOutput<Identification>
    );
  }

  async associateIdentificationWithPerson(
    identificationId: string,
    personId: string
  ): Promise<Identification> {
    const check = await this.checkIdentificationOfRelationship(
      identificationId,
      personId
    );
    const result = check
      ? await this._repository.getIdentification(identificationId)
      : await this._repository.associateIdentificationWithPerson(
          identificationId,
          personId
        );
    return this._extractor.extractIdentification(
      result as Neo4jOutput<Identification>
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

  async checkIdentificationOfRelationship(
    identificationId: string,
    personId: string
  ): Promise<boolean> {
    const result = await this._repository.checkIdentificationOfRelationship(
      identificationId,
      personId
    );
    return !!result.length;
  }
}
