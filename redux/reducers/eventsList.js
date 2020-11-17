import EVENTS from '../../API/index';
import Moment from 'moment';
import { COLORS } from '../../globals';

let eventsFormatted = {}

EVENTS.forEach(event => {
  let formattedStart = new Moment(event.startDate).format('YYYY-MM-DD')
  
  if(!(formattedStart in eventsFormatted)){
    eventsFormatted[formattedStart] = {
      marked: event.shown,
      dots: []
    }
  }

  eventsFormatted[formattedStart]['dots'].push({key: event.key, color: event.color, selectedColor: event.selectedColor})
});

console.log(eventsFormatted)

export const eventsListReducer = (state = eventsFormatted, action) => {
  switch(action.type){
    case 'SET_SELECTED':
      let prevDots = [];
      let newDots = [];

      if(action.payload.prevDate in state && 'dots' in state[action.payload.prevDate]){
        prevDots = state[action.payload.prevDate]['dots']
      }

      if(action.payload.newDate in state && 'dots' in state[action.payload.newDate]){
        newDots = state[action.payload.newDate]['dots']
      }

      const newState = {
        ...state, 
        ...{[action.payload.prevDate]: { 
            'selected' : false,
            'marked': true,
            'dots': prevDots
          }
        },
        ...{[action.payload.newDate]: {
          'selected' : true,
          'marked': true,
          'dots': newDots,
          'selectedColor': COLORS.MAIN
          }
        }
      }
      return newState
    default:
      return state;
  }
}