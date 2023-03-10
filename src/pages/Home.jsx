
import { useState, useEffect } from "react";
import { getInitialData } from "../utils/data";
import NoteHeader from "../components/NoteHeader";
import NoteBody from "../components/NoteBody";


function Home() {
    const [query, setQuery] = useState("");
    const [findNotes, setFindNotes] = useState([]);
    const [notes, setNotes] = useState(getInitialData());

    const notesActive = (findNotes || notes).filter((note) => !note.archived);
    const notesArsip = (findNotes || notes).filter((note) => note.archived);

    useEffect(() => {
        setFindNotes(notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase())));
    }, [query, notes]);

    return (
        <div className="note-app" >
            <NoteHeader search={query} setQuery={setQuery} />
            <NoteBody notesActive={notesActive} notesArsip={notesArsip} setNotes={setNotes} />
        </div>
    );

}
export default Home;