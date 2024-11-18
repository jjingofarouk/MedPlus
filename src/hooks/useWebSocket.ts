// src/hooks/useWebSocket.ts

import { useEffect } from "react";

export const useWebSocket = (url, onMessage) => {
  useEffect(() => {
    const socket = new WebSocket(url);

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      onMessage(message);
    };

    socket.onerror = (error) => {
      console.error("WebSocket error: ", error);
    };

    socket.onclose = () => {
      console.log("WebSocket closed. Reconnecting...");
      // Automatically reconnect after 1 second
      setTimeout(() => useWebSocket(url, onMessage), 1000);
    };

    return () => {
      socket.close();
    };
  }, [url, onMessage]);
};
