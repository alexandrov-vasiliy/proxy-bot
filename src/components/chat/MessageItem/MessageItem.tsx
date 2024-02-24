import { Box, Flex } from '@mantine/core';
import { IconBrandOpenai, IconUser } from '@tabler/icons-react';

import { Message } from 'ai';
import classes from './MessageItem.module.css';

import { IChatMessage } from '@/lib/types';
import AppMarkdown from '@/components/shared/AppMarkdown';

export default function MessageItem({ message }: { message: IChatMessage | Message }) {
    if (!message?.content) return <></>;
    return (
        <Box px="xl">
            <Flex w="100%">
                <Box mr="xl">  {message.role === 'user' ? <IconUser size={30} /> : <IconBrandOpenai size={30} />}</Box>
                <Box className={classes.message}>

                    {
                        typeof message.content === 'string' ? <AppMarkdown content={message.content} /> : ''
                    }
                </Box>
            </Flex>
        </Box>
    );
}
