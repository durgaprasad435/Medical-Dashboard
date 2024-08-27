"use client";
import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import VaccinesOutlinedIcon from "@mui/icons-material/VaccinesOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { Image } from "@chakra-ui/react";
import HeaderSection from "../../helpers/Header";
const Overview = (props) => {
  const router = useRouter();
  return (
    <Box>
      <Box className="sticky top-0 z-[1] bg-white">
        <HeaderSection tabValue="1" />
      </Box>
      <Box className="relative bg-gray-100 p-3">
        <Box>
          <Card>
            <CardContent className="flex h-[60vh] flex-row items-center justify-center">
              <Box className="flex flex-col items-center">
                <Image
                  borderRadius="100px"
                  boxSize="120px"
                  src="https://cdn.pixabay.com/photo/2019/10/13/08/20/prescription-4545598_960_720.jpg"
                />
                <Typography variant="subtitle2" className="mt-2 font-semibold">
                  No precription created!{" "}
                </Typography>
                <Typography
                  variant="subtitle2"
                  className="mt-2 flex-wrap text-gray-500"
                >
                  Whenever the patient visits you next again,you will see your
                  last prescription here
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Stack direction="row" className="mt-4 h-[35vh]">
          <Card>
            <CardContent>
              <Typography className="text-sm font-semibold">
                <IconButton className="bottom-1 mr-2 rounded-md bg-yellow-500 p-1">
                  {" "}
                  <ScienceOutlinedIcon className="text-white" />{" "}
                </IconButton>
                Lab Results
              </Typography>
              <Divider />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium eveniet doloribus sed dolores, ducimus voluptatibus
              eligendi fugit reiciendis aliquam quasi quo, ipsa rerum sit,
              repellendus voluptas nisi perspiciatis culpa nam?
            </CardContent>
          </Card>
          <Card className="ml-4">
            <CardContent>
              <Typography className="text-sm font-semibold">
                <IconButton className="bottom-1 mr-2 rounded-md bg-blue-500 p-1">
                  <VaccinesOutlinedIcon className="text-white" />
                </IconButton>
                Vitals
              </Typography>
              <Divider />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium eveniet doloribus sed dolores, ducimus voluptatibus
              eligendi fugit reiciendis aliquam quasi quo, ipsa rerum sit,
              repellendus voluptas nisi perspiciatis culpa nam?
            </CardContent>
          </Card>
        </Stack>
        <Box className="absolute top-[83vh]">
          <Card className="fixed w-[97.4vw] bg-blue-800">
            <Button
              variant="outlined"
              className="float-right m-2 bg-white text-xs font-bold capitalize hover:bg-white"
              startIcon={<ArrowForwardOutlinedIcon color="info" />}
              onClick={() => {
                router.push("/pads");
              }}
            >
              Continue To Prescription
            </Button>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Overview;
