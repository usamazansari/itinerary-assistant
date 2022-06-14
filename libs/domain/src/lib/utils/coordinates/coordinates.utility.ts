import { Point, types } from 'neo4j-driver';

import { CoordinatesSRID } from '../../constants';

export const parseFromPoint = (
  point: Point<number>
): { latitude: number; longitude: number } => {
  const { x, y } = point;
  return { latitude: x, longitude: y };
};

export const parseToPoint = ({
  latitude,
  longitude
}: {
  latitude?: number;
  longitude?: number;
}): Point<number> => {
  const { Point: PointConstructor } = types;
  if ((!!latitude || latitude === 0) && (!!longitude || longitude === 0))
    return new PointConstructor<number>(
      CoordinatesSRID.WGS84,
      longitude,
      latitude
    );
  if (!!latitude || latitude === 0)
    return new PointConstructor<number>(CoordinatesSRID.WGS84, 0, latitude);
  if (!!longitude || longitude === 0)
    return new PointConstructor<number>(CoordinatesSRID.WGS84, longitude, 0);
  return new PointConstructor<number>(CoordinatesSRID.WGS84, 0, 0);
};

export const updatePoint = (
  point: Point<number>,
  { latitude, longitude }: { latitude?: number; longitude?: number }
): Point<number> => {
  const { Point: PointConstructor } = types;
  if ((!!latitude || latitude === 0) && (!!longitude || longitude === 0))
    return new PointConstructor<number>(
      CoordinatesSRID.WGS84,
      longitude,
      latitude
    );
  if (!!latitude || latitude === 0)
    return new PointConstructor<number>(
      CoordinatesSRID.WGS84,
      point.x,
      latitude
    );
  if (!!longitude || longitude === 0)
    return new PointConstructor<number>(
      CoordinatesSRID.WGS84,
      longitude,
      point.y
    );
  return point;
};
