//---> int id
//---> string Text
//---> int ClientId
//---> bool IsValid

{
    return Bjax('/api/CommentsCore/AddComments', comments, 'LP');
}

{
    return Bjax('/api/CommentsCore/DeleteComments?id=', id, 'SP');
}

{
    var commentsLogId = new Array();
    commentsLogId.push(comments);
    commentsLogId.push(logId);
    return Bjax('/api/CommentsCore/UpdateComments', commentsLogId, 'LP');
}

{
    return Bjax('/api/CommentsCore/SelectAllCommentss', '', 'G');
}

{
    return Bjax('/api/CommentsCore/SelectCommentsById?id=', id, 'SP');
}

{
    return Bjax('/api/CommentsCore/SelectCommentsByClientId?clientId=', clientId, 'SP');
}

{
    return Bjax('/api/CommentsCore/SelectCommentsByIsValid?isValid=', isValid, 'SP');
}
