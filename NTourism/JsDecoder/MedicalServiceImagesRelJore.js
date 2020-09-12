//---> int id
//---> int MedicalServiceId
//---> int ImageId

{
    return Bjax('/api/MedicalServiceImagesRelCore/AddMedicalServiceImagesRel', medicalServiceImagesRel, 'LP');
}

{
    return Bjax('/api/MedicalServiceImagesRelCore/DeleteMedicalServiceImagesRel?id=', id, 'SP');
}

{
    var medicalServiceImagesRelLogId = new Array();
    medicalServiceImagesRelLogId.push(medicalServiceImagesRel);
    medicalServiceImagesRelLogId.push(logId);
    return Bjax('/api/MedicalServiceImagesRelCore/UpdateMedicalServiceImagesRel', medicalServiceImagesRelLogId, 'LP');
}

{
    return Bjax('/api/MedicalServiceImagesRelCore/SelectAllMedicalServiceImagesRels', '', 'G');
}

{
    return Bjax('/api/MedicalServiceImagesRelCore/SelectMedicalServiceImagesRelById?id=', id, 'SP');
}

{
    return Bjax('/api/MedicalServiceImagesRelCore/medicalServiceId?medicalServiceId=', medicalServiceId, 'SP');
}

{
    return Bjax('/api/MedicalServiceImagesRelCore/imageId?imageId=', imageId, 'SP');
}
