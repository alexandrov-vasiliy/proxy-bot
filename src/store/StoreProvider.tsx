'use client';

import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { createStore } from '@/store/store';

interface IProps {
    children: React.ReactNode
}

export default function StoreProvider({ children }: IProps) {
    const storeRef = useRef<ReturnType<typeof createStore> | null>(null);
    if (!storeRef.current) {
        storeRef.current = createStore();
    }

    return <Provider store={storeRef.current}>{children}</Provider>;
}
