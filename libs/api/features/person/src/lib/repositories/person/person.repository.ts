import { Injectable } from '@nestjs/common';
import { node } from 'cypher-query-builder';

import { REPOSITORY_CONSTANTS } from '../../imports/constants';
import { Neo4jOutput } from '../../imports/models';
import { QueryRepositoryService } from '../../imports/services';

import { Person } from '../../models';

@Injectable()
export class PersonRepository {
  constructor(private _query: QueryRepositoryService) {}

  async getPeople() {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.VARIABLE.Person,
          REPOSITORY_CONSTANTS.LABEL.Person
        )
      ])
      .with({
        [`${REPOSITORY_CONSTANTS.VARIABLE.Person}`]:
          REPOSITORY_CONSTANTS.VARIABLE.Output
      })
      .return([REPOSITORY_CONSTANTS.VARIABLE.Output]);

    console.log({ query: query.interpolate() });
    const result = await query.run();
    return result as Neo4jOutput<Person>;
  }
}
