'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IChatMessage } from '@/lib/types';

export interface ChatState {
    messages: IChatMessage[]
}

const initialState: ChatState = {
    messages: [],
};

/*
export const sendMessageToServer = createAsyncThunk(
    'chat/sendMessage',
    async (message: IChatMessage, thunkAPI) => {
        thunkAPI.dispatch(addMessage(message));

        const state = thunkAPI.getState() as RootState;
        const { messages } = state.chat;
       const res = await sendMessage({
            model: 'gpt-3.5-turbo',
            messages,
        });
        const chatMessage = res?.choices[0]?.message;
        thunkAPI.dispatch(addMessage(chatMessage || {}));

        console.log('response from server', res);
    }
);
*/

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<IChatMessage>) => {
            state.messages.push(action.payload);

            console.log('add message', state.messages);
        },
    },

});

export const { addMessage } = chatSlice.actions;
