"use client";

import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RegistrationSchema, TypeRegistrationSchema } from "@/validations/registration.validation";

export function FormRegistration() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<TypeRegistrationSchema>({
    resolver: zodResolver(RegistrationSchema),
    defaultValues: {
      name: "test",
      email: "test_email@example.com",
      password: "securePass123",
      confirm_password: "securePass123",
    }
  });

  async function onSubmit(_values: FieldValues) {
    setIsLoading(true);
    
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_URL_BACKEND}/authentications/registration`, { ..._values });

      alert(res.data.message);
    } catch (error) {
      if (error instanceof AxiosError) {
        const data = error.response?.data;
        console.log(error);

        if (data.message) {
          alert(data.message);
        }

        if (data.messages) {
          console.log(data.messages);
        }
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirm_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full mb-3" disabled={isLoading}>{isLoading ? "Loading..." : "Submit"}</Button>
      </form>
    </Form>
  );
}