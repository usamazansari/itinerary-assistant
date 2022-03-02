import { TripOverview } from '../../imports/models';

// TODO: Usama Ansari - 🗑️ Obsolete code
const TripOverviewStub: TripOverview = {
  tenure: {
    end: '2017-11-07T07:00:00Z',
    start: '2017-11-02T15:00:00Z'
  },
  days: [
    {
      date: '2017-11-02T15:00:00Z',
      source: 'Mumbai',
      destination: 'Margao'
    },
    {
      date: '2017-11-03T15:00:00Z',
      source: 'Margao',
      destination: 'Margao'
    },
    {
      date: '2017-11-04T15:00:00Z',
      source: 'Margao',
      destination: 'Mandrem'
    },
    {
      date: '2017-11-05T15:00:00Z',
      source: 'Mandrem',
      destination: 'Mandrem'
    },
    {
      date: '2017-11-06T15:00:00Z',
      source: 'Mandrem',
      destination: 'Mandrem'
    },
    {
      date: '2017-11-07T15:00:00Z',
      source: 'Mandrem',
      destination: 'Mumbai'
    }
  ]
};

export { TripOverviewStub as goa };
