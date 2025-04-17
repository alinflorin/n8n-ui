import env from "@/env";
import mqtt from "mqtt";

class MqttService {
  private _client: mqtt.MqttClient | undefined;

  async connect(clean = true) {
    this._client = await mqtt.connectAsync({
      protocol: "wss",
      host: env.MQTT_HOST,
      port: env.MQTT_PORT,
      username: env.MQTT_USER,
      password: env.MQTT_PASSWORD, // ideally load this from a .env or secrets manager
      rejectUnauthorized: true, // depends if your cert is trusted by system
      clientId: "n8n-ui-" + Math.random().toString(16).substr(2, 8),
      clean,
      reconnectPeriod: 1000, // try reconnecting every 1s
    });
  }

  async subscribe(topic: string, qos: 0 | 1 | 2 = 2) {
    await this._client!.subscribeAsync(topic, {
      qos,
    });
  }

  async unsubscribe(topic: string) {
    await this._client!.unsubscribeAsync(topic);
  }

  consumeMessages(cb: <T extends object>(topic: string, payload: T | undefined, err: Error | undefined) => Promise<void>) {
    this._client!.on("message", (t, p) => {
        (async () => {
            try {
                const payload = JSON.parse(p.toString('utf-8'));
                await cb(t, payload, undefined);
            } catch (err: unknown) {
                const newError = new Error("MQTT Consumer Error");
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (newError as any).internalError = err;
                await cb(t, undefined, newError);
            }
        })();
    });
  }

  async publish<T extends object>(
    topic: string,
    message: T,
    qos: 0 | 1 | 2 = 2
  ) {
    await this._client!.publishAsync(topic, JSON.stringify(message), {
      qos: qos,
    });
  }

  async disconnect(force = false) {
    await this._client!.endAsync(force);
  }
}

export const mqttService = new MqttService();
export default mqttService;
