import "./forum.css"
import { NavLink } from "react-router-dom"
import SmallPost from "../posts/smallpost.js"

export default function Forum() {
  return (
    <div className="forumback">
      <div className="mainforum">
        <div className="topbar">
          <div className="postsort">
            <h3 className="latesttab">Latest</h3>
            <h3 className="toptab">Top</h3>
          </div>
          <input placeholder="Search..." type="search" className="searchbar"></input>
          <NavLink to="/createpost">
            <button className="createbutton">Create Post</button>
          </NavLink>
        </div>
        <div className="bottomarea">
          <div className="tagsection">
            <div>
              <h4 className="tagtitle">Tags</h4>
              <div className="tags">
                <label className="">
                  <input type="checkbox"></input>
                  TEMP TAG
                </label>
                <label>
                  <input type="checkbox"></input>
                  TEMP TAG
                </label>
                <label>
                  <input type="checkbox"></input>
                  TEMP TAG
                </label>
                <label>
                  <input type="checkbox"></input>
                  TEMP TAG
                </label>
              </div>
            </div>
          </div>
          <div className="rightside">
            <div className="statnames">
              <h4 className="stat11">Likes</h4>
              <h4 className="stat22">Replies</h4>
              <h4 className="stat33">Views</h4>
            </div>
            <div className="posts">
            <SmallPost />
            <SmallPost />
            <SmallPost />
            <SmallPost />
            <SmallPost />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}