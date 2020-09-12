//---> int id
//---> int RoomHomeId
//---> int CommentId

{
    return Bjax('/api/RoomHomeCommentsRelCore/AddRoomHomeCommentsRel', roomHomeCommentsRel, 'LP');
}

{
    return Bjax('/api/RoomHomeCommentsRelCore/DeleteRoomHomeCommentsRel?id=', id, 'SP');
}

{
    var roomHomeCommentsRelLogId = new Array();
    roomHomeCommentsRelLogId.push(roomHomeCommentsRel);
    roomHomeCommentsRelLogId.push(logId);
    return Bjax('/api/RoomHomeCommentsRelCore/UpdateRoomHomeCommentsRel', roomHomeCommentsRelLogId, 'LP');
}

{
    return Bjax('/api/RoomHomeCommentsRelCore/SelectAllRoomHomeCommentsRels', '', 'G');
}

{
    return Bjax('/api/RoomHomeCommentsRelCore/SelectRoomHomeCommentsRelById?id=', id, 'SP');
}

{
    return Bjax('/api/RoomHomeCommentsRelCore/roomHomeId?roomHomeId=', roomHomeId, 'SP');
}

{
    return Bjax('/api/RoomHomeCommentsRelCore/commentId?commentId=', commentId, 'SP');
}
