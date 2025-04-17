// eslint-disable-next-line @typescript-eslint/no-explicit-any
const w: any = window;
if (!w.env) {
    w.env = {};
}
export const env = {
    MQTT_USER: (import.meta.env.VITE_MQTT_USER || w.env.MQTT_USER) as string,
    MQTT_PASSWORD: (import.meta.env.VITE_MQTT_PASSWORD || w.env.MQTT_PASSWORD) as string,
    VERSION: (import.meta.env.VITE_VERSION || w.env.VERSION) as string,
    API: window.location.href.includes("n8n.internal.huna2.com") ? '/webhook' : `https://n8n.internal.huna2.com/webhook`,
    AUTH_USER: (import.meta.env.VITE_AUTH_USER|| w.env.AUTH_USER) as string,
    AUTH_PASSWORD: (import.meta.env.VITE_AUTH_PASSWORD || w.env.AUTH_PASSWORD) as string,
};

export default env;