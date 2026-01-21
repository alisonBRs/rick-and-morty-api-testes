import { Badge, Box, CardContent, CardMedia, Typography } from "@mui/material";
import Card from "@mui/material/Card";

interface CardLocation {
  name: string;
  url: string;
}

interface CardOrigin {
  name: string;
  url: string;
}

export interface CardType {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: CardLocation;
  name: string;
  origin: CardOrigin;
  species: string;
  status: string;
  type: string;
  url: string;
}

export const CardBox = ({ card }: { card: CardType }) => {
  console.log("card", card);
  return (
    <>
      <Card
        sx={{
          boxShadow: 8,
          background: "#dce3f9",
          width: "fit-content",
          maxWidth: "450px",
          p: 2,
        }}
      >
        <Box display={"flex"} gap={2}>
          <CardMedia
            component="img"
            height="200px"
            width={"200px"}
            image={card.image}
            alt=""
            sx={{ borderRadius: "6px" }}
          />
          <Box minWidth={"250px"}>
            <Typography
              color="#595050"
              fontSize={"20px"}
              fontWeight={"bold"}
              fontFamily={"monospace"}
            >
              {card.name}
            </Typography>
            <CardContent>
              <Box display={"flex"} alignItems={"center"} gap={1}>
                <Typography
                  fontWeight={"bold"}
                  color="grey"
                  fontFamily={"monospace"}
                >
                  Status:{" "}
                  <span
                    style={{
                      fontWeight: "initial",
                      fontFamily: "monospace",
                      color: "#494646",
                    }}
                  >
                    {card.status}
                  </span>
                </Typography>
                <Badge
                  sx={{ marginTop: "3px" }}
                  color={card.status === "Alive" ? "success" : "error"}
                  variant="dot"
                ></Badge>
              </Box>

              <Box color={"#494646"}>
                <Typography
                  fontFamily={"monospace"}
                  fontWeight={"bold"}
                  color="grey"
                >
                  Última vez visto:
                </Typography>
                <Typography fontFamily={"monospace"}>
                  {card.location.name}
                </Typography>
              </Box>

              <Box color={"#494646"}>
                <Typography
                  fontFamily={"monospace"}
                  fontWeight={"bold"}
                  color="grey"
                >
                  Origem:
                </Typography>
                <Typography fontFamily={"monospace"}>
                  {card.origin.name}
                </Typography>
              </Box>
            </CardContent>
          </Box>
        </Box>
      </Card>
    </>
  );
};
