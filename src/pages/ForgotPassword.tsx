import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Mail, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({ variant: "destructive", title: "Missing email", description: "Please enter your email." });
      return;
    }

    setIsLoading(true);
    const { error } = await resetPassword(email);
    if (error) {
      const errorCode = (error as any).code || "";
      toast({ variant: "destructive", title: "Error", description: errorCode || "Unable to send reset email." });
    } else {
      toast({ title: "Reset email sent", description: "Check your inbox for password reset instructions." });
      navigate("/auth");
    }
    setIsLoading(false);
  };

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-muted/30 min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="border-border shadow-sufi">
              <CardHeader className="text-center pb-2">
                <CardTitle className="font-serif text-2xl">Reset Password</CardTitle>
                <CardDescription>We'll send a password reset link to your email.</CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleReset} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="reset-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="reset-email"
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link to="/auth" className="text-sm text-primary hover:underline">Back to Login</Link>
                    <Button type="submit" className="gap-2" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Reset Link
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ForgotPassword;
