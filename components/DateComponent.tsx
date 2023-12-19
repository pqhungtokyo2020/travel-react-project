"use client";
import { useState } from "react";
import { IOptions } from "tailwind-datepicker-react/types/Options";
import DatePicker from "tailwind-datepicker-react";

const DateComponent = () => {

  const [show, setShow] = useState<boolean>(false)
  const options: IOptions = {
    autoHide: true,
    todayBtn: true,
    clearBtn: true,
    inputDateFormatProp: {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    },
    datepickerClassNames: "",
    language: "en-UK",
    theme: {
      background: "",
      todayBtn: "",
      clearBtn: "",
      icons: "",
      text: "",
      disabledText: "",
      input: "",
      inputIcon: "",
      selected: "",
    },
  }
  return (
    <DatePicker show={show} setShow={(state) => setShow(state)} options={options} classNames="absolute" />
  );
};

export default DateComponent;
