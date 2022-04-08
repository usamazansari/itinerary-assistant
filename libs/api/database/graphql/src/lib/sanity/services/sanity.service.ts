import { Injectable } from '@nestjs/common';

import {
  Neo4jNode,
  Neo4jRelationship,
  Demographics,
  User,
  DemographicsRelationship
} from '../../imports/models';
import { Neo4jNodeMapperService } from '../../imports/services';
import { deduplicateDictionary } from '../../imports/utils';

import { SanityRepository } from '..';

@Injectable()
export class SanityService {
  people: User[] = [];
  demographics: Demographics[] = [];
  demographicsRelationships: DemographicsRelationship[] = [];

  constructor(
    private readonly _repository: SanityRepository,
    private _mapNode: Neo4jNodeMapperService
  ) {}

  async neo4jSanity() {
    const result = await this._repository.neo4jSanity();

    this.people = this.extractPeople(result);
    this.demographics = this.extractDemographics(result);
    // this.demographicsRelationships =
    //   this.extractDemographicRelationships(result);

    this.demographics = this.demographics.map(demographic => ({
      ...demographic,
      userId:
        this.demographicsRelationships.find(
          demographicsRelationship =>
            demographicsRelationship.start === demographic.id
        )?.end ?? ''
    }));

    return this.people.map(person => ({
      ...person,
      demographics:
        this.demographics.find(
          demographics => person.id === demographics.userId
        ) ?? new Demographics({ id: person.id })
    }));
  }

  private extractDemographics(result: unknown[]): Demographics[] {
    return (<{ demographics: Neo4jNode<Demographics> }[]>result)
      .map(({ demographics }) => demographics)
      .filter(deduplicateDictionary)
      .map(this._mapNode.toDemographics);
  }

  private extractPeople(result: unknown[]): User[] {
    return (<{ person: Neo4jNode<User> }[]>result)
      .map(({ person }) => person)
      .filter(deduplicateDictionary)
      .map(this._mapNode.toPerson);
  }

  // private extractDemographicRelationships(result: unknown[]) {
  //   return (<
  //     {
  //       demographicsRelationship: Neo4jRelationship<DemographicsRelationship>;
  //     }[]
  //   >result)
  //     .map(({ demographicsRelationship }) => demographicsRelationship)
  //     .filter(deduplicateDictionary)
  //     .map(demographicsRelationship =>
  //       this._utility.mapToDemographicsRelationship(demographicsRelationship)
  //     );
  // }
}
