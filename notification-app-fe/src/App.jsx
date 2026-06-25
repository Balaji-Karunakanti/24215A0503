import { useEffect, useState } from "react";
import { NotificationCard } from "./NotificationCard";

export default function App() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch("http://4.224.186.213/evaluation-service/notifications", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyNDIxNWEwNTAzQGJ2cml0LmFjLmluIiwiZXhwIjoxNzgyMzgzOTQ1LCJpYXQiOjE3ODIzODMwNDUsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJhNDdlY2YzZS1jNTU3LTRhZmEtYWU4YS1mNGUxOTIzZDYwNTgiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJrYXJ1bmFrYW50aSBiYWxhamkiLCJzdWIiOiI1ZWUwZmMyNS1jYTFjLTQ4MzItOTQyMC01Yzc3YTM3ZDRmYWUifSwiZW1haWwiOiIyNDIxNWEwNTAzQGJ2cml0LmFjLmluIiwibmFtZSI6ImthcnVuYWthbnRpIGJhbGFqaSIsInJvbGxObyI6IjI0MjE1YTA1MDMiLCJhY2Nlc3NDb2RlIjoiYWhYanZwIiwiY2xpZW50SUQiOiI1ZWUwZmMyNS1jYTFjLTQ4MzItOTQyMC01Yzc3YTM3ZDRmYWUiLCJjbGllbnRTZWNyZXQiOiJudmdUU1Z1ZENxalBUQWJBIn0.HR1A4lxTuuxMwwlsHaxQg76B4Wh95HeWFyAY19Q1KXI",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setNotifications(data.notifications);
      });
  }, []);

  const priority = {
    Placement: 3,
    Result: 2,
    Event: 1,
  };

  const priorityNotifications = [...notifications]
    .sort((a, b) => {
      if (priority[a.Type] !== priority[b.Type]) {
        return priority[b.Type] - priority[a.Type];
      }

      return new Date(b.Timestamp) - new Date(a.Timestamp);
    })
    .slice(0, 10);

  return (
    <div
      style={{
        width: "70%",
        margin: "30px auto",
        fontFamily: "Arial",
      }}
    >
      <h1>Priority Notifications</h1>

      {priorityNotifications.map((notification) => (
        <NotificationCard
          key={notification.ID}
          notification={notification}
        />
      ))}

      <hr
        style={{
          margin: "40px 0",
        }}
      />

      <h1>📋 All Notifications</h1>

      {notifications.map((notification) => (
        <NotificationCard
          key={notification.ID}
          notification={notification}
        />
      ))}
    </div>
  );
}