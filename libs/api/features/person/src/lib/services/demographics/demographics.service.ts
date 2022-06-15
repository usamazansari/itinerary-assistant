import { Injectable } from '@nestjs/common';

import {
  Demographics,
  DemographicsDTO,
  Neo4jOutput
} from '../../imports/models';

import { DemographicsRepository } from '../../repositories';
import { ExtractorService } from '../../helpers';

@Injectable()
export class DemographicsService {
  constructor(
    private _repository: DemographicsRepository,
    private _extractor: ExtractorService
  ) {}

  async getDemographics(id = ''): Promise<Demographics> {
    const result = await this._repository.getDemographics(id);
    return (
      this._extractor
        .extractDemographics(result as Neo4jOutput<Demographics>)
        .at(0) ?? new Demographics({ id: '' })
    );
  }

  async createDemographics(
    demographics: DemographicsDTO
  ): Promise<Demographics> {
    const id = new Demographics({ ...demographics }).generateUUID();
    const result = await this._repository.createDemographics(id, demographics);
    return (
      this._extractor
        .extractDemographics(result as Neo4jOutput<Demographics>)
        .at(0) ?? new Demographics({ id: '' })
    );
  }

  async updateDemographics(
    id: string,
    demographics: DemographicsDTO
  ): Promise<Demographics> {
    const result = await this._repository.updateDemographics(id, demographics);
    return (
      this._extractor
        .extractDemographics(result as Neo4jOutput<Demographics>)
        .at(0) ?? new Demographics({ id: '' })
    );
  }

  // TODO: Usama Ansari - improve this logic
  async deleteDemographics(id: string): Promise<boolean> {
    const result = await this._repository.deleteDemographics(id);
    return !!this._extractor
      .extractDemographics(result as Neo4jOutput<Demographics>)
      .at(0)?.id;
  }

  async associateDemographicsWithPerson(
    demographicsId: string,
    personId: string
  ): Promise<Demographics> {
    const check = await this.checkDemographicsOfRelationship(
      demographicsId,
      personId
    );
    const result = check
      ? await this._repository.getDemographics(demographicsId)
      : await this._repository.associateDemographicsWithPerson(
          demographicsId,
          personId
        );
    return (
      this._extractor
        .extractDemographics(result as Neo4jOutput<Demographics>)
        .at(0) ?? new Demographics({ id: '' })
    );
  }

  async checkDemographicsOfRelationship(
    demographicsId: string,
    personId: string
  ): Promise<boolean> {
    const result = await this._repository.checkDemographicsOfRelationship(
      demographicsId,
      personId
    );
    return !!result.length;
  }
}
