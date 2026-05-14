CREATE TABLE public.whatsapp_clicks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  click_id TEXT NOT NULL UNIQUE,
  event_id TEXT,
  event_source_url TEXT,
  user_agent TEXT,
  client_ip TEXT,
  fbp TEXT,
  fbc TEXT,
  fbclid TEXT,
  referrer TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_content TEXT,
  utm_term TEXT,
  converted BOOLEAN NOT NULL DEFAULT FALSE,
  converted_at TIMESTAMP WITH TIME ZONE,
  whatsapp_phone TEXT,
  whatsapp_first_message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE INDEX idx_whatsapp_clicks_click_id ON public.whatsapp_clicks (click_id);
CREATE INDEX idx_whatsapp_clicks_created_at ON public.whatsapp_clicks (created_at DESC);
CREATE INDEX idx_whatsapp_clicks_converted ON public.whatsapp_clicks (converted, created_at DESC);

ALTER TABLE public.whatsapp_clicks ENABLE ROW LEVEL SECURITY;

-- Only Edge Functions (service role) read/write this table. No public access.
