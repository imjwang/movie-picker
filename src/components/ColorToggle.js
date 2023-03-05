import { useColorScheme } from "@mui/joy/styles";
import { useState, useEffect } from "react";
import { Switch } from "@mui/joy";
import DarkMode from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";

const ColorToggle = () => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // to avoid layout shift, render a placeholder switch
    return <Switch color="primary" />;
  }
  return (
    <Switch
      slotProps={{
        input: { "aria-label": "Toggle Light/Dark mode" },
        thumb: {
          children: mode === "dark" ? <LightMode /> : <DarkMode />,
        },
      }}
      sx={{
        "--Switch-thumb-size": "24px",
      }}
      color="primary"
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}
    />
  );
};

export default ColorToggle;
