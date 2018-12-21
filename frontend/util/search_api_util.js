export const searchBusinesses = (terms) => {
    return $.ajax({
        method: 'GET',
        url: 'api/search/businesses',
        data: { terms }
    });
};