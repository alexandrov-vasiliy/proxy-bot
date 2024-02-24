import { ActionIcon, Box, Textarea } from '@mantine/core';
import { Dispatch, SetStateAction } from 'react';
import { IconSend } from '@tabler/icons-react';
import { UseChatHelpers } from 'ai/react';
import classes from './ChatInput.module.css';
import { TAvailibleModels } from '@/lib/types';

interface IProps extends Pick<UseChatHelpers, 'input' | 'setInput'> {
    input: string
    isLoading: boolean
    onAction?: (data: FormData) => void
    onSubmit?: (value: string) => void
    children?: React.ReactNode
}

export default function ChatInput({ input, setInput, isLoading, onSubmit, children, onAction }: IProps) {
    return (
        <Box className={classes.border} right="25%" pos="fixed" bottom={0} bg="white" p={40} w="50%">

            <form
              action={onAction}
              onSubmit={async e => {
                    e.preventDefault();
                    if (!input?.trim()) {
                        return;
                    }
                    setInput('');
                    if (onSubmit) {
                        await onSubmit(input);
                    }
                }}
            >
                {children}

                <Textarea
                  mt="xs"
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                  name="message"
                  w="100%"
                  label=""
                  autosize
                  placeholder="Сообщение"
                  rightSection={
                        <ActionIcon
                          disabled={isLoading || input === ''}
                          type="submit"
                          variant="filled"
                          aria-label="Settings"
                        >
                            <IconSend style={{ width: '70%', height: '70%' }} stroke={1.5} />
                        </ActionIcon>
                    }
                />

            </form>
        </Box>
    );
}
