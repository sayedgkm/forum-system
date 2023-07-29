const createRegistration = (req, resp)=> {
    console.log(req.body);
    resp.json(req.body);
};

const login = (req, resp)=> {
    console.log(req.body);
    resp.json(req.body);
};

const getCurrentUser = (req, resp) => {
    resp.status(200).json({
        "name": "John Doe",
        "email": "testEmail@gmail.com"
    });
}

module.exports = { createRegistration, login, getCurrentUser };