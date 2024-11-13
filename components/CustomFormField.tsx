"use client"

import React from 'react'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Control } from 'react-hook-form'
import { FormFieldType } from './forms/PatientForm'

interface CustomProps {
    control: Control<any>,
    description?: string,
    placeholder: string,
    label: string,
    name:string
  fieldType: FormFieldType;
}
const CustomFormField = ({control, description, placeholder, label, name, fieldType}: CustomProps) => {
 
  return (
    <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className="flex-1">
        {fieldType !== FormFieldType.CHECKBOX && label ? (
         <FormLabel>{label}</FormLabel>
        ) : (
          <textarea placeholder={placeholder} {...field} />
        )}
        {/* <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input placeholder={placeholder} {...field} />
        </FormControl>
        <FormDescription>
          {description}
        </FormDescription>
        <FormMessage /> */}
      </FormItem>
    )}
  />
  )
}

export default CustomFormField