
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import WebLayout from "../../Layouts/Web";

export default function QuranIndex() {

    const { results } = usePage().props;
    console.log(results)
    const noSuratList = [...new Set(results.map(item=>item.no_surat))]
    const suratList = [...new Set(results.map(item=>({no_surat:item.no_surat, surat: item.surat})))]
    

    //define url params
    const q = window.location.search
    const urlParams = new URLSearchParams(q)

    //define state
    const [search, setSearch] = useState(urlParams.get('q'));

    const onSubmitSearch = (e) => {
        e.preventDefault()
        Inertia.visit(`/quran/search?q=${search}`, {}, {
            preserveState: true
        })
    }
    return (
        <WebLayout>

        <section className="section"style={{ color: "#445767" }}>
            <div className="container block">
                <h1 className="title">
                    Cari Ayat Al-Qur'an
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
                            placeholder="Contoh: كتب عليكم, lalu klik ENTER"
                            value={search}
                            onChange={e => setSearch(e.target.value)}

                        />
                    </div>
                </div>
                <button type="submit" className="button is-primary">Cari</button>
            </form>
            {results?.length !== 0 ?
                <div className="box">
                    <div className="block">Hasil pencarian untuk "{urlParams.get('q')}" <strong>({results?.length} hasil)</strong></div>
                    <table className="table is-striped" style={{ width: "100%" }}>
                        <thead>
                            <tr>
                                <th style={{ width: "40%" }}>Surat</th>
                                <th style={{ width: "60%" }}>Ayat</th>
                            </tr>
                        </thead>
                        <tbody>
                            {noSuratList.map((noSurat, index) => (
                                <>
                                    {results?.filter(item => item.no_surat === noSurat).length !== 0 &&
                                        <tr>
                                            <td>{suratList.filter(item=>item.no_surat === noSurat)[0].surat}</td>
                                            <td>
                                                <div className="is-flex is-flex-flex-wrap" style={{ display: "flex", flexWrap: "wrap" }}>

                                                    {results?.filter(item => item.no_surat === noSurat).map((item, index) => (
                                                        <a href={`/quran/${noSurat}/${item.ayat}`} className="ml-2 mr-2" style={{ lineHeight:"200%" }}>{item.ayat}</a>
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