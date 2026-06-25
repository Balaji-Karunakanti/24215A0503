import axios from "axios";

const API_URL =
  "http://4.224.186.213/evaluation-service/notifications";

export async function fetchNotifications() {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyNDIxNWEwNTAzQGJ2cml0LmFjLmluIiwiZXhwIjoxNzgyMzgxNjcwLCJpYXQiOjE3ODIzODA3NzAsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJhZjM5MTIwYy0yMjNlLTQ2ODAtYWNmOS03MzZiZTg0ZmRkOTciLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJrYXJ1bmFrYW50aSBiYWxhamkiLCJzdWIiOiI1ZWUwZmMyNS1jYTFjLTQ4MzItOTQyMC01Yzc3YTM3ZDRmYWUifSwiZW1haWwiOiIyNDIxNWEwNTAzQGJ2cml0LmFjLmluIiwibmFtZSI6ImthcnVuYWthbnRpIGJhbGFqaSIsInJvbGxObyI6IjI0MjE1YTA1MDMiLCJhY2Nlc3NDb2RlIjoiYWhYanZwIiwiY2xpZW50SUQiOiI1ZWUwZmMyNS1jYTFjLTQ4MzItOTQyMC01Yzc3YTM3ZDRmYWUiLCJjbGllbnRTZWNyZXQiOiJudmdUU1Z1ZENxalBUQWJBIn0.Za7d67OAK9L5u8jdfXwOz_US9igO3HBLURgK95qnL_k"
      }
    });

    return response.data.notifications || [];
  } catch (error) {
    console.error("Error fetching notifications:", error.message);
    return [];
  }
}