import { createLogger } from "./bot-logger-factory";

const defaultLogger = createLogger();

const info = (message: string): void => {
    defaultLogger.info(message);
};

export { BotLogger } from './classes/bot-logger';
export {
    info,
    createLogger
};