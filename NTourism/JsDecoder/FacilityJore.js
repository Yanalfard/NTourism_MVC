//---> int id
//---> string Name

{
    return Bjax('/api/FacilityCore/AddFacility', facility, 'LP');
}

{
    return Bjax('/api/FacilityCore/DeleteFacility?id=', id, 'SP');
}

{
    var facilityLogId = new Array();
    facilityLogId.push(facility);
    facilityLogId.push(logId);
    return Bjax('/api/FacilityCore/UpdateFacility', facilityLogId, 'LP');
}

{
    return Bjax('/api/FacilityCore/SelectAllFacilities', '', 'G');
}

{
    return Bjax('/api/FacilityCore/SelectFacilityById?id=', id, 'SP');
}

{
    return Bjax('/api/FacilityCore/SelectFacilityByName?name=', name, 'SP');
}
