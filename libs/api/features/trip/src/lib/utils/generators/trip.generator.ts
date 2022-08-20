import { Trip, TripDTO } from '../../models';

const generateCreateTripObject = ({
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
  if (!!start) _ = { ..._, start };
  if (!!end) _ = { ..._, end };
  if (!!name) _ = { ..._, name };
  if (!!accomplices) _ = { ..._, accomplices };

  return { ..._ } as Trip;
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
  if (!!start) _ = { ..._, ['trip.start']: start };
  if (!!end) _ = { ..._, ['trip.end']: end };
  if (!!name) _ = { ..._, ['trip.name']: name };

  return _ as TripDTO;
};

const generateReadTripObject = generateCreateTripObject;

export {
  generateCreateTripObject,
  generateReadTripObject,
  generateUpdateTripObject
};
