import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import useSubmitContact from "./use-submitContact";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const { form, onSubmit } = useSubmitContact();

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mt-6">
          <div className="flex flex-col md:flex-row md:items-center gap-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="gap-1.5 flex-1">
                  <FormLabel className="text-[#E7ECEC] text-base font-medium font-playfair">
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      className="placeholder:text-[#919EAB] placeholder:text-base placeholder:font-normal h-14 focus-visible:ring-[#5ce1e6]/20 focus-visible:border-[#5ce1e6]/40 focus-visible:ring-2 text-[#5ce1e6]/70 text-base font-medium bg-[#0c0f1e] border-[#5ce1e6]/20 focus-visible:border"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="gap-1.5 flex-1">
                  <FormLabel className="text-[#E7ECEC] text-base font-medium font-playfair">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="placeholder:text-[#919EAB] placeholder:text-base placeholder:font-normal h-14 focus-visible:ring-[#5ce1e6]/20 focus-visible:border-[#5ce1e6]/40 focus-visible:ring-2 text-[#5ce1e6]/70 text-base font-medium bg-[#0c0f1e] border-[#5ce1e6]/20 focus-visible:border"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="gap-1.5 flex-1">
                <FormLabel className="text-[#E7ECEC] text-base font-medium font-playfair">
                  Subject
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Your Subject"
                    className="placeholder:text-[#919EAB] placeholder:text-base placeholder:font-normal h-14 focus-visible:ring-[#5ce1e6]/20 focus-visible:border-[#5ce1e6]/40 focus-visible:ring-2 text-[#5ce1e6]/70 text-base font-medium bg-[#0c0f1e] border-[#5ce1e6]/20 focus-visible:border"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="gap-1.5 flex-1">
                <FormLabel className="text-[#E7ECEC] text-base font-medium font-playfair">
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell me about your vision..."
                    className="placeholder:text-[#919EAB] placeholder:text-base placeholder:font-normal h-28 focus-visible:ring-[#5ce1e6]/20 focus-visible:border-[#5ce1e6]/40 focus-visible:ring-2 text-[#5ce1e6]/70 text-base font-medium bg-[#0c0f1e] border-[#5ce1e6]/20 focus-visible:border resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full h-15 text-lg font-semibold cursor-pointer text-[#050B14] flex items-center justify-center rounded-lg bg-[#5ce1e6]!"
          >
            Send Message
          </Button>
        </form>
      </Form>
    </div>
  );
}
