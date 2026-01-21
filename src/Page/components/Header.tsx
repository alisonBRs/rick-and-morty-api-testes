import { Box, Button } from "@mui/material";
import type { DataType } from "../Main";

export const Header = ({
  data,
  getData,
}: {
  data: DataType;
  getData: (nextUrl?: string) => void;
}) => {
  return (
    <Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        fontSize={"44px"}
      >
        Rick and Morty - API
      </Box>

      <Box
        marginBottom={"5px"}
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
      >
        {data.info?.prev ? (
          <Button onClick={() => getData(data.info.prev)}>Anterior</Button>
        ) : null}
        <Button onClick={() => getData(data.info.next)}>Próximo</Button>
      </Box>
    </Box>
  );
};
