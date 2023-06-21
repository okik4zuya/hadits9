import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import QuranLayout from "./Layout";

export default function QuranIndex() {

    const { ayat_content: ayat } = usePage().props;
    const [selectedTafsir, setSelectedTafsir] = useState("tafsir-jalalayn")

    const tafsirList = [
        { label: "Tafsir Jalalain", value: "tafsir-jalalayn" },
        { label: "Tafsir Ibnu Katsir", value: "tafsir-ibnu-katsir" },
        { label: "Tafsir Ringkas Kemenag", value: "tafsir-ringkas-kemenag" },
        { label: "Tafsir Lengkap Kemenag", value: "tafsir-lengkap-kemenag" },
        // { label: "Tafsir Al-Baghawi", value: "tafsir-albaghawi" },
        // { label: "Tafsir Al-Munir", value: "tafsir-almunir" },
        // { label: "Tafsir Al-Jazairy", value: "tafsir-aljazairy" },
        // { label: "Tafsir As-Saadi", value: "tafsir-assaadi" },
        // { label: "Tafsir As-Syarawi", value: "tafsir-assyarawi" },
        { label: "Tafsir Al-Azhar", value: "tafsir-alazhar" },
    ]
    const parsedTafsir = JSON.parse(ayat.tafsir)

    useEffect(() => {
        const tafsirContentEl = document.querySelector('.tafsir-content')
        tafsirContentEl.removeAttribute('hidden')
        console.log(tafsirContentEl)
    }, [selectedTafsir])


    return (
        <QuranLayout>

        <section className="section" style={{ color: "#445767" }}>
            <div className="container block">
                <h1 className="title block" >
                    QS. {ayat.surat}: {ayat.ayat}
                </h1>

                <div className="box block">
                    <p className="subtitle block is-size-4 has-text-right" style={{ fontFamily: "'Scheherazade New', serif", lineHeight: "200%" }}>
                        {ayat.arabic}
                    </p>
                    <p className="subtitle block is-size-5">
                        <em>{ayat.translate}</em>
                    </p>
                    <p className="subtitle block is-size-5">
                        {ayat.terjemah}
                    </p>
                </div>
                <div className="box block">
                    <h2 className="title block">Tafsir</h2>
                    <div className="select is-rounded block">
                        <select onChange={e => setSelectedTafsir(e.target.value)} value={selectedTafsir}>
                            {tafsirList.map((item, index) => (
                                <option key={index} value={item.value}>{item.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="block" dangerouslySetInnerHTML={{ __html: parsedTafsir.filter(item => item.tafsirName === selectedTafsir)[0].tafsirContent }}>
                    </div>
                </div>
            </div>

        </section>
        </QuranLayout>
    )
}