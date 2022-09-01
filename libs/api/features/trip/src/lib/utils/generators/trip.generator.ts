import { DateTime } from 'neo4j-driver';

import { toNeo4jDateTime, toJSDate } from '../../imports/utils';

import { Trip, TripDTO } from '../../models';

const generateCreateTripObject = ({
  id,
  source,
  destination,
  start,
  end,
  name
}: Partial<Trip>) => {
  let _ = {};
  if (!!id) _ = { ..._, id };
  if (!!source) _ = { ..._, source };
  if (!!destination) _ = { ..._, destination };
  if (!!start) _ = { ..._, start: toNeo4jDateTime(start) };
  if (!!end) _ = { ..._, end: toNeo4jDateTime(end) };
  if (!!name) _ = { ..._, name };

  return new Trip({ ..._ });
};

const generateReadTripObject = ({
  id,
  source,
  destination,
  start,
  end,
  name,
  accomplices
}: Partial<Trip>) => {
  let _ = {};
  if (!!id) _ = { ..._, id };
  if (!!source) _ = { ..._, source };
  if (!!destination) _ = { ..._, destination };
  if (!!start) _ = { ..._, start: toJSDate((<unknown>start) as DateTime) };
  if (!!end) _ = { ..._, end: toJSDate((<unknown>end) as DateTime) };
  if (!!name) _ = { ..._, name };
  if (!!accomplices) _ = { ..._, accomplices };

  return new Trip({ ..._ });
};

const generateUpdateTripObject = ({
  source,
  destination,
  start,
  end,
  name
}: Partial<TripDTO>) => {
  let _ = {};
  if (!!source) _ = { ..._, ['trip.source']: source };
  if (!!destination) _ = { ..._, ['trip.destination']: destination };
  if (!!start) _ = { ..._, ['trip.start']: toNeo4jDateTime(start) };
  if (!!end) _ = { ..._, ['trip.end']: toNeo4jDateTime(end) };
  if (!!name) _ = { ..._, ['trip.name']: name };

  return _ as TripDTO;
};

export {
  generateCreateTripObject,
  generateReadTripObject,
  generateUpdateTripObject
};
