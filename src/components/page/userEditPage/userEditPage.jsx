// import React, { useState } from "react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../../../api";
import TextField from "../../common/form/textField";

const UserEditPage = () => {
    const params = useParams();
    const { userId } = params;
    console.log("userId", userId);

    const [data, setData] = useState({
        name: "Олег",
        email: "oleg@mail.ru",
        sex: "M",
        profession: "Доктор",
        qualities: []
    });
    const { name, email, sex, profession, qualities } = data;

    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);
    console.log("user", user);

    const [users, setUsers] = useState();
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleUpdate = () => {
        console.log("handleUpdate data", data);
        console.log("users", users);
        const editedUser = users.findIndex((user) => user._id === userId);
        console.log("editedUser", editedUser);
        users[editedUser] = { ...users[editedUser], ...data };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    return (
        <>
            <h1>Редактирование пользователя</h1>
            <br />
            <div className="container mt-1" style={{ width: "500px" }}>
                <div className="row">
                    <div className="shadow p-4">
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label={"Имя"}
                                name="name"
                                value={name}
                                onChange={handleChange}
                            />
                            <TextField
                                label={"Email"}
                                name="email"
                                value={email}
                                onChange={handleChange}
                            />
                            <TextField
                                label={"Выбери свою профессию"}
                                name="profession"
                                value={profession}
                                onChange={handleChange}
                            />
                            <TextField
                                label={"Выбери свой пол"}
                                name="sex"
                                value={sex}
                                onChange={handleChange}
                            />
                            <TextField
                                label={"Выбери свои качества"}
                                name="qualities"
                                value={qualities}
                                onChange={handleChange}
                            />
                            <button
                                className="btn btn-danger"
                                onClick={handleUpdate}
                            >
                                Обновить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserEditPage;
