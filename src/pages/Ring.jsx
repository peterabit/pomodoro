import React from 'react'
import { useSelector } from 'react-redux'
import RingList from 'features/ring/RingList'
import Button from 'react-bootstrap/Button'

const Ring = () => {
  const workRing = useSelector(({ ring }) => ring.workRing)
  const restRing = useSelector(({ ring }) => ring.restRing)
  return (
    <div className="container pt-7">
      <div className="row">
        <div className="col-2">
          <h1 className="mb-2 text-pink">Rings</h1>
        </div>
        <div className="col pt-3">
          <div className="d-flex mb-5">
            <div className="mr-5">
              <h2 className="h5 mr-3 text-pink-light">work</h2>
              <Button variant="link">
                <i className="fas fa-bell fa-lg mr-2 opacity-weak align-baseline" />
                <span className="h4">{workRing}</span>
              </Button>
            </div>
            <div className="align-bottom">
              <h2 className="h5 mr-3 text-pink-light">rest</h2>
              <Button variant="link">
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
