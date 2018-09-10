var enpoklepedia;
(function (enpoklepedia) {
    var app;
    (function (app) {
        function InitDataSource(callback) {
            callback({
                GetAllPokemon: (callback) => {
                    fetch("./MockData/allPokemon.json", {
                        credentials: "same-origin"
                    }).then((res) => {
                        if (res.status === 200) {
                            return res.json();
                        } else {
                            throw new Error("An error occurred: ", res.status);
                        }
                    }).then((result) => {
                        callback(result);
                    });
                },
                GetPokemon: (_, callback) => {
                    fetch("./MockData/pokemon.json", {
                        credentials: "same-origin"
                    }).then((res) => {
                        if (res.status === 200) {
                            return res.json();
                        } else {
                            throw new Error("An error occurred: ", res.status);
                        }
                    }).then((result) => {
                        callback(result);
                    });
                },
            });
        }
        app.InitDataSource = InitDataSource;
    })(app = enpoklepedia.app || (enpoklepedia.app = {}));
})(enpoklepedia || (enpoklepedia = {}));