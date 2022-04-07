import { Injectable } from '@nestjs/common';

import {
  GenericObject,
  Neo4jNode,
  Neo4jRelationship,
  User
} from '../../imports/models';
import { Neo4jUtility } from '../../imports/services';

import { SanityRepository } from '..';

@Injectable()
export class SanityService {
  constructor(
    private readonly _repository: SanityRepository,
    private readonly _utility: Neo4jUtility
  ) {}

  async neo4jSanity() {
    const result = await this._repository.neo4jSanity();

    // arr.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i)

    const people = this.extractPeople(result);
    // const demographics = this.extractDemographics(result);
    // const demographicRelationships =
    //   this.extractDemographicRelationships(result);

    // let _people = result.map(({ people }) => {
    //   const { year, month, day } = people.properties.dateOfBirth;
    //   return {
    //     id: people.identity,
    //     ...people.properties,
    //     dateOfBirth: new Date(`${year}-${month}-${day}`)
    //   };
    // });

    // let _demographicsRelationship = [
    //   ...new Set(
    //     result.map(
    //       ({ demographicsRelationship: { identity, ..._ } }) => {
    //         return {
    //           id: identity,
    //           ..._
    //         };
    //       }
    //     )
    //   )
    // ];

    // let _demographics = [
    //   ...new Set(
    //     result.map(({ demographics }) => {
    //       return {
    //         id: demographics.identity,
    //         ...demographics.properties
    //       };
    //     })
    //   )
    // ];

    // _people = _people.map(person => ({
    //   ...person,
    //   demographics: _demographics.find(demographic => {
    //     return (
    //       person.id ===
    //       _demographicsRelationship.find(demographicRelationship => {
    //         return demographicRelationship.start === demographic.id;
    //       }).end
    //     );
    //   })
    // }));

    // return result.map(({ demographics, people, social }) => {
    //   const { year, month, day } = people.properties.dateOfBirth;
    //   return {
    //     id: people.identity,
    //     ...people.properties,
    //     dateOfBirth: new Date(`${year}-${month}-${day}`),
    //     demographics: {
    //       id: demographics.identity,
    //       ...demographics.properties
    //     },
    //     socialConnections: [
    //       {
    //         id: social.identity,
    //         ...social.properties
    //       }
    //     ]
    //   };
    // });
    // return this.JSONify(people, demographics, demographicRelationships);
    return this.JSONify(people);
  }
  private JSONify(
    people: unknown[]
    // demographics: unknown[],
    // demographicRelationships: {
    //   id: unknown;
    //   start: unknown;
    //   end: unknown;
    // }[]
  ) {
    return people.map(person => ({
      ...(<GenericObject>person)
      // demographics: demographics.find(demographic => {
      //   return (
      //     (<{ id: unknown; }>person).id ===
      //     demographicRelationships.find(demographicRelationship => {
      //       return demographicRelationship.start === demographic.id;
      //     }).end
      //   );
      // })
    }));
  }

  // private extractDemographicRelationships(result: unknown[]) {
  //   return (<DemographicRelationshipDictionaryType[]>result)
  //     .map(({ demographicsRelationship }) => demographicsRelationship)
  //     .filter(this.deduplicateDictionary)
  //     .map(({ identity, start, end }) => ({
  //       id: identity,
  //       start,
  //       end
  //     }));
  // }

  // private extractDemographics(result: unknown[]): unknown[] {
  //   return (<DemographicsDictionaryType[]>result)
  //     .map(({ demographics }) => demographics)
  //     .filter(this.deduplicateDictionary)
  //     .map(({ identity, properties }) => ({
  //       id: identity,
  //       ...properties
  //     }));
  // }

  private extractPeople(result: unknown[]): unknown[] {
    return (
      (<{ person: Neo4jNode<User> }[]>result)
        .map(({ person }) => person)
        .filter((dictionary, index, array) =>
          this.deduplicateDictionary<User>(dictionary, index, array)
        )
        // .map(
        //   ({
        //     identity,
        //     properties: {
        //       dateOfBirth: { year, month, day },
        //       ...properties
        //     }
        //   }) => ({
        //     id: identity,
        //     ...properties,
        //     dateOfBirth: new Date(`${year}-${month}-${day}`)
        //   })
        // );
        .map(person => this._utility.mapToPerson(person))
    );
  }

  private deduplicateDictionary<Model = unknown>(
    dictionary: Neo4jNode<Model> | Neo4jRelationship<Model>,
    index: unknown,
    array: Neo4jNode<Model>[] | Neo4jRelationship<Model>[]
  ): boolean {
    return (
      array.findIndex(
        arrayItem => arrayItem.identity === dictionary.identity
      ) === index
    );
  }
}
