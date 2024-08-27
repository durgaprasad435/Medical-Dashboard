"use client";
import React, { useState } from "react";
import { Box, Tab, Typography, Stack, Avatar, IconButton } from "@mui/material";
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
import { useRouter } from "next/navigation";
const Homepage = ({ tabValue }) => {
  const [value, setValue] = useState(tabValue);
  const router = useRouter();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    newValue == 1 ? router.push("/overview") : router.push("/pads");
  };

  return (
    <Box>
      <Box className="flex max-h-16 flex-row justify-between border-b-2">
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar className="m-3" src="/broken-image.jpg" />
            <Box>
              <Box className="flex flex-row">
                <Typography className="text-[14px] font-semibold">
                  Pulkit
                </Typography>
                <Typography className="relative top-1 ml-1 text-[10px]">
                  19y | M
                </Typography>
              </Box>

              <Typography className="mt-1 text-[10px]">
                UHID 11 +91 9876543210
              </Typography>
            </Box>
          </Flex>
          <Stack direction="row" className="ml-3" spacing={1}>
            <IconButton
              color="primary"
              className="top-3 h-fit rounded-md bg-blue-100 p-2"
            >
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton
              color="success"
              className="top-3 h-fit rounded-md bg-green-100 p-2"
            >
              <VideocamIcon fontSize="small" />
            </IconButton>
            <IconButton
              color="secondary"
              className="top-3 h-fit rounded-md bg-pink-100 p-2"
            >
              <InsertLinkIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Flex>
        <TabContext value={value}>
          <Box className="flex flex-row items-center justify-center">
            <TabList onChange={handleChange} className="max-h-16 text-xs">
              <Tab
                icon={<AppsIcon fontSize="small" />}
                iconPosition="start"
                label="Overview"
                value="1"
                className="p-0 text-xs capitalize"
              />
              <Tab
                icon={<LocalParkingIcon fontSize="small" />}
                iconPosition="start"
                className="p-0 text-xs capitalize"
                label="Pads"
                value="2"
              />
            </TabList>
          </Box>
        </TabContext>
        <Box className="m-5 flex flex-row">
          <Typography className="text-sm">
            <TitleIcon fontSize="small" className="text-gray-500" /> Templates
          </Typography>
          <Typography className="ml-4 text-sm">
            <SettingsIcon fontSize="small" className="mr-1 text-gray-500" />
            Configure your pad
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Homepage;
