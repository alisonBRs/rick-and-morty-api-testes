import {
  Badge,
  Box,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from "@mui/material";
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

export const CardBox = ({
  card,
  isLoading,
}: {
  card: CardType;
  isLoading: Boolean;
}) => {
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
          {!isLoading ? (
            <CardMedia
              component="img"
              height="200px"
              width={"200px"}
              image={card.image}
              alt=""
              sx={{ borderRadius: "6px" }}
            />
          ) : (
            <Skeleton
              variant="rectangular"
              width={200}
              height={200}
              sx={{ borderRadius: "6px" }}
              animation="wave"
            />
          )}

          <Box minWidth={"250px"}>
            {!isLoading ? (
              <Typography
                color="#595050"
                fontSize={"20px"}
                fontWeight={"bold"}
                fontFamily={"monospace"}
              >
                {card.name}
              </Typography>
            ) : (
              <Typography
                fontWeight={"bold"}
                color="grey"
                fontFamily={"monospace"}
              >
                <Skeleton
                  variant="text"
                  height={"100%"}
                  width={180}
                  animation="wave"
                />
              </Typography>
            )}

            <CardContent>
              <Box display={"flex"} alignItems={"center"} gap={1}>
                {!isLoading ? (
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
                    <Badge
                      sx={{
                        marginLeft: "8px",
                        "& .MuiBadge-badge":
                          card.status === "unknown"
                            ? {
                                backgroundColor: "#8b8b8b",
                              }
                            : "",
                      }}
                      color={card.status === "Alive" ? "success" : "error"}
                      variant="dot"
                    ></Badge>
                  </Typography>
                ) : (
                  <Typography
                    fontWeight={"bold"}
                    color="grey"
                    fontFamily={"monospace"}
                  >
                    <Skeleton
                      variant="text"
                      height={"100%"}
                      width={180}
                      animation="wave"
                    />
                  </Typography>
                )}
              </Box>

              <Box color={"#494646"}>
                <Typography
                  fontFamily={"monospace"}
                  fontWeight={"bold"}
                  color="grey"
                >
                  {!isLoading ? (
                    "Última vez visto:"
                  ) : (
                    <Skeleton
                      variant="text"
                      height={"100%"}
                      width={180}
                      animation="wave"
                    />
                  )}
                </Typography>
                <Typography fontFamily={"monospace"}>
                  {!isLoading ? (
                    card.location.name
                  ) : (
                    <Skeleton
                      variant="text"
                      height={"100%"}
                      width={180}
                      animation="wave"
                    />
                  )}
                </Typography>
              </Box>

              <Box color={"#494646"}>
                <Typography
                  fontFamily={"monospace"}
                  fontWeight={"bold"}
                  color="grey"
                >
                  {!isLoading ? (
                    "Origem:"
                  ) : (
                    <Skeleton
                      variant="text"
                      height={"100%"}
                      width={180}
                      animation="wave"
                    />
                  )}
                </Typography>
                <Typography fontFamily={"monospace"}>
                  {!isLoading ? (
                    card.origin.name
                  ) : (
                    <Skeleton
                      variant="text"
                      height={"100%"}
                      width={180}
                      animation="wave"
                    />
                  )}
                </Typography>
              </Box>
            </CardContent>
          </Box>
        </Box>
      </Card>
    </>
  );
};
