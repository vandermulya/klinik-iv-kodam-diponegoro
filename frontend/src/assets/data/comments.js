export const getCommentsData = async () => {
    return [{
            _id: "10",
            user: {
                _id: "a",
                name: "Anton Semesta",
            },
            desc: "Luar biasa!",
            post: "1",
            parent: null,
            replyOnUser: null,
            createdAt: "2022-12-31T17:22:05.092+0000",
        },
        {
            _id: "11",
            user: {
                _id: "b",
                name: "Dimas Bagaskara",
            },
            desc: "Matur sembah nuwun",
            post: "1",
            parent: "10",
            replyOnUser: "a",
            createdAt: "2022-12-31T17:22:05.092+0000",
        },
        {
            _id: "12",
            user: {
                _id: "b",
                name: "Wildan Dwinanda",
            },
            desc: "Sangat mengedukasi",
            post: "1",
            parent: null,
            replyOnUser: null,
            createdAt: "2022-12-31T17:22:05.092+0000",
        },
        {
            _id: "13",
            user: {
                _id: "c",
                name: "Dodit Wijaya",
            },
            desc: "Keren sekali!",
            post: "1",
            parent: null,
            replyOnUser: null,
            createdAt: "2022-12-31T17:22:05.092+0000",
        },
    ];
};