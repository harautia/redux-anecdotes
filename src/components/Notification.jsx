import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 10
  }
  
  // If visible == false don't show anything 
  if (!notification.visible) {
    return null
  }
  
  return (
    <div style={style}>
      {notification.message}
    </div>
  )
}

export default Notification