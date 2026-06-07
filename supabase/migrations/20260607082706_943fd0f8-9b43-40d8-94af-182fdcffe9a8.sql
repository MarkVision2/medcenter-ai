REVOKE SELECT, UPDATE, DELETE ON public.diagnostic_leads FROM anon, authenticated;
CREATE POLICY "No public read access to leads" ON public.diagnostic_leads FOR SELECT TO anon, authenticated USING (false);
CREATE POLICY "No public update access to leads" ON public.diagnostic_leads FOR UPDATE TO anon, authenticated USING (false);
CREATE POLICY "No public delete access to leads" ON public.diagnostic_leads FOR DELETE TO anon, authenticated USING (false);