"use client";

import { Control } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import PhoneInput from "react-phone-number-input";
import Image from "next/image";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  SELECT = "select",
  PHONE_INPUT = "phone_input",
  DATE = "date",
}

interface CustomFormFieldProps {
  fieldType: FormFieldType;
  control: Control<any>;
  name: string;
  label: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  options?: { label: string; value: string }[];
}

const CustomFormField = ({
  fieldType,
  control,
  name,
  label,
  placeholder,
  iconSrc,
  iconAlt,
  options,
}: CustomFormFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className="text-sm font-medium">
            {label}
          </FormLabel>
          <FormControl>
            <div className="flex-center h-12 rounded-md border border-dark-400 bg-dark-400 px-4 py-2">
              {iconSrc && (
                <Image
                  src={iconSrc}
                  alt={iconAlt || "icon"}
                  width={24}
                  height={24}
                  className="mr-2"
                />
              )}

              {fieldType === FormFieldType.INPUT && (
                <Input
                  placeholder={placeholder}
                  {...field}
                  className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-dark-700 placeholder:text-dark-600"
                />
              )}

              {fieldType === FormFieldType.TEXTAREA && (
                <Textarea
                  placeholder={placeholder}
                  {...field}
                  className="min-h-[100px] border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-dark-700 placeholder:text-dark-600"
                />
              )}

              {fieldType === FormFieldType.SELECT && options && (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="border-0 bg-transparent focus:ring-0 focus:ring-offset-0 p-0 text-dark-700">
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {options.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}

              {fieldType === FormFieldType.PHONE_INPUT && (
                <PhoneInput
                  international
                  defaultCountry="US"
                  placeholder={placeholder}
                  value={field.value}
                  onChange={field.onChange}
                  className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 w-full text-dark-700 placeholder:text-dark-600"
                />
              )}

              {fieldType === FormFieldType.DATE && (
                <Input
                  type="date"
                  placeholder={placeholder}
                  {...field}
                  className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-dark-700 placeholder:text-dark-600"
                />
              )}
            </div>
          </FormControl>
          <FormMessage className="text-red-500" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;