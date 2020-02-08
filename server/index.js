let express = require("express");
let app = express();
const PORT = 3001;

console.log("Starting and loading, this may take a while...");


app.get("/user/exists/:user", (req, res)=>{
    res.json({
        code: 200,
        message: "User exists",
        user: true,
        avatar: "https://api.adorable.io/avatars/285/" + req.params.user,
        type: "user_exists"
    });
});

app.use((req, res, next)=>{
    res.status(404).json({
        code: 404,
        message: "Cannot find requested resource",
        type: "e_resource_not_found"
    })
})

app.use((err, req, res, next)=>{
    console.error(err.stack)
    res.status(500).json({
        code: 500,
        message: "Internal server error",
        type: "e_internal"
    });
})


app.listen(PORT, ()=>{
    console.log("Started Ester OS server");
})