
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  rememberMe: z.boolean().default(false),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  // Load saved credentials if they exist
  useEffect(() => {
    const savedCredentials = localStorage.getItem('rememberedCredentials');
    if (savedCredentials) {
      const { email, password } = JSON.parse(savedCredentials);
      form.setValue('email', email);
      form.setValue('password', password);
      form.setValue('rememberMe', true);
    }
  }, [form]);

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);

    try {
      // Handle remember me
      if (data.rememberMe) {
        localStorage.setItem('rememberedCredentials', JSON.stringify({
          email: data.email,
          password: data.password,
        }));
      } else {
        localStorage.removeItem('rememberedCredentials');
      }

      // Simulate API call
      console.log("Login data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Check if user exists in localStorage
      const storedUserData = localStorage.getItem('userSignupData');
      
      if (storedUserData) {
        const parsedData = JSON.parse(storedUserData);
        
        if (parsedData.email === data.email && parsedData.password === data.password) {
          // Update last login time
          parsedData.lastLogin = new Date().toISOString();
          localStorage.setItem('userSignupData', JSON.stringify(parsedData));
          
          toast({
            title: "Login Successful",
            description: `Welcome back, ${parsedData.name || 'User'}!`,
          });

          // Navigate to dashboard after successful login
          navigate("/dashboard");
        } else {
          throw new Error("Invalid credentials");
        }
      } else {
        throw new Error("Account not found");
      }
    } catch (error) {
      console.error("Login error:", error);
      
      let errorMessage = "Please check your credentials and try again.";
      if (error instanceof Error) {
        if (error.message === "Account not found") {
          errorMessage = "No account found with this email. Please sign up first.";
        } else if (error.message === "Invalid credentials") {
          errorMessage = "Invalid email or password. Please try again.";
        }
      }
      
      toast({
        title: "Login Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen waste-gradient-alt flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-waste-primary">
            Login to SmartWaste
          </h1>
          <p className="text-gray-600 mt-2">
            Welcome back! Please enter your details.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      type="email"
                      autoComplete="email"
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
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your password"
                      type="password"
                      autoComplete="current-password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-between">
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-sm text-gray-700">
                      Remember me
                    </FormLabel>
                  </FormItem>
                )}
              />

              <div className="text-sm">
                <Link
                  to="/reset-password"
                  className="font-medium text-waste-accent hover:text-waste-accent/90"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-waste-secondary hover:bg-green-500 text-white"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </Form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-waste-accent hover:text-waste-accent/90"
            >
              Sign up
            </Link>
          </p>
        </div>

        <div className="mt-8">
          <Link to="/" className="flex justify-center text-gray-500 hover:text-waste-primary">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
