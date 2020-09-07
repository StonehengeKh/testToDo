import { createSelector } from 'reselect';

const selectTicketsReducer = (state) => state && state.ticketsReducer;

const selectTickets = createSelector(selectTicketsReducer, (reducer) => {
    return reducer && reducer.tickets;
});

export { selectTickets };