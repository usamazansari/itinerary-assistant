/* eslint-disable @nrwl/nx/enforce-module-boundaries */
export {
  IAddress,
  IAddressBase,
  IPerson,
  IPersonBase
} from '@itinerary-assistant/domain';
export { BaseModel } from '@itinerary-assistant/api/core';
export {
  Neo4jNode,
  Neo4jOutput
} from '@itinerary-assistant/api/database/neo4j';
export { Trip } from '@itinerary-assistant/api/features/trip';
