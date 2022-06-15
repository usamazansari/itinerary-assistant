import { Injectable } from '@nestjs/common';
import { node, relation } from 'cypher-query-builder';

import { DemographicsDTO } from '../../imports/models';
import { Neo4jQueryRepositoryService } from '../../imports/services';

import { DemographicsHelper } from '../../helpers';

@Injectable()
export class DemographicsRepository {
  constructor(
    private _query: Neo4jQueryRepositoryService,
    private _helper: DemographicsHelper
  ) {}

  async getDemographics(id = '') {
    const query = this._query
      .queryBuilder()
      .match([node('demographics', 'DEMOGRAPHICS', { id })])
      .with({ demographics: 'output' })
      .return(['output']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async createDemographics(id = '', demographics: DemographicsDTO) {
    const create = this._helper.generateCreateObject({ id, demographics });
    const query = this._query
      .queryBuilder()
      .create([node('demographics', 'DEMOGRAPHICS', { ...create })])
      .with({ demographics: 'output' })
      .return(['output']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async updateDemographics(id: string, demographics: DemographicsDTO) {
    const update = this._helper.generateUpdateObject(demographics);
    const query = this._query
      .queryBuilder()
      .match([node('demographics', 'DEMOGRAPHICS', { id })])
      .set({ values: { ...update } })
      .with({ demographics: 'output' })
      .return(['output']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async deleteDemographics(id: string) {
    const query = this._query
      .queryBuilder()
      .match([node('demographics', 'DEMOGRAPHICS', { id })])
      .detachDelete(['demographics'])
      .with({ demographics: 'output' })
      .return(['output']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async associateDemographicsWithPerson(
    demographicsId: string,
    personId: string
  ) {
    const query = this._query
      .queryBuilder()
      .match([node('demographics', 'DEMOGRAPHICS', { id: demographicsId })])
      .with(['demographics'])
      .match([node('person', 'PERSON', { id: personId })])
      .with(['demographics', 'person'])
      .create([
        node('demographics'),
        relation('out', 'demographicsRelationship', 'DEMOGRAPHICS_OF'),
        node('person')
      ])
      .with({ demographics: 'output' })
      .return(['output']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async checkDemographicsOfRelationship(
    demographicsId: string,
    personId: string
  ) {
    const query = this._query
      .queryBuilder()
      .match([
        node('demographics', 'DEMOGRAPHICS', { id: demographicsId }),
        relation('out', 'demographicsRelationship', 'DEMOGRAPHICS_OF'),
        node('person', 'PERSON', { id: personId })
      ])
      .with({ demographics: 'output' })
      .return(['output']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }
}
