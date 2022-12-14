import React from "react";
import DatePicker from "react-datepicker";

function RenderDateRangeField(props) {
  const { label, startDate, endDate, handleStartChange, handleEndChange } =
    props;
  const [startDateIsOpened, setStartDateIsOpen] = React.useState(false);
  const [endDateIsOpened, setEndDateIsOpen] = React.useState(false);

  const handleDateChangeRaw = (e) => {
    e.preventDefault();
  };

  return (
    <div data-testid="datepicker-range" className="datepicker-range-container">
      <div className="MuiFormControl-root MuiTextField-root css-1u3bzj6-MuiFormControl-root-MuiTextField-root">
        <label
          className={`MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-sizeSmall MuiInputLabel-outlined MuiFormLabel-colorPrimary ${
            startDate || startDateIsOpened
              ? "css-1sumxir-MuiFormLabel-root-MuiInputLabel-root MuiInputLabel-shrink MuiFormLabel-filled css-u9osun"
              : "css-1pysi21-MuiFormLabel-root-MuiInputLabel-root css-cktaik"
          } ${startDateIsOpened ? "Mui-focused" : ""}`}
          data-shrink={startDate || startDateIsOpened ? true : false}
          htmlFor="startDateRange"
        >
          {label.from}
        </label>
        <div
          className={`MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-formControl MuiInputBase-sizeSmall css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root css-1v4ccyo ${
            startDateIsOpened ? "Mui-focused" : ""
          }`}
        >
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              handleStartChange(date);
            }}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            className="datepicker-range"
            onCalendarOpen={() => setStartDateIsOpen(true)}
            onCalendarClose={() => setStartDateIsOpen(false)}
            maxDate={endDate}
            showTimeSelect
            withPortal
            onChangeRaw={handleDateChangeRaw}
            dateFormat="yyyy-MM-dd HH:mm:ss"
            isClearable={startDate ? true : false}
          />
          <fieldset
            aria-hidden="true"
            className="MuiOutlinedInput-notchedOutline css-1d3z3hw-MuiOutlinedInput-notchedOutline css-igs3ac"
          >
            <legend
              className={`${
                startDate || startDateIsOpened ? "css-1in441m" : "css-1ftyaf0"
              } ${startDateIsOpened ? "Mui-focused" : ""}`}
            >
              <span>{label.from}</span>
            </legend>
          </fieldset>
        </div>
      </div>

      <div className="MuiFormControl-root MuiTextField-root css-1u3bzj6-MuiFormControl-root-MuiTextField-root">
        <label
          className={`MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-sizeSmall MuiInputLabel-outlined MuiFormLabel-colorPrimary ${
            endDate || endDateIsOpened
              ? "css-1sumxir-MuiFormLabel-root-MuiInputLabel-root MuiInputLabel-shrink MuiFormLabel-filled css-u9osun"
              : "css-1pysi21-MuiFormLabel-root-MuiInputLabel-root css-cktaik"
          } ${endDateIsOpened ? "Mui-focused" : ""}`}
          data-shrink={endDate || endDateIsOpened ? true : false}
          htmlFor="startDateRange"
        >
          {label.to}
        </label>
        <div
          className={`MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-formControl MuiInputBase-sizeSmall css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root css-1v4ccyo ${
            endDateIsOpened ? "Mui-focused" : ""
          }`}
        >
          <DatePicker
            selected={endDate}
            onChange={(date) => {
              handleEndChange(date);
            }}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            className="datepicker-range"
            onCalendarOpen={() => setEndDateIsOpen(true)}
            onCalendarClose={() => setEndDateIsOpen(false)}
            minDate={startDate}
            showTimeSelect
            withPortal
            onChangeRaw={handleDateChangeRaw}
            dateFormat="yyyy-MM-dd HH:mm:ss"
            isClearable={endDate ? true : false}
          />
          <fieldset
            aria-hidden="true"
            className="MuiOutlinedInput-notchedOutline css-1d3z3hw-MuiOutlinedInput-notchedOutline css-igs3ac"
          >
            <legend
              className={`${
                endDate || endDateIsOpened ? "css-1in441m" : "css-1ftyaf0"
              } ${endDateIsOpened ? "Mui-focused" : ""}`}
            >
              <span>{label.to}</span>
            </legend>
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default RenderDateRangeField;
