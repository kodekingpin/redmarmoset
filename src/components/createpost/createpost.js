import "./createpost.css"

export default function CreatePost() {
    return (
        <div className="mainpostpage">
            <div className="topbar">
                <h1 className="title">Create a post</h1>
                <button className="publishbutton">Publish</button>
            </div>
            <div className="bottombar">
                <input className="titleinput" placeholder="Title"/>
                <textarea className="textinput" placeholder="Discuss your topic here"/>
            </div>
        </div>
    )
}