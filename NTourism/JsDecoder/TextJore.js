//---> int id
//---> string Text
//---> string Rtf

{
    return Bjax('/api/TextCore/AddText', text, 'LP');
}

{
    return Bjax('/api/TextCore/DeleteText?id=', id, 'SP');
}

{
    var textLogId = new Array();
    textLogId.push(text);
    textLogId.push(logId);
    return Bjax('/api/TextCore/UpdateText', textLogId, 'LP');
}

{
    return Bjax('/api/TextCore/SelectAllTexts', '', 'G');
}

{
    return Bjax('/api/TextCore/SelectTextById?id=', id, 'SP');
}
