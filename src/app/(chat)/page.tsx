import Chat from '@/components/chat/Chat/Chat';
import { nanoid } from '@/utils/nanoid';

export default function Home() {
    const id = nanoid();

    return (
        <Chat id={id} />
    );
}
