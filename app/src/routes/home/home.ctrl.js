"use strict";

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login");
    },
};

const users = {
    id: ["june", "나개발", "김팀장"],
    psword: ["1234", "12345", "123456"],
};

const process = {
    login: (req,res) => {
        const id = req.body.id,
            psword = req.body.psword;

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                return res.json({
                    succes: true,
                });
            }
        }

        return res.json ({
            succes: false,
            msg: "로그인을 실패했습니다.",
        });
    },
    
};

module.exports = {
    output,
    process,
};