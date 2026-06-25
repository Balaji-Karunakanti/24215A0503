import { Card, CardContent, Typography, Chip, Stack } from "@mui/material";

export function NotificationCard({ notification }) {
  const getColor = (type) => {
    switch (type) {
      case "Placement":
        return "success";
      case "Result":
        return "primary";
      case "Event":
        return "warning";
      default:
        return "default";
    }
  };

  return (
    <Card elevation={3}>
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <Chip
            label={notification.Type}
            color={getColor(notification.Type)}
          />

          <Typography variant="caption" color="text.secondary">
            {notification.Timestamp}
          </Typography>
        </Stack>

        <Typography variant="body1">
          {notification.Message}
        </Typography>
      </CardContent>
    </Card>
  );
}