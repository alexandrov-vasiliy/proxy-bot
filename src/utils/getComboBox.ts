import { ComboboxItem } from '@mantine/core';

export interface IGetComboBoxItemsParams<T> {
    data: T[]
    valueKey: keyof T
    labelKey: keyof T
}

export default function getComboBoxItems<T>(
    {
        data,
        labelKey,
        valueKey,
    }: IGetComboBoxItemsParams<T>): ComboboxItem[] {
    return data.map((item) => ({
        value: item[valueKey],
        label: item[labelKey],
    } as ComboboxItem));
}
