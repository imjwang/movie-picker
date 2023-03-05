import { useColorScheme } from "@mui/joy/styles";
import Button from "@mui/joy/Button";
import { useState, useEffect } from "react";

const ColorToggle = () => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // to avoid layout shift, render a placeholder button
return <Button variant="outlined" color="neutral" sx={{ width: 120 }} />;
  }
  return (
    <Button
      variant="outlined"
      color="neutral"
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}
    >
      {mode === "dark" ? "Turn light" : "Turn dark"}
    </Button>
  );
};

export default ColorToggle;
