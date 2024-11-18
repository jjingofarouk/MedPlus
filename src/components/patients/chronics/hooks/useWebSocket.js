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
      setTimeout(() => {
        // Create a new WebSocket connection
        const newSocket = new WebSocket(url);
        
        // Assign the same onMessage handler to the new socket
        newSocket.onmessage = (event) => {
          const message = JSON.parse(event.data);
          onMessage(message);
        };
        
        newSocket.onerror = (error) => {
          console.error("WebSocket error: ", error);
        };

        // Clean up the new socket on component unmount
        return () => {
          newSocket.close();
        };
      }, 1000);
    };

    // Cleanup on component unmount
    return () => {
      socket.close();
    };
  }, [url, onMessage]);
};
