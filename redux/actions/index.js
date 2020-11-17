export const date_filter = (date) => {
  return {
    type: 'DATE_FILTER',
    payload: date
  }
}

export const events_list = (obj) => {
  return {
    type: 'EVENTS_LIST',
    payload: obj
  }
}