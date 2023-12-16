
import io from "socket.io-client";
import { SocketUrl } from "./appRoutes";

export class SocketClient {
    constructor() {
        this.socket = io(SocketUrl, {
            transports: ["websocket", "polling", "flashsocket", "xhr-polling", "jsonp-polling", "stream"],
        });
    }
    getSocket() {
        return this.socket;
    }
    /**
     * Emits an event with the given data.
     *
     * @param {string} event - The name of the event to emit.
     * @param {any} data - The data to send along with the event.
     * @return {void} This function does not return a value.
     */
    emit(event, data) {
        this.socket.emit(event, data);
    }
    /**
     * Registers a callback function to be executed when the specified event occurs.
     *
     * @param {string} event - The name of the event to listen for.
     * @param {function} callback - The callback function to be executed when the event occurs.
     * @return {undefined} This function does not return a value.
     */
    on(event, callback) {
        this.socket.on(event, callback);
    }
    off(event, callback) {
        this.socket.off(event, callback);
    }
    onAny() {
        this.socket.onAny(...arguments);
    }
    offAny() {
        this.socket.offAny(...arguments);
    }

}
