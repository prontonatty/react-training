import React from 'react'
import { Link } from 'react-router'

function ShortListItem({ shot }) {
  return (
    <div className="col-4 px-12">
      <div className="shot-preview">
        <Link to={`/shot/${shot.id}`}>
          <div className="teaser">
            <img src={shot.images.normal} />
          </div>
        </Link>
        <div className="info px-12">
          <p className="title">Fly Emirates Book App</p>
          <a href="#" className="like-btn"><i className="fa fa-heart" aria-hidden="true"></i></a>
        </div>

      </div>
    </div>
  )
}
export default ShortListItem
