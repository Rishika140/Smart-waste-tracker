import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormField,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";

import DashboardNav from "@/components/DashboardNav";

// Simple validation rules
const complaintSchema = z.object({
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  type: z.string({ required_error: "Please select a complaint type." }),
  description: z.string().min(20, "Description must be at least 20 characters."),
  date: z.string({ required_error: "Please select a date." }),
});

type ComplaintFormFields = z.infer<typeof complaintSchema>;

const ComplaintPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Previously submitted complaints (mocked)
  const complaintsList = [
    {
      id: "C-12345",
      subject: "Missed Pickup",
      date: "2025-03-15",
      status: "Resolved",
    },
    {
      id: "C-12346",
      subject: "Improper Waste Handling",
      date: "2025-02-22",
      status: "In Progress",
    },
    {
      id: "C-12347",
      subject: "Truck Noise Complaint",
      date: "2025-01-10",
      status: "Resolved",
    },
  ];

  const form = useForm<ComplaintFormFields>({
    resolver: zodResolver(complaintSchema),
    defaultValues: {
      subject: "",
      type: "",
      description: "",
      date: new Date().toISOString().split("T")[0], // today’s date
    },
  });

  const handleComplaintSubmit = async (values: ComplaintFormFields) => {
    setIsSubmitting(true);

    try {
      console.log("Complaint being submitted:", values);
      await new Promise((r) => setTimeout(r, 1400)); // simulate lag

      toast({
        title: "Complaint Received",
        description: "Thanks! We'll review your complaint shortly.",
      });

      form.reset();
    } catch (err) {
      console.error("Complaint submit error:", err);
      toast({
        title: "Something went wrong",
        description: "Try submitting again after a while.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-waste-primary">File a Complaint</h1>
          <p className="text-gray-600">Let us know if something went wrong with your service</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Complaint Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-6 text-waste-primary">New Complaint</h2>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleComplaintSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="E.g. Missed waste pickup" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Complaint Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Choose one..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="missed_pickup">Missed Pickup</SelectItem>
                            <SelectItem value="staff_behavior">Staff Behavior</SelectItem>
                            <SelectItem value="damage_property">Property Damage</SelectItem>
                            <SelectItem value="waste_spillage">Waste Spillage</SelectItem>
                            <SelectItem value="wrong_schedule">Incorrect Schedule</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Incident Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Give as much detail as possible..."
                            className="min-h-[140px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-waste-accent hover:bg-waste-accent/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Complaint"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>

          {/* Complaint History + Help Section */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-6 text-waste-primary">Your Complaints</h2>

              {complaintsList.length > 0 ? (
                <div className="space-y-4">
                  {complaintsList.map((c) => (
                    <div key={c.id} className="border border-gray-200 rounded-md p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-medium">{c.subject}</h3>
                        <span
                          className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                            c.status === "Resolved"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {c.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">
                        Ref: {c.id} • Date: {new Date(c.date).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">No complaints found.</div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <h2 className="text-xl font-bold mb-4 text-waste-primary">Need Help?</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-waste-primary">When to complain?</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    If your garbage wasn't picked up or your bins were damaged, let us know.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-waste-primary">Support Response</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    We usually reply within 1–2 business days. Thanks for your patience!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintPage;
