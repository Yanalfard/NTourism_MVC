//---> int id
//---> string Title
//---> int CityId
//---> string MainImage
//---> int TextId
//---> int imageId
//---> string DatePosted

{
    return Bjax('/api/TripStoryCore/AddTripStory', tripStory, 'LP');
}

{
    return Bjax('/api/TripStoryCore/DeleteTripStory?id=', id, 'SP');
}

{
    var tripStoryLogId = new Array();
    tripStoryLogId.push(tripStory);
    tripStoryLogId.push(logId);
    return Bjax('/api/TripStoryCore/UpdateTripStory', tripStoryLogId, 'LP');
}

{
    return Bjax('/api/TripStoryCore/SelectAllTripStorys', '', 'G');
}

{
    return Bjax('/api/TripStoryCore/SelectTripStoryById?id=', id, 'SP');
}

{
    return Bjax('/api/TripStoryCore/SelectTripStoryByTitle?title=', title, 'SP');
}

{
    return Bjax('/api/TripStoryCore/SelectTripStoryByCityId?cityId=', cityId, 'SP');
}

{
    return Bjax('/api/TripStoryCore/SelectTripStoryByTextId?textId=', textId, 'SP');
}

{
    return Bjax('/api/TripStoryCore/SelectTripStoryByimageId?imageId=', imageId, 'SP');
}
