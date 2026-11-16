import { redirect } from 'next/navigation';

// Keep the existing cancellation-email URL working.
export default function CancelDeletionHelpPage() {
  redirect('/en/cancel-deletion');
}
