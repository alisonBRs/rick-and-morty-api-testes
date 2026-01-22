import { Box } from "@mui/material";
import { useEffect, useRef, type RefObject } from "react";
import { CardBox, type CardType } from "./card/Card";
import type { DataType } from "../Main";

export const BodyProject = ({
  data,
  getData,
  isLoading,
  setBodyElement,
}: {
  data: DataType;
  getData: (nextUrl?: string) => void;
  isLoading: Boolean;
  setBodyElement: (data: RefObject<HTMLInputElement | null>) => void;
}) => {
  const element = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    getData();
    setBodyElement(element);
  }, []);

  return (
    <Box flex={1} overflow={"auto"} ref={element}>
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
