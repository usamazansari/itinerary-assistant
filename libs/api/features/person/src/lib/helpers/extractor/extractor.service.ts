import { Injectable } from '@nestjs/common';

import {
  Address,
  Demographics,
  Identification,
  Location,
  Neo4jNode,
  Person,
  SocialConnection,
  Tenure
} from '../../imports/models';
import { Neo4jNodeMapperService } from '../../imports/services';

@Injectable()
export class ExtractorService {
  constructor(private _mapNode: Neo4jNodeMapperService) {}

  extractPeople(result: { person: Neo4jNode<Person> }[]): Person[] {
    return result.map(({ person }) => person).map(this._mapNode.toPerson);
  }

  extractAddress(result: { address: Neo4jNode<Address> }[]): Address[] {
    return result.map(({ address }) => address).map(this._mapNode.toAddress);
  }

  extractLocation(result: { location: Neo4jNode<Location> }[]): Location[] {
    return result.map(({ location }) => location).map(this._mapNode.toLocation);
  }

  extractDemographics(
    result: { demographics: Neo4jNode<Demographics> }[]
  ): Demographics[] {
    return result
      .map(({ demographics }) => demographics)
      .map(this._mapNode.toDemographics);
  }

  extractIdentifications(
    result: { identification: Neo4jNode<Identification> }[]
  ): Identification[] {
    return result
      .map(({ identification }) => identification)
      .map(this._mapNode.toIdentification);
  }

  extractTenures(result: { tenure: Neo4jNode<Tenure> }[]): Tenure[] {
    return result.map(({ tenure }) => tenure).map(this._mapNode.toTenure);
  }

  extractSocialConnections(
    result: { socialConnection: Neo4jNode<SocialConnection> }[]
  ): SocialConnection[] {
    return result
      .map(({ socialConnection }) => socialConnection)
      .map(this._mapNode.toSocialConnection);
  }
}
