// Components
import Title from "../components/Title";
import Counter from "../components/Counter";

// Context
import { CountdownContext } from "../context/CountdownContext";
import { useContext } from "react";

// Router
import { Navigate } from "react-router-dom";

// Hooks
import useCountdown from "../hooks/useCountdown";

const Countdown = () => {
  const { event } = useContext(CountdownContext);

  if (!event) return <Navigate to="/" />;

  const eventColor = event.color;

  const [day, hour, minute, second] = useCountdown(event.date);

  return (
    <>
      <Title title={event.title} eventColor={eventColor} />
      <div className="countdown-container">
        <Counter title="Dias" number={day} eventColor={eventColor} />
        <Counter title="Horas" number={hour} eventColor={eventColor} />
        <Counter title="Minutos" number={minute} eventColor={eventColor} />
        <Counter title="Segundos" number={second} eventColor={eventColor} />
      </div>
    </>
  );
};

export default Countdown;
