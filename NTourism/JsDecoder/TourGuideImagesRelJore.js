//---> int id
//---> int TourGuideId
//---> int ImageId

{
    return Bjax('/api/TourGuideImagesRelCore/AddTourGuideImagesRel', tourGuideImagesRel, 'LP');
}

{
    return Bjax('/api/TourGuideImagesRelCore/DeleteTourGuideImagesRel?id=', id, 'SP');
}

{
    var tourGuideImagesRelLogId = new Array();
    tourGuideImagesRelLogId.push(tourGuideImagesRel);
    tourGuideImagesRelLogId.push(logId);
    return Bjax('/api/TourGuideImagesRelCore/UpdateTourGuideImagesRel', tourGuideImagesRelLogId, 'LP');
}

{
    return Bjax('/api/TourGuideImagesRelCore/SelectAllTourGuideImagesRels', '', 'G');
}

{
    return Bjax('/api/TourGuideImagesRelCore/SelectTourGuideImagesRelById?id=', id, 'SP');
}

{
    return Bjax('/api/TourGuideImagesRelCore/tourGuideId?tourGuideId=', tourGuideId, 'SP');
}

{
    return Bjax('/api/TourGuideImagesRelCore/imageId?imageId=', imageId, 'SP');
}
