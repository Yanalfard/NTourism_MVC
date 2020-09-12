//---> int id
//---> string Image
//---> string Link

{
    return Bjax('/api/AdCore/AddAd', ad, 'LP');
}

{
    return Bjax('/api/AdCore/DeleteAd?id=', id, 'SP');
}

{
    var adLogId = new Array();
    adLogId.push(ad);
    adLogId.push(logId);
    return Bjax('/api/AdCore/UpdateAd', adLogId, 'LP');
}

{
    return Bjax('/api/AdCore/SelectAllAds', '', 'G');
}

{
    return Bjax('/api/AdCore/SelectAdById?id=', id, 'SP');
}

{
    return Bjax('/api/AdCore/SelectAdByImage?image=', image, 'SP');
}
