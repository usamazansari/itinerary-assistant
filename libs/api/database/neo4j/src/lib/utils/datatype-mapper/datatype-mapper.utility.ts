import type { DateTime, Point } from 'neo4j-driver';
import { types } from 'neo4j-driver';

import { CoordinatesSRID } from '../../constants';

const { DateTime: DateTimeConstructor, Point: PointConstructor } = types;

type Coordinates = {
  latitude?: number;
  longitude?: number;
};

const parseFromPoint = ({ x, y }: Point<number>) => ({
  latitude: x,
  longitude: y
});

const parseToPoint = ({ latitude, longitude }: Coordinates) =>
  new PointConstructor<number>(
    CoordinatesSRID.WGS84,
    longitude ?? 0,
    latitude ?? 0
  );
const updatePoint = (
  { srid, x, y }: Point<number>,
  { latitude, longitude }: Coordinates
) => new PointConstructor<number>(srid, longitude ?? x, latitude ?? y);

const toJSDate = ({
  year,
  month,
  day,
  hour,
  minute,
  second,
  nanosecond
}: DateTime) =>
  new Date(
    +year || 1970,
    (+month || 1) - 1,
    +day || 1,
    +hour || 0,
    +minute || 0,
    +second || 0,
    (+nanosecond || 0) / 1000000
  );

const toNeo4jDateTime = (date: Date): DateTime<number> =>
  new DateTimeConstructor<number>(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds() * 1000000,
    date.getTimezoneOffset() * 60
  );

export { parseFromPoint, parseToPoint, updatePoint, toJSDate, toNeo4jDateTime };
