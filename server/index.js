let express = require("express");
let app = express();
var r = require('rethinkdb');
const PORT = 3001;

console.log("Starting and loading, this may take a while...");

var connection = null;
r.connect({ host: 'localhost', port: 28015 }, function (err, conn) {
    if (err) throw err;
    connection = conn;
});

app.get("/user/exists/:user", (req, res)=>{
    try {
        if(!req.params.user)return res.status(400).json({
            code: 400,
            message: "Bad request, missing params",
            type: "e_missing_params"
        });
    } catch (e) {
        if (!req.params.user) return res.status(400).json({
            code: 400,
            message: "Bad request, missing params",
            type: "e_missing_params"
        });
    }

    r.db("ester_os").table("users").filter(r.row("sysName").eq(req.params.user)).run(connection, (err, cursor) => {
        if(err){
            console.error(err);
            return res.status(500).json({
                code: 500,
                message: "Internal error happened (DB error)",
                type: "e_internal"
            });
        }
        cursor.toArray(function (err, result) {
            if (err){
                console.error(err);
                return res.status(500).json({
                    code: 500,
                    message: "Internal error happened (DB error at cursor)",
                    type: "e_internal"
                });
            }
            res.status(200).json({
                code: 200,
                message: "Success, see response",
                exists: (result.length ? true : false),
                response: result[0],
                type: "user_data"
            })
        });
    })
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