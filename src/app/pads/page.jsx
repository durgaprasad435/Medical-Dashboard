"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  IconButton,
  Stack,
  TextField,
  InputAdornment,
  Checkbox,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { patientHistoryTitles } from "../../helpers/buttons";
import MedicationIcon from "@mui/icons-material/Medication";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import AssistantIcon from "@mui/icons-material/Assistant";
import VisibilityIcon from "@mui/icons-material/Visibility";
import HistoryIcon from "@mui/icons-material/History";
import Calculators from "../../helpers/Vitals";
import { VitalPageIcons } from "../../helpers/buttons";
import VitalsFields from "../../helpers/VitalFields.json";
import Common from "../../helpers/Common";
import HeaderSection from "../../helpers/Header";
import moment from "moment";
import { CloudDone } from "@material-ui/icons";
const Pads = () => {
  var calFields = VitalsFields.fields;
  var copyVitalFields = VitalPageIcons.concat(calFields);
  const [prescription, setPrescription] = useState([]);
  const [fields, setFields] = useState(copyVitalFields);
  const router = useRouter();
  function formatDate(date) {
    if (date == null || date == "") return "-";
    var mt = new moment(date);
    return mt.format("DD/MM/yyyy");
  }
  const OnChange = (value, title, dataType) => {
    var fieldIndex = fields.findIndex((item) => item.fieldName == title);
    fields[fieldIndex].value = value;
    if (dataType == "date") {
      var date = formatDate(value);
      fields[fieldIndex].value = date;
    }
  };
  const FinishPrescription = async () => {
    await sessionStorage.setItem("precription", JSON.stringify(fields));
    router.push("/finalreport");
  };
  return (
    <Box>
      <Box className="sticky top-0 z-[1] bg-white">
        <HeaderSection tabValue="2" />
      </Box>
      <Box className="bg-gray-100 p-3">
        <Box id="symptoms">
          <Common
            heading="Symptoms"
            placeholder="Start typing Symptoms / Chief complaints"
          />
        </Box>
        <Box className="mt-3" id="vitals">
          <Calculators hangleValues={OnChange} />
        </Box>
        <Box mt={2} id="examination-findings">
          <Common
            heading="Examination Findings"
            placeholder="Start typing findings..."
            isExaminationPage="true"
          />
        </Box>
        <Box mt={3} id="patient-history">
          <Card>
            <CardContent className="px-4 pt-4">
              <Stack direction="row" className="float-left">
                <IconButton className="bottom-2 rounded-md bg-red-600 p-1">
                  <MedicationIcon fontSize="small" className="text-white" />
                </IconButton>
                <Typography className="relative bottom-1 ml-2 text-[14px] font-semibold">
                  Patient Medical History
                </Typography>
              </Stack>
              <Stack direction="row" className="float-right">
                <Box className="relative bottom-1.5">
                  <Typography className="mr-2 text-xs font-semibold">
                    <Checkbox size="small" />
                    No known medical history
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  className="bottom-3 my-2 h-[30px] border-2 p-2 text-xs font-bold capitalize text-blue-700"
                  endIcon={<SettingsIcon />}
                >
                  Configure
                </Button>
              </Stack>
            </CardContent>
            <CardContent>
              <Box className="mb-8 mt-2 grid grid-cols-3 justify-evenly gap-4">
                {patientHistoryTitles.map((title, index) => {
                  return (
                    <Stack direction="row">
                      <IconButton
                        size="small"
                        className="bottom-1 mr-3 rounded-3xl bg-gray-100 p-1"
                      >
                        <HistoryIcon className="text-lg text-gray-400" />
                      </IconButton>
                      <Typography fontSize="small" className="pt-.5">
                        {title}
                      </Typography>
                    </Stack>
                  );
                })}
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box id="footer" className="absolute top-[93vh]">
          <Card className="fixed w-[97.4vw] bg-blue-800">
            <Stack direction="row" className="float-left m-2">
              <Button
                variant="text"
                className="mr-3 text-xs font-bold capitalize text-white"
              >
                Clear
              </Button>
              <Button
                variant="outlined"
                className="mr-3 border-white text-xs font-bold capitalize text-white"
                startIcon={<LocalPrintshopIcon className="text-white" />}
              >
                Print Settings
              </Button>
              <Button
                variant="outlined"
                className="mr-3 border-white text-xs font-bold capitalize text-white"
                startIcon={<LanguageIcon className="text-white" />}
              >
                हिंदी - Hindi
              </Button>
              <Button
                variant="outlined"
                className="bg-white text-xs font-bold capitalize"
                startIcon={<AssistantIcon color="info" />}
              >
                Ask DocAssist AI
              </Button>
            </Stack>

            <Stack direction="row" className="float-right m-2">
              <Button
                variant="outlined"
                className="mr-3 border-white text-xs font-bold capitalize text-white"
                startIcon={<VisibilityIcon className="text-white" />}
              >
                Preview
              </Button>
              <Button
                variant="outlined"
                className="mr-3 border-white p-[unset] text-xs font-bold capitalize text-white"
              >
                <LocalPrintshopIcon />
              </Button>
              <Button
                variant="outlined"
                className="bg-white text-xs font-bold capitalize hover:bg-white"
                startIcon={<ArrowForwardOutlinedIcon color="info" />}
                onClick={FinishPrescription}
              >
                Finish Prescription
              </Button>
            </Stack>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Pads;
