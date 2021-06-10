import React, {useState} from 'react'
import { useObject } from 'react-firebase-hooks/database'
import { db } from 'firebaseConfig';

import ListOfLessons from 'Components/ListOfLessons'

export default function Home() {

    const [snapshot, loading, error] = useObject(db.ref('/Lecciones'));
    const [keyword, setKeyword] = useState('')

    const searchLesson = (e) => {
        setKeyword(e.target.value)
    }

    return (
        <div className="container mx-auto">
            <div id="centro" className="flex flex-col items-center absolute inset-1/4 w-1/2">
                <h1 className="w-full text-center text-white font-bold text-4xl mb-8">¿Qué quieres aprender hoy?</h1>
                <input
                    onChange={searchLesson}
                    className="w-full rounded-md p-2"
                    type="search"
                    placeholder="Buscar lección"
                    name=""
                    id=""
                />
                {snapshot && Object.values(snapshot.val()).filter(
                    (lesson)=>lesson.Nombreleccion.includes(keyword)).map((lesson)=>{
                        return <ListOfLessons numeroTabla={lesson.Numerotabla} descripcion={lesson.Descripcion} nombreLeccion={lesson.Nombreleccion} />
                    })
                }
            </div>
        </div>
    )
}