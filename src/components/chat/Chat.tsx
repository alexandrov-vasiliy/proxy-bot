
import {getModels} from "@/actions/getModels";
import {Box, Select, Stack, Textarea} from "@mantine/core";
import getComboBox from "@/utils/getComboBox";
import MessagesList from "@/components/chat/MessagesList";
import {MOCK_MESSAGES} from "@/mock/messages";


export default async function Chat() {
    const response = await getModels()
    const modelsSelect = getComboBox({
        data: response.data,
        labelKey: 'id',
        valueKey: 'id'
    })

    return (
        <Stack>
            <Box mr={"auto"}>

                <Select label="Модель" data={modelsSelect}></Select>
            </Box>
            <MessagesList messages={MOCK_MESSAGES}/>
            <Textarea  label="" placeholder="Сообщение" />
        </Stack>
    )
}
