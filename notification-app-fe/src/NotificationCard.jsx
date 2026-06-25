import "./NotificationCard.css";

export function NotificationCard({ notification }) {

  const getPriority = (type) => {
    if (type === "Placement") return "High";
    if (type === "Result") return "Medium";
    return "Low";
  };

  return (
    <div className="notification-card">

      <div className="card-top">

        <span className={`type ${notification.Type.toLowerCase()}`}>
          {notification.Type}
        </span>

        <span className={`priority ${getPriority(notification.Type).toLowerCase()}`}>
          {getPriority(notification.Type)}
        </span>

      </div>

      <h3>{notification.Message}</h3>

      <p>{notification.Timestamp}</p>

    </div>
  );
}