'use client';

import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { chatSlice } from '@/store/slices/chat.slice';

export const createStore = () =>
    configureStore({
        reducer: {
            chat: chatSlice.reducer,
        },
    });

export type StoreType = ReturnType<typeof createStore>;
export type RootState = ReturnType<StoreType['getState']>;
export type AppDispatch = StoreType['dispatch'];

export const useChatStore = () => useSelector((state: RootState) => state.chat.messages);
