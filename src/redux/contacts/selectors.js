import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter, selectNumberFilter } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter, selectNumberFilter],
  (contacts, filter, number) => {
    if (contacts.length !== 0) {
      const nameContacts = contacts.filter(
        contact =>
          contact.name.includes(
            filter.charAt(0).toUpperCase() + filter.slice(1).toLowerCase()
          ) || contact.name.startsWith(filter.toLowerCase())
      );
      const numberContacts = contacts.filter(contact =>
        contact.number.startsWith(number)
      );
      if (number === '') {
        return nameContacts;
      } else {
        return numberContacts;
      }
    } else {
      return [];
    }
  }
);

export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
