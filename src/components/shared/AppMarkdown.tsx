import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import { Code, Table, TableTbody, TableTd, TableTh, TableThead, TableTr } from '@mantine/core';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { MemoizedReactMarkdown } from '@/components/shared/MemoMarkdown';

export default function AppMarkdown({ content }: { content: string }) {
    return (
        <MemoizedReactMarkdown
          className="prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0"
          remarkPlugins={[remarkGfm, remarkMath]}
          components={{
                p({ children }) {
                    return <p className="mb-2 last:mb-0">{children}</p>;
                },
                table({ children }) {
                    return <Table>{children}</Table>;
                },
                thead({ children }) {
                    return <TableThead>{children}</TableThead>;
                },
                tbody({ children }) {
                    return <TableTbody>{children}</TableTbody>;
                },
                tr({ children }) {
                    return <TableTr>{children}</TableTr>;
                },
                td({ children }) {
                    return <TableTd>{children}</TableTd>;
                },
                th({ children }) {
                    return <TableTh>{children}</TableTh>;
                },
                code({ node, inline, className, children, ...props }) {
                    if (children.length) {
                        if (children[0] == '▍') {
                            return (
                                <span className="mt-1 cursor-default animate-pulse">▍</span>
                            );
                        }

                        children[0] = (children[0] as string).replace('`▍`', '▍');
                    }

                    if (inline) {
                        return <Code>{children}</Code>;
                    }
                    const match = /language-(\w+)/.exec(className || '');
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
            {content}
        </MemoizedReactMarkdown>
    );
}
