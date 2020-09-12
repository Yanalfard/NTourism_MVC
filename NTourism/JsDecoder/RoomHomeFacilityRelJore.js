//---> int id
//---> int RoomHomeId
//---> int FacilityId

{
    return Bjax('/api/RoomHomeFacilityRelCore/AddRoomHomeFacilityRel', roomHomeFacilityRel, 'LP');
}

{
    return Bjax('/api/RoomHomeFacilityRelCore/DeleteRoomHomeFacilityRel?id=', id, 'SP');
}

{
    var roomHomeFacilityRelLogId = new Array();
    roomHomeFacilityRelLogId.push(roomHomeFacilityRel);
    roomHomeFacilityRelLogId.push(logId);
    return Bjax('/api/RoomHomeFacilityRelCore/UpdateRoomHomeFacilityRel', roomHomeFacilityRelLogId, 'LP');
}

{
    return Bjax('/api/RoomHomeFacilityRelCore/SelectAllRoomHomeFacilityRels', '', 'G');
}

{
    return Bjax('/api/RoomHomeFacilityRelCore/SelectRoomHomeFacilityRelById?id=', id, 'SP');
}

{
    return Bjax('/api/RoomHomeFacilityRelCore/SelectRoomHomeFacilityRelByRoomHomeId?roomHomeId=', roomHomeId, 'SP');
}

{
    return Bjax('/api/RoomHomeFacilityRelCore/SelectRoomHomeFacilityRelByFacilityId?facility=', facilityId, 'SP');
}
