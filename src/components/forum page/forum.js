import "./forum.css"
import { NavLink } from "react-router-dom"

export default function Forum() {
    return (
        <div className="forumback">
            <div className="mainforum">
                <div className="topbar">
                    <div className="postsort">
                        <h3>Latest</h3>
                        <h3>Top</h3>
                    </div>
                    <input placeholder="Search..." type="search" className="searchbar"></input>
                    <NavLink to="/createpost">
                        <button>Create Post</button>
                    </NavLink>
                </div>
                <div className="bottomarea">
                    <div className="tagsection">
                        <div>
                            <h4>Tags</h4>
                            <div className="tags">
                                <label>
                                    <input type="checkbox"></input>
                                    TAG
                                </label>
                                <label>
                                    <input type="checkbox"></input>
                                    TAG
                                </label>
                                <label>
                                    <input type="checkbox"></input>
                                    TAG
                                </label>
                                <label>
                                    <input type="checkbox"></input>
                                TAG
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="rightside">
                        <div className="statnames">
                            <h4>Likes</h4>
                            <h4>Replies</h4>
                            <h4>Views</h4>
                        </div>
                        <div className="posts">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}