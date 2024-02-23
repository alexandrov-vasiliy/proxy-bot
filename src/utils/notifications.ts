import { notifications } from '@mantine/notifications';

export interface IShowErrorParams {
    message: string
}
export function showError({ message }: IShowErrorParams) {
    notifications.show({
        title: 'Произошла ошибка',
        message,
        color: 'red',
    });
}
