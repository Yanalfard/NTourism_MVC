//---> int id
//---> string Name
//---> string Email
//---> int ReciverId
//---> string Title
//---> string Text
//---> string DateSended

{
    return Bjax('/api/TicketCore/AddTicket', ticket, 'LP');
}

{
    return Bjax('/api/TicketCore/DeleteTicket?id=', id, 'SP');
}

{
    var ticketLogId = new Array();
    ticketLogId.push(ticket);
    ticketLogId.push(logId);
    return Bjax('/api/TicketCore/UpdateTicket', ticketLogId, 'LP');
}

{
    return Bjax('/api/TicketCore/SelectAllTickets', '', 'G');
}

{
    return Bjax('/api/TicketCore/SelectTicketById?id=', id, 'SP');
}

{
    return Bjax('/api/TicketCore/SelectTicketByName?name=', name, 'SP');
}

{
    return Bjax('/api/TicketCore/SelectTicketByEmail?email=', email, 'SP');
}

{
    return Bjax('/api/TicketCore/SelectTicketByReciverId?reciverId=', reciverId, 'SP');
}

{
    return Bjax('/api/TicketCore/SelectTicketByTitle?title=', title, 'SP');
}
