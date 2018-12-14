
export const fetchAllBusinesses = () => {

    return $.ajax({
        method: "GET",
        url: `api/businesses`
    }); 
};

export const fetchBusiness = (id) => {

    return $.ajax({
        method: "GET",
        url: `api/businesses/${id}`
    });
};

export const createBusiness = (business) => {

    return $.ajax({
        method: "POST",
        url: `api/businesses`,
        data: { business }
    });
};

export const updateBusiness = (business) => {

    return $.ajax({
        method: "PATCH",
        url: `api/businesses/${business.id}`,
        data: { business }
    });
};
