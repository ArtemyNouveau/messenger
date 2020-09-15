import openSocket from 'socket.io-client';

let io;

export default {
    init: (serverPath, token) => {
        /*
          extraHeaders: {},
            doesn't work
         */
        io = openSocket(serverPath, {
            transportOptions: {
                polling: {
                    extraHeaders: {
                        'Authorization': `Bearer ${token}`,
                    },
                },
            },
        });
        return io;
    },
    getIO: () => {
        if (!io) {
            throw new Error('Socket.io not initialized!');
        }
        return io;
    }
};
