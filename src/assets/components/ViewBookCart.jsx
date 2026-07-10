import React, { useState } from 'react'
import Navigationbar from './Navigationbar'

const ViewBookCart = () => {

    const [data, changeData] = useState([
        { "name": "hallo", "author": "jk", "edition": 4, "avathar": "https://img.magnific.com/free-vector/book-floating-cartoon-vector-icon-illustration-education-object-icon-isolated-flat-vector_138676-13661.jpg?semt=ais_hybrid&w=740&q=80" },
        { "name": "mind", "author": "v", "edition": 2, "avathar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUeZEwwAJCs_qdUrnM7FEIMy9H-1G1opXLp9NUcw2MGD_4_7uBHtsSAOw&s=10" },
        { "name": "gfh", "author": "jkl", "edition": 1, "avathar": "https://m.media-amazon.com/images/I/71w19t8u-IL._AC_UF350,350_QL80_.jpg" },
        { "name": "jhg", "author": "sdf", "edition": 3, "avathar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM_vdk7jlvLgTjl5vfRfspFC0QxOtl2BJLVpHwWIC_CcVKL06GJqv_Jq4&s=10" },
        { "name": "njh", "author": "weer", "edition": 5, "avathar": "https://5.imimg.com/data5/SELLER/Default/2021/5/MV/RW/IM/3726307/world-famous-literature-all-time-great-classics-16-different-books-500x500.jpg" },
        { "name": "njhm", "author": "uio", "edition": 6, "avathar": "https://i.pinimg.com/474x/0d/f9/0f/0df90fb803aff4d8e757046305791b6a.jpg" }
    ])

    return (
        <div>
            <Navigationbar />

            <div className="container mt-4">
                <div className="row g-3">

                    {
                        data.map((value, index) => {
                            return (
                                <div
                                    className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4"
                                    key={index}
                                >
                                    <div className="card h-100">

                                        <img
                                            src={value.avathar}
                                            className="card-img-top"
                                            alt={value.name}
                                        />

                                        <div className="card-body">
                                            <h5 className="card-title">
                                                {value.name}
                                            </h5>
                                        </div>

                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                Author : {value.author}
                                            </li>

                                            <li className="list-group-item">
                                                Edition : {value.edition}
                                            </li>

                                            <li className="list-group-item text-center">
                                                <button className="btn btn-success">
                                                    ADD TO CART
                                                </button>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

        </div>
    )
}

export default ViewBookCart