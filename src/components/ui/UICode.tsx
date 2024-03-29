import { CodeHighlightTabs } from '@mantine/code-highlight';
import { IconBrandTypescript } from '@tabler/icons-react';

export default function UICode({ children }: { children: React.ReactElement }) {
    const code = children.props.children;
    const lang = children.props.className;

    const tsIcon = <IconBrandTypescript size={18} />;

    if (!code?.toString()) {
        return <></>;
    }

        return (
            <div>
                <CodeHighlightTabs
                  code={[
                        { fileName: 'Demo.tsx', code, icon: tsIcon, language: 'tsx' },
                    ]}
                  lang={lang}
                />
            </div>

        );
}
