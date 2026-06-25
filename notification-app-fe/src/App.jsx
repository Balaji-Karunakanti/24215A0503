import { useEffect, useState } from "react";
import { NotificationCard } from "./NotificationCard";

export default function App() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch("http://4.224.186.213/evaluation-service/notifications", {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyNDIxNWEwNTAzQGJ2cml0LmFjLmluIiwiZXhwIjoxNzgyMzgwNzkwLCJpYXQiOjE3ODIzNzk4OTAsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJhNWNhYjM2Mi01NTMzLTRiNDktOGMwMC0zYjgxYzkwMWE2NjYiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJrYXJ1bmFrYW50aSBiYWxhamkiLCJzdWIiOiI1ZWUwZmMyNS1jYTFjLTQ4MzItOTQyMC01Yzc3YTM3ZDRmYWUifSwiZW1haWwiOiIyNDIxNWEwNTAzQGJ2cml0LmFjLmluIiwibmFtZSI6ImthcnVuYWthbnRpIGJhbGFqaSIsInJvbGxObyI6IjI0MjE1YTA1MDMiLCJhY2Nlc3NDb2RlIjoiYWhYanZwIiwiY2xpZW50SUQiOiI1ZWUwZmMyNS1jYTFjLTQ4MzItOTQyMC01Yzc3YTM3ZDRmYWUiLCJjbGllbnRTZWNyZXQiOiJudmdUU1Z1ZENxalBUQWJBIn0.QGODQDaaKswiRtwLAG_PxiYowfgIiItUmBXVqUiMQ9E",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

      
        setNotifications(data.notifications);
      });
  }, []);

  return (
    <>
      {notifications.map((notification) => (
        <NotificationCard
          key={notification.ID}
          notification={notification}
        />
      ))}
    </>
  );
}