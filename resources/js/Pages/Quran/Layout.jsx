import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import React, { useState } from "react"
import Select from 'react-select';
import WebLayout from "../../Layouts/Web";

export default function QuranLayout({ children }) {
    const { ayat_content } = usePage().props
    const suratOptions = suratList.map(item => ({ value: item.no_surat, label: item.surat }))
    const ayatOptions = (noSurat) => {
        const arr = []
        for (let i = 1; i <= suratList[noSurat - 1].jumlah_ayat; i++) {
            arr.push({
                label: i,
                value: i
            })
        }
        return arr
    }

    const [surat, setSurat] = useState(suratOptions[ayat_content.no_surat - 1])
    const [ayat, setAyat] = useState(ayat_content.ayat)

    const handleSuratChange = (value) => {
        setSurat(value)

    }
    const handleAyatChange = (value) => {
        setAyat(value.value)
        Inertia.visit(`/quran/${surat.value}/${value.value}`, {
            preserveState: true
        })
    }
    return (
        <WebLayout>

                <div className="pl-2 pr-2"
                    style={{
                        position: "fixed",
                        top: "40px",
                        left: "0",
                        right: "0",
                        height: "70px",
                        background: "#fff",
                        zIndex: "10"
                    }}>

                    <nav className="navbar columns is-align-items-center is-justify-content-center is-mobile"
                        style={{ background: "#fff", height: "100%", zIndex: "1", marginTop: "0" }}
                    >

                        <Select
                            className="column is-8 is-mobile"
                            defaultValue={suratOptions[0]}
                            value={surat}
                            options={suratOptions}
                            isSearchable={true}
                            onChange={value => handleSuratChange(value)}
                        />
                        <Select
                            className="column is-4 is-mobile"
                            defaultValue={{ label: ayat, value: ayat }}
                            value={{ label: ayat, value: ayat }}
                            options={ayatOptions(surat.value)}
                            isSearchable={true}
                            onChange={value => handleAyatChange(value)}
                        />

                    </nav>
                </div>
                <div style={{ marginTop:"80px" }}>
                {children}
                </div>
        </WebLayout>
    )
}

const suratList = [
    {
        no_surat: "1",
        surat: "Al-Fatihah",
        jumlah_ayat: "7"
    },
    {
        no_surat: "2",
        surat: "Al-Baqarah",
        jumlah_ayat: "286"
    },
    {
        no_surat: "3",
        surat: "Ali-Imran",
        jumlah_ayat: "200"
    },
    {
        no_surat: "4",
        surat: "An-Nisa’",
        jumlah_ayat: "176"
    },
    {
        no_surat: "5",
        surat: "Al-Ma’idah",
        jumlah_ayat: "120"
    },
    {
        no_surat: "6",
        surat: "Al-An’am",
        jumlah_ayat: "165"
    },
    {
        no_surat: "7",
        surat: "Al-A’raf",
        jumlah_ayat: "206"
    },
    {
        no_surat: "8",
        surat: "Al-Anfal",
        jumlah_ayat: "75"
    },
    {
        no_surat: "9",
        surat: "At-Taubah",
        jumlah_ayat: "129"
    },
    {
        no_surat: "10",
        surat: "Yunus",
        jumlah_ayat: "109"
    },
    {
        no_surat: "11",
        surat: "Hud",
        jumlah_ayat: "123"
    },
    {
        no_surat: "12",
        surat: "Yusuf",
        jumlah_ayat: "111"
    },
    {
        no_surat: "13",
        surat: "Ar-Ra’d",
        jumlah_ayat: "43"
    },
    {
        no_surat: "14",
        surat: "Ibrahim",
        jumlah_ayat: "52"
    },
    {
        no_surat: "15",
        surat: "Al-Hijr",
        jumlah_ayat: "99"
    },
    {
        no_surat: "16",
        surat: "An-Nahl",
        jumlah_ayat: "128"
    },
    {
        no_surat: "17",
        surat: "Al-Isra’",
        jumlah_ayat: "111"
    },
    {
        no_surat: "18",
        surat: "Al-Kahfi",
        jumlah_ayat: "110"
    },
    {
        no_surat: "19",
        surat: "Maryam",
        jumlah_ayat: "98"
    },
    {
        no_surat: "20",
        surat: "Taha",
        jumlah_ayat: "135"
    },
    {
        no_surat: "21",
        surat: "Al-Anbiya’",
        jumlah_ayat: "112"
    },
    {
        no_surat: "22",
        surat: "Al-Hajj",
        jumlah_ayat: "78"
    },
    {
        no_surat: "23",
        surat: "Al-Mu’minun",
        jumlah_ayat: "118"
    },
    {
        no_surat: "24",
        surat: "An-Nur",
        jumlah_ayat: "64"
    },
    {
        no_surat: "25",
        surat: "Al-Furqan",
        jumlah_ayat: "77"
    },
    {
        no_surat: "26",
        surat: "Ash-Shu’ara’",
        jumlah_ayat: "227"
    },
    {
        no_surat: "27",
        surat: "An-Naml",
        jumlah_ayat: "93"
    },
    {
        no_surat: "28",
        surat: "Al-Qasas",
        jumlah_ayat: "88"
    },
    {
        no_surat: "29",
        surat: "Al-Ankabut",
        jumlah_ayat: "69"
    },
    {
        no_surat: "30",
        surat: "Ar-Rum",
        jumlah_ayat: "60"
    },
    {
        no_surat: "31",
        surat: "Luqman",
        jumlah_ayat: "34"
    },
    {
        no_surat: "32",
        surat: "As-Sajdah",
        jumlah_ayat: "30"
    },
    {
        no_surat: "33",
        surat: "Al-Ahzab",
        jumlah_ayat: "73"
    },
    {
        no_surat: "34",
        surat: "Al-Saba’",
        jumlah_ayat: "54"
    },
    {
        no_surat: "35",
        surat: "Al-Fatir",
        jumlah_ayat: "45"
    },
    {
        no_surat: "36",
        surat: "Yasin",
        jumlah_ayat: "83"
    },
    {
        no_surat: "37",
        surat: "As-Saffat",
        jumlah_ayat: "182"
    },
    {
        no_surat: "38",
        surat: "Sad",
        jumlah_ayat: "88"
    },
    {
        no_surat: "39",
        surat: "Az-Zumar",
        jumlah_ayat: "75"
    },
    {
        no_surat: "40",
        surat: "Al-Mu’min",
        jumlah_ayat: "85"
    },
    {
        no_surat: "41",
        surat: "Fussilat",
        jumlah_ayat: "54"
    },
    {
        no_surat: "42",
        surat: "Ash-Shura",
        jumlah_ayat: "53"
    },
    {
        no_surat: "43",
        surat: "Az-Zukhruf",
        jumlah_ayat: "89"
    },
    {
        no_surat: "44",
        surat: "Ad-Dukhan",
        jumlah_ayat: "59"
    },
    {
        no_surat: "45",
        surat: "Al-Jatsiyah",
        jumlah_ayat: "37"
    },
    {
        no_surat: "46",
        surat: "Al-Ahqaf",
        jumlah_ayat: "35"
    },
    {
        no_surat: "47",
        surat: "Muhammad",
        jumlah_ayat: "38"
    },
    {
        no_surat: "48",
        surat: "Al-Fath",
        jumlah_ayat: "29"
    },
    {
        no_surat: "49",
        surat: "Al-Hujurat",
        jumlah_ayat: "18"
    },
    {
        no_surat: "50",
        surat: "Qaaf",
        jumlah_ayat: "45"
    },
    {
        no_surat: "51",
        surat: "Ad-Dhariyat",
        jumlah_ayat: "60"
    },
    {
        no_surat: "52",
        surat: "At-Tur",
        jumlah_ayat: "49"
    },
    {
        no_surat: "53",
        surat: "An-Najm",
        jumlah_ayat: "62"
    },
    {
        no_surat: "54",
        surat: "Al-Qamar",
        jumlah_ayat: "55"
    },
    {
        no_surat: "55",
        surat: "Ar-Rahman",
        jumlah_ayat: "78"
    },
    {
        no_surat: "56",
        surat: "Al-Waqi’ah",
        jumlah_ayat: "96"
    },
    {
        no_surat: "57",
        surat: "Al-Hadid",
        jumlah_ayat: "29"
    },
    {
        no_surat: "58",
        surat: "Al-Mujadilah",
        jumlah_ayat: "22"
    },
    {
        no_surat: "59",
        surat: "Al-Hasyr",
        jumlah_ayat: "24"
    },
    {
        no_surat: "60",
        surat: "Al-Mumtahanah",
        jumlah_ayat: "13"
    },
    {
        no_surat: "61",
        surat: "As-Saff",
        jumlah_ayat: "14"
    },
    {
        no_surat: "62",
        surat: "Al-Jumu’ah",
        jumlah_ayat: "11"
    },
    {
        no_surat: "63",
        surat: "Al-Munafiqun",
        jumlah_ayat: "11"
    },
    {
        no_surat: "64",
        surat: "At-taghabun",
        jumlah_ayat: "18"
    },
    {
        no_surat: "65",
        surat: "At-Talaq",
        jumlah_ayat: "12"
    },
    {
        no_surat: "66",
        surat: "At-Tahrim",
        jumlah_ayat: "12"
    },
    {
        no_surat: "67",
        surat: "Al-Mulk",
        jumlah_ayat: "30"
    },
    {
        no_surat: "68",
        surat: "Al-Qalam",
        jumlah_ayat: "52"
    },
    {
        no_surat: "69",
        surat: "Al-Haqqah",
        jumlah_ayat: "52"
    },
    {
        no_surat: "70",
        surat: "Al-Ma’arij",
        jumlah_ayat: "44"
    },
    {
        no_surat: "71",
        surat: "Nuh",
        jumlah_ayat: "28"
    },
    {
        no_surat: "72",
        surat: "Al-Jinn",
        jumlah_ayat: "28"
    },
    {
        no_surat: "73",
        surat: "Al-Muzzammil",
        jumlah_ayat: "20"
    },
    {
        no_surat: "74",
        surat: "Al-Muddaththir",
        jumlah_ayat: "56"
    },
    {
        no_surat: "75",
        surat: "Al-Qiyamah",
        jumlah_ayat: "40"
    },
    {
        no_surat: "76",
        surat: "Al-Insan",
        jumlah_ayat: "31"
    },
    {
        no_surat: "77",
        surat: "Al-Mursalat",
        jumlah_ayat: "50"
    },
    {
        no_surat: "78",
        surat: "An-Naba’",
        jumlah_ayat: "40"
    },
    {
        no_surat: "79",
        surat: "An-Nazi’at",
        jumlah_ayat: "46"
    },
    {
        no_surat: "80",
        surat: "‘Abasa",
        jumlah_ayat: "42"
    },
    {
        no_surat: "81",
        surat: "At-Takwir",
        jumlah_ayat: "29"
    },
    {
        no_surat: "82",
        surat: "Al-Infithar",
        jumlah_ayat: "19"
    },
    {
        no_surat: "83",
        surat: "Al-Tatfif",
        jumlah_ayat: "36"
    },
    {
        no_surat: "84",
        surat: "Al-Insyiqaq",
        jumlah_ayat: "25"
    },
    {
        no_surat: "85",
        surat: "Al-Buruj",
        jumlah_ayat: "22"
    },
    {
        no_surat: "86",
        surat: "Ath-Tariq",
        jumlah_ayat: "17"
    },
    {
        no_surat: "87",
        surat: "Al-A’la",
        jumlah_ayat: "19"
    },
    {
        no_surat: "88",
        surat: "Al-Ghashiyah",
        jumlah_ayat: "26"
    },
    {
        no_surat: "89",
        surat: "Al-Fajr",
        jumlah_ayat: "30"
    },
    {
        no_surat: "90",
        surat: "Al-Balad",
        jumlah_ayat: "20"
    },
    {
        no_surat: "91",
        surat: "Ash-Syams",
        jumlah_ayat: "15"
    },
    {
        no_surat: "92",
        surat: "Al-Lail",
        jumlah_ayat: "21"
    },
    {
        no_surat: "93",
        surat: "Ad-Dhuha",
        jumlah_ayat: "11"
    },
    {
        no_surat: "94",
        surat: "Al-Insyirah",
        jumlah_ayat: "8"
    },
    {
        no_surat: "95",
        surat: "At-Tin",
        jumlah_ayat: "8"
    },
    {
        no_surat: "96",
        surat: "Al-‘Alaq",
        jumlah_ayat: "19"
    },
    {
        no_surat: "97",
        surat: "Al-Qadr",
        jumlah_ayat: "5"
    },
    {
        no_surat: "98",
        surat: "Al-Bayyinah",
        jumlah_ayat: "8"
    },
    {
        no_surat: "99",
        surat: "Al-Zalzalah",
        jumlah_ayat: "8"
    },
    {
        no_surat: "100",
        surat: "Al-‘Adiyat",
        jumlah_ayat: "11"
    },
    {
        no_surat: "101",
        surat: "Al-Qari’ah",
        jumlah_ayat: "11"
    },
    {
        no_surat: "102",
        surat: "At-Takatsur",
        jumlah_ayat: "8"
    },
    {
        no_surat: "103",
        surat: "Al-‘Asr",
        jumlah_ayat: "3"
    },
    {
        no_surat: "104",
        surat: "Al-Humazah",
        jumlah_ayat: "9"
    },
    {
        no_surat: "105",
        surat: "Al-Fil",
        jumlah_ayat: "5"
    },
    {
        no_surat: "106",
        surat: "Al-Quraish",
        jumlah_ayat: "4"
    },
    {
        no_surat: "107",
        surat: "Al-Ma’un",
        jumlah_ayat: "7"
    },
    {
        no_surat: "108",
        surat: "Al-Kautsar",
        jumlah_ayat: "3"
    },
    {
        no_surat: "109",
        surat: "Al-Kafirun",
        jumlah_ayat: "6"
    },
    {
        no_surat: "110",
        surat: "An-Nasr",
        jumlah_ayat: "3"
    },
    {
        no_surat: "111",
        surat: "Al-Lahab",
        jumlah_ayat: "5"
    },
    {
        no_surat: "112",
        surat: "Al-Ikhlas",
        jumlah_ayat: "4"
    },
    {
        no_surat: "113",
        surat: "Al-Falaq",
        jumlah_ayat: "5"
    },
    {
        no_surat: "114",
        surat: "An-Nas",
        jumlah_ayat: "6"
    }
]