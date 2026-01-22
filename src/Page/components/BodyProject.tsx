import { Box } from "@mui/material";
import { useEffect } from "react";
import { CardBox, type CardType } from "./card/Card";
import type { DataType } from "../Main";

export const BodyProject = ({
  data,
  getData,
  isLoading,
}: {
  data: DataType;
  getData: (nextUrl?: string) => void;
  isLoading: Boolean;
}) => {
  useEffect(() => {
    getData();
  }, []);

  return (
    <Box flex={1} overflow={"auto"}>
      <Box width={"full"} display={"flex"} justifyContent={"center"}>
        <Box display={"flex"} flexWrap={"wrap"} width={"1600px"} gap={8} p={2}>
          {data?.results?.map((card: CardType) => (
            <CardBox card={card} isLoading={isLoading} key={card.id} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
