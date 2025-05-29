import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Modal } from './ui/Modal';
import { Input } from './ui/Input';
import { Button } from './ui/Button';

interface EmailSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEmail?: string;
  initialIsSubmitted?: boolean;
}

// 🛠️ Deployment URL — Replace later with ENV
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwTQMLM9xp7g_9gEGVjFpbv97BLErtdb0AmKnnSY7eD3r9UXZV5fLZsfbMejZFU6XZV/exec';
const PDF_PATH = '/assets/pdf/5 Mistakes African Investors Make.pdf';

export const EmailSignupModal = ({ 
  isOpen, 
  onClose, 
  initialEmail = '',
  initialIsSubmitted = false 
}: EmailSignupModalProps) => {
  const t = useTranslations('HomePage.emailSignup');
  const [email, setEmail] = useState(initialEmail);
  const [isSubmitted, setIsSubmitted] = useState(initialIsSubmitted);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Submit email to Google Sheet if not already submitted
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitted) return;
    
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ email }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Open PDF in a new tab
        window.open(PDF_PATH, '_blank');
      } else {
        setError(t('error.general'));
      }
    } catch (err) {
      setError(t('error.network'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    window.open(PDF_PATH, '_blank');
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      title={isSubmitted ? t('success.title') : t('title')}
    >
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-[#666666] mb-4">{t('description')}</p>
          <Input
            type="email"
            placeholder={t('placeholder')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full"
          />
          <Button
            type="submit"
            variant="primary"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? t('submitting') : t('button')}
          </Button>
          {error && <p className="text-sm text-red-500 text-center">{error}</p>}
          <p className="text-sm text-[#666666] text-center">
            {t('disclaimer')}
          </p>
        </form>
      ) : (
        <div className="text-center space-y-4">
          <p className="text-[#666666]">{t('success.message')}</p>
          <div className="flex justify-center">
            <button
              onClick={handleDownload}
              className="text-[#7FC242] hover:text-[#5A7D2C] underline"
            >
              {t('success.download')}
            </button>
          </div>
          <Button
            variant="outline"
            onClick={onClose}
            className="w-full mt-4"
          >
            {t('success.close')}
          </Button>
        </div>
      )}
    </Modal>
  );
};
