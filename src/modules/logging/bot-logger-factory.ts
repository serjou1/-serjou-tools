import { BotLogger } from "./classes/bot-logger";

export const createLogger = (...labels: string[]): BotLogger => {
    return new BotLogger(labels);
};