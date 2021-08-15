import React, { useEffect, useState } from 'react';
import './style.css';


const Data = () => {

    const [users, setusers] = useState([]);
    const getUsers = async () => {
        const response = await fetch('https://reqres.in/api/users?page=1');

        const data = await response.json());
        console.log(data);
    }
    useEffect(() => {
        getUsers();
    }, [] )

    return (
        <>

            {/* {
                users.map((currEle) => {
                    return (

                        <div className="col-10 col-md-4 mt-5" key="">
                            <div className="card p-2">
                                <div className="d-flex align-items-center">
                                    <div className="image"> <img src="" className="rounded" width="155" /> </div>
                                    <div className="ml-3 w-100">
                                        <h4 className="mb-0 mt-0 textLeft">{ currEle.first_name}</h4>
                                        <span className="text-left">Webdeveloper</span>
                                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                            <div className="d-flex flex-column">
                                                <span className="articles">Articles</span> <span className="number1">38</span> </div>
                                            <div className="d-flex flex-column">
                                                <span className="followers">Followers</span> <span className="number2">980</span> </div>
                                            <div className="d-flex flex-column">
                                                <span className="rating">Rating</span> <span className="number3">8.9</span> </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            } */}
        </>
    )
}

export default Data;