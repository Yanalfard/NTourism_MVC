//---> int id
//---> string Name
//---> string Logo

{
    return Bjax('/api/EquipmentCore/AddEquipment', equipment, 'LP');
}

{
    return Bjax('/api/EquipmentCore/DeleteEquipment?id=', id, 'SP');
}

{
    var equipmentLogId = new Array();
    equipmentLogId.push(equipment);
    equipmentLogId.push(logId);
    return Bjax('/api/EquipmentCore/UpdateEquipment', equipmentLogId, 'LP');
}

{
    return Bjax('/api/EquipmentCore/SelectAllEquipments', '', 'G');
}

{
    return Bjax('/api/EquipmentCore/SelectEquipmentById?id=', id, 'SP');
}

{
    return Bjax('/api/EquipmentCore/SelectEquipmentByName?name=', name, 'SP');
}
