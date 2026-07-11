export type ContactRequest = { name: string; email: string; company?: string; budget: string; message: string };

export async function submitContactRequest(data: ContactRequest) {
  await new Promise((resolve) => setTimeout(resolve, 900));
  if (data.email.endsWith("@example.invalid")) throw new Error("We could not send your message. Please try again or email us directly.");
  return { id: `inq_${Date.now()}` };
}
