import { Box, Button } from "@mui/material";
import type { DataType } from "../Main";
import type { RefObject } from "react";

export const Header = ({
  data,
  getData,
  bodyElement,
}: {
  data: DataType;
  getData: (nextUrl?: string) => void;
  bodyElement: RefObject<HTMLInputElement | null> | null;
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
          <Button
            onClick={() => {
              getData(data.info.prev);
              if (bodyElement?.current?.scrollTop !== 0) {
                bodyElement?.current?.scrollTo(0, 0);
              }
            }}
          >
            Anterior
          </Button>
        ) : null}

        <Button
          onClick={() => {
            getData(data.info.next);

            if (bodyElement?.current?.scrollTop !== 0) {
              bodyElement?.current?.scrollTo(0, 0);
            }
          }}
        >
          Próximo
        </Button>
      </Box>
    </Box>
  );
};
