//---> int id
//---> int RoomHomeId
//---> int ImageId

{
    return Bjax('/api/RoomHomeImageRelCore/AddRoomHomeImageRel', roomHomeImageRel, 'LP');
}

{
    return Bjax('/api/RoomHomeImageRelCore/DeleteRoomHomeImageRel?id=', id, 'SP');
}

{
    var roomHomeImageRelLogId = new Array();
    roomHomeImageRelLogId.push(roomHomeImageRel);
    roomHomeImageRelLogId.push(logId);
    return Bjax('/api/RoomHomeImageRelCore/UpdateRoomHomeImageRel', roomHomeImageRelLogId, 'LP');
}

{
    return Bjax('/api/RoomHomeImageRelCore/SelectAllRoomHomeImageRels', '', 'G');
}

{
    return Bjax('/api/RoomHomeImageRelCore/SelectRoomHomeImageRelById?id=', id, 'SP');
}

{
    return Bjax('/api/RoomHomeImageRelCore/roomHomeId?roomHomeId=', roomHomeId, 'SP');
}

{
    return Bjax('/api/RoomHomeImageRelCore/imageId?imageId=', imageId, 'SP');
}
