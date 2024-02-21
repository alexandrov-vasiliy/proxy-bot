import { ActionIcon, Box, Select, Textarea } from '@mantine/core';
import { Dispatch, SetStateAction } from 'react';
import { IconSend } from '@tabler/icons-react';
import { UseChatHelpers } from 'ai/react';
import classes from './ChatInput.module.css';
import { TAvailibleModels } from '@/lib/types';

interface IProps extends Pick<UseChatHelpers, 'input' | 'setInput'> {
    input: string
    onSubmit: (value: string) => void
    isLoading: boolean
    model: TAvailibleModels
    models: TAvailibleModels[]
    setModel: Dispatch<SetStateAction<TAvailibleModels>>
}

export default function ChatInput({ input, setInput, isLoading, onSubmit, model, setModel, models }: IProps) {
    return (
        <Box className={classes.border} right="25%" pos="fixed" bottom={0} bg="white" p={40} w="50%">

            <form onSubmit={async e => {
                e.preventDefault();
                if (!input?.trim()) {
                    return;
                }
                setInput('');
                await onSubmit(input);
            }}
            >
                <Select
                  maw={200}
                  allowDeselect={false}
                  data={models}
                  onChange={(val) => setModel(val as TAvailibleModels)}
                  value={model}
                />

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
            {/*<Radio.Group
                mt="xl"
                withAsterisk
                value={hotkey}
                onChange={setHotkey}
            >
                <Stack mt="xs">
                    <Radio value="shift+Enter" size={'xs'} label="shift+Enter для отпраки"/>
                    <Radio value="Enter"  size={'xs'} label="Enter для отправки"/>
                </Stack>
            </Radio.Group>*/}
        </Box>
    );
}
