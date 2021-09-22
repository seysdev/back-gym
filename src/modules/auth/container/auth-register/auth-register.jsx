import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useHistory } from "react-router-dom";

export function AuthRegister() {
  const [formState, setFormState] = useState({
    fullName: "",
    typeUser: false,
  });

  const history = useHistory();

  const onSubmit = (evt) => {
    evt.preventDefault();

    formState.typeUser === 1
      ? history.push("/teacher")
      : history.push("/student");
  };

  useEffect(() => {
    // ACA LLAMARAN SERVICIOS
  }, []);

  return (
    <div className="auth-login">
      <form onSubmit={onSubmit}>
        <div className="w-full max-w-sm mx-auto mt-40">
          <h1 className="text-3xl text-center mb-8 font-bold">REGISTER</h1>
          <div className="mb-8">
            <TextField
              className="w-full"
              label="Nombre y Apellido"
              variant="outlined"
              value={formState.fullName}
              onChange={(evt) =>
                setFormState((state) => ({
                  ...state,
                  fullName: evt.target.value,
                }))
              }
              required
            />
          </div>
          <div className="mb-8">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Tipo de usuario
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formState.typeUser}
                label="Age"
                onChange={(evt) =>
                  setFormState((state) => ({
                    ...state,
                    typeUser: evt.target.value,
                  }))
                }
              >
                <MenuItem value={1}>Profesor</MenuItem>
                <MenuItem value={2}>Alumno</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="mb-8">
            <Button
              variant="contained"
              size="large"
              color="secondary"
              fullWidth={true}
              type="submit"
            >
              Ingresar
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
