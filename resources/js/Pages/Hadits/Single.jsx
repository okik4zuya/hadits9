import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import WebLayout from "../../Layouts/Web";

export default function HaditsIndex() {

    const { hadits } = usePage().props;
    //   console.log(usePage().props)
    //console.log(hadits)

    //define url params
    const q = window.location.search
    const urlParams = new URLSearchParams(q)

    //define state
    const [search, setSearch] = useState(urlParams.get('q'));
    const [kitab, setKitab] = useState(hadits.kitab)
    const [number, setNumber] = useState(hadits.number)

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
    //console.log({kitab,number})

    const onSubmitSearch = (e) => {
        e.preventDefault()
        Inertia.visit(`/hadits/search?q=${search}`, {}, {
            preserveState: true
        })
    }
    const goToHadits = (e) => {
        e.preventDefault()
        Inertia.visit(`/hadits/${kitab}/${number}`, {}, {
            preserveState: true
        })
    }
    return (
        <WebLayout>


            <section className="section" style={{ color: "#445767" }}>
                <div className="container block">
                    <h1 className="title block" >
                        {kitabList.filter(item => item.value === hadits.kitab)[0].label}
                    </h1>
                    <div className="block">
                        <h2 className="subtitle" >
                            Nomor Hadits: {hadits.number}
                        </h2>
                    </div>
                    <div className="hadits__jump columns is-justify-content-center is-align-items-center">
                        <div className="has-text-center is-12">Lompat ke Hadits:</div>
                        <form onSubmit={goToHadits} className="columns is-justify-content-center is-mobile is-align-items-center">
                            <div class="select">
                                <select defaultValue={kitab} value={kitab} onChange={e => setKitab(e.target.value)}>
                                    {kitabList.map((kitab, index) => (
                                        <option value={kitab.value}>{kitab.label}</option>
                                    ))}
                                </select>
                            </div>
                            <input
                                className="input column is-3 ml-2 mr-2"
                                placeholder="Nomor"
                                value={number}
                                onChange={e => setNumber(e.target.value)}

                            />
                            <button onClick={goToHadits} className="button is-primary column is-flex is-2">Go</button>
                        </form>
                    </div>

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
        </WebLayout>
    )
}