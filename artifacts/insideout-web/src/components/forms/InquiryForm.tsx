import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { inquirySchema, type InquiryFormValues } from "@/lib/schemas";
import { useSubmitInquiry } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface InquiryFormProps {
  defaultProduct?: string;
  onSuccess?: () => void;
}

export function InquiryForm({ defaultProduct = "", onSuccess }: InquiryFormProps) {
  const { toast } = useToast();
  const submitInquiry = useSubmitInquiry();

  const form = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      product: defaultProduct,
      message: "I am interested in this product and would like to know more.",
    },
  });

  const onSubmit = (data: InquiryFormValues) => {
    submitInquiry.mutate(
      { data },
      {
        onSuccess: () => {
          toast({
            title: "Inquiry Submitted Successfully",
            description: "We will get back to you shortly.",
          });
          form.reset();
          if (onSuccess) onSuccess();
        },
        onError: () => {
          toast({
            title: "Submission Failed",
            description: "There was an error submitting your inquiry. Please try again.",
            variant: "destructive",
          });
        },
      }
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" data-testid="form-inquiry">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} data-testid="input-name" />
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
                <FormLabel>Email Address *</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@example.com" {...field} data-testid="input-email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number *</FormLabel>
                <FormControl>
                  <Input placeholder="+91 9876543210" {...field} data-testid="input-phone" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Acme Corp" {...field} data-testid="input-company" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {defaultProduct && (
          <FormField
            control={form.control}
            name="product"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Interested Product</FormLabel>
                <FormControl>
                  <Input {...field} readOnly className="bg-slate-50 text-slate-500" data-testid="input-product" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message *</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us about your requirements..." 
                  className="min-h-[100px]"
                  {...field} 
                  data-testid="input-message"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full text-base font-semibold py-6"
          disabled={submitInquiry.isPending}
          data-testid="button-submit-inquiry"
        >
          {submitInquiry.isPending && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
          {submitInquiry.isPending ? "Submitting..." : "Send Inquiry"}
        </Button>
      </form>
    </Form>
  );
}
