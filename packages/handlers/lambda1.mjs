import {log} from "../services/common/common.mjs"

export const handler = async (event, context) => {
    log()
    return 'lambda-1 message';
};