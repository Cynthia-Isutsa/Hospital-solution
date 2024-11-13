"use client";

import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Control } from "react-hook-form";
import { FormFieldType } from "./forms/PatientForm";
import  Image  from "next/image";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'
import { E164Number } from "libphonenumber-js/core";

interface CustomProps {
  control: Control<any>;
  placeholder: string;
  label?: string;
  name: string;
  fieldType: FormFieldType;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
}


const RenderInput = ({field, props}: {field:any, props: CustomProps}) => {
  const {
    placeholder,
    label,
    name,
    fieldType,
    iconSrc,
    iconAlt,
    disabled,
    dateFormat,
    showTimeSelect,
    children,
    renderSkeleton,
  } = props;


  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className=" flex border bg-dark-400 rounded-md border-dark-500">
          {iconSrc && (
            <Image
              src={iconSrc}
              alt={iconAlt || "icon"}
              height={24}
              width={24}
              className="ml-2"
            />
          )}
          <FormControl>
        <Input
          {...field}
          placeholder={placeholder}
          disabled={disabled}
          className="shad-input border-0"
        />
        </FormControl>
        </div>
      );
    case FormFieldType.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
          // {...field}
          defaultCountry="KE"
          placeholder={placeholder}
          international
          withCountryCallingCode
          value={field.value as E164Number}
          disabled={disabled}
          onChange={field.onChange}
          className="input-phone"
        />
        </FormControl>
      );
    case FormFieldType.DATE_PICKER:
      return (
        <Input
          {...field}
          placeholder={placeholder}
          disabled={disabled}
          className="shad-input"
        />
      );
    case FormFieldType.SELECT:
      return (
        <Input
          {...field}
          placeholder={placeholder}
          disabled={disabled}
          className="shad-input"
        />
      );
    case FormFieldType.SKELETON:
      return renderSkeleton ? renderSkeleton(field) : null;
    default:
      return null;
  }
};





const CustomFormField = (props: CustomProps) => {
  const {
    control,
    placeholder,
    label,
    name,
    fieldType,
    iconSrc,
    iconAlt,
    disabled,
    dateFormat,
    showTimeSelect,
    children,
    renderSkeleton,
  } = props;


 

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}
          

          <RenderInput field={field} props={props} />

          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
