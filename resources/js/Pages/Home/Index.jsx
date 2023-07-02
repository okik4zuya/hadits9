import React from "react"
import WebLayout from "../../Layouts/Web"
import { Link } from "@inertiajs/inertia-react"

export default function HomeIndex() {
    return (
        <WebLayout>
            <div className="home" style={{ height: "100%", padding: "32px" }}>
                <div className="card block p-4 is-size-4">
                    <Link href="/quran">
                        Cari Qur'an
                    </Link>
                </div>
                <div className="card block p-4 is-size-4">
                    <Link href="/quran/1/1">
                        Tafsir Quran
                    </Link>
                </div>
                <div className="card block p-4 is-size-4">
                    <Link href="/hadits">
                        Cari Hadits
                    </Link>
                </div>
                <div className="card block p-4 is-size-4">
                    <Link href="/hadits/bukhari/1">
                        Hadits by Kitab
                    </Link>
                </div>

            </div>

        </WebLayout>
    )
}