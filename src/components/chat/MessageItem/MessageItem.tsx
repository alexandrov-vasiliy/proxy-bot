import { Box, Code, Flex } from '@mantine/core';
import { IconBrandOpenai, IconUser } from '@tabler/icons-react';

import { Message } from 'ai';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import classes from './MessageItem.module.css';
import { MemoizedReactMarkdown } from '@/components/shared/MemoMarkdown';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { IChatMessage } from '@/lib/types';

export default function MessageItem({ message }: { message: IChatMessage | Message }) {
    if (!message?.content) return <></>;
    return (
        <Box px="xl">
            <Flex w="100%">
              <Box mr="xl">  {message.role === 'user' ? <IconUser size={30} /> : <IconBrandOpenai size={30} />}</Box>
                <Box className={classes.message}>

                    <MemoizedReactMarkdown
                      className="prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0"
                      remarkPlugins={[remarkGfm, remarkMath]}
                      components={{
                            p({ children }) {
                                return <p className="mb-2 last:mb-0">{children}</p>;
                            },
                            code({ node, inline, className, children, ...props }) {
                                console.log(props);

                                const match = /language-(\w+)/.exec(className || '');
                                if (inline) {
                                    return <Code>{children}</Code>;
                                }

                                return (
                                    <CodeBlock
                                      key={Math.random()}
                                      language={(match && match[1]) || ''}
                                      value={String(children).replace(/\n$/, '')}
                                      {...props}
                                    />
                                );
                            },
                        }}
                    >
                        {message.content}
                    </MemoizedReactMarkdown>
                </Box>
            </Flex>
        </Box>
    );
}
