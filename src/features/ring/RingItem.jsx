import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { useDispatch } from 'react-redux'
import { setRestRing, setWorkRing } from './ringSlice'

const RingItem = ({ rId, children }) => {
  const dispatch = useDispatch()
  return (
    <Dropdown as={ButtonGroup} className="mr-4 mb-3" style={{ width: '160px' }}>
      <Button
        variant="outline-pink"
        block
        className="text-left text-nowrap overflow-hidden"
      >
        <i className="far fa-bell mr-2 opacity-weak"></i>
        {children}
      </Button>
      <Dropdown.Toggle split variant="outline-pink" id="ring-dropdown-split-basic" />
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
  )
}

export default RingItem
