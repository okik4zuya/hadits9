import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import React, { useState } from "react";

export default function HaditsIndex() {

    const { hadits } = usePage().props;
    //   console.log(usePage().props)

    //define url params
    const q = window.location.search
    const urlParams = new URLSearchParams(q)

    //define state
    const [search, setSearch] = useState(urlParams.get('q'));

    const kitabList = [
        { label: "Shahih Bukhari", value: "bukhari" },
        { label: "Shahih Muslim", value: "muslim" },
        { label: "Muwatha' Malik", value: "malik" },
        { label: "Musnad Ahmad", value: "ahmad" },
        { label: "Sunan Tirmidzi", value: "tirmidzi" },
        { label: "Sunan Abu Daud", value: "abudaud" },
        { label: "Sunan Ibnu Majah", value: "ibnumajah" },
        { label: "Sunan Nasa'i", value: "nasai" },
        { label: "Sunan Darimi", value: "darimi" },
    ]

    const onSubmitSearch = (e) => {
        e.preventDefault()
        Inertia.visit(`/hadits/search?q=${search}`, {}, {
            preserveState: true
        })
    }
    return (
        <section className="section"style={{ color: "#445767" }}>
            <div className="container block">
                <h1 className="title block" >
                    {kitabList.filter(item => item.value === hadits.kitab)[0].label}
                </h1>
                <h2 className="subtitle block">
                    Nomor Hadits: {hadits.number}
                </h2>
                <div className="box">
                    <p className="subtitle block is-size-4 has-text-right" style={{ fontFamily: "'Scheherazade New', serif", lineHeight: "200%" }}>
                        {hadits.arabic}
                    </p>
                    <p className="subtitle block is-size-5">
                        {hadits.terjemah}
                    </p>
                </div>
            </div>

        </section>
    )
}