const Notification = ({ notification }) => {
    const messageStyle = {
    color: notification.color,
    background: "lightgrey",
    fontSize: "20px",
    borderStyle: "solid",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
  };
  if (notification.message === null) return null;
  return <div style={messageStyle}>{notification.message}</div>;
};

export default Notification;
