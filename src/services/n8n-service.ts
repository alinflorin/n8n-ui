import env from "@/env";
import { Email } from "@/models/email";
import { Recipient } from "@/models/recipient";
import axios from "axios";

export const n8nService = {
    getAllEmails: async () => {
        return (await axios.get<Recipient[]>(env.API + "/api/ai-office/get-all-emails")).data;
    },
    getInbox: async (email: string) => {
        return (await axios.get<Email[]>(env.API + "/api/ai-office/get-inbox?email=" + encodeURIComponent(email))).data;
    },
    getLog: async () => {
        return (await axios.get<Email[]>(env.API + "/api/ai-office/get-log")).data;
    }
};

export default n8nService;