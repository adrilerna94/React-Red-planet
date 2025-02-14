import { Card, CardBody, List, ListItem, Typography } from "@/components/ui";

export default function DaysList({ numberDays, start }) {
  const startDate = new Date(start);

  const days = Array.from({ length: numberDays }, (_, i) => {
    const newDate = new Date(start);
    newDate.setDate(startDate.getDate() + i);
    return newDate.toLocaleDateString("es-ES"); // Format DD/MM/YYYY
  });

  return (
    <Card className="max-w-96 mx-auto">
      <CardBody>
        <Typography variant="h6" color="blue-gray" className="mb-2">
          Lista de días
        </Typography>
        <List>
          {days.map((value, index) => (
            <ListItem key={index}>
              Día {index + 1}: {value}
            </ListItem>
          ))}
        </List>
      </CardBody>
    </Card>
  );
}
