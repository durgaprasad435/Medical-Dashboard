"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Tab,
  Typography,
  Stack,
  Avatar,
  IconButton,
  Button,
  Card,
  CardContent,
  TextField,
  Paper,
} from "@mui/material";
import { Flex } from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AppsIcon from "@mui/icons-material/Apps";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import EditIcon from "@mui/icons-material/Edit";
import VideocamIcon from "@mui/icons-material/Videocam";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import TitleIcon from "@mui/icons-material/Title";
import SettingsIcon from "@mui/icons-material/Settings";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import { helperButtons } from "../../helpers/buttons";
import { useRouter } from "next/navigation";
import PrescriptionPDF from "../../helpers/PrescriptionPDF";
import generatePDF, { Options } from "react-to-pdf";

function FinalReport() {
  const [precriptionData, setPrescriptionData] = useState([]);
  const [value, setValue] = useState("1");
  const router = useRouter();
  var targetRef = useRef(null);
  const options: Options = {
    filename: "prescription.pdf",
    page: {
      margin: 5,
    },
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const OnPrint = () => {
    generatePDF(targetRef, options);
  };
  useEffect(() => {
    var stringifiedDate = sessionStorage.getItem("precription");
    var parsedData = JSON.parse(stringifiedDate);
    setPrescriptionData(parsedData);
    console.log(parsedData);
  }, []);
  return (
    <Box>
      <Box className="border-b-1 sticky top-0 z-[1] flex max-h-16 flex-row justify-between bg-white shadow-md">
        <Flex>
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar className="m-3" src="/broken-image.jpg" />
            <Box>
              <Box className="flex flex-row">
                <Typography className="font-[600]">Test Patient 1</Typography>
                <Typography className="relative top-1.5 ml-1 text-[10px]">
                  51y 1m | M
                </Typography>
              </Box>
              <Typography className="text-xs">UHID4 +91 9000589042</Typography>
            </Box>
          </Flex>

          <IconButton
            color="success"
            className="top-3 ml-8 h-fit rounded-md bg-green-100 p-2"
          >
            <VideocamIcon fontSize="small" />
          </IconButton>
        </Flex>
        <Box className="m-5 flex flex-row">
          <Typography className="ml-4 text-sm">
            <SettingsIcon fontSize="small" className="mr-1 text-gray-500" />
            Configure your pad
          </Typography>
        </Box>
      </Box>
      <Box className="flex min-h-[90.7vh]">
        <Box className="max-w-[40vw] flex-1 border-r-2 bg-gray-50">
          <Box className="p-6">
            <Typography className="text-sm text-gray-500">
              Sending prescription link to the patient:{" "}
            </Typography>
            <Stack direction="row" mt={3}>
              <Box className="flex flex-row justify-between">
                <WhatsAppIcon className="text-gray-500" />
                <Typography className="ml-3 text-sm text-gray-500">
                  Whatsapp & SMS sent to{" "}
                  <span className="font-bold text-blue-700">
                    +91 9000589042
                  </span>
                  <EditIcon fontSize="small" className="ml-1 text-blue-700" />
                </Typography>
                <DoneOutlinedIcon
                  fontSize="small"
                  className="float-right ml-20 text-green-600"
                />
              </Box>
            </Stack>
            <Typography className="ml-9 text-sm font-semibold text-green-600">
              SUCCESS
            </Typography>
            <Box className="mt-8 grid grid-cols-2 gap-3">
              {helperButtons.map((item) => {
                return (
                  <Button
                    key={item.name}
                    variant="contained"
                    className="h-fit rounded-3xl bg-blue-700 p-1 text-sm capitalize"
                    startIcon={item.icon}
                  >
                    {item.name}
                  </Button>
                );
              })}
            </Box>
            <Card className="mt-[26%] rounded-xl px-6">
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList onChange={handleChange} className="text-xs">
                    <Tab
                      label="New Template"
                      value="1"
                      className="p-0 text-sm font-semibold capitalize"
                    />
                    <Tab
                      label="Update existing Template"
                      value="2"
                      className="ml-2 p-0 text-sm font-semibold capitalize"
                    />
                  </TabList>
                </Box>
                <TabPanel value="1" className="px-0 py-4">
                  <Stack direction="row">
                    <TextField
                      fullWidth
                      placeholder="Template Name"
                      size="small"
                      sx={{
                        "& .MuiInputBase-root": {
                          height: "35px",
                        },
                      }}
                    />
                    <Button
                      disabled
                      variant="contained"
                      className="ml-5 bg-blue-500"
                    >
                      Save
                    </Button>
                  </Stack>
                </TabPanel>
                <TabPanel value="2"></TabPanel>
              </TabContext>
            </Card>
          </Box>
        </Box>
        <Box className="max-h-[83vh] flex-1 overflow-y-scroll border-r-2 bg-gray-700">
          <div
            className="m-5 bg-white px-[45px] py-5"
            ref={targetRef}
            id="prescription"
          >
            <PrescriptionPDF PrescriptionData={precriptionData} />
          </div>
        </Box>
        <Box className="absolute top-[92.4vh]">
          <Card className="fixed w-full border-t-2">
            <Button
              variant="contained"
              className="float-right m-2 bg-blue-700 p-2 text-xs font-bold capitalize"
            >
              End Visit
            </Button>
            <Button
              variant="outlined"
              className="float-right m-2 bg-white text-xs font-bold capitalize hover:bg-white"
              startIcon={<LocalPrintshopIcon color="info" />}
              onClick={OnPrint}
            >
              Print
            </Button>
            <Button
              variant="outlined"
              className="float-right m-2 bg-white p-2 text-xs font-bold capitalize"
              onClick={() => {
                router.push("/pads");
              }}
            >
              Edit Prescription
            </Button>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}

export default FinalReport;
