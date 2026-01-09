"use client";

import { useState } from "react";
// import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";

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
import { LoginSchema, TypeLoginSchema} from "@/validations/login.validation";
import { Login } from "@/server/login";

export function FormLogin() {
  // const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<TypeLoginSchema>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "test_email@example.com",
      password: "securePass123",
    },
  });

  async function onSubmit(_values: FieldValues) {
    setIsLoading(true);

    try {
      await Login(_values);
    } catch (error) {
      if (error instanceof AxiosError) {
        const data = error.response?.data;

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

        <Button type="submit" className="w-full mb-3" disabled={isLoading}>{isLoading ? "Loading..." : "Submit"}</Button>
      </form>
    </Form>
  );
}