"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Snackbar } from "@mui/material";

import { Bio } from "@/data/constants";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type ContactForm = {
  userName: string;
  email: string;
  subject: string;
  message: string;
};
const Contact = () => {
  const { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } = process.env;

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  // Alert message
  const [alertSeverity, setAlertSeverity] = useState<"success" | "error">("success");
  const [alertMessage, setAlertMessage] = useState("");

  // Form
  const form = useRef<HTMLFormElement>(null);
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<ContactForm>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<ContactForm> = async (data) => {
    setLoading(true);
    try {
      const prepareData = {
        ...data,
        to_email: Bio.email,
        to_name: Bio.name,
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID as string,
        EMAILJS_TEMPLATE_ID as string,
        prepareData,
        EMAILJS_PUBLIC_KEY as string
      );

      if (result.status === 200 && result.text === "OK") {
        setAlertSeverity("success");
        setAlertMessage("Send message successfully");
        setOpen(true);
        form.current?.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error sending form:", error.message);
        setAlertSeverity("error");
        setAlertMessage("Failed to send message. Please try again later.");
      } else {
        console.error("Unexpected error:", error);
        setAlertSeverity("error");
        setAlertMessage("An unexpected error occurred.");
      }
      setOpen(true);
    } finally {
      setLoading(false);
    }
  };
  

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center relative z-10 p-0 "
    >
      <div className="relative flex flex-col justify-between items-center w-full max-w-[1350px] pt-20 gap-3">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mt-3 lg:mt-5">
          Contact
        </h2>
        <p className="max-w-7xl text-center text-base lg:text-lg">
          Feel free to reach out to me for any questions or opportunities!
        </p>
      </div>

      <form
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
        className="w-[95%] max-w-[1100px] flex flex-col mt-7 mx-4 gap-3 p-8 rounded-2xl bg-card shadow-[0px_0px_12px_4px_rgba(0,0,0,0.4)]"
      >
        <h3 className="text-2xl font-bold mb-2 text-text_primary">
          Email me directly{" "}
        </h3>

        <Controller
          control={control}
          name="userName"
          render={({ field: { onChange, onBlur, value } }) => (
            <input
              autoComplete="off"
              name="userName"
              placeholder={"Please enter your name"}
              onBlur={onBlur}
              value={value}
              onChange={onChange}
              required
              className="flex flex-1 text-lg bg-transparent border-[1px] border-solid border-text_secondary rounded-xl py-3 px-4 hover:border-primary
              focus:border-primary
              active:border-primary
              focus:outline-none 
            invalid:focus:border-red-500"
            />
          )}
        />

        <Controller
          control={control}
          name="email"
          rules={{
            validate: (value) =>
              /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value),
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <input
              autoComplete="off"
              name="email"
              type="email"
              placeholder={"Please enter your email"}
              onBlur={onBlur}
              value={value}
              onChange={onChange}
              required
              className="flex flex-1 text-lg bg-transparent border-[1px] border-solid border-text_secondary rounded-xl py-3 px-4 
              hover:border-primary
              focus:border-primary
              active:border-primary
              focus:outline-none 
            invalid:focus:border-red-500"
            />
          )}
        />

        <Controller
          control={control}
          name="subject"
          render={({ field: { onChange, onBlur, value } }) => (
            <input
              autoComplete="off"
              name="subject"
              placeholder={"Subject"}
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              required
              className="flex flex-1 text-lg bg-transparent border-[1px] border-solid border-text_secondary rounded-xl py-3 px-4 
              hover:border-primary
              focus:border-primary
              active:border-primary
              focus:outline-none 
            invalid:focus:border-red-500"
            />
          )}
        />

        <Controller
          control={control}
          name="message"
          render={({ field: { onChange, onBlur, value } }) => (
            <textarea
              placeholder={"Enter your message"}
              name="message"
              value={value}
              rows={5}
              onBlur={onBlur}
              onChange={onChange}
              required
              className="flex flex-1 text-lg bg-transparent border-[1px] border-solid border-text_secondary rounded-xl py-3 px-4 
              hover:border-primary
              focus:border-primary
              active:border-primary
              focus:outline-none 
            invalid:focus:border-red-500"
            />
          )}
        />

        <button
          type="submit"
          disabled={loading || !isValid}
          className="w-full flex justify-center items-center gap-2 text-lg font-bold text-white bg-primary py-3 rounded-xl hover:bg-primary/90"
        >
          {loading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
              <p>Loading...</p>
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity={alertSeverity} sx={{ width: "100%" }}>
          {alertMessage}
        </Alert>
      </Snackbar>

    </div>
  );
};

export default Contact;
