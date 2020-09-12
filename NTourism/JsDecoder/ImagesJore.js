//---> int id
//---> string Image
//---> string Name

{
    return Bjax('/api/ImagesCore/AddImage', images, 'LP');
}

{
    return Bjax('/api/ImagesCore/DeleteImage?id=', id, 'SP');
}

{
    var imagesLogId = new Array();
    imagesLogId.push(images);
    imagesLogId.push(logId);
    return Bjax('/api/ImagesCore/UpdateImage', imagesLogId, 'LP');
}

{
    return Bjax('/api/ImagesCore/SelectAllImages', '', 'G');
}

{
    return Bjax('/api/ImagesCore/SelectImageById?id=', id, 'SP');
}

{
    return Bjax('/api/ImagesCore/SelectImagesByImage?image=', image, 'SP');
}

{
    return Bjax('/api/ImagesCore/SelectImagesByName?name=', name, 'SP');
}
