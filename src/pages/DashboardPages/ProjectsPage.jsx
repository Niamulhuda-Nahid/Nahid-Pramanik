import React from "react";
import useProjectForm from "./hooks/use-projects";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function ProjectsPage() {
    const { form, onSubmit } = useProjectForm();
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <Label>Project Title</Label>
                <FormControl>
                  <Input
                    placeholder="Project title"
                    className="h-14 bg-[#191919] border-[#434343]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Category */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <Label>Category</Label>
                <FormControl>
                  <Input
                    placeholder="Category"
                    className="h-14 bg-[#191919] border-[#434343]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Short Description */}
          <FormField
            control={form.control}
            name="shortDescription"
            render={({ field }) => (
              <FormItem>
                <Label>Short Description</Label>
                <FormControl>
                  <Textarea
                    rows={3}
                    placeholder="Short description"
                    className="bg-[#191919] border-[#434343]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <Label>Description</Label>
                <FormControl>
                  <Textarea
                    rows={6}
                    placeholder="Project description"
                    className="bg-[#191919] border-[#434343]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Live URL */}
          <FormField
            control={form.control}
            name="liveUrl"
            render={({ field }) => (
              <FormItem>
                <Label>Live URL</Label>
                <FormControl>
                  <Input
                    placeholder="https://"
                    className="h-14 bg-[#191919] border-[#434343]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* GitHub URL */}
          <FormField
            control={form.control}
            name="githubUrl"
            render={({ field }) => (
              <FormItem>
                <Label>GitHub URL</Label>
                <FormControl>
                  <Input
                    placeholder="https://github.com/..."
                    className="h-14 bg-[#191919] border-[#434343]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid md:grid-cols-3 gap-6">
            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <Label>Duration</Label>
                  <FormControl>
                    <Input
                      className="h-14 bg-[#191919] border-[#434343]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <Label>Role</Label>
                  <FormControl>
                    <Input
                      className="h-14 bg-[#191919] border-[#434343]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="client"
              render={({ field }) => (
                <FormItem>
                  <Label>Client</Label>
                  <FormControl>
                    <Input
                      className="h-14 bg-[#191919] border-[#434343]"
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
            name="status"
            render={({ field }) => (
              <FormItem>
                <Label>Status</Label>
                <FormControl>
                  <Input
                    className="h-14 bg-[#191919] border-[#434343]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Technologies */}
          <FormField
            control={form.control}
            name="technologies"
            render={({ field }) => (
              <FormItem>
                <Label>Technologies</Label>
                <FormControl>
                  <Textarea
                    rows={3}
                    placeholder="React, Tailwind CSS, Redux..."
                    value={field.value.join(", ")}
                    onChange={(e) =>
                      field.onChange(
                        e.target.value
                          .split(",")
                          .map((item) => item.trim())
                          .filter(Boolean),
                      )
                    }
                    className="bg-[#191919] border-[#434343]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Features */}
          <FormField
            control={form.control}
            name="features"
            render={({ field }) => (
              <FormItem>
                <Label>Features</Label>
                <FormControl>
                  <Textarea
                    rows={5}
                    placeholder="Feature 1, Feature 2..."
                    value={field.value.join(", ")}
                    onChange={(e) =>
                      field.onChange(
                        e.target.value
                          .split(",")
                          .map((item) => item.trim())
                          .filter(Boolean),
                      )
                    }
                    className="bg-[#191919] border-[#434343]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full h-14 text-lg font-semibold bg-primary text-black"
          >
            Save Project
          </Button>
        </form>
      </Form>
    </div>
  );
}
