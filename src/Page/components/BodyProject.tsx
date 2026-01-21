import { Box } from "@mui/material";
import { useEffect } from "react";
import { CardBox, type CardType } from "./card/Card";
import type { DataType } from "../Main";

export const BodyProject = ({
  data,
  getData,
}: {
  data: DataType;
  getData: (nextUrl?: string) => void;
}) => {
  useEffect(() => {
    getData();
  }, []);

  console.log("data", data);
  return (
    <Box flex={1} overflow={"auto"}>
      <Box width={"full"} display={"flex"} justifyContent={"center"}>
        <Box display={"flex"} flexWrap={"wrap"} width={"1600px"} gap={8} p={2}>
          {data?.results?.map((card: CardType) => (
            <CardBox card={card} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
