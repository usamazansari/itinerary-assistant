import { DateTime, Point, types } from 'neo4j-driver';

import { CoordinatesSRID } from '../../constants';

const parseFromPoint = (
  point: Point<number>
): { latitude: number; longitude: number } => {
  const { x, y } = point;
  return { latitude: x, longitude: y };
};

const parseToPoint = ({
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

const updatePoint = (
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

const parseFromDateTime = (dateTime: DateTime): Date => {
  const { year, month, day, hour, minute, second, nanosecond } = dateTime;

  return new Date(
    +year || 1970,
    (+month || 1) - 1,
    +day || 1,
    +hour || 0,
    +minute || 0,
    +second || 0,
    (+nanosecond || 0) / 1000000
  );
};

const parseToDateTime = (date: Date): DateTime<number> => {
  const { DateTime: DateTimeConstructor } = types;

  return new DateTimeConstructor<number>(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds() * 1000000,
    date.getTimezoneOffset() * 60
  );
};

export {
  parseFromPoint,
  parseToPoint,
  updatePoint,
  parseFromDateTime,
  parseToDateTime
};
