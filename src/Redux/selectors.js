// import { createSelector } from '@reduxjs/toolkit';

export const selectTasks = state => state.contacts.items;

export const selectStatusFilter = state => state.filters;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

//

export const selectSingup = state => state.users;

//

export const selectIsLoggedIn = state => state.contacts.isLoggedIn;

export const selectUser = state => state.contacts.user;

export const selectIsRefreshing = state => state.contacts.isRefreshing;
