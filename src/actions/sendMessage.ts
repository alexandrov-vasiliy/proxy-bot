"use server"

import {IChatMessage, TAvailibleModels} from "@/lib/types";

export interface ISendMessageParams {
    model: TAvailibleModels
    messages: IChatMessage[]
}
export async function sendMessage({}) {

}
