import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Typography,
} from "@/components/ui";

export default function MissionDayCounter({ dayCount, setDayCount }) {
  const incrementDay = () => {
    // Ejemplo de porque se debe usar una función de callback para asegurar que el valor es el correcto
    // setDayCount(dayCount + 1);
    // setDayCount(dayCount + 1);
    // setDayCount(dayCount + 1);
    setDayCount((prevDayCount) => prevDayCount + 1);
  };

  const decrementDay = () => {
    setDayCount((prevDayCount) => prevDayCount - 1);
  };

  return (
    <Card className="max-w-96 mx-auto h-fit">
      <CardBody>
        <Typography variant="h5" color="blue-gray">
          Contador de días de la misión
        </Typography>
        <Typography className="mt-2">Días previstos: {dayCount}</Typography>
      </CardBody>

      <CardFooter className="flex gap-2">
        <Button color="blue" onClick={incrementDay}>
          Incrementar
        </Button>
        <Button color="red" onClick={decrementDay}>
          Decrementar
        </Button>
      </CardFooter>
    </Card>
  );
}
