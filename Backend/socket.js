const socketIo=require('socket.io');
const userModel=require("./models/user.model");
const captainModel=require("./models/captain.model");

let io;

const initializeSocket=(server)=>{
io=socketIo(server,{
    cors:{
        origin:'*',
        methods:['GET','POST']
    }
});
io.on('connection',(socket)=>{
console.log(`Client Connected:${socket.id}`);
socket.on('join', async (data) => {
    if (!data || !data.userId || !data.userType) {
        console.log("Invalid data received for 'join' event:", data);
        return;
    }
    
    const { userId, userType } = data;
    
    if (userType === 'user') {
        await userModel.findByIdAndUpdate(userId, { socketId: socket.id });
    } else if (userType === 'captain') {
        await captainModel.findByIdAndUpdate(userId, { socketId: socket.id });
    }
});


socket.on('update-location-captain',async(data)=>{
    const{userId,location}=data;

    if(!location||!location.ltd||!location.lng){
        return socket.emit('error',{message:'Invalid location'})
    }
    await captainModel.findByIdAndUpdate(userId,{location:{
        ltd:location.ltd,
        lng:location.lng
    }
})
})

socket.on('disconnect',()=>{
    console.log(`Client disconnected: ${socket.id}`);
})
})
}

const sendMessageToSocketId = (socketId, messageObject) => {

    console.log(messageObject);
    
        if (io) {
            io.to(socketId).emit(messageObject.event,messageObject.data);
        } else {
            console.log('Socket.io not initialized.');
        }
    }
module.exports = {initializeSocket,sendMessageToSocketId}; 
