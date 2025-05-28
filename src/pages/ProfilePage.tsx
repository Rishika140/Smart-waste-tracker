import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import DashboardNav from "@/components/DashboardNav";

// Honestly, this could get longer if we added more user preferences
const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email."),
  address: z.string().min(5, "Address must be at least 5 characters."),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits."),
  password: z.string().min(6).optional(),
});

type FormFields = z.infer<typeof schema>;

const ProfilePage = () => {
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [savingProfile, setSavingProfile] = useState(false);
  const { toast } = useToast();

  const [localUserInfo, setLocalUserInfo] = useState({
    name: "User",
    email: "user@example.com",
    address: "123 Street, City",
    phoneNumber: "+1 (555) 123-4567",
    password: "",
    lastLogin: new Date().toISOString(),
    memberSince: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    }),
    profilePic: "https://ui-avatars.com/api/?name=User&background=random",
  });

  const form = useForm<FormFields>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: localUserInfo.name,
      email: localUserInfo.email,
      address: localUserInfo.address,
      phoneNumber: localUserInfo.phoneNumber,
    },
  });

  useEffect(() => {
    const loadUser = () => {
      try {
        const saved = localStorage.getItem("userSignupData");
        if (!saved) return;

        const parsed = JSON.parse(saved);
        const user = {
          ...localUserInfo,
          ...parsed,
          profilePic: `https://ui-avatars.com/api/?name=${encodeURIComponent(parsed.name || 'User')}&background=random`,
          memberSince: new Date(parsed.createdAt || Date.now()).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
          }),
        };

        setLocalUserInfo(user);

        // Update the form to reflect stored info
        form.reset({
          name: user.name,
          email: user.email,
          address: user.address,
          phoneNumber: user.phoneNumber,
        });
      } catch (err) {
        console.warn("Could not parse local user data:", err);
      }
    };

    loadUser();
  }, []);

  const toggleEdit = () => {
    if (isInEditMode) {
      form.reset({
        name: localUserInfo.name,
        email: localUserInfo.email,
        address: localUserInfo.address,
        phoneNumber: localUserInfo.phoneNumber,
      });
    }
    setIsInEditMode(prev => !prev);
  };

  const handleSave = async (data: FormFields) => {
    setSavingProfile(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 900)); // fake delay

      const prevStored = localStorage.getItem("userSignupData");
      const existing = prevStored ? JSON.parse(prevStored) : {};

      const updated = {
        ...existing,
        ...data,
        updatedAt: new Date().toISOString(),
      };

      const freshUser = {
        ...localUserInfo,
        ...data,
        profilePic: `https://ui-avatars.com/api/?name=${encodeURIComponent(data.name)}&background=random`,
      };

      localStorage.setItem("userSignupData", JSON.stringify(updated));
      setLocalUserInfo(freshUser);

      toast({
        title: "Profile Updated",
        description: "Changes saved successfully.",
      });

      setIsInEditMode(false);
    } catch (err) {
      console.error("Save error", err);
      toast({
        title: "Save Failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setSavingProfile(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md">
          <div className="bg-waste-gradient text-white p-8 text-center">
            <img
              src={localUserInfo.profilePic}
              alt="User avatar"
              className="w-28 h-28 rounded-full mx-auto border-4 border-white shadow-lg"
            />
            <h1 className="text-xl font-semibold mt-4">{localUserInfo.name}</h1>
            <p className="text-sm">{localUserInfo.email}</p>
            <p className="text-xs mt-1">Last login: {new Date(localUserInfo.lastLogin).toLocaleString()}</p>
          </div>

          <div className="p-8">
            {!isInEditMode ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {["name", "email", "address", "phoneNumber", "memberSince"].map((field, idx) => (
                    <div key={idx}>
                      <h4 className="text-sm text-gray-500">
                        {field === "phoneNumber" ? "Phone Number" :
                          field === "memberSince" ? "Member Since" :
                          field === "email" ? "Email Address" :
                          field === "name" ? "Full Name" : "Address"}
                      </h4>
                      <p className="text-lg text-gray-900 mt-1">{localUserInfo[field]}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Button onClick={toggleEdit} className="bg-waste-accent hover:bg-waste-accent/90">
                    Edit Profile
                  </Button>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold mb-6 text-waste-primary">Edit Profile Info</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleSave)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {["name", "email", "phoneNumber", "address"].map((field, idx) => (
                        <FormField
                          key={idx}
                          control={form.control}
                          name={field as keyof FormFields}
                          render={({ field: f }) => (
                            <FormItem className={field === "address" ? "md:col-span-2" : ""}>
                              <FormLabel>
                                {field === "phoneNumber" ? "Phone Number" :
                                  field === "email" ? "Email" :
                                  field === "name" ? "Full Name" : "Address"}
                              </FormLabel>
                              <FormControl>
                                {field === "address" ? (
                                  <Textarea {...f} className="resize-none" />
                                ) : (
                                  <Input {...f} type={field === "email" ? "email" : "text"} />
                                )}
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>

                    <div className="flex justify-end gap-4">
                      <Button type="button" variant="outline" onClick={toggleEdit}>
                        Cancel
                      </Button>
                      <Button type="submit" disabled={savingProfile} className="bg-waste-accent hover:bg-waste-accent/90">
                        {savingProfile ? "Saving..." : "Save Changes"}
                      </Button>
                    </div>
                  </form>
                </Form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
