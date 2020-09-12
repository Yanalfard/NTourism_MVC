//---> int id
//---> string Name
//---> string MainImage
//---> int ClientId
//---> int CityId
//---> long PriceNormal
//---> long PriceWeekend
//---> int DaysOccupaid
//---> string OccupaidFrom
//---> string OccupaidTo
//---> bool IsReserved
//---> string Description
//---> bool IsSelected

{
    return Bjax('/api/RoomHomeCore/AddRoomHome', roomHome, 'LP');
}

{
    return Bjax('/api/RoomHomeCore/DeleteRoomHome?id=', id, 'SP');
}

{
    var roomHomeLogId = new Array();
    roomHomeLogId.push(roomHome);
    roomHomeLogId.push(logId);
    return Bjax('/api/RoomHomeCore/UpdateRoomHome', roomHomeLogId, 'LP');
}

{
    return Bjax('/api/RoomHomeCore/SelectAllRoomHomes', '', 'G');
}

{
    return Bjax('/api/RoomHomeCore/SelectRoomHomeById?id=', id, 'SP');
}

{
    return Bjax('/api/RoomHomeCore/SelectRoomHomeByName?name=', name, 'SP');
}

{
    return Bjax('/api/RoomHomeCore/SelectRoomHomeByClientId?clientId=', clientId, 'SP');
}

{
    return Bjax('/api/RoomHomeCore/SelectRoomHomeByCityId?cityId=', cityId, 'SP');
}

{
    return Bjax('/api/RoomHomeCore/SelectRoomHomeByIsReserved?isReserved=', isReserved, 'SP');
}

{
    return Bjax('/api/RoomHomeCore/SelectRoomHomeByIsSelected?isSelected=', isSelected, 'SP');
}

function SelectFacilitiesByRoomHome(roomHomeId)
{
    return Bjax('/api/RoomHomeCore/SelectFacilitiesByRoomHome?roomHomeId=', roomHomeId, 'SP');
}

function SelectImagesByRoomHome(roomHomeId)
{
    return Bjax('/api/RoomHomeCore/SelectImagesByRoomHome?roomHomeId=', roomHomeId, 'SP');
}

function SelectCommentsByRoomHome(roomHomeId)
{
    return Bjax('/api/RoomHomeCore/SelectCommentsByRoomHome?roomHomeId=', roomHomeId, 'SP');
}