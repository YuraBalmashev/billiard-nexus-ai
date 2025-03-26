
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface LanguageSwitcherProps {
  isMobile?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ isMobile = false }) => {
  const { i18n, t } = useTranslation();
  const { toast } = useToast();
  
  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLanguage);
    
    const toastMessage = newLanguage === 'en' 
      ? t('language.switchedToEnglish') 
      : t('language.switchedToRussian');
      
    toast({
      title: t('language.languageChanged'),
      description: toastMessage,
      duration: 2000,
    });
  };

  const displayLanguage = i18n.language === 'en' ? 'RUS' : 'ENG';

  if (isMobile) {
    return (
      <Button 
        variant="ghost" 
        className="flex items-center justify-start px-4 py-2 w-full rounded-md transition-colors hover:bg-billman-dark"
        onClick={toggleLanguage}
      >
        <Globe size={20} className="mr-2" />
        <span>{displayLanguage}</span>
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className={cn(
        "flex items-center gap-1 h-8 px-3 border border-billman-green/30 text-billman-white bg-transparent",
        "hover:bg-billman-green/10 hover:text-billman-green"
      )}
    >
      <Globe size={14} />
      <span className="font-medium">{displayLanguage}</span>
    </Button>
  );
};

export default LanguageSwitcher;
