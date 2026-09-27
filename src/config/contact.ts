export const DEMO_URL = "https://demo-showroom.github.io/docs/";
export const TELEGRAM_CHAT_ID = "727897797";

// GitHub Pages has no backend; this demo therefore calls Telegram from the browser.
// The bot token is visible in the compiled public JavaScript.
export const TELEGRAM_BOT_TOKEN = "8657484683:AAFM5SzJc0CE3aCwl2OqEXzRa_OyKVYci-I";
export const TELEGRAM_SEND_MESSAGE_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;