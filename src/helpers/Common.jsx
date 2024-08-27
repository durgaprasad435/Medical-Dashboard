"use client";
import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  IconButton,
  Stack,
  TextField,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Divider,
} from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
function Common({ heading, placeholder, isExaminationPage }) {
  return (
    <div>
      <Box className="mt-1" id="examination-findings">
        <Card>
          <CardContent className="px-4 pt-4">
            <Stack direction="row" className="float-left">
              <IconButton className="bottom-2 rounded-md bg-blue-500 p-1">
                {isExaminationPage ? (
                  <ContentPasteSearchIcon
                    fontSize="small"
                    className="text-white"
                  />
                ) : (
                  <SettingsIcon fontSize="small" className="text-white" />
                )}
              </IconButton>
              <Typography className="relative bottom-1 ml-2 text-[14px] font-semibold">
                {heading}
              </Typography>
              {!isExaminationPage ? (
                <Typography className="relative bottom-1 ml-2 h-fit rounded-sm bg-gray-100 p-1 text-[10px] text-gray-500">
                  ICD-10
                </Typography>
              ) : null}
            </Stack>
            <Stack direction="row" className="float-right">
              <IconButton className="bottom-2 mr-3 rounded-md bg-gray-100 p-1">
                <SaveOutlinedIcon fontSize="small" className="text-gray-500" />
              </IconButton>
              <IconButton className="bottom-2 rounded-md bg-gray-100 p-1">
                <FormatSizeIcon fontSize="small" className="text-blue-400" />
              </IconButton>
            </Stack>
          </CardContent>
          <CardContent className="px-4 py-0">
            <FormControl fullWidth>
              <OutlinedInput
                placeholder={placeholder}
                size="small"
                className="text-sm font-medium"
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default Common;
