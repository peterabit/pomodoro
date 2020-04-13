import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import RingList from 'features/ring/RingList'
import Button from 'react-bootstrap/Button'
import { play } from 'features/ring/ringSlice'

const Ring = () => {
  const workRing = useSelector(({ ring }) => ring.workRing)
  const restRing = useSelector(({ ring }) => ring.restRing)
  const dispatch = useDispatch()
  return (
    <div className="container pt-7">
      <div className="row">
        <div className="col-lg-2">
          <h1 className="mb-2 text-pink">Rings</h1>
        </div>
        <div className="col pt-3">
          <div className="d-flex flex-wrap mb-5">
            <div className="mr-5">
              <h2 className="h5 mr-3 text-pink-light">work</h2>
              <Button variant="link" onClick={() => dispatch(play(workRing))}>
                <i className="fas fa-bell fa-lg mr-2 opacity-weak align-baseline" />
                <span className="h4">{workRing}</span>
              </Button>
            </div>
            <div className="align-bottom">
              <h2 className="h5 mr-3 text-pink-light">rest</h2>
              <Button variant="link" onClick={() => dispatch(play(restRing))}>
                <i className="fas fa-bell fa-lg mr-2 opacity-weak align-baseline" />
                <span className="h4">{restRing}</span>
              </Button>
            </div>
          </div>
          <RingList />
        </div>
      </div>
    </div>
  )
}

export default Ring
