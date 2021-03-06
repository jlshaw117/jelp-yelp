
export const signup = (user) => {

    return $.ajax({
        method: "POST",
        url: `api/users`,
        data: { 
            user: user
        }
    });
};

export const fetchUser = (id) => {

    return $.ajax({
        method: "GET",
        url: `api/users/${id}`
    });
};

export const login = (user) => {

    return $.ajax({
        method: "POST",
        url: `api/session`,
        data: {
            user: user
        }
    });
};

export const logout = () => {

    return $.ajax({
        method: "DELETE",
        url: `api/session`
    });
};