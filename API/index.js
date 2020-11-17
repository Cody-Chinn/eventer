// Using a static list while the API and DB are under construction (not started). 
/*****************************************************************************************************************************
  key - random key 

  start date - The date that the event starts. needs ISO formatting. 
    All Day events should only have the date in YYYY-MM-DD
    format and if a start time is specified it needs to follow the 
    (T)HH:MM:SS(Z) format directly after the date

  end date -  same as start but it's the ending time

  title - self explanatory

  content - The details of the event (probably a super long string)

  shown - Whether this should be shown on the calendar or not (not currently 
    an option, but working on it)

  color - Whatever color you want the dot to be (not currently an option 
    but working on it)

  selectedColor - The color displayed on the calendar circle when a date 
    is selected. This should remain the default purple.
*****************************************************************************************************************************/
import { COLORS } from '../globals';

const EVENTS = [
  {
    key: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    startDate: '2020-10-13T12:00:00Z',
    endDate: '2020-10-13T01:00:00Z',
    allDay: false,
    title: 'Morgans Birthday Party',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    shown: true,
    color: 'blue',
    selectedColor: COLORS.MAIN
  },
  {
    key: '58694a0f-3da1-471f-bd96-145571e29d72',
    startDate: '2020-10-31T12:00:00Z',
    endDate: '2020-10-31T01:00:00Z',
    allDay: false,
    title: 'Halloween Party',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    shown: true,
    color: 'orange',
    selectedColor: COLORS.MAIN
  },
  {
    key: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', 
    startDate: '2020-11-13T12:00:00Z',
    endDate: '2020-11-13T13:00:00Z',
    allDay: false,
    title: 'Codys Birthday Party',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    shown: true,
    color: 'teal',
    selectedColor: COLORS.MAIN
  },
  {
    key: 'bd7acbea-c1b1-46c2-aed5-3ad53abc28ba',
    startDate: '2020-11-13',
    endDate: '2020-11-13',
    allDay: true,
    title: 'Birthday Vacation',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    shown: true,
    color: 'green',
    selectedColor: COLORS.MAIN
  },
  {
    key: '3ac68afc-c605-48d3-a4f8-abc91aa97f63', 
    startDate: '2020-11-26T12:00:00Z',
    endDate: '2020-11-26T01:00:00Z',
    allDay: false,
    title: 'Thanksgiving',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    shown: true,
    color: 'brown',
    selectedColor: COLORS.MAIN
  },
  {
    key: '3ac68afc-c605-48d3-a4f8-abc93aa97f63',
    startDate: '2020-11-26T12:00:00Z',
    endDate: '2020-11-26T13:00:00Z',
    allDay: true,
    title: 'Thanksgiving Vacation',
    content: 'No but for real this time its a one way ticket and youre not invited',
    shown: true,
    color: 'purple',
    selectedColor: COLORS.MAIN
  },
  {
    key: '58694a0f-3da1-471f-bd96-def571e30d72',
    startDate: '2020-11-27T12:00:00Z',
    endDate: '2020-11-27T01:00:00Z',
    allDay: false,
    title: 'Black Friday',
    content: 'Watch me punch this old guy for a tv',
    shown: true,
    color: 'black',
    selectedColor: COLORS.MAIN
  },
  {
    key: '58694a0f-3da1-471f-bd96-def571e29d75',
    startDate: '2020-11-27T12:00:00Z',
    endDate: '2020-11-27T01:00:00Z',
    allDay: true,
    title: 'BF Vacation',
    content: 'Still on vacation, still dont talk to me',
    shown: true,
    color: 'purple',
    selectedColor: COLORS.MAIN
  },
  {
    key: '58694a0f-3da1-471f-bd96-def571e29d72',
    startDate: '2020-11-27T12:00:00Z',
    endDate: '2020-11-27T01:00:00Z',
    allDay: false,
    title: 'BF Workout',
    content: 'Because I hate myself',
    shown: true,
    color: 'red',
    selectedColor: COLORS.MAIN
  },
  {
    key: 'bd7acbea-c1b1-46c2-aed5-4be53abb28ba',
    title: 'Christmas',
    startDate: '2020-12-25T12:00:00Z',
    endDate: '2020-12-25T13:00:00Z',
    allDay: false,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    shown: true,
    color: 'green',
    selectedColor: COLORS.MAIN
  },
  {
    key: 'bd7acbea-c1b1-46c2-aed5-4be5asdf28ba',
    startDate: '2020-12-25T00:00:00Z',
    endDate: '2020-12-25T23:59:59Z',
    title: 'Christmas Vacation',
    allDay: true,
    content: 'All I want for Christmas is you - Mariah',
    shown: true,
    color: 'purple',
    selectedColor: COLORS.MAIN
  },
]

export default EVENTS;