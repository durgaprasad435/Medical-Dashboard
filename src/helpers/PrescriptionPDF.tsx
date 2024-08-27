"use client";
import React from "react";
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
  Divider,
} from "@mui/material";
import { Flex } from "@chakra-ui/react";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
function PrescriptionPDF({ PrescriptionData }) {
  return (
    <Box>
      <Box className="flex flex-row justify-between">
        <Flex>
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <IconButton className="my-3 mr-2 bg-purple-100">
              <LocalHospitalIcon
                fontSize="large"
                className="m-0 text-purple-800"
              />
            </IconButton>
            <Box>
              <Box className="flex flex-row">
                <Typography className="font-semibold text-purple-800">
                  Dr. Manoj Kumar Gupta
                </Typography>
              </Box>
              <Typography className="mt-1 text-[14px] font-medium text-purple-800">
                MBBS,MS
              </Typography>
              <Typography
                className="text-[14px] text-purple-800"
                color="#6b21a8"
              >
                Orthopedist
              </Typography>
            </Box>
          </Flex>
        </Flex>
        <Box className="mt-[10px] flex max-w-[36%] flex-col text-end">
          <Typography className="font-semibold text-purple-800">
            Shri Shyam Hospital
          </Typography>
          <Typography className="text-[14px] text-purple-800">
            5. Dhani Baghwanwali,NH 48,Kotputil- Behror 6. City-Kotputli 7.
            State- Rajasthan 8. Pincode-303108
          </Typography>
        </Box>
      </Box>
      <Divider className="mt-2 border-2 border-gray-500" />

      <Box className="flex flex-row justify-between">
        <Box className="mt-5 flex flex-row">
          <Typography className="text-[14px] font-semibold">
            Test Patient 2,
            <span className="ml-1 text-sm font-medium">
              female,50 year(s), +919000589042
            </span>
          </Typography>
        </Box>
        <Box>
          <Typography className="mt-5 text-sm font-bold">
            27/08/2024, 16:50PM
          </Typography>
        </Box>
      </Box>
      <Typography className="text-sm font-semibold">
        UHID: <span className="text-[11px]">UHID4</span>
      </Typography>
      <Divider className="border-1 mt-5 border-gray-500" />
      <Box className="py-5">
        <Box className="grid gap-3">
          {PrescriptionData.map((item: any, ind: any) => {
            return (
              <>
                <Stack
                  direction="row"
                  className="flex flex-row items-start justify-between px-5"
                >
                  <Typography className="text-sm font-semibold">
                    {item.fieldName}
                  </Typography>

                  <Typography className="text-sm">{item.value}</Typography>
                </Stack>
              </>
            );
          })}
        </Box>
      </Box>
      <Divider className="border-1 mt-1 border-gray-500" />
    </Box>
  );
}

export default PrescriptionPDF;
