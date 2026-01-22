import { Box } from "@mui/material";
import { Header } from "./components/Header";
import { BodyProject } from "./components/BodyProject";
import { Footer } from "./components/Footer";
import axios from "axios";
import { useState, type RefObject } from "react";

export interface DataType {
  info: {
    count: number;
    next: string;
    pages: number;
    prev?: string;
  };
  results: {
    created: string;
    episode: string[];
    gender: string;
    id: number;
    image: string;
    location: {
      name: string;
      url: string;
    };
    name: string;
    origin: { name: string; url: string };
    species: string;
    status: string;
    type: string;
    url: string;
  }[];
}

export const MainPage = () => {
  const [data, setData] = useState<DataType>({} as any);
  const [loadingData, setLoadingData] = useState<Boolean>(true);
  const [bodyElement, setBodyElement] =
    useState<RefObject<HTMLInputElement | null> | null>(null);

  const getData = async (nextUrl?: string) => {
    const defaultUrl = nextUrl || "https://rickandmortyapi.com/api/character";
    setLoadingData(true);
    const bodyData = await axios.get(defaultUrl);
    setLoadingData(false);
    setData(bodyData.data);
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      height={"100%"}
      color={"white"}
    >
      <Header data={data} getData={getData} bodyElement={bodyElement} />

      <BodyProject
        data={data}
        getData={getData}
        isLoading={loadingData}
        setBodyElement={setBodyElement}
      />
      <Footer />
    </Box>
  );
};
