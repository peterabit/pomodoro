import React, { useRef, useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { useDispatch, useSelector } from 'react-redux'
import { setRestRing, setWorkRing, play } from './ringSlice'

const RingItem = ({ rId, children }) => {
  const dispatch = useDispatch()
  const textWidth = 120
  const text = useRef(null)
  useEffect(() => {
    const textNode = text.current
    if (+textNode.scrollWidth > textWidth) {
      textNode.style.fontSize = '.85em'
    }
  }, [children])

  return (
    <>
      <Dropdown as={ButtonGroup} className="mr-4 mb-3">
        <Button
          variant="outline-pink"
          block
          className="text-left text-nowrap overflow-hidden"
          onClick={() => dispatch(play(rId))}
        >
          <i className="far fa-bell mr-2 opacity-weak"></i>
          <span
            ref={text}
            className="d-inline-block align-baseline"
            style={{ width: `${textWidth}px`, whiteSpace: 'nowrap' }}
          >
            {children}
          </span>
        </Button>
        <Dropdown.Toggle
          split
          flip={'false'}
          variant="outline-pink"
          id="ring-dropdown-split-basic"
        />
        <Dropdown.Menu alignRight>
          <Dropdown.Item onClick={() => dispatch(setWorkRing(rId))}>
            for work
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={() => dispatch(setRestRing(rId))}>
            for rest
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default RingItem
