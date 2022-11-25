import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { setSidebar } from "slices/uiSlice"
import { setSidecart } from "slices/uiSlice"

function useSwiper() {
  const dispatch = useDispatch()
  const sidebar = useSelector(state => state.ui.sidebar)
  const sidecart = useSelector(state => state.ui.sidecart)
  const [start, setStart] = useState([])
  const [end, setEnd] = useState([])

  const handleSidebar = (boolean) => {
    dispatch(setSidebar(boolean))
  }

  const handleSidecart = (boolean) => {
    dispatch(setSidecart(boolean))
  }

  const checkSwipeToClose = () => {
    const verticalDiff = diff(end[1], start[1])

    if ((start && end) && ((start[0] - end[0] > 55)) && (verticalDiff < 20)) {
      dispatch(setSidebar(false))
    }
  }

  const checkSwipeToOpen = () => {
    const verticalDiff = diff(end[1], start[1])
    /*When you swipe in an horizontal scrollable div (like products div in mobile), sidebar opens and it is a problem because the users
    cant scroll through the horizontal product divs. So to solve this, I can examine the target of the swipe, and their parents to a certain
    degree, so if scrollLeft is equal to 0, you can open the sidebar. If it is not, it is because you want to scroll the products. And swipe
    is not activated. There must be a better solution, but this will work for now*/
    if (
      (start[2].target.parentNode.scrollLeft === 0 || start[2].target.parentNode.scrollLeft === undefined)
      &&
      (start[2].target.parentNode.parentNode.scrollLeft === 0 || start[2].target.parentNode.parentNode.scrollLeft === undefined)
      &&
      (start[2].target.parentNode.parentNode.parentNode.scrollLeft === 0 || start[2].target.parentNode.parentNode.parentNode.scrollLeft === undefined)
      &&
      (start[2].target.parentNode.parentNode.parentNode.parentNode.scrollLeft === 0 || start[2].target.parentNode.parentNode.parentNode.parentNode.scrollLeft === undefined)
      &&
      (start[2].target.parentNode.parentNode.parentNode.parentNode.parentNode.scrollLeft === 0 || start[2].target.parentNode.parentNode.parentNode.parentNode.parentNode.scrollLeft === undefined)
      &&
      (start[2].target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.scrollLeft === 0 || start[2].target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.scrollLeft === undefined)
    ) {
      if ((start && end) && ((end[0] - start[0] > 55)) && (verticalDiff < 20)) {
        dispatch(setSidebar(true))
      }
    }
  }

  function diff(num1, num2) {
    if (num1 > num2) {
      return num1 - num2
    } else {
      return num2 - num1
    }
  }

  return {
    start,
    end,
    setStart,
    setEnd,
    sidebar,
    handleSidebar,
    sidecart,
    handleSidecart,
    checkSwipeToOpen,
    checkSwipeToClose
  }
}

export { useSwiper }