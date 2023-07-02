import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import WebLayout from "../../Layouts/Web";

export default function HaditsIndex() {

    const { results } = usePage().props;

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
        <WebLayout>

        <section className="section"style={{ color: "#445767" }}>
            <div className="container block">
                <h1 className="title">
                    Hadits 9 Imam
                </h1>
                <p className="subtitle">
                    Cari dengan kata Bahasa Arab atau Indonesia. <br/>
                Pencarian Bahasa Arab tanpa harakat, ا,أ,إ mempengaruhi pencarian.
                </p>
            </div>
            <form onSubmit={onSubmitSearch} className="box column is-6">
                <div className="field">
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="Contoh: نية atau niat, lalu klik ENTER"
                            value={search}
                            onChange={e => setSearch(e.target.value)}

                        />
                    </div>
                </div>
                <button type="submit" className="button is-primary">Cari</button>
            </form>
            {results.length !== 0 ?
                <div className="box">
                    <div className="block">Hasil pencarian untuk "{urlParams.get('q')}" <strong>({results.length} hasil)</strong></div>
                    <table className="table is-striped" style={{ width: "100%" }}>
                        <thead>
                            <tr>
                                <th style={{ width: "25%" }}>Kitab</th>
                                <th>Nomor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {kitabList.map((kitab, index) => (
                                <>
                                    {results.filter(item => item.kitab === kitab.value).length !== 0 &&
                                        <tr>
                                            <td>{kitab.label}</td>
                                            <td>
                                                <div className="is-flex is-flex-flex-wrap" style={{ display: "flex", flexWrap: "wrap" }}>

                                                    {results.filter(item => item.kitab === kitab.value).map((item, index) => (
                                                        <a href={`/hadits/${item.kitab}/${item.number}`} className="ml-2 mr-2" style={{ lineHeight:"200%" }}>{item.number}</a>
                                                    ))}
                                                </div>
                                            </td>
                                        </tr>
                                    }
                                </>
                            ))}
                        </tbody>
                    </table>

                </div>
                :
                urlParams.get('q') !== null ?
                <div>Hasil tidak ditemukan.</div>
                :null
            }
        </section>
        </WebLayout>
    )
}