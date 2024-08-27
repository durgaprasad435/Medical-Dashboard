"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  TextField,
  Card,
  CardContent,
  IconButton,
  Divider,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import { VitalPageIcons } from "./buttons";
import VitalFields from "../helpers/VitalFields.json";
function Vitals(props) {
  return (
    <Box>
      <Card>
        <CardContent className="px-4 pt-4">
          <Stack direction="row" className="float-left">
            <IconButton className="bottom-2 rounded-md bg-blue-800 p-1">
              <DeviceThermostatIcon fontSize="small" className="text-white" />
            </IconButton>
            <Typography className="relative bottom-1 ml-2 text-[14px] font-semibold">
              Vitals
            </Typography>
          </Stack>
          <Stack direction="row" className="float-right">
            <Button
              variant="outlined"
              className="bottom-3 my-2 h-[30px] border-2 p-2 text-xs font-bold capitalize text-blue-700"
              endIcon={<SettingsIcon />}
            >
              Configure
            </Button>
          </Stack>
        </CardContent>
        <CardContent className="px-4">
          <Box className="mt-6 flex flex-row flex-wrap justify-between gap-3">
            {VitalPageIcons.map((item) => {
              return (
                <>
                  <Stack
                    direction="row"
                    className="relative bottom-1 float-left mt-3"
                  >
                    <IconButton
                      size="small"
                      className="bottom-1 mr-3 rounded-3xl bg-gray-100 p-1"
                    >
                      <item.icon className="text-lg text-gray-400" />
                    </IconButton>
                    <Typography fontSize="small" className="pt-.5">
                      {item.fieldName}
                    </Typography>
                    <TextField
                      onChange={(e) => {
                        props.hangleValues(e.target.value, item.fieldName);
                      }}
                      sx={{
                        "& .MuiInputBase-root": {
                          height: "27px",
                          width: "150px",
                          marginLeft: "16px",
                        },
                      }}
                    />
                  </Stack>
                </>
              );
            })}
          </Box>
        </CardContent>
        <CardContent className="py-0">
          <Divider />
          <Box className="mt-3">
            <Stack direction="row">
              <Typography className="mt-3 text-xs font-semibold">
                CALCULATORS:
              </Typography>
              <Box className="ml-4 flex flex-row flex-wrap items-center gap-3">
                {VitalFields.fields.map((field, index) => {
                  return (
                    <Box className="max-w-fit rounded-md bg-gray-100 p-2">
                      <Stack direction="row" key={index}>
                        <Typography
                          mt="4px"
                          className="text-xs font-semibold text-gray-500"
                        >
                          {field.fieldName}
                        </Typography>
                        <TextField
                          type={field.data_type}
                          onChange={(e) => {
                            props.hangleValues(
                              e.target.value,
                              field.fieldName,
                              field.data_type,
                            );
                          }}
                          sx={{
                            "& .MuiInputBase-root": {
                              height: "27px",
                              width: "150px",
                              marginLeft: "10px",
                              color: "gray",
                            },
                          }}
                        />
                      </Stack>
                    </Box>
                  );
                })}
              </Box>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Vitals;
