import { Injectable } from '@nestjs/common';

import {
  Neo4jNode,
  Neo4jRelationship,
  Demographics,
  User,
  DemographicsRelationship
} from '../../imports/models';
import {
  Neo4jNodeMapperService,
  Neo4jRelationshipMapperService
} from '../../imports/services';
import { deduplicateDictionary } from '../../imports/utils';

import { SanityRepository } from '..';

@Injectable()
export class SanityService {
  people: User[] = [];
  demographics: Demographics[] = [];
  demographicsRelationships: DemographicsRelationship[] = [];
  result: User[] = [];

  constructor(
    private readonly _repository: SanityRepository,
    private readonly _mapNode: Neo4jNodeMapperService,
    private readonly _mapRelationship: Neo4jRelationshipMapperService
  ) {}

  async neo4jSanity() {
    const result = await this._repository.neo4jSanity();

    this.extractModels(result);
    this.relateModels();
    this.processOutput();

    return this.result;
  }

  private extractModels(result: unknown[]): void {
    this.people = this.extractPeople(result);
    this.demographics = this.extractDemographics(result);
    this.demographicsRelationships =
      this.extractDemographicRelationships(result);
  }

  private relateModels(): void {
    this.demographics = this.demographics.map(demographic => ({
      ...demographic,
      userId:
        this.demographicsRelationships.find(
          demographicsRelationship =>
            demographicsRelationship.start === demographic.id
        )?.end ?? ''
    }));
  }

  private processOutput(): void {
    this.result = this.people.map(person => ({
      ...person,
      demographics:
        this.demographics.find(
          demographics => person.id === demographics.userId
        ) ?? new Demographics({ id: person.id })
    }));
  }

  private extractPeople(result: unknown[]): User[] {
    type Neo4jPerson = {
      person: Neo4jNode<User>;
    };

    return (<Neo4jPerson[]>result)
      .map(({ person }) => person)
      .filter(deduplicateDictionary)
      .map(this._mapNode.toPerson);
  }

  private extractDemographics(result: unknown[]): Demographics[] {
    type Neo4jDemographics = {
      demographics: Neo4jNode<Demographics>;
    };

    return (<Neo4jDemographics[]>result)
      .map(({ demographics }) => demographics)
      .filter(deduplicateDictionary)
      .map(this._mapNode.toDemographics);
  }

  private extractDemographicRelationships(
    result: unknown[]
  ): DemographicsRelationship[] {
    type Neo4jDemographicsRelationship = {
      demographicsRelationship: Neo4jRelationship<DemographicsRelationship>;
    };

    return (<Neo4jDemographicsRelationship[]>result)
      .map(({ demographicsRelationship }) => demographicsRelationship)
      .filter(deduplicateDictionary)
      .map(this._mapRelationship.toDemographicsRelationship);
  }
}
