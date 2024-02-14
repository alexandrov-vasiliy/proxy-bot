import {IChatMessage} from "@/lib/types";
import {Box} from "@mantine/core";
import {IconBrandOpenai, IconUser} from "@tabler/icons-react";
import Markdown from "markdown-to-jsx";
import UICode from "@/components/ui/UICode";

export default function MessageItem({message}: { message: IChatMessage }) {
    const markdownOptions = {
        overrides: {
            pre: {
                component: UICode,

            },
        },
    }

    return (
        <Box px={"xl"}>
            {message.role === 'user' ? <IconUser /> : <IconBrandOpenai />}
            <Box>
                <Markdown options={markdownOptions}>{message.content}</Markdown>
            </Box>
        </Box>
    )
}
