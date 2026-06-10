import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteSchema, type QuoteFormValues } from "@/lib/schemas";
import { useSubmitQuote } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PRODUCTS } from "@/data/constants";
import { Loader2, Calculator } from "lucide-react";

export function QuoteForm() {
  const { toast } = useToast();
  const submitQuote = useSubmitQuote();

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      product: "",
      quantity: "",
      specifications: "",
      message: "",
    },
  });

  const onSubmit = (data: QuoteFormValues) => {
    submitQuote.mutate(
      { data },
      {
        onSuccess: () => {
          toast({
            title: "Quote Request Received",
            description: "Our sales team will contact you with a customized quote.",
          });
          form.reset();
        },
        onError: () => {
          toast({
            title: "Submission Failed",
            description: "There was an error requesting your quote. Please try again.",
            variant: "destructive",
          });
        },
      }
    );
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-[#0F2747] flex items-center gap-2">
          <Calculator className="h-6 w-6 text-primary" />
          Request a Quote
        </h3>
        <p className="text-slate-500 mt-2">Fill out the details below for bulk pricing and custom specifications.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" data-testid="form-quote">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} data-testid="input-quote-name" />
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
                    <Input type="email" placeholder="john@example.com" {...field} data-testid="input-quote-email" />
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
                    <Input placeholder="+91 9876543210" {...field} data-testid="input-quote-phone" />
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
                    <Input placeholder="Acme Corp" {...field} data-testid="input-quote-company" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="product"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Product *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger data-testid="select-quote-product">
                        <SelectValue placeholder="Select a product category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {PRODUCTS.map(p => (
                        <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estimated Quantity *</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. 10,000 labels / 50 rolls" {...field} data-testid="input-quote-quantity" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="specifications"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Technical Specifications (Size, Material, Core size)</FormLabel>
                <FormControl>
                  <Input placeholder="100x150mm, Semi-gloss, 1-inch core" {...field} data-testid="input-quote-specs" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Requirements / Application Details</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="We need these for warehouse cold storage tracking..." 
                    className="min-h-[80px]"
                    {...field} 
                    data-testid="input-quote-message"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full text-base font-semibold py-6"
            disabled={submitQuote.isPending}
            data-testid="button-submit-quote"
          >
            {submitQuote.isPending && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
            {submitQuote.isPending ? "Processing..." : "Get Detailed Quote"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
