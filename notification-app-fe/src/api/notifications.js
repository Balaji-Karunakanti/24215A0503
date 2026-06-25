export async function fetchNotifications() {
  const response = await fetch(
    "http://4.224.186.213/evaluation-service/notifications",
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyNDIxNWEwNTAzQGJ2cml0LmFjLmluIiwiZXhwIjoxNzgyMzc5NzU5LCJpYXQiOjE3ODIzNzg4NTksImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJmYzc5NmYyMC02ZDQ5LTQzZjgtYmNhOS1lZmY4OGI0NGUyNzciLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJrYXJ1bmFrYW50aSBiYWxhamkiLCJzdWIiOiI1ZWUwZmMyNS1jYTFjLTQ4MzItOTQyMC01Yzc3YTM3ZDRmYWUifSwiZW1haWwiOiIyNDIxNWEwNTAzQGJ2cml0LmFjLmluIiwibmFtZSI6ImthcnVuYWthbnRpIGJhbGFqaSIsInJvbGxObyI6IjI0MjE1YTA1MDMiLCJhY2Nlc3NDb2RlIjoiYWhYanZwIiwiY2xpZW50SUQiOiI1ZWUwZmMyNS1jYTFjLTQ4MzItOTQyMC01Yzc3YTM3ZDRmYWUiLCJjbGllbnRTZWNyZXQiOiJudmdUU1Z1ZENxalBUQWJBIn0.U3qRAty0X8CF2FQwsjNY92vNV0ofrqx9psrToFiCi7I`
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch notifications");
  }

  const data = await response.json();

  console.log(data);

  return data;
}