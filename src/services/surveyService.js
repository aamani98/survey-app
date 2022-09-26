import axios from "axios";
import {
  SENDINBLUE_API_ENDPOINT,
  SENDINBLUE_API_KEY,
  SENDER_EMAIL,
  RECEIVER_EMAIL,
  SENNDER_NAME,
  RECIEVER_NAME,
} from "@env";

export const submitSurvey = async (payload) =>
  await axios.post(
    SENDINBLUE_API_ENDPOINT,
    {
      sender: {
        name: SENNDER_NAME,
        email: SENDER_EMAIL,
      },
      to: [
        {
          email: RECEIVER_EMAIL,
          name: RECIEVER_NAME,
        },
      ],
      subject: "New Survey Response",
      htmlContent: payload,
    },
    {
      headers: {
        accept: "application/json",
        "api-key": SENDINBLUE_API_KEY,
        "content-type": "application/json",
      },
    }
  );
