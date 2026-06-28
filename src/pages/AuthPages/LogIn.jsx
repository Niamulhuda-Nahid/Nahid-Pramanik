import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import useLogin from "./use-login";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { Label } from "@/components/ui/label";

export default function LogIn() {
  const { form, onSubmit } = useLogin();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="text-3xl text-center flex items-center justify-center min-h-screen">
      <div className="max-w-md w-full border border-primary/20 p-5 rounded-lg shadow-[0_0_20px_8px_rgba(92,225,230,0.3)]">
        <div className="text-center mb-14">
          <h1 className="text-[32px] font-bold text-primary font-libre mb-1">
            Welcome Back
          </h1>
          <p className="text-lg font-normal text-[#919EAB]">
            Sign in to manage your account and access exclusive features.
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className={`text-left`}>
                  <Label>Email</Label>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      className="placeholder:text-[#919EAB] placeholder:text-base placeholder:font-normal h-14 focus-visible:ring-primary/30 focus-visible:border-primary/50 focus-visible:ring-2 text-primary/70 text-base font-medium bg-[#191919] border-[#434343] focus-visible:border pl-5"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className={`text-left`}>
                  <Label>Password</Label>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                        className="placeholder:text-[#919EAB] placeholder:text-base placeholder:font-normal h-14 focus-visible:ring-primary/30 focus-visible:border-primary/50 focus-visible:ring-2 text-primary/70 text-base font-medium bg-[#191919] border-[#434343] focus-visible:border pl-5"
                        {...field}
                      />
                      <button
                        type="button"
                        className="absolute top-[50%] right-3 text-muted-foreground transform -translate-y-1/2 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <Eye /> : <EyeOff />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full h-15 text-lg font-semibold cursor-pointer text-[#141414] flex items-center justify-center rounded-md mt-7 bg-primary!"
            >
              Log In
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
