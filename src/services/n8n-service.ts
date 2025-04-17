import env from "@/env";
import { Recipient } from "@/models/recipient";
import axios from "axios";

export const n8nService = {
    getAllEmails: async () => {
        return (await axios.get<Recipient[]>(env.API + "/api/ai-office/get-all-emails")).data;
    }
};

export default n8nService;