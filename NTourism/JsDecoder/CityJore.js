//---> int id
//---> string Name
//---> int CountryId

    return Bjax('/api/CityCore/AddCity', city, 'LP');
}

    return Bjax('/api/CityCore/DeleteCity?id=', id, 'SP');
}

    var cityLogId = new Array();
    cityLogId.push(city);
    cityLogId.push(logId);
    return Bjax('/api/CityCore/UpdateCity', cityLogId, 'LP');
}

    return Bjax('/api/CityCore/SelectAllCities', '', 'G');
}

    return Bjax('/api/CityCore/SelectCityById?id=', id, 'SP');
}

    return Bjax('/api/CityCore/SelectCityByName?name=', name, 'SP');
}

    return Bjax('/api/CityCore/SelectCityByCountryId?countryId=', countryId, 'SP');
}