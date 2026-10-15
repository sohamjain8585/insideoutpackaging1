import { useState, type FormEvent } from "react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

type DocumentId = "catalogue" | "company-profile";

interface PdfDownloadButtonProps {
  documentId: DocumentId;
  title: string;
  className?: string;
}

export function PdfDownloadButton({
  documentId,
  title,
  className = "",
}: PdfDownloadButtonProps) {
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", company: "", consent: false });

  const updateField = (field: keyof typeof form, value: string | boolean) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const requestDownload = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPending(true);
    setError("");

    try {
      const response = await fetch("/api/pdf-downloads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, document: documentId }),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null) as { error?: string } | null;
        throw new Error(result?.error || "We couldn't prepare this download. Please try again.");
      }

      const pdf = await response.blob();
      const objectUrl = URL.createObjectURL(pdf);
      const link = window.document.createElement("a");
      link.href = objectUrl;
      link.download = documentId === "catalogue"
        ? "inside-out-packaging-catalogue.pdf"
        : "inside-out-packaging-company-profile.pdf";
      window.document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 60_000);
      setOpen(false);
      setForm({ name: "", email: "", company: "", consent: false });
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "We couldn't prepare this download. Please try again.");
    } finally {
      setPending(false);
    }
  };

  return (
    <>
      <Button
        size="lg"
        variant="outline"
        className={`h-[52px] w-full rounded-xl border-white/50 bg-white/5 px-4 text-sm font-semibold text-white transition-colors hover:bg-white/15 hover:text-white sm:w-auto ${className}`}
        onClick={() => { setError(""); setOpen(true); }}
        data-testid={`button-open-download-${documentId}`}
      >
        {title}<Download className="ml-2 h-4 w-4 shrink-0" aria-hidden="true" />
      </Button>

      <Dialog open={open} onOpenChange={(nextOpen) => { if (!pending) setOpen(nextOpen); }}>
        <DialogContent className="max-h-[90dvh] max-w-lg overflow-y-auto">
          <div className="pr-7">
            <p className="site-eyebrow">Gated document</p>
            <DialogTitle className="mt-3 text-2xl font-extrabold text-[#0F2747]">
              Get the {title.replace(/ PDF$/, "")}
            </DialogTitle>
            <DialogDescription className="mt-2 leading-6">
              Enter your contact details to download the {title.replace(/ PDF$/, "").toLowerCase()}.
            </DialogDescription>
          </div>

          <form onSubmit={requestDownload} className="space-y-4" data-testid={`form-download-${documentId}`}>
            <div>
              <label htmlFor={`${documentId}-name`} className="mb-1.5 block text-sm font-semibold text-[#0F2747]">Full name</label>
              <Input
                id={`${documentId}-name`}
                name="name"
                autoComplete="name"
                minLength={2}
                maxLength={120}
                required
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                data-testid={`input-download-name-${documentId}`}
              />
            </div>
            <div>
              <label htmlFor={`${documentId}-email`} className="mb-1.5 block text-sm font-semibold text-[#0F2747]">Work email</label>
              <Input
                id={`${documentId}-email`}
                name="email"
                type="email"
                autoComplete="email"
                maxLength={254}
                required
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                data-testid={`input-download-email-${documentId}`}
              />
            </div>
            <div>
              <label htmlFor={`${documentId}-company`} className="mb-1.5 block text-sm font-semibold text-[#0F2747]">Company</label>
              <Input
                id={`${documentId}-company`}
                name="company"
                autoComplete="organization"
                minLength={2}
                maxLength={160}
                required
                value={form.company}
                onChange={(event) => updateField("company", event.target.value)}
                data-testid={`input-download-company-${documentId}`}
              />
            </div>

            <div className="rounded-lg border border-slate-200 bg-[#fbfaf7] p-3 text-xs leading-5 text-slate-600">
              We record your name, email, company, selected document and request time so our team can follow up. Details are supplied by you, are not independently verified, and are not sent to website analytics.
            </div>
            <label className="flex cursor-pointer items-start gap-3 text-sm leading-5 text-slate-700">
              <input
                type="checkbox"
                required
                checked={form.consent}
                onChange={(event) => updateField("consent", event.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 accent-[#ef6f23]"
                data-testid={`checkbox-download-consent-${documentId}`}
              />
              <span>I agree to share these details for this document request.</span>
            </label>

            {error && <p role="alert" className="text-sm font-medium text-red-700">{error}</p>}
            <Button type="submit" className="w-full font-semibold" disabled={pending} data-testid={`button-submit-download-${documentId}`}>
              {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Download className="mr-2 h-4 w-4" />}
              {pending ? "Preparing your PDF…" : `Download ${title.replace(/ PDF$/, "")}`}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
